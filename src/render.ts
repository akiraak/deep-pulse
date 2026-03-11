// Markdown → HTML 変換モジュール
// 記事ファイルを読み込み、スタイル付き HTML を返す

import { readFile, readdir } from "fs/promises";
import path from "path";
import { marked } from "marked";

const OUTPUT_DIR = path.resolve("output");
const SITE_URL = "https://akiraak.github.io/deep-pulse";
const SITE_NAME = "deep-pulse";
const SITE_DESCRIPTION = "ニュースを深く考察した記事を配信";
const OGP_IMAGE = `${SITE_URL}/ogp.png`;

const CSS = `
  * { margin: 0; padding: 0; box-sizing: border-box; }
  html { font-size: 16px; -webkit-text-size-adjust: 100%; }
  body {
    font-family: Georgia, "Times New Roman", "Noto Serif JP", "Hiragino Mincho ProN", "Yu Mincho", "MS PMincho", serif;
    color: #1c1c1c; background: #faf8f0; line-height: 1.9;
    padding: 2.5rem 2rem; max-width: 900px; margin: 0 auto;
  }
  h1 {
    font-size: 2.4rem; font-weight: 900; line-height: 1.15;
    text-align: center; margin-bottom: 0.3rem; letter-spacing: 0.04em;
  }
  h1 + blockquote {
    text-align: center; border: none; background: none;
    color: #777; font-style: italic; padding: 0; margin-bottom: 1.5rem;
  }
  h1 + blockquote::after {
    content: ""; display: block; width: 60%; margin: 1rem auto 0;
    border-bottom: 3px double #2c2c2c;
  }
  h2 {
    font-size: 1.3rem; font-weight: 700; margin-top: 2rem; margin-bottom: 0.5rem;
    text-transform: uppercase; letter-spacing: 0.06em;
    border-top: 2px solid #2c2c2c; border-bottom: 1px solid #2c2c2c; padding: 0.4rem 0;
  }
  h3 { font-size: 1.05rem; font-weight: 700; margin-top: 1.5rem; margin-bottom: 0.5rem; font-style: italic; }
  p { margin-bottom: 0.9rem; text-align: justify; text-indent: 1em; }
  p:first-child { text-indent: 0; }
  a { color: #8b0000; text-decoration: none; border-bottom: 1px dotted #8b0000; }
  a:hover { border-bottom-style: solid; }
  blockquote {
    margin: 1.5rem 1rem; padding: 1rem 1.5rem;
    border-left: 3px solid #8b0000; background: rgba(139,0,0,0.04);
    font-style: italic; color: #555;
  }
  blockquote p { text-indent: 0; margin-bottom: 0.3rem; }
  ul, ol { margin: 0.75rem 0 1rem 1.5rem; }
  li { margin-bottom: 0.35rem; }
  li p { text-indent: 0; }
  strong { font-weight: 700; }
  hr { border: none; border-top: 1px solid #c0b9a8; margin: 2rem 3rem; }
  .article-list { list-style: none; padding: 0; }
  .article-list li { padding: 14px 0; border-bottom: 1px solid #c0b9a8; }
  .article-list .date { color: #777; margin-right: 10px; font-size: 0.9em; font-style: italic; }
  .article-list a { color: #1c1c1c; text-decoration: none; font-weight: 700; font-size: 1.1em; border-bottom: none; }
  .article-list a:hover { color: #8b0000; }
  .site-header {
    border-bottom: 3px double #2c2c2c; margin-bottom: 2rem; padding-bottom: 0.6rem;
  }
  .site-header .site-name {
    font-size: 1.6rem; font-weight: 900; letter-spacing: 0.08em;
    text-transform: uppercase; color: #1c1c1c; text-decoration: none; border-bottom: none;
  }
  .site-header .site-name:hover { color: #8b0000; }
  .breadcrumb {
    font-size: 0.85rem; color: #777; margin-top: 0.3rem;
  }
  .breadcrumb a { color: #777; border-bottom: 1px dotted #aaa; }
  .breadcrumb a:hover { color: #8b0000; border-bottom-style: solid; }
  .breadcrumb .sep { margin: 0 0.4em; }
  @media (max-width: 600px) {
    body { padding: 1rem; font-size: 0.93rem; max-width: 100%; }
    h1 { font-size: 1.6rem; }
    p { text-indent: 0; }
  }
`;

interface WrapOptions {
  title: string;
  body: string;
  indexHref?: string;
  breadcrumb?: string;
  description?: string;
  ogUrl?: string;
}

function wrapHtml({ title, body, indexHref = "/", breadcrumb, description, ogUrl }: WrapOptions): string {
  const breadcrumbHtml = breadcrumb
    ? `<div class="breadcrumb"><a href="${indexHref}">記事一覧</a><span class="sep">/</span>${breadcrumb}</div>`
    : "";

  const desc = description ?? SITE_DESCRIPTION;
  const url = ogUrl ?? SITE_URL;

  return `<!DOCTYPE html>
<html lang="ja">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${title}</title>
  <meta name="description" content="${desc}">
  <meta property="og:title" content="${title}">
  <meta property="og:description" content="${desc}">
  <meta property="og:type" content="${breadcrumb ? "article" : "website"}">
  <meta property="og:url" content="${url}">
  <meta property="og:image" content="${OGP_IMAGE}">
  <meta property="og:site_name" content="${SITE_NAME}">
  <meta property="og:locale" content="ja_JP">
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="${title}">
  <meta name="twitter:description" content="${desc}">
  <meta name="twitter:image" content="${OGP_IMAGE}">
  <style>${CSS}</style>
</head>
<body>
<header class="site-header">
  <a href="${indexHref}" class="site-name">deep-pulse</a>
  ${breadcrumbHtml}
</header>
${body}
</body>
</html>`;
}

/** 記事ファイル情報 */
export interface ArticleEntry {
  filename: string;
  date: string;
  title: string;
}

/** Markdown ファイルの先頭 # 見出しを取得 */
async function extractTitle(filePath: string): Promise<string | null> {
  try {
    const content = await readFile(filePath, "utf-8");
    const match = content.match(/^#\s+(.+)$/m);
    return match?.[1] ?? null;
  } catch {
    return null;
  }
}

/** Markdown から最初の本文段落を抽出して description 用テキストにする */
function extractDescription(md: string): string {
  const lines = md.split("\n");
  for (const line of lines) {
    const trimmed = line.trim();
    // 見出し・空行・区切り線・リスト・画像をスキップ
    if (!trimmed || /^#{1,6}\s/.test(trimmed) || trimmed === "---" || /^[-*]\s/.test(trimmed) || /^!\[/.test(trimmed)) {
      continue;
    }
    // Markdownリンク等を除去してプレーンテキストに
    const plain = trimmed.replace(/\[([^\]]+)\]\([^)]+\)/g, "$1").replace(/[*_`]/g, "");
    return plain.length > 200 ? plain.slice(0, 197) + "..." : plain;
  }
  return SITE_DESCRIPTION;
}

/** output/ 内の .md ファイル一覧を取得 */
export async function listArticles(): Promise<ArticleEntry[]> {
  let files: string[];
  try {
    files = await readdir(OUTPUT_DIR);
  } catch {
    return [];
  }

  const mdFiles = files
    .filter((f) => f.endsWith(".md") && !f.endsWith("_plan.md"))
    .sort()
    .reverse();

  const entries: ArticleEntry[] = [];
  for (const filename of mdFiles) {
    const dateMatch = filename.match(/^(\d{4}-\d{2}-\d{2})_/);
    const date = dateMatch?.[1] ?? "";
    const title =
      (await extractTitle(path.join(OUTPUT_DIR, filename))) ?? filename;
    entries.push({ filename, date, title });
  }

  return entries;
}

/** 記事一覧の HTML を生成 */
export async function renderIndex(
  basePath = "/articles",
): Promise<string> {
  const articles = await listArticles();

  const indexHref = basePath === "/articles" ? "/" : "./";

  if (articles.length === 0) {
    return wrapHtml({
      title: "deep-pulse",
      body: "<p>記事がありません。先にニュースを検索して記事を生成してください。</p>",
      indexHref,
    });
  }

  const items = articles
    .map((a) => {
      const href = `${basePath}/${encodeURIComponent(a.filename.replace(/\.md$/, ".html"))}`;
      return `<li><span class="date">${a.date}</span><a href="${href}">${a.title}</a></li>`;
    })
    .join("\n");

  return wrapHtml({
    title: "deep-pulse — 記事一覧",
    body: `<ul class="article-list">\n${items}\n</ul>`,
    indexHref,
  });
}

/** 個別記事の HTML を生成 */
export async function renderArticle(
  filename: string,
  indexHref = "/",
): Promise<string | null> {
  const filePath = path.join(OUTPUT_DIR, filename);
  let md: string;
  try {
    md = await readFile(filePath, "utf-8");
  } catch {
    return null;
  }

  const articleTitle = (await extractTitle(filePath)) ?? filename;
  const description = extractDescription(md);
  const htmlName = filename.replace(/\.md$/, ".html");
  const ogUrl = `${SITE_URL}/articles/${encodeURIComponent(htmlName)}`;
  const html = await marked(md);
  return wrapHtml({
    title: `${articleTitle} — deep-pulse`,
    body: html,
    indexHref,
    breadcrumb: articleTitle,
    description,
    ogUrl,
  });
}
