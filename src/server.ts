// HTTP サーバーモジュール
// 生成記事を HTML で配信する

import http from "http";
import { renderIndex, renderArticle } from "./render.js";

const PORT = parseInt(process.env["PORT"] ?? "3000", 10);

function send(
  res: http.ServerResponse,
  status: number,
  body: string,
  contentType = "text/html; charset=utf-8",
) {
  res.writeHead(status, { "Content-Type": contentType });
  res.end(body);
}

const server = http.createServer(async (req, res) => {
  const url = new URL(req.url ?? "/", `http://localhost:${PORT}`);
  const pathname = decodeURIComponent(url.pathname);

  try {
    // 記事一覧
    if (pathname === "/") {
      const html = await renderIndex();
      send(res, 200, html);
      return;
    }

    // 個別記事: /articles/<filename>
    const articleMatch = pathname.match(/^\/articles\/(.+)$/);
    if (articleMatch) {
      let filename = articleMatch[1];

      // .html → .md に変換（静的ビルドとの互換性）
      if (filename.endsWith(".html")) {
        filename = filename.replace(/\.html$/, ".md");
      }

      // パストラバーサル防止
      if (filename.includes("..") || filename.includes("/")) {
        send(res, 400, "不正なリクエストです");
        return;
      }

      const html = await renderArticle(filename);
      if (!html) {
        send(res, 404, "記事が見つかりません");
        return;
      }
      send(res, 200, html);
      return;
    }

    send(res, 404, "ページが見つかりません");
  } catch (err) {
    console.error("サーバーエラー:", err);
    send(res, 500, "サーバーエラーが発生しました");
  }
});

export function startServer(): void {
  server.listen(PORT, () => {
    console.log(`サーバーを起動しました: http://localhost:${PORT}`);
  });
}
