#!/usr/bin/env bash
set -e
cd "$(dirname "$0")"

PORT="${ADMIN_PORT:-3001}"
OLD_PID=$(lsof -ti :"$PORT" 2>/dev/null || true)
if [ -n "$OLD_PID" ]; then
  echo "ポート ${PORT} を使用中のプロセス (PID: ${OLD_PID}) を停止します"
  kill "$OLD_PID" 2>/dev/null || true
  sleep 0.5
fi

exec npx tsx src/admin_index.ts
