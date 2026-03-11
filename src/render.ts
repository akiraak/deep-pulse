// Markdown → HTML 変換モジュール
// 記事ファイルを読み込み、スタイル付き HTML を返す

import { readFile, readdir } from "fs/promises";
import path from "path";
import { marked } from "marked";

const OUTPUT_DIR = path.resolve("output");

const CSS = `
  body { max-width: 800px; margin: 40px auto; padding: 0 20px; font-family: "Hiragino Kaku Gothic ProN", "Noto Sans JP", sans-serif; line-height: 1.8; color: #333; background: #fafafa; }
  h1 { border-bottom: 2px solid #333; padding-bottom: 8px; }
  h2 { margin-top: 2em; color: #555; }
  blockquote { border-left: 4px solid #ccc; margin: 1em 0; padding: 0.5em 1em; color: #666; background: #f0f0f0; }
  a { color: #0066cc; }
  code { background: #eee; padding: 2px 6px; border-radius: 3px; }
  pre { background: #2d2d2d; color: #f8f8f2; padding: 16px; border-radius: 6px; overflow-x: auto; }
  pre code { background: none; padding: 0; color: inherit; }
  .article-list { list-style: none; padding: 0; }
  .article-list li { padding: 12px 0; border-bottom: 1px solid #eee; }
  .article-list .date { color: #888; margin-right: 8px; font-size: 0.9em; }
  .article-list a { text-decoration: none; font-weight: bold; }
  .article-list a:hover { text-decoration: underline; }
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
