# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

deep-pulse はニュースを深く考察した記事を Markdown として生成し、HTML サーバーで配信するツール。
記事の生成は Claude Code 上で行い、`output/` ディレクトリに保存する。

## Commands

```bash
npm install          # 依存パッケージのインストール
npm run serve        # HTML サーバー起動 (http://localhost:3000)
npm run build        # TypeScript コンパイル
npm start            # コンパイル済みコードの実行
npm run build:site   # 静的サイトビルド (dist_site/ に出力)
npm run lint         # ESLint
npm run format       # Prettier
```

## Architecture

- `src/index.ts` — エントリーポイント。サーバーを起動する
- `src/render.ts` — Markdown → HTML 変換（marked 使用）。OGP タグ・ヘッダー・パンくず生成を含む
- `src/server.ts` — HTTP サーバー。記事一覧・個別記事を HTML で配信
- `scripts/build_static.ts` — 静的サイトビルド。GitHub Pages 用。`ogp.png` も `dist_site/` にコピーする
- `.github/workflows/pages.yml` — push 時に GitHub Pages へ自動デプロイ

## Article Generation Rules

記事は Claude Code がこの画面上で生成し、`output/` に保存する。以下の手順で進める。

### 手順

1. **テーマ確認** — ユーザーが記事のテーマ・時期・トピックを指定する
2. **情報収集** — WebSearch / WebFetch を使い、関連するニュース記事・一次情報をできる限り多く収集する
3. **生成プラン作成** — 収集した情報を元に記事の構成案を `output/YYYY-MM-DD_タイトル_plan.md` として保存し、ユーザーに確認を取る。収集した全ソースの URL を**各セクションごとに**プランファイルに記録すること（コンテキスト圧縮で失われないようにするため）
4. **記事生成** — プランに基づき `output/YYYY-MM-DD_タイトル.md` として記事を生成する。**各セクションを書く前に、プランに記載された該当セクションのソース URL を WebFetch で読み込み、内容を確認しながら執筆すること**

### 記事のフォーマット

- ファイル名: `YYYY-MM-DD_タイトル.md`（日付は記事の生成日）
- 記事は日本語で執筆する
- 以下の観点で深い考察を加えること:
  - 事実の整理と背景の説明
  - 複数の視点からの分析
  - 社会的・経済的影響の考察
  - 今後の展望
- Markdown の見出し・箇条書き・引用を適切に使用する
- 記事中の事実・引用には参照元へのリンクを付ける（インラインリンク）
- 記事の末尾に「## 参考ソース」セクションを設け、参照した全記事の URL をリスト化する

## Task Management

- タスクは `TODO.md` で管理する
- コミット前に、完了したタスクを `TODO.md` から `DONE.md` に移動すること

## Conventions

- コメント・ドキュメント・生成記事は日本語
- 変数名・関数名・ファイル名は英語
- ES Modules (`"type": "module"`)、インポートには `.js` 拡張子を付ける
