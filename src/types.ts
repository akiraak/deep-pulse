// ニュース検索・記事生成に使用する型定義

export interface SearchConfig {
  // 検索キーワード
  keyword: string;
  // 取得する記事数の上限
  maxResults: number;
}

export interface NewsItem {
  // 記事タイトル
  title: string;
  // 記事URL
  url: string;
  // 記事の概要・スニペット
  snippet: string;
  // 情報源の名前
  source: string;
  // 公開日時
  publishedAt?: string;
}

export interface GeneratedArticle {
  // 記事タイトル
  title: string;
  // Markdown本文
  content: string;
  // 元となったニュースソース
  sources: NewsItem[];
  // 生成日時
  generatedAt: string;
}
