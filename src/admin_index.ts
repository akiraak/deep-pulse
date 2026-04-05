// 管理画面サーバー エントリーポイント

import { readFileSync } from "fs";
import path from "path";

// .env ファイルを手動で読み込む
try {
  const envPath = path.resolve(process.cwd(), ".env");
  const envContent = readFileSync(envPath, "utf-8");
  for (const line of envContent.split("\n")) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith("#")) continue;
    const eqIndex = trimmed.indexOf("=");
    if (eqIndex === -1) continue;
    const key = trimmed.slice(0, eqIndex).trim();
    const value = trimmed.slice(eqIndex + 1).trim();
    if (!process.env[key]) {
      process.env[key] = value;
    }
  }
} catch {
  // .env が無くても続行
}

import { startAdminServer } from "./admin_server.js";

startAdminServer();
