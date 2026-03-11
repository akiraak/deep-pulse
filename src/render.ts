// Markdown → HTML 変換モジュール
// 記事ファイルを読み込み、スタイル付き HTML を返す

import { readFile, readdir } from "fs/promises";
import path from "path";
import { marked } from "marked";

const OUTPUT_DIR = path.resolve("output");

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
  @media (max-width: 600px) {
    body { padding: 1rem; font-size: 0.93rem; max-width: 100%; }
    h1 { font-size: 1.6rem; }
    p { text-indent: 0; }
  }
`;

function wrapHtml(title: string, body: string): string {
  return `<!DOCTYPE html>
<html lang="ja">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${title}</title>
  <style>${CSS}</style>
</head>
<body>
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
export async function renderIndex(): Promise<string> {
  const articles = await listArticles();

  if (articles.length === 0) {
    return wrapHtml(
      "deep-pulse",
      "<h1>deep-pulse</h1><p>記事がありません。先にニュースを検索して記事を生成してください。</p>",
    );
  }

  const items = articles
    .map(
      (a) =>
        `<li><span class="date">${a.date}</span><a href="/articles/${encodeURIComponent(a.filename)}">${a.title}</a></li>`,
    )
    .join("\n");

  return wrapHtml(
    "deep-pulse — 記事一覧",
    `<h1>deep-pulse — 記事一覧</h1>\n<ul class="article-list">\n${items}\n</ul>`,
  );
}

/** 個別記事の HTML を生成 */
export async function renderArticle(filename: string): Promise<string | null> {
  const filePath = path.join(OUTPUT_DIR, filename);
  let md: string;
  try {
    md = await readFile(filePath, "utf-8");
  } catch {
    return null;
  }

  const html = await marked(md);
  return wrapHtml(filename.replace(/\.md$/, ""), html);
}
