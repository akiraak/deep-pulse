// 静的サイトビルドスクリプト
// output/ 内の記事を HTML に変換し、dist_site/ に出力する

import { mkdir, writeFile, copyFile, access } from "fs/promises";
import path from "path";
import {
  renderIndex,
  renderArticle,
  renderChapter,
  listArticles,
  listChapters,
} from "../src/render.js";

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
  const OUTPUT_DIR = path.resolve("output");
  for (const article of articles) {
    // MP3 音声ファイルの存在チェック・コピー
    const baseName = article.filename.replace(/\.md$/, "");
    const mp3Name = baseName + ".mp3";
    const mp3Src = path.join(OUTPUT_DIR, baseName, mp3Name);
    let audioSrc: string | undefined;
    try {
      await access(mp3Src);
      await copyFile(mp3Src, path.join(ARTICLES_DIR, mp3Name));
      audioSrc = `./${encodeURIComponent(mp3Name)}`;
      console.log(`コピー: articles/${mp3Name}`);
    } catch {
      // 音声ファイルなし — スキップ
    }

    const html = await renderArticle(article.filename, "../", audioSrc, "./");
    if (html) {
      const outName = baseName + ".html";
      await writeFile(path.join(ARTICLES_DIR, outName), html, "utf-8");
      console.log(`生成: articles/${outName}`);
    }

    // 多階層記事: chapters/ があれば各章を articles/<base>/<slug>.html に出力
    const chapters = await listChapters(baseName);
    if (chapters.length > 0) {
      const chapterDir = path.join(ARTICLES_DIR, baseName);
      await mkdir(chapterDir, { recursive: true });
      for (const ch of chapters) {
        const chHtml = await renderChapter(baseName, ch.filename, {
          listHref: "../../",
          articlesRoot: "../",
        });
        if (chHtml) {
          await writeFile(path.join(chapterDir, ch.slug + ".html"), chHtml, "utf-8");
          console.log(`生成: articles/${baseName}/${ch.slug}.html`);
        }
      }
    }
  }

  // OGP画像をコピー（存在する場合のみ）
  const ogpSrc = path.resolve("ogp.jpg");
  try {
    await access(ogpSrc);
    await copyFile(ogpSrc, path.join(DIST, "ogp.jpg"));
    console.log("コピー: ogp.jpg");
  } catch {
    console.warn("警告: ogp.jpg が見つかりません。スキップします。");
  }

  console.log(`\n完了: ${articles.length} 件の記事を dist_site/ に出力しました`);
}

build().catch((err) => {
  console.error("ビルドエラー:", err);
  process.exit(1);
});
