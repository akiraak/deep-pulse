# 管理画面の記事ページを「個別記事ワークスペース」に再構成するプラン

## ユーザー指示

> adminの構成を変更。
> 記事一覧画面
>   - 個別記事の画面
>     左ペイン 各mdやファイルへのリンク
>     右ペイン ファイルの中身表示。最初は最終生成の記事

## 背景（現状）

管理画面（3001）の記事まわりは、現在 3 つの独立ページに分かれている。

| ルート | ハンドラ | 役割 |
|--------|---------|------|
| `/articles` | `handleArticleList` | 記事一覧テーブル |
| `/articles/:filename/preview` | `handlePreview` | 公開サイトと同じ HTML で記事をプレビュー |
| `/articles/:filename/sources` | `handleSourceList` | 記事ディレクトリ直下の `sources/` を一覧 |
| `/articles/:filename/sources/:source` | `handleSourceDetail` | 個別ソースの中身（生テキスト + frontmatter） |

`_plan.md` / `_note.md` を見るには 3002 のファイルビューア、または `plans/` ページを開く必要があり、**1 本の記事に紐づくファイル群を 1 画面で見渡せない**。

## ゴール

記事一覧で記事をクリックすると、その記事に紐づくすべてのファイルを 1 画面で切り替えながら閲覧できる「個別記事ワークスペース」に飛ぶ。

- 左ペイン: 記事本体・`_plan.md`・`_note.md`・`sources/*.md` へのリンク
- 右ペイン: 左で選んだファイルの中身。**初期表示は記事本体（最終生成された公開記事のレンダリング）**
- 既存の `/preview` `/sources` `/sources/:source` は廃止（ワークスペースに統合）

## UI 設計

### レイアウト

```
┌─ admin-header ─────────────────────────────────────┐
│ deep-pulse admin   [ダッシュボード] [記事一覧] ... │
└────────────────────────────────────────────────────┘
┌─ breadcrumb: 記事一覧 / <filename> ────────────────┐
└────────────────────────────────────────────────────┘
┌──────────────┬─────────────────────────────────────┐
│              │                                      │
│  左ペイン    │   右ペイン                           │
│              │                                      │
│  ▸ 記事本体  │   <iframe で選択中ファイルを描画>    │
│  ▸ plan      │                                      │
│  ▸ note      │                                      │
│  ▸ sources   │                                      │
│    - 001 ... │                                      │
│    - 002 ... │                                      │
│              │                                      │
└──────────────┴─────────────────────────────────────┘
```

- 左ペイン幅: 280px 固定 / 右ペインは残り全幅
- モバイル（`@media max-width: 800px`）では縦積み: 左ペインを上、右ペインを下に
- 左ペインは現在選択中のファイルをハイライト（背景色 + 太字）

### 左ペインの構造

セクション見出しでグルーピングする:

```
記事
  ▸ 2026-05-09_xxx.md           ← 「記事本体」（デフォルト選択）
プラン
  ▸ 2026-05-09_xxx_plan.md      （存在する場合のみ）
note
  ▸ 2026-05-09_xxx_note.md      （存在する場合のみ）
sources（N件）                   ← 件数バッジ
  ▸ 001_xxx_xxx.md
  ▸ 002_xxx_xxx.md
  ▸ ...
```

各リンクは `?file=...` をつけたパーマリンク（リロード可能 / コピペ可能）。

### 右ペインの描画方針

**iframe で隔離する**ことを選ぶ。理由:

- 記事本体は `renderArticle()` の出力（公開サイトと同じ完結 HTML）をそのまま見せたい。admin shell とスタイル・スクリプト（Mermaid・Chart.js）が衝突するため inline 展開は厳しい
- plan/note/source も iframe にして描画方法を統一する方が、左ペイン切り替え時の挙動が予測しやすい

iframe の高さは「ビューポート − ヘッダー − パンくず」で計算（例: `height: calc(100vh - 130px)`）。

### 右ペインに描かれる中身（ファイル種別別）

| 種別 | iframe が読み込むエンドポイント | 表示内容 |
|------|--------------------------------|---------|
| 記事本体 | `/articles/:filename/render?file=body` | `renderArticle()` の出力（公開サイトと同じ） |
| plan | `/articles/:filename/render?file=plan` | `marked` でレンダリングした HTML（admin の `markdown-body` スタイル） |
| note | `/articles/:filename/render?file=note` | 同上 |
| source | `/articles/:filename/render?file=sources/<name>` | 上部に frontmatter（url / title）を強調表示 + 本文を `<pre>` で生表示（現状の `handleSourceDetail` と同じ見た目を踏襲） |

`/render` 系のレスポンスは admin ヘッダーを**含めない**（iframe 内に admin ヘッダーが二重に出ないようにするため）。最小の `<html>` ラッパー + 必要最低限の CSS。

## URL 設計

| メソッド | パス | 役割 | 備考 |
|---------|------|------|------|
| GET | `/articles` | 記事一覧 | 既存 |
| GET | `/articles/:filename` | **新規**: 個別記事ワークスペース。`?file=` クエリで右ペインの初期選択を制御。デフォルト = 記事本体 | URL に `?file=plan` 等を付けてリロード可能 |
| GET | `/articles/:filename/render` | **新規**: iframe 用。admin shell なしで対象ファイルだけを返す。`?file=body|plan|note|sources/<name>` | 直接ブラウザで開いても見れる（デバッグ用） |

### 廃止するルート

| 廃止 | 移行先 |
|------|--------|
| `/articles/:filename/preview` | `/articles/:filename` |
| `/articles/:filename/sources` | `/articles/:filename?file=sources/<最初のファイル>`（≒ ワークスペースを開いて左ペインから選ぶ） |
| `/articles/:filename/sources/:source` | `/articles/:filename?file=sources/:source` |

ダッシュボード（`handleDashboard`）と記事一覧（`handleArticleList`）の中の `/preview` `/sources` リンクをすべて新ルートに張り替える。

互換のために旧ルートを 301 リダイレクトで残すかは**スコープ外**（呼び出しは内部のみで、外部からの参照はないと判断）。

## アーキテクチャ

### ファイル変更一覧

| ファイル | 操作 |
|---------|------|
| `src/admin.ts` | **改修**。`handlePreview`・`handleSourceList`・`handleSourceDetail` を撤去。代わりに `handleArticleWorkspace`（HTML シェル）と `handleArticleRender`（iframe 用）を新設 |
| `TODO.md` | 該当タスクを追加（このプランへのリンクを併記） |
| 新規ファイル | なし（admin 内に閉じる） |

### 新ハンドラの責務

#### `handleArticleWorkspace(res, filename, fileQuery)`

1. `resolveArticleDir(filename)` で記事ディレクトリを特定
2. ディレクトリ内を走査して左ペインに並べるファイル群を構築:
   - 記事本体（必ず存在）
   - `${baseName}_plan.md`（存在チェック）
   - `${baseName}_note.md`（存在チェック）
   - `sources/*.md`（ソート済み）
3. `fileQuery` を検証（種別・パストラバーサル）。デフォルトは `body`
4. HTML を生成:
   - admin ヘッダー
   - パンくず: `記事一覧 / <filename>`
   - 左ペイン: 上記ファイル群のリンクリスト（現在選択中をハイライト）
   - 右ペイン: `<iframe src="/articles/:filename/render?file=...">`

#### `handleArticleRender(res, filename, fileQuery)`

1. `fileQuery` を検証
2. 種別ごとに分岐:
   - `body` → `renderArticle(filename, "/")` の結果をそのまま返す（HTTP body にそのまま流す）
   - `plan` / `note` → 該当ファイルを読み、`marked.parse()` を `markdown-body` で包んだ最小 HTML
   - `sources/<name>` → 該当ファイルを読み、frontmatter を強調枠 + 本文を `<pre>` で表示する最小 HTML
3. **admin ヘッダーは含めない**（iframe 内では shell 不要）

### 左ペインの CSS（追記）

- 既存 `ADMIN_CSS` に以下を追加:
  - `.workspace { display: grid; grid-template-columns: 280px 1fr; gap: 1rem; }`
  - `.workspace-nav { ... }`（左ペイン）
  - `.workspace-nav .group-title { ... }`（「記事」「プラン」「note」「sources」見出し）
  - `.workspace-nav a { ... }` / `.workspace-nav a.active { background:...; font-weight:600; }`
  - `.workspace-frame { width: 100%; height: calc(100vh - 130px); border: 1px solid #e2e8f0; border-radius: 6px; background: #fff; }`
  - `@media (max-width: 800px) { .workspace { grid-template-columns: 1fr; } .workspace-frame { height: 70vh; } }`

### パストラバーサル防止

`fileQuery` が `sources/<name>` の形式の場合:

- `name` に `..` `/` が含まれていないことを確認
- 結合後のパスが `${dir}/sources/` 配下に収まっていることを確認（`path.relative` で先頭が `..` でないこと）

`body` `plan` `note` は固定の合成パスなのでトラバーサルは起きない。

## 実装ステップ

1. `src/admin.ts` の CSS（`ADMIN_CSS`）にワークスペース用の追加スタイルを書く
2. `handleArticleWorkspace` を新設（HTML シェル + 左ペイン）
3. `handleArticleRender` を新設（iframe 用、種別ごとの分岐）
4. メインハンドラ `handleAdmin` のルーティング:
   - `GET /articles/:filename/render` を追加
   - `GET /articles/:filename` を追加
   - 旧 `/preview` `/sources` `/sources/:source` のルートと関数を削除
5. `handleArticleList` / `handleDashboard` の中で `/preview` `/sources` を指していたリンクを `/articles/:filename` および `/articles/:filename?file=sources/<最初>` に張り替え
6. `npm run build` で型エラーがないこと
7. `./admin.sh` で起動して動作確認:
   - 記事一覧から記事をクリック → ワークスペースに遷移し、右ペインに記事本体（公開サイトと同じレンダリング）が表示される
   - 左ペインの plan / note / sources のリンクで右ペインが切り替わる
   - URL に `?file=plan` 等を直貼りしてリロードしても同じ画面に着地する
   - パストラバーサル（`?file=sources/../foo`）が拒否される
   - 旧 URL（`/preview` 等）は 404 になる
8. `TODO.md` → `DONE.md` に移動 + コミット

## 検証チェックリスト

- [ ] `/articles/:filename` でワークスペースが表示される
- [ ] 左ペインに記事本体・plan・note（あれば）・sources/* がカテゴリ分けで並ぶ
- [ ] 初期表示は記事本体（公開サイトと同じレンダリング）
- [ ] 左ペインのリンククリックで右ペインが切り替わる
- [ ] 現在選択中のリンクがハイライトされる
- [ ] sources の個別ファイルでは frontmatter（url / title）が強調表示される
- [ ] iframe 内には admin ヘッダーが描画されない
- [ ] パストラバーサル（`?file=../etc/passwd` 等）で 400
- [ ] 存在しないファイル指定で 404
- [ ] モバイル幅で左ペイン → 右ペインの縦積みになる
- [ ] 旧ルート（`/preview` `/sources` `/sources/:source`）が削除されている

## スコープ外（明示的に作らない）

- 旧 URL の 301 リダイレクト（外部参照なしと判断）
- 編集機能（読み取り専用）
- 複数ファイルの同時表示・差分表示
- 検索・フィルタ
- ファイルビューア（3002）への影響変更（あちらは独立サーバーとして残す）
- TTS 関連の UI 変更（既存 `/tts` ルートはそのまま）
