// HTTP サーバーモジュール
// 生成記事を HTML で配信する

import http from "http";
import { readFile } from "fs/promises";
import { access } from "fs/promises";
import path from "path";
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

      // MP3 音声ファイル配信
      if (filename.endsWith(".mp3")) {
        if (filename.includes("..") || filename.includes("/")) {
          send(res, 400, "不正なリクエストです");
          return;
        }
        const baseName = filename.replace(/\.mp3$/, "");
        const mp3Path = path.join(path.resolve("output"), baseName, filename);
        try {
          const data = await readFile(mp3Path);
          res.writeHead(200, { "Content-Type": "audio/mpeg", "Content-Length": data.length.toString() });
          res.end(data);
        } catch {
          send(res, 404, "音声ファイルが見つかりません");
        }
        return;
      }

      // .html → .md に変換（静的ビルドとの互換性）
      if (filename.endsWith(".html")) {
        filename = filename.replace(/\.html$/, ".md");
      }

      // パストラバーサル防止
      if (filename.includes("..") || filename.includes("/")) {
        send(res, 400, "不正なリクエストです");
        return;
      }

      // MP3 音声ファイルの存在チェック
      const baseName = filename.replace(/\.md$/, "");
      const mp3Name = baseName + ".mp3";
      const mp3Path = path.join(path.resolve("output"), baseName, mp3Name);
      let audioSrc: string | undefined;
      try {
        await access(mp3Path);
        audioSrc = `/articles/${encodeURIComponent(mp3Name)}`;
      } catch {
        // 音声ファイルなし
      }

      const html = await renderArticle(filename, "/", audioSrc);
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
