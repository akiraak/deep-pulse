# 管理画面に plans ファイル一覧・閲覧機能を追加

## Context

TODO.md にある「管理画面にplansのファイルを表示する」タスクの実装。
`plans/` ディレクトリにある実装プラン（Markdown ファイル）を管理画面から一覧・閲覧できるようにする。

## 変更ファイル

| ファイル | 内容 |
|---------|------|
| `src/admin.ts` | プラン一覧・プラン詳細のハンドラー追加、ナビにリンク追加 |

## 実装内容

### 1. ナビゲーションにリンク追加

`adminHtml()` のヘッダー nav に「プラン」リンクを追加:
```html
<a href="/plans">プラン</a>
```

### 2. プラン一覧ページ (`GET /plans`)

`handlePlanList()` を新規作成:
- `plans/` ディレクトリの `.md` ファイルを `readdir` で取得
- 各ファイルのサイズ・更新日時を `stat` で取得
- テーブルで一覧表示（ファイル名、サイズ、操作ボタン）
- 既存の記事一覧 (`handleArticleList`) と同じ UI パターン

### 3. プラン詳細ページ (`GET /plans/:filename`)

`handlePlanDetail()` を新規作成:
- ファイル内容を `readFile` で読み込み
- `source-content` クラスの `<div>` でプレーンテキスト表示（既存のソース詳細と同じパターン）
- パンくず: プラン一覧 → ファイル名

### 4. ルーティング追加

`handleAdmin()` に以下を追加:
- `GET /plans` → `handlePlanList()`
- `GET /plans/:filename` → `handlePlanDetail()`
- パストラバーサル防止（`..` チェック）

### 5. プラン一覧にファイルの実装内容名を表示

`handlePlanList()` を修正:
- 各 `.md` ファイルの先頭 `# ` 見出し（H1）を読み取り、実装内容名として一覧に表示する
- テーブルのカラムに「内容」列を追加: ファイル名 | 内容 | サイズ | 更新日 | 操作
- H1 がないファイルは「—」を表示

### 6. プラン詳細で Markdown をレンダリング表示

`handlePlanDetail()` を修正:
- プレーンテキスト（`source-content` + `escHtml`）ではなく、`marked` で HTML に変換して表示する
- 既存の `render.ts` で使っている `marked` を利用する（`import { marked } from "marked"`）
- レンダリング後の HTML は記事プレビューと同様に見やすい CSS を適用する:
  - `markdown-body` クラスの `<div>` で囲み、見出し・リスト・テーブル・コードブロック用のスタイルを `ADMIN_CSS` に追加
- CSS 追加内容（`ADMIN_CSS` に追記）:
  ```css
  .markdown-body h1 { font-size: 1.4rem; margin: 1.5rem 0 0.8rem; border-bottom: 1px solid #e2e8f0; padding-bottom: 0.3rem; }
  .markdown-body h2 { font-size: 1.2rem; margin: 1.3rem 0 0.6rem; }
  .markdown-body h3 { font-size: 1.05rem; margin: 1rem 0 0.5rem; }
  .markdown-body p { margin: 0.5rem 0; }
  .markdown-body ul, .markdown-body ol { margin: 0.5rem 0; padding-left: 1.5rem; }
  .markdown-body code { background: #f1f5f9; padding: 0.15rem 0.4rem; border-radius: 3px; font-size: 0.88rem; }
  .markdown-body pre { background: #1e293b; color: #e2e8f0; padding: 1rem; border-radius: 6px; overflow-x: auto; }
  .markdown-body pre code { background: none; padding: 0; color: inherit; }
  .markdown-body table { border-collapse: collapse; margin: 0.8rem 0; }
  .markdown-body th, .markdown-body td { border: 1px solid #e2e8f0; padding: 0.4rem 0.8rem; }
  .markdown-body blockquote { border-left: 3px solid #e2e8f0; padding-left: 1rem; color: #64748b; margin: 0.5rem 0; }
  ```

## 検証

1. `npm run build` でコンパイル成功
2. 管理画面サーバー起動してブラウザで確認:
   - ナビに「プラン」が表示される
   - `/plans` でプラン一覧が表示される
   - 一覧に各ファイルの実装内容名（H1 見出し）が表示される
   - 各プランをクリックして Markdown がレンダリングされた状態で表示される
