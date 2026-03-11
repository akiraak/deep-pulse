// 記事分析・生成モジュール
// Claude API を使用してニュースを深く考察し記事を生成する

import Anthropic from "@anthropic-ai/sdk";
import type { NewsItem, GeneratedArticle } from "./types.js";

const client = new Anthropic();

const SYSTEM_PROMPT = `あなたは優秀なジャーナリスト兼アナリストです。
提供されたニュース情報を基に、以下の観点で深い考察を加えた記事を日本語で執筆してください。

- 事実の整理と背景の説明
- 複数の視点からの分析
- 社会的・経済的影響の考察
- 今後の展望

記事はMarkdown形式で出力してください。見出し、箇条書き、引用を適切に使用してください。
記事の末尾に「参考ソース」セクションを含めてください。`;

export async function generateArticle(
  keyword: string,
  newsItems: NewsItem[]
): Promise<GeneratedArticle> {
  if (newsItems.length === 0) {
    throw new Error("分析対象のニュースがありません");
  }

  const newsContext = newsItems
    .map(
      (item, i) =>
        `【ニュース${i + 1}】\nタイトル: ${item.title}\nURL: ${item.url}\n概要: ${item.snippet}\n出典: ${item.source}${item.publishedAt ? `\n公開日: ${item.publishedAt}` : ""}`
    )
    .join("\n\n");

  const userPrompt = `以下のニュース情報を基に、「${keyword}」についての深い考察記事を執筆してください。

${newsContext}`;

  const message = await client.messages.create({
    model: "claude-sonnet-4-20250514",
    max_tokens: 4096,
    messages: [{ role: "user", content: userPrompt }],
    system: SYSTEM_PROMPT,
  });

  const content = message.content
    .filter((block) => block.type === "text")
    .map((block) => block.text)
    .join("\n");

  return {
    title: `${keyword}に関する深層分析`,
    content,
    sources: newsItems,
    generatedAt: new Date().toISOString(),
  };
}
