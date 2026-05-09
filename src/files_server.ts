// output 配下の md ファイルビューア専用 HTTP サーバーモジュール

import http from "http";
import { handleFiles } from "./files.js";

const FILES_PORT = parseInt(process.env["FILES_PORT"] ?? "3002", 10);

const server = http.createServer(async (req, res) => {
  const url = new URL(req.url ?? "/", `http://localhost:${FILES_PORT}`);
  const pathname = decodeURIComponent(url.pathname);

  try {
    await handleFiles(req, res, pathname);
  } catch (err) {
    console.error("ファイルビューアサーバーエラー:", err);
    res.writeHead(500, { "Content-Type": "text/html; charset=utf-8" });
    res.end("サーバーエラーが発生しました");
  }
});

export function startFilesServer(): void {
  server.listen(FILES_PORT, () => {
    console.log(`ファイルビューアを起動しました: http://localhost:${FILES_PORT}`);
  });
}
