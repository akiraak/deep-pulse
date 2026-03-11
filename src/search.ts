// ニュース検索モジュール
// Google Custom Search API を使用してニュース記事を検索する

import type { SearchConfig, NewsItem } from "./types.js";

const GOOGLE_API_KEY = process.env.GOOGLE_API_KEY;
const GOOGLE_CSE_ID = process.env.GOOGLE_CSE_ID;

export async function searchNews(config: SearchConfig): Promise<NewsItem[]> {
  if (!GOOGLE_API_KEY || !GOOGLE_CSE_ID) {
    throw new Error(
      "環境変数 GOOGLE_API_KEY と GOOGLE_CSE_ID を設定してください"
    );
  }

  const params = new URLSearchParams({
    key: GOOGLE_API_KEY,
    cx: GOOGLE_CSE_ID,
    q: config.keyword,
    num: String(Math.min(config.maxResults, 10)),
    sort: "date",
    // ニュース関連の結果を優先
    tbm: "nws",
  });

  const url = `https://www.googleapis.com/customsearch/v1?${params}`;
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(`検索APIエラー: ${response.status} ${response.statusText}`);
  }

  const data = await response.json();
  const items: NewsItem[] = (data.items ?? []).map((item: any) => ({
    title: item.title,
    url: item.link,
    snippet: item.snippet ?? "",
    source: item.displayLink ?? "",
    publishedAt: item.pagemap?.metatags?.[0]?.["article:published_time"],
  }));

  return items;
}
