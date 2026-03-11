// deep-pulse エントリーポイント
// キーワードを受け取り、ニュース検索 → 分析 → 記事出力 のパイプラインを実行する

import { searchNews } from "./search.js";
import { generateArticle } from "./analyze.js";
import { saveArticle } from "./output.js";

async function main() {
  const keyword = process.argv[2];

  if (!keyword) {
    console.error("使い方: npm run dev -- <検索キーワード>");
    process.exit(1);
  }

  const maxResults = parseInt(process.argv[3] ?? "5", 10);

  console.log(`「${keyword}」で検索中...`);
  const newsItems = await searchNews({ keyword, maxResults });
  console.log(`${newsItems.length} 件のニュースを取得しました`);

  if (newsItems.length === 0) {
    console.error("ニュースが見つかりませんでした");
    process.exit(1);
  }

  console.log("記事を生成中...");
  const article = await generateArticle(keyword, newsItems);

  const filePath = await saveArticle(article);
  console.log(`記事を保存しました: ${filePath}`);
}

main().catch((err) => {
  console.error("エラーが発生しました:", err);
  process.exit(1);
});
