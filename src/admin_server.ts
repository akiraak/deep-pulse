// 管理画面専用 HTTP サーバーモジュール

import http from "http";
import { handleAdmin } from "./admin.js";

const ADMIN_PORT = parseInt(process.env["ADMIN_PORT"] ?? "3001", 10);

const server = http.createServer(async (req, res) => {
  const url = new URL(req.url ?? "/", `http://localhost:${ADMIN_PORT}`);
  const pathname = decodeURIComponent(url.pathname);

  try {
    await handleAdmin(req, res, pathname);
  } catch (err) {
    console.error("管理画面サーバーエラー:", err);
    res.writeHead(500, { "Content-Type": "text/html; charset=utf-8" });
    res.end("サーバーエラーが発生しました");
  }
});

export function startAdminServer(): void {
  server.listen(ADMIN_PORT, () => {
    console.log(`管理画面サーバーを起動しました: http://localhost:${ADMIN_PORT}`);
  });
}
