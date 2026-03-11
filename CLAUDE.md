# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

deep-pulse は特定のキーワードでニュースを検索し、Claude API で深い考察を加えた記事を Markdown として生成するツール。

## Commands

```bash
npm install          # 依存パッケージのインストール
npm run dev -- <keyword> [maxResults]  # 開発実行（tsx）
npm run build        # TypeScript コンパイル
npm start            # コンパイル済みコードの実行
npm run lint         # ESLint
npm run format       # Prettier
```

## Architecture

パイプライン: **検索 → 分析 → 出力**

- `src/index.ts` — エントリーポイント。CLI 引数を受け取りパイプラインを実行
- `src/search.ts` — Google Custom Search API でニュース検索
- `src/analyze.ts` — Claude API (Anthropic SDK) でニュースを考察し記事生成
- `src/output.ts` — 生成記事を `output/` に Markdown ファイルとして保存
- `src/types.ts` — 共有型定義（SearchConfig, NewsItem, GeneratedArticle）

## Environment Variables

`.env.example` を参照。必要な環境変数:
- `GOOGLE_API_KEY` / `GOOGLE_CSE_ID` — Google Custom Search
- `ANTHROPIC_API_KEY` — Claude API

## Conventions

- コメント・ドキュメント・生成記事は日本語
- 変数名・関数名・ファイル名は英語
- ES Modules (`"type": "module"`)、インポートには `.js` 拡張子を付ける
