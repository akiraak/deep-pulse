# note 投稿用 md ファイル生成機能 プラン

## 概要

deep-pulse の記事は Mermaid / Chart.js / テーブルをふんだんに使う設計だが、note.com はこれらをネイティブにレンダリングしない。記事を note に投稿するには「**ビジュアル要素を画像化したうえで、note のエディタに貼り付けやすい形式にした md ファイル**」を別途用意する必要がある。

本プランはその生成パイプラインを設計する。

## 前提：note.com の表現上の制約

note の本文で使えるもの・使えないものを把握しておく。

| 要素 | note での扱い | 対応方針 |
|------|--------------|---------|
| 見出し（h1〜h3） | サポート | そのまま |
| 段落・改行 | サポート | そのまま |
| 強調（**bold**, *italic*） | サポート | そのまま |
| リスト（箇条書き・番号） | サポート | そのまま |
| 引用（>） | サポート | そのまま |
| インラインリンク | サポート | そのまま |
| インラインコード（`code`） | サポート | そのまま |
| コードブロック（```） | サポート（シンタックスハイライトなし） | そのまま |
| **テーブル** | **非対応**（markdown インポートでも崩れる） | 画像化 or 整形した箇条書き |
| **Mermaid** | **非対応** | 画像化（PNG/SVG） |
| **Chart.js** | **非対応** | 画像化（PNG） |
| 画像 | アップロード後にエディタで挿入 | 個別ファイルとして書き出し、placeholder で位置を示す |
| 数式（KaTeX） | サポート（独自記法） | 当面は使わない |
| 埋め込み（YouTube / X / Spotify 等） | サポート（URL を貼ると展開） | 元 URL を残す |

要するに、**「画像化が必要なのは Mermaid / Chart.js / テーブル の3種類」**になる。

## 設計方針

### 1. 出力フォーマット

記事ディレクトリ内に **note 投稿用バンドル**として書き出す。

```
output/YYYY-MM-DD_タイトル/
  YYYY-MM-DD_タイトル.md              # 既存：本記事
  YYYY-MM-DD_タイトル_note.md         # 既存：note 紹介記事（短文版）
  YYYY-MM-DD_タイトル_note_full.md    # 新規：note 投稿用フル記事（画像参照に置換済み）
  note_assets/                         # 新規：note にアップロードする画像
    01_mermaid_three_tier.png
    02_mermaid_architecture.png
    03_chart_donut.png
    04_table_protection_layers.png
    ...
  note_assets/README.md                # 新規：どの画像をどこに挿入するか・アップロード順
```

「短文紹介版」（既存の `_note.md`）と「フル記事版」（`_note_full.md`）を**別ファイル**として並存させる。短文版は note の元記事リンク用、フル版は元記事を note に丸ごと持っていく場合用。

### 2. 画像化アプローチ

Mermaid・Chart.js・テーブルの3種類で別々のレンダラーが必要になる。

| 対象 | ツール候補 | 採用案 | 理由 |
|------|-----------|--------|------|
| Mermaid | mmdc (Mermaid CLI), Playwright | **Playwright** | 既存のサイトテーマに合わせた配色で出したい。mmdc だとテーマカスタムが面倒 |
| Chart.js | chartjs-node-canvas, Playwright | **Playwright** | Chart.js はブラウザ前提で書かれているため Node 側のレンダリングは罠が多い。Playwright で `dist_site/` の HTML を開いて要素スクショが確実 |
| テーブル | Playwright で `<table>` 要素スクショ | **Playwright** | サイト本体と同じ CSS で出したい |

全部 Playwright に統一する方が、依存関係も配色管理も1本で済む。

### 3. レンダリングの流れ

```
1. npm run build:site で dist_site/articles/*.html を生成（既存）
2. scripts/generate_note_assets.ts（新規）が
   - 対象記事 HTML を Playwright で開く
   - .mermaid-wrapper / .deep-pulse-chart / <table> の各要素を順に
     - 個別に await locator.screenshot() で PNG 化
     - note_assets/<連番>_<種別>_<簡易名>.png として保存
   - 元の md を読み、画像順序と一致する形で
     - ```mermaid``` ブロック → ![][placeholder1] に
     - ```chart``` ブロック → ![][placeholder2] に
     - markdown テーブル → ![][placeholder3] に
     置換した _note_full.md を生成
3. note_assets/README.md に「画像 1: 上から N 番目の Mermaid 図、アップロード順X」のような対応表を書き出す
```

### 4. note 側の運用フロー

ユーザーが note で記事を投稿するときの想定操作：

1. `_note_full.md` の本文をコピーして note エディタに貼り付け
2. 画像挿入ポイント（例：`[画像: 01_mermaid_three_tier.png をここに挿入]`）を順に開く
3. `note_assets/` から該当 PNG をエディタにドラッグ
4. テーブル箇所も同じく画像差し込み

placeholder のフォーマットは **note エディタ上で一目で見つけられるラベル**にする：

```
[画像挿入: 01_mermaid_three_tier.png]
```

注意：note の markdown インポートが使える環境では `![](url)` 形式の方が便利かもしれない。両対応も検討。

## 実装ステップ

### Phase 1: 基盤（Playwright で1記事を変換できる）

1. **依存追加**: `playwright` を devDependencies に追加、Chromium だけインストール
2. **`scripts/generate_note_assets.ts` 新規作成**
   - 引数：記事ディレクトリパス（例：`output/2026-05-14_NVIDIA_NemoClawの解説と使い方/`）
   - 対応する `dist_site/articles/<slug>.html` を Playwright で開く
   - 全ての `.mermaid-wrapper` を `locator.screenshot()` で PNG 化（透過 OFF、白背景）
   - 同じく `.deep-pulse-chart`（または canvas）、`<table>` も PNG 化
3. **md 変換ロジック**
   - 元 md を行単位でパース
   - ` ```mermaid `, ` ```chart ` ブロック検出
   - markdown テーブル検出（`|` で始まり連続する行）
   - 順番に画像 placeholder へ置換
4. **`package.json` に `note:assets` スクリプト追加**
   - 例：`tsx scripts/generate_note_assets.ts output/2026-05-14_xxx/`

### Phase 2: 出力フォーマット改善

- placeholder 形式を確定（`[画像挿入: filename.png]` で行頭に独立配置）
- `note_assets/README.md` に対応表を自動生成
- ファイル名規約：`<2桁連番>_<mermaid|chart|table>_<本文先頭8文字スラッグ>.png`
- 画像幅は note の本文幅（620px 程度）を意識して、最大幅 1240px（Retina 対応で2倍）で書き出す

### Phase 3: 管理画面統合（任意）

- 管理画面（port 3001）に「note 用 md・画像を生成」ボタンを追加
- 進捗を SSE で表示
- 完了後、生成された `_note_full.md` のプレビューとダウンロードリンクを出す

## 検証ポイント

完成条件：

- [ ] 既存記事 1 本（例：`2026-05-14_NVIDIA_NemoClawの解説と使い方/`）を入力して、`_note_full.md` と `note_assets/*.png` が生成できる
- [ ] PNG はサイト本体と同じ配色（赤系アクセント・クリーム背景）で出る
- [ ] テーブル画像は文字が潰れない（最大幅 1240px、フォントは Retina で 28px 相当）
- [ ] `_note_full.md` を VSCode で開いて、画像 placeholder の位置が本文の流れに対して正しい
- [ ] note に手動コピペして1記事公開する一連の手順を、開発者本人が10分以内で完了できる

## オープン問題 / 要決定事項

ユーザー判断が必要な点：

1. **placeholder 形式**
   - 案A: `[画像挿入: 01_mermaid_three_tier.png]`（人間が読みやすい）
   - 案B: `![](./note_assets/01_mermaid_three_tier.png)`（標準 markdown 形式、note の md インポートに通せる）
   - 案C: 両方を併記
   - **推奨：案 B**（note の markdown インポートで自動展開される可能性 + 標準形式で他用途にも流用しやすい）

2. **テーブルを画像化するか、整形した箇条書きにするか**
   - 画像化：見た目を保てるが note 内で検索できない・スマホで小さい
   - 箇条書き変換：可読性は落ちるが note ネイティブ
   - **推奨：列数 ≤ 3 なら箇条書き、4 列以上は画像化**（自動判定）

3. **既存の `_note.md`（短文紹介版）との関係**
   - 短文版：note に書く前段の宣伝記事用（元記事リンク誘導）
   - フル版：元記事そのものを note 上に完成形で再現
   - 別ファイルとして並存させる前提でよいか確認したい

4. **画像のホスティング**
   - ローカル：`note_assets/` に置いて手動アップロード
   - GitHub Pages：`dist_site/note_assets/` に出して公開 URL を埋め込み（note は外部画像 URL を埋め込みできない可能性あり）
   - **推奨：当面ローカル、必要が出れば GitHub Pages 併用**

5. **生成タイミング**
   - 手動：`npm run note:assets <記事ディレクトリ>` を都度実行
   - 自動：記事生成時の `build:site` と同時に毎回生成
   - **推奨：手動**（重い処理 + 全記事を毎回生成する必要はない）

## 参考

- 既存の Playwright/Puppeteer 風スクリーンショット系処理：このリポジトリには現状ない（必要なら新規追加）
- 既存の md 解析：`src/render.ts` で marked を使用。同じ marked のトークナイザーを再利用すれば、Mermaid/Chart ブロック検出のロジックを共有できる
- 画像幅の参考：note 本文幅は約 620px、Retina で 1240px 推奨
