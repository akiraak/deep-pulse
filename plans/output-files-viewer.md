# output 配下の md ファイルビューア（独立サーバー）実装プラン

## ユーザー指示

> output の各mdファイルが見れる管理画面を作る。既存のサーバーとは別

## 背景

現在動作しているサーバー:

| サーバー | ポート | エントリー | 役割 |
|---------|-------|-----------|------|
| 記事配信 | 3000 | `src/index.ts` → `src/server.ts` | 公開サイトと同じ HTML で記事を配信 |
| 管理画面 | 3001 | `src/admin_index.ts` → `src/admin_server.ts` → `src/admin.ts` | 記事一覧・プレビュー・ソース・プラン・TTS |

既存の管理画面（3001）の記事一覧は `listArticles()` を経由しており、`_plan.md` と `_note.md` を**意図的に除外**している。
このタスクでは、`output/` 配下の **すべての .md ファイル**（記事本体・`_plan.md`・`_note.md`・サブディレクトリ内 / トップレベル両方）を素のファイルとして俯瞰・閲覧できる、**3 つ目の独立サーバー**を新設する。

## ゴール

- `output/` ツリーを丸ごとブラウズできる、独立したファイルビューア
- ポート `3002`（環境変数 `FILES_PORT` で変更可）で起動
- 既存の 2 サーバーには手を入れず、独立して起動・停止できる
- 記事本体だけでなく `_plan.md` `_note.md` `sources/` 配下の md も等しく閲覧可能

## 機能仕様

### 1. ファイル一覧（`GET /`）

`output/` 配下の **全 .md ファイル**を再帰的に列挙してテーブル表示する。

| 列 | 内容 |
|----|------|
| パス | `output/` からの相対パス（例: `2026-05-01_重曹の正体と使い道/2026-05-01_重曹の正体と使い道_plan.md`） |
| 種別 | バッジ表示: `記事` / `plan` / `note` / `source` / `その他` |
| H1 見出し | ファイル先頭の `# ...` を抽出（無ければ `—`） |
| サイズ | `formatBytes` で人間可読 |
| 更新日 | `mtime` を `YYYY-MM-DD HH:mm` 表示 |
| 操作 | `[表示]` ボタン → `/view?path=...` |

種別の判定ルール:

- `_plan.md` で終わる → `plan`
- `_note.md` で終わる → `note`
- パスに `/sources/` を含む → `source`
- 上記以外で `.md` → `記事`

並び順: **更新日の新しい順**（デフォルト）。クライアント側のテーブル並び替えは初版では実装しない。

ヘッダーに以下のフィルタ UI を置く:

- 種別フィルタ（チェックボックス: 記事 / plan / note / source）
- 記事ディレクトリ単位でグループ化するトグル（デフォルト OFF = フラット一覧）

→ **初版ではフィルタは見送り**、まずフラットな一覧のみ実装する。レイアウトの余白だけ確保しておき、後追いで足せるようにする。

### 2. ファイル詳細（`GET /view?path=...`）

クエリ `path` で指定された `.md` ファイルを表示する。

- 上部にパンくず（`一覧` / `<相対パス>`）
- ファイルヘッダーに「実パス」「サイズ」「更新日」「種別バッジ」
- 表示モード切替（タブ）:
  - **レンダリング表示**（デフォルト）— `marked` で HTML 化して `markdown-body` クラスで表示
  - **生テキスト表示** — `<pre>` で raw な Markdown を表示
- ソースファイル（YAML フロントマター付き）の場合、フロントマターの `url` `title` を別枠でハイライト表示する

タブ切替は `?mode=raw` / `?mode=rendered` のクエリでサーバー側分岐する（JS なしで動くようにする）。

### 3. ヘルスチェック / 静的アセット

- `GET /health` → `200 OK`（任意）
- 画像など追加アセットは持たない（CSS はインライン）

### 4. スコープ外（明示的に作らない）

- 編集・削除・アップロード（**読み取り専用**）
- 認証（ローカル前提）
- 検索（初版では並び順のみ）
- WebSocket / SSE 等のライブ更新
- `output/` 以外（`plans/` `dist_site/` 等）の閲覧 — それらは既存管理画面 / ファイルシステムで対応済み

## アーキテクチャ

### ファイル構成（新規分のみ）

```
src/
  files.ts          — 新規。ハンドラ + HTML 生成（admin.ts と同じ構成）
  files_server.ts   — 新規。HTTP サーバー本体
  files_index.ts    — 新規。エントリーポイント（.env 読み込み + 起動）
files.sh            — 新規。ポート占有プロセスを kill して起動
```

既存管理画面（`admin_index.ts` / `admin_server.ts` / `admin.ts`）と完全に同じ三層構成にし、コードの読み手の認知負荷を下げる。

### モジュールの責務

| ファイル | 責務 |
|---------|------|
| `files.ts` | ルーティング・HTML 生成・Markdown 列挙ロジックをまとめる。`handleFiles(req, res, pathname)` をエクスポート |
| `files_server.ts` | `http.createServer` を作って `handleFiles` に委譲。`startFilesServer()` をエクスポート。ポートは `FILES_PORT`（デフォルト `3002`） |
| `files_index.ts` | `.env` を `admin_index.ts` と同じパターンで読み込み（必須ではないが将来の拡張用に揃える）、`startFilesServer()` を呼ぶ |

### ルーティング

| メソッド | パス | ハンドラ |
|---------|------|---------|
| GET | `/` | `handleFileList` |
| GET | `/view` | `handleFileDetail`（`path`, `mode` クエリ） |
| GET | `/health` | `200 OK` テキスト |

### `output/` 走査ロジック

```ts
async function walkOutput(): Promise<FileEntry[]> {
  const root = path.resolve("output");
  const result: FileEntry[] = [];
  // 再帰的に Dirent を走査。.md のみ収集。最大深さは 4 程度に制限（暴走防止）
}
```

- `path.relative(root, fullPath)` で相対パスを保持
- パストラバーサル防止: 詳細表示の `path` クエリは
  - `path.resolve(OUTPUT_DIR, query)` を取った後、`path.relative(OUTPUT_DIR, resolved)` の先頭が `..` で始まらないことを確認
  - 拡張子が `.md` であること
- シンボリックリンクは追わない（`Dirent.isFile()` でフィルタ）

### 種別判定ヘルパー

```ts
type FileKind = "article" | "plan" | "note" | "source" | "other";
function classify(relPath: string): FileKind { ... }
```

### YAML フロントマター抽出

`admin.ts` 内の `parseFrontmatter()` と同じロジックを使う。コピペでよい（共通化は本タスクの目的ではないため将来課題）。

### CSS

`admin.ts` の `ADMIN_CSS` を**そのままコピーして流用**する。
ヘッダーロゴだけ `deep-pulse <span>files</span>` に変更してアクセントカラーを変える（例: `span` を `#10b981` 系の緑にして「別サーバー」であることを視覚的に区別）。

ナビは以下の 3 リンクのみとする:

- `一覧`（`/`）
- `公開サイト`（`http://localhost:3000`、`target="_blank"`）
- `管理画面`（`http://localhost:3001`、`target="_blank"`）

### Markdown レンダリング上の注意

`render.ts` は `marked.use()` でグローバルに `chartRenderer` / `headingRenderer` を登録している。
`files.ts` で素朴に `import { marked } from "marked"` すると、`render.ts` がロードされた他プロセスとは独立だが、**ファイルビューアでは `chart` `mermaid` のレンダリングは不要**（生テキスト的に確認したい用途）。

→ 対応方針: `files.ts` 内では `new Marked()` で**専用インスタンス**を作り、デフォルトレンダラーのまま使う。`marked` パッケージから `Marked` クラスをインポートする。これによって `render.ts` のグローバル副作用を踏まずに済む。

```ts
import { Marked } from "marked";
const localMarked = new Marked();
const html = await localMarked.parse(md);
```

## 起動・運用

### npm scripts 追記

`package.json` に追加:

```json
"files": "tsx src/files_index.ts"
```

### `files.sh`

`admin.sh` をテンプレに、ポート変数だけ差し替える:

```bash
#!/usr/bin/env bash
set -e
cd "$(dirname "$0")"

PORT="${FILES_PORT:-3002}"
OLD_PID=$(lsof -ti :"$PORT" 2>/dev/null || true)
if [ -n "$OLD_PID" ]; then
  echo "ポート ${PORT} を使用中のプロセス (PID: ${OLD_PID}) を停止します"
  kill "$OLD_PID" 2>/dev/null || true
  sleep 0.5
fi

exec npx tsx src/files_index.ts
```

実行権限: `chmod +x files.sh`

### `CLAUDE.md` の Commands セクション

`npm run files` と `./files.sh` の説明を追記する（このプランの実装フェーズで CLAUDE.md も更新）。

## ファイル変更一覧

| ファイル | 操作 |
|---------|------|
| `src/files.ts` | **新規** |
| `src/files_server.ts` | **新規** |
| `src/files_index.ts` | **新規** |
| `files.sh` | **新規**（`chmod +x`） |
| `package.json` | scripts に `"files"` 追加 |
| `CLAUDE.md` | Commands セクションに `npm run files` 追記 |
| `TODO.md` | 該当タスクを `DONE.md` に移動（コミット前） |

## 実装ステップ

1. `src/files.ts` を作成（CSS / HTML ヘルパー / `walkOutput` / 一覧・詳細ハンドラ / `handleFiles` エクスポート）
2. `src/files_server.ts` を作成（`http.createServer` + `handleFiles` 委譲）
3. `src/files_index.ts` を作成（`.env` 読み込み + `startFilesServer()` 呼び出し）
4. `files.sh` を作成し `chmod +x`
5. `package.json` に `"files"` スクリプトを追加
6. `npm run build` で TypeScript の型エラーがないか確認
7. `./files.sh` で起動して動作確認:
   - `http://localhost:3002/` で全 md ファイル一覧が表示されること
   - `_plan.md` `_note.md` `sources/*.md` が含まれていること
   - `[表示]` クリックで個別ファイルがレンダリング表示されること
   - `?mode=raw` で生テキスト表示できること
   - `?path=../etc/passwd` 等が拒否されること
8. `CLAUDE.md` を更新
9. `TODO.md` → `DONE.md` への移動 + コミット

## 検証チェックリスト

- [ ] ポート 3002 で listen している
- [ ] 既存の 3000 / 3001 サーバーには影響しない（同時起動できる）
- [ ] `output/` 配下の全 `.md` が網羅されている（トップレベル / サブディレクトリ / `sources/` 全部）
- [ ] 種別バッジが正しく付く（記事 / plan / note / source）
- [ ] 詳細ページで Markdown がレンダリングされる
- [ ] 生テキストモードで raw な Markdown が見れる
- [ ] パストラバーサル防止が効いている（`../` を含むパスで 400）
- [ ] `.md` 以外の拡張子は詳細表示で 400
- [ ] レスポンシブ（既存 admin と同じ `@media` ルールを継承）

## 対象外（今回のスコープ外）

- 認証・認可
- 編集・削除（**読み取り専用**）
- 検索・高度なフィルタ・並び替え UI
- `output/` 以外のディレクトリ閲覧
- `_plan.md` 同士の差分比較などの分析機能
- TypeScript 共通化リファクタ（`parseFrontmatter` 等の重複は許容）
