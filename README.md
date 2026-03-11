# deep-pulse

https://akiraak.github.io/deep-pulse/

ニュースを深く考察した記事を生成・配信するツール。

記事は Claude Code 上で生成し `output/` に Markdown として保存。GitHub Pages で公開、またはローカルの HTTP サーバーで閲覧できます。

## セットアップ

```bash
npm install
```

## 使い方

### 記事を生成する

Claude Code 上で記事のテーマを指定してください。以下の流れで自動生成されます。

1. WebSearch / WebFetch で情報収集
2. 構成プラン作成（`output/YYYY-MM-DD_タイトル_plan.md`）— 各セクションにソース URL を記載
3. ソース記事を読みながら本文生成（`output/YYYY-MM-DD_タイトル.md`）

### 記事を閲覧する

**GitHub Pages（本番）**

push すると自動でビルド・デプロイされます。

**ローカルサーバー**

```bash
npm run serve
```

http://localhost:3000 で記事一覧・個別記事を HTML で閲覧できます。ポートは環境変数 `PORT` で変更可能です。

## コマンド

```bash
npm install          # 依存パッケージのインストール
npm run serve        # HTML サーバー起動 (http://localhost:3000)
npm run build        # TypeScript コンパイル
npm run build:site   # 静的サイトビルド (dist_site/ に出力)
npm run lint         # ESLint
npm run format       # Prettier
```

## アーキテクチャ

| ファイル | 役割 |
|---|---|
| `src/index.ts` | エントリーポイント。サーバー起動 |
| `src/render.ts` | Markdown → HTML 変換 |
| `src/server.ts` | HTTP サーバー。記事一覧・個別記事を配信 |
| `scripts/build_static.ts` | 静的サイトビルド。GitHub Pages 用 |
| `.github/workflows/pages.yml` | push 時に GitHub Pages へ自動デプロイ |

## ライセンス

MIT
