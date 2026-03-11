// 静的サイトビルドスクリプト
// output/ 内の記事を HTML に変換し、dist_site/ に出力する

import { mkdir, writeFile } from "fs/promises";
import path from "path";
import { renderIndex, renderArticle, listArticles } from "../src/render.js";

const DIST = path.resolve("dist_site");
const ARTICLES_DIR = path.join(DIST, "articles");

async function build() {
  await mkdir(ARTICLES_DIR, { recursive: true });

  // 記事一覧ページ
  const indexHtml = await renderIndex("./articles");
  await writeFile(path.join(DIST, "index.html"), indexHtml, "utf-8");
  console.log("生成: index.html");

  // 個別記事ページ
  const articles = await listArticles();
  for (const article of articles) {
    const html = await renderArticle(article.filename, "../");
    if (html) {
      const outName = article.filename.replace(/\.md$/, ".html");
      await writeFile(path.join(ARTICLES_DIR, outName), html, "utf-8");
      console.log(`生成: articles/${outName}`);
    }
  }

  console.log(`\n完了: ${articles.length} 件の記事を dist_site/ に出力しました`);
}

build().catch((err) => {
  console.error("ビルドエラー:", err);
  process.exit(1);
});
