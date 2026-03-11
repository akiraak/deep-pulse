# deep-pulse

ニュースを深く考察した記事を生成・配信するツール。

記事は Claude Code 上で生成し `output/` に Markdown として保存。HTTP サーバーで HTML として閲覧できます。

## セットアップ

```bash
npm install
```

## 使い方

### 記事を生成する

Claude Code 上で記事生成を依頼してください。`output/YYYY-MM-DD_タイトル.md` として保存されます。

### 記事を閲覧する

```bash
npm run serve
```

http://localhost:3000 で記事一覧・個別記事を HTML で閲覧できます。ポートは環境変数 `PORT` で変更可能です。

## アーキテクチャ

| ファイル | 役割 |
|---|---|
| `src/index.ts` | エントリーポイント。サーバー起動 |
| `src/render.ts` | Markdown → HTML 変換 |
| `src/server.ts` | HTTP サーバー。記事一覧・個別記事を配信 |

## ライセンス

MIT
