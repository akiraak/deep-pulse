// 記事出力モジュール
// 生成された記事をMarkdownファイルとして保存する

import { writeFile, mkdir } from "fs/promises";
import path from "path";
import type { GeneratedArticle } from "./types.js";

const OUTPUT_DIR = path.resolve("output");

function sanitizeFilename(name: string): string {
  return name.replace(/[/\\?%*:|"<>]/g, "_").slice(0, 100);
}

export async function saveArticle(article: GeneratedArticle): Promise<string> {
  await mkdir(OUTPUT_DIR, { recursive: true });

  const date = new Date(article.generatedAt).toISOString().slice(0, 10);
  const filename = `${date}_${sanitizeFilename(article.title)}.md`;
  const filePath = path.join(OUTPUT_DIR, filename);

  const markdown = `# ${article.title}

> 生成日時: ${article.generatedAt}

${article.content}
`;

  await writeFile(filePath, markdown, "utf-8");
  return filePath;
}
