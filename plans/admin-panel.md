# 管理画面（Admin Panel）実装プラン

## 概要

`/admin` パスで記事の管理・プレビュー・ビルド操作ができる管理画面を追加する。
既存の Node.js HTTP サーバー（`src/server.ts`）にルートを追加する形で実装し、外部フレームワークは導入しない。

## 管理画面の機能

### 1. ダッシュボード (`/admin`)
- 記事の総数、最新記事の日付などの概要表示
- 各機能へのナビゲーション

### 2. 記事一覧・管理 (`/admin/articles`)
- 全記事の一覧表示（日付・タイトル・ファイルサイズ）
- 各記事へのリンク（プレビュー / ソース一覧 / 削除）
- ソートやフィルタリング（日付順）

### 3. 記事プレビュー (`/admin/articles/:filename/preview`)
- 公開版と同じ HTML レンダリングでプレビュー表示
- プレビュー用のヘッダーバー（「← 管理画面に戻る」リンク付き）

### 4. ソース閲覧 (`/admin/articles/:filename/sources`)
- 記事に紐づく `sources/` ディレクトリ内のファイル一覧
- 各ソースの URL・タイトル（YAML フロントマター）を表示
- 個別ソースの内容表示

### 5. 記事削除 (`POST /admin/articles/:filename/delete`)
- 確認ダイアログ付きの削除機能
- 記事ディレクトリごと（sources/ 含む）削除

### 6. 静的ビルド実行 (`POST /admin/build`)
- 管理画面から `npm run build:site` を実行
- ビルドの進捗・結果をレスポンスで返す

## アーキテクチャ

### ファイル構成

```
src/
  server.ts        — 既存。admin ルートへのディスパッチを追加
  render.ts        — 既存。変更なし（listArticles, renderArticle を再利用）
  admin.ts         — 新規。管理画面の全ルートハンドラー & HTML 生成
```

- `admin.ts` に管理画面のルーティング・HTML 生成を集約する
- `server.ts` では `/admin` で始まるパスを `admin.ts` のハンドラーに委譲する
- HTML は `render.ts` と同じインライン CSS 方式（テンプレートリテラル）で生成する。既存サイトとトーンを合わせつつ、管理画面用に配色を変える

### ルーティング設計

| メソッド | パス | 機能 |
|---------|------|------|
| GET | `/admin` | ダッシュボード |
| GET | `/admin/articles` | 記事一覧 |
| GET | `/admin/articles/:filename/preview` | 記事プレビュー |
| GET | `/admin/articles/:filename/sources` | ソース一覧 |
| GET | `/admin/articles/:filename/sources/:source` | 個別ソース表示 |
| POST | `/admin/articles/:filename/delete` | 記事削除 |
| POST | `/admin/build` | 静的ビルド実行 |

### セキュリティ

- ローカル開発用途のため、認証は実装しない（`npm run serve` はローカルで使う前提）
- 静的ビルド（GitHub Pages）には管理画面を含めない（`build_static.ts` は変更しない）
- パストラバーサル防止は既存パターンを踏襲（`..` `/` チェック）
- 削除は POST メソッド + JavaScript confirm で誤操作を防止

### UI デザイン方針

- 既存サイトのクラシック新聞風デザイン（`render.ts` の CSS）をベースに、管理画面用のアクセントカラー（ネイビー系）を追加
- フレームワーク・ライブラリは使わず、プレーンな HTML + CSS + 最小限の JavaScript
- レスポンシブ対応（既存の `@media` ルールを踏襲）

## 実装ステップ

### Step 1: `src/admin.ts` 新規作成
- 管理画面用の CSS 定数
- HTML ラッパー関数（ヘッダー・ナビゲーション付き）
- ダッシュボードページ生成
- 記事一覧ページ生成
- 記事プレビューページ生成
- ソース一覧・個別ソースページ生成
- 記事削除ハンドラー
- ビルド実行ハンドラー
- メインのリクエストハンドラー関数 `handleAdmin(req, res)` をエクスポート

### Step 2: `src/server.ts` 修正
- `admin.ts` の `handleAdmin` をインポート
- `/admin` で始まるパスを `handleAdmin` にディスパッチするルートを追加

### Step 3: 動作確認
- `npm run serve` で起動し、`/admin` にアクセスして各機能を確認

## 追加パッケージ

なし（既存の依存関係のみで実装可能）

## 対象外（今回のスコープ外）

- 認証・認可（ローカル用途のため不要）
- 記事の新規作成・編集（記事生成は Claude Code で行うため）
- リアルタイムのビルドログストリーミング（シンプルに結果のみ返す）
- 静的サイトビルドへの管理画面の組み込み（GitHub Pages には不要）

---

## サーバー分離作業プラン

### 背景

現在 `src/server.ts` が記事配信と管理画面の両方を 1 プロセスで提供している。
これを **記事配信サーバー** と **管理画面サーバー** に分離し、`./server.sh` と `./admin.sh` で別々に起動できるようにする。

### 現状

| ファイル | 役割 |
|---------|------|
| `src/index.ts` | エントリーポイント。`startServer()` を呼ぶ |
| `src/server.ts` | HTTP サーバー。記事配信 + `/admin` を `admin.ts` にディスパッチ |
| `src/admin.ts` | 管理画面ハンドラー。`handleAdmin()` をエクスポート |
| `server.sh` | `npx tsx src/index.ts` を実行 |

### 変更内容

#### 1. `src/server.ts` — admin ルートの削除

- `import { handleAdmin } from "./admin.js"` を削除
- `/admin` へのディスパッチブロックを削除
- 記事配信のみに専念するサーバーにする

#### 2. `src/admin_server.ts` — 新規作成

- 管理画面専用の HTTP サーバーモジュール
- ポートは `ADMIN_PORT` 環境変数（デフォルト `3001`）
- `admin.ts` の `handleAdmin()` を利用してリクエストを処理
- `startAdminServer()` をエクスポート

#### 3. `src/admin_index.ts` — 新規作成

- 管理画面サーバーのエントリーポイント
- `startAdminServer()` を呼ぶだけ

#### 4. `admin.sh` — 新規作成

- `npx tsx src/admin_index.ts` を実行
- `server.sh` と同じスタイル

#### 5. `admin.ts` — 修正

- 管理画面内の「公開サイト」リンクを、記事配信サーバーの URL（`http://localhost:3000`）に変更
  - 現在は `/` へのリンクだが、サーバーが分離すると同一ポートではないため外部 URL にする

#### 6. `package.json` — npm スクリプト追加

- `"admin"`: `"tsx src/admin_index.ts"` — 管理画面サーバー起動

### ファイル変更一覧

| ファイル | 操作 |
|---------|------|
| `src/server.ts` | 編集（admin 関連コード削除） |
| `src/admin_server.ts` | **新規** |
| `src/admin_index.ts` | **新規** |
| `src/admin.ts` | 編集（公開サイトリンク修正） |
| `admin.sh` | **新規** |
| `package.json` | 編集（scripts 追加） |

### 起動方法（変更後）

```bash
./server.sh    # 記事配信サーバー (port 3000)
./admin.sh     # 管理画面サーバー (port 3001)
```
