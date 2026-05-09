// output 配下の md ファイルビューア
// 記事本体・_plan.md・_note.md・sources/*.md をすべて等しく閲覧できる読み取り専用ビューア

import http from "http";
import { readFile, readdir, stat } from "fs/promises";
import path from "path";
import { Marked } from "marked";

const OUTPUT_DIR = path.resolve("output");
const MAX_WALK_DEPTH = 4;

// 専用 Marked インスタンス（render.ts のグローバル副作用を踏まないため）
const localMarked = new Marked();

// --- CSS ---
// admin.ts の ADMIN_CSS をベースに、ヘッダーのアクセントカラーだけ緑へ差し替え

const FILES_CSS = `
  * { margin: 0; padding: 0; box-sizing: border-box; }
  html { font-size: 16px; -webkit-text-size-adjust: 100%; }
  body {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Hiragino Sans", "Noto Sans JP", sans-serif;
    color: #1c1c1c; background: #f5f7fa; line-height: 1.7;
    padding: 0; margin: 0;
  }
  .admin-header {
    background: #1e293b; color: #f1f5f9; padding: 0.8rem 2rem;
    display: flex; align-items: center; gap: 2rem;
  }
  .admin-header .logo {
    font-size: 1.2rem; font-weight: 700; color: #f1f5f9;
    text-decoration: none; letter-spacing: 0.04em;
  }
  .admin-header .logo span { color: #10b981; }
  .admin-header nav a {
    color: #94a3b8; text-decoration: none; font-size: 0.9rem;
    padding: 0.3rem 0.6rem; border-radius: 4px; transition: color 0.15s;
  }
  .admin-header nav a:hover, .admin-header nav a.active { color: #f1f5f9; background: rgba(255,255,255,0.1); }
  .container { max-width: 1100px; margin: 2rem auto; padding: 0 1.5rem; }
  h1 { font-size: 1.5rem; font-weight: 700; margin-bottom: 1.2rem; color: #1e293b; }
  .card {
    background: #fff; border-radius: 8px; padding: 1.5rem;
    box-shadow: 0 1px 3px rgba(0,0,0,0.08); margin-bottom: 1.2rem;
  }
  table { width: 100%; border-collapse: collapse; }
  th {
    text-align: left; font-size: 0.8rem; font-weight: 600; color: #64748b;
    text-transform: uppercase; letter-spacing: 0.05em;
    padding: 0.6rem 0.8rem; border-bottom: 2px solid #e2e8f0;
  }
  td { padding: 0.7rem 0.8rem; border-bottom: 1px solid #e2e8f0; font-size: 0.92rem; }
  tr:hover td { background: #f8fafc; }
  td.path { font-family: "SF Mono", "Fira Code", monospace; font-size: 0.85rem; word-break: break-all; }
  td.heading { color: #334155; }
  td.muted { color: #94a3b8; }
  a { color: #2563eb; text-decoration: none; }
  a:hover { text-decoration: underline; }
  .btn {
    display: inline-block; padding: 0.4rem 1rem; border-radius: 6px;
    font-size: 0.85rem; font-weight: 500; cursor: pointer;
    text-decoration: none; border: none; transition: background 0.15s;
  }
  .btn-primary { background: #2563eb; color: #fff; }
  .btn-primary:hover { background: #1d4ed8; text-decoration: none; }
  .btn-secondary { background: #e2e8f0; color: #1e293b; }
  .btn-secondary:hover { background: #cbd5e1; text-decoration: none; }
  .btn-active { background: #10b981; color: #fff; }
  .btn-active:hover { background: #059669; text-decoration: none; }
  .badge {
    display: inline-block; padding: 0.15rem 0.55rem; border-radius: 4px;
    font-size: 0.78rem; font-weight: 500;
  }
  .badge-article { background: #dbeafe; color: #1e40af; }
  .badge-plan { background: #fef3c7; color: #92400e; }
  .badge-note { background: #f3e8ff; color: #6b21a8; }
  .badge-source { background: #dcfce7; color: #166534; }
  .badge-other { background: #e2e8f0; color: #475569; }
  .breadcrumb {
    font-size: 0.85rem; color: #64748b; margin-bottom: 1rem;
  }
  .breadcrumb a { color: #64748b; }
  .breadcrumb a:hover { color: #2563eb; }
  .breadcrumb .sep { margin: 0 0.4em; }
  .file-meta {
    display: flex; flex-wrap: wrap; gap: 0.6rem 1.2rem; font-size: 0.85rem;
    color: #64748b; margin-bottom: 1rem;
  }
  .file-meta strong { color: #334155; font-weight: 500; }
  .tabs {
    display: flex; gap: 0.5rem; margin-bottom: 1rem;
    border-bottom: 1px solid #e2e8f0; padding-bottom: 0.5rem;
  }
  .frontmatter-box {
    background: #ecfdf5; border: 1px solid #a7f3d0; border-radius: 6px;
    padding: 1rem 1.2rem; margin-bottom: 1rem; font-size: 0.9rem;
  }
  .frontmatter-box dt { font-weight: 600; color: #065f46; font-size: 0.78rem; text-transform: uppercase; letter-spacing: 0.05em; margin-top: 0.4rem; }
  .frontmatter-box dt:first-child { margin-top: 0; }
  .frontmatter-box dd { color: #1c1c1c; word-break: break-all; }
  .raw-content {
    background: #1e293b; color: #e2e8f0; border-radius: 6px;
    padding: 1.2rem 1.5rem; font-family: "SF Mono", "Fira Code", monospace;
    font-size: 0.82rem; line-height: 1.6; white-space: pre-wrap; word-wrap: break-word;
    overflow-x: auto;
  }
  .alert {
    padding: 1rem 1.2rem; border-radius: 6px; margin-bottom: 1rem;
    font-size: 0.9rem;
  }
  .alert-error { background: #fef2f2; color: #991b1b; border: 1px solid #fecaca; }
  .markdown-body h1 { font-size: 1.4rem; margin: 1.5rem 0 0.8rem; border-bottom: 1px solid #e2e8f0; padding-bottom: 0.3rem; }
  .markdown-body h2 { font-size: 1.2rem; margin: 1.3rem 0 0.6rem; }
  .markdown-body h3 { font-size: 1.05rem; margin: 1rem 0 0.5rem; }
  .markdown-body p { margin: 0.5rem 0; }
  .markdown-body ul, .markdown-body ol { margin: 0.5rem 0; padding-left: 1.5rem; }
  .markdown-body code { background: #f1f5f9; padding: 0.15rem 0.4rem; border-radius: 3px; font-size: 0.88rem; }
  .markdown-body pre { background: #1e293b; color: #e2e8f0; padding: 1rem; border-radius: 6px; overflow-x: auto; }
  .markdown-body pre code { background: none; padding: 0; color: inherit; }
  .markdown-body table { border-collapse: collapse; margin: 0.8rem 0; }
  .markdown-body th, .markdown-body td { border: 1px solid #e2e8f0; padding: 0.4rem 0.8rem; }
  .markdown-body blockquote { border-left: 3px solid #e2e8f0; padding-left: 1rem; color: #64748b; margin: 0.5rem 0; }
  @media (max-width: 600px) {
    .admin-header { padding: 0.6rem 1rem; gap: 1rem; }
    .container { padding: 0 1rem; }
    td.path { font-size: 0.75rem; }
  }
`;

// --- HTML ヘルパー ---

function filesHtml(title: string, body: string): string {
  return `<!DOCTYPE html>
<html lang="ja">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${escHtml(title)} — deep-pulse files</title>
  <style>${FILES_CSS}</style>
</head>
<body>
<header class="admin-header">
  <a href="/" class="logo">deep-pulse <span>files</span></a>
  <nav>
    <a href="/">一覧</a>
    <a href="http://localhost:3000" target="_blank">公開サイト</a>
    <a href="http://localhost:3001" target="_blank">管理画面</a>
  </nav>
</header>
${body}
</body>
</html>`;
}

function escHtml(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function formatBytes(bytes: number): string {
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
}

function formatMtime(mtimeMs: number): string {
  const d = new Date(mtimeMs);
  const yyyy = d.getFullYear();
  const mm = String(d.getMonth() + 1).padStart(2, "0");
  const dd = String(d.getDate()).padStart(2, "0");
  const hh = String(d.getHours()).padStart(2, "0");
  const mi = String(d.getMinutes()).padStart(2, "0");
  return `${yyyy}-${mm}-${dd} ${hh}:${mi}`;
}

// --- 種別判定 ---

type FileKind = "article" | "plan" | "note" | "source" | "other";

function classify(relPath: string): FileKind {
  const normalized = relPath.replace(/\\/g, "/");
  if (normalized.includes("/sources/")) return "source";
  if (normalized.endsWith("_plan.md")) return "plan";
  if (normalized.endsWith("_note.md")) return "note";
  if (normalized.endsWith(".md")) return "article";
  return "other";
}

function kindLabel(kind: FileKind): string {
  switch (kind) {
    case "article":
      return "記事";
    case "plan":
      return "plan";
    case "note":
      return "note";
    case "source":
      return "source";
    case "other":
      return "その他";
  }
}

// --- YAML フロントマター解析 ---

function parseFrontmatter(content: string): { url?: string; title?: string } {
  const match = content.match(/^---\n([\s\S]*?)\n---/);
  if (!match) return {};
  const yaml = match[1];
  const url = yaml.match(/^url:\s*(.+)$/m)?.[1]?.trim();
  const title = yaml.match(/^title:\s*(.+)$/m)?.[1]?.trim();
  return { url, title };
}

// --- output/ 走査 ---

interface FileEntry {
  relPath: string;
  size: number;
  mtimeMs: number;
  kind: FileKind;
}

async function walkOutput(): Promise<FileEntry[]> {
  const result: FileEntry[] = [];

  async function walk(dir: string, depth: number): Promise<void> {
    if (depth > MAX_WALK_DEPTH) return;
    let entries;
    try {
      entries = await readdir(dir, { withFileTypes: true });
    } catch {
      return;
    }
    for (const entry of entries) {
      const full = path.join(dir, entry.name);
      if (entry.isDirectory()) {
        await walk(full, depth + 1);
      } else if (entry.isFile() && entry.name.endsWith(".md")) {
        try {
          const s = await stat(full);
          const relPath = path.relative(OUTPUT_DIR, full);
          result.push({
            relPath,
            size: s.size,
            mtimeMs: s.mtimeMs,
            kind: classify(relPath),
          });
        } catch {
          // ignore
        }
      }
    }
  }

  await walk(OUTPUT_DIR, 0);
  result.sort((a, b) => b.mtimeMs - a.mtimeMs);
  return result;
}

// --- 先頭 H1 抽出 ---

function extractH1(content: string): string | null {
  // フロントマターを除去してから探す
  const stripped = content.replace(/^---\n[\s\S]*?\n---\n?/, "");
  const m = stripped.match(/^#\s+(.+)$/m);
  return m ? m[1].trim() : null;
}

// --- パストラバーサル検証 ---

function resolveSafePath(query: string): string | null {
  if (!query.endsWith(".md")) return null;
  const resolved = path.resolve(OUTPUT_DIR, query);
  const rel = path.relative(OUTPUT_DIR, resolved);
  if (rel.startsWith("..") || path.isAbsolute(rel)) return null;
  return resolved;
}

// --- ハンドラ ---

function send(
  res: http.ServerResponse,
  status: number,
  body: string,
  contentType = "text/html; charset=utf-8",
): void {
  res.writeHead(status, { "Content-Type": contentType });
  res.end(body);
}

async function handleFileList(res: http.ServerResponse): Promise<void> {
  const entries = await walkOutput();

  const rows: string[] = [];
  for (const e of entries) {
    let h1: string | null = null;
    try {
      const content = await readFile(path.join(OUTPUT_DIR, e.relPath), "utf-8");
      // フロントマター付きソースの場合は title を優先
      if (e.kind === "source") {
        const fm = parseFrontmatter(content);
        h1 = fm.title ?? extractH1(content);
      } else {
        h1 = extractH1(content);
      }
    } catch {
      // ignore
    }

    const viewHref = `/view?path=${encodeURIComponent(e.relPath)}`;
    rows.push(`<tr>
      <td class="path">${escHtml(e.relPath)}</td>
      <td><span class="badge badge-${e.kind}">${escHtml(kindLabel(e.kind))}</span></td>
      <td class="${h1 ? "heading" : "muted"}">${h1 ? escHtml(h1) : "—"}</td>
      <td>${formatBytes(e.size)}</td>
      <td>${formatMtime(e.mtimeMs)}</td>
      <td><a href="${viewHref}" class="btn btn-secondary">表示</a></td>
    </tr>`);
  }

  const body = `
<div class="container">
  <h1>output ファイル一覧（${entries.length} 件）</h1>
  ${
    entries.length === 0
      ? '<div class="card"><p>md ファイルがありません</p></div>'
      : `<div class="card" style="overflow-x:auto;">
    <table>
      <thead>
        <tr>
          <th>パス</th>
          <th>種別</th>
          <th>H1 見出し</th>
          <th>サイズ</th>
          <th>更新日</th>
          <th></th>
        </tr>
      </thead>
      <tbody>${rows.join("\n")}</tbody>
    </table>
  </div>`
  }
</div>`;

  send(res, 200, filesHtml("ファイル一覧", body));
}

async function handleFileDetail(
  res: http.ServerResponse,
  query: string,
  mode: "rendered" | "raw",
): Promise<void> {
  const safePath = resolveSafePath(query);
  if (!safePath) {
    send(
      res,
      400,
      filesHtml(
        "エラー",
        '<div class="container"><div class="alert alert-error">不正なパスです</div></div>',
      ),
    );
    return;
  }

  let content: string;
  let s;
  try {
    content = await readFile(safePath, "utf-8");
    s = await stat(safePath);
  } catch {
    send(
      res,
      404,
      filesHtml(
        "エラー",
        '<div class="container"><div class="alert alert-error">ファイルが見つかりません</div></div>',
      ),
    );
    return;
  }

  const relPath = path.relative(OUTPUT_DIR, safePath);
  const kind = classify(relPath);
  const fm = kind === "source" ? parseFrontmatter(content) : {};

  const renderedBlock =
    mode === "rendered"
      ? `<div class="markdown-body">${await localMarked.parse(content)}</div>`
      : `<pre class="raw-content">${escHtml(content)}</pre>`;

  const renderedTabClass = mode === "rendered" ? "btn btn-active" : "btn btn-secondary";
  const rawTabClass = mode === "raw" ? "btn btn-active" : "btn btn-secondary";

  const fmBlock =
    fm.url || fm.title
      ? `<div class="frontmatter-box">
        <dl>
          ${fm.title ? `<dt>title</dt><dd>${escHtml(fm.title)}</dd>` : ""}
          ${fm.url ? `<dt>url</dt><dd><a href="${escHtml(fm.url)}" target="_blank" rel="noopener">${escHtml(fm.url)}</a></dd>` : ""}
        </dl>
      </div>`
      : "";

  const body = `
<div class="container">
  <div class="breadcrumb">
    <a href="/">一覧</a><span class="sep">/</span>${escHtml(relPath)}
  </div>
  <h1>${escHtml(path.basename(relPath))}</h1>
  <div class="file-meta">
    <span><strong>パス:</strong> ${escHtml(relPath)}</span>
    <span><strong>サイズ:</strong> ${formatBytes(s.size)}</span>
    <span><strong>更新日:</strong> ${formatMtime(s.mtimeMs)}</span>
    <span><span class="badge badge-${kind}">${escHtml(kindLabel(kind))}</span></span>
  </div>
  ${fmBlock}
  <div class="card">
    <div class="tabs">
      <a href="/view?path=${encodeURIComponent(relPath)}&mode=rendered" class="${renderedTabClass}">レンダリング表示</a>
      <a href="/view?path=${encodeURIComponent(relPath)}&mode=raw" class="${rawTabClass}">生テキスト表示</a>
    </div>
    ${renderedBlock}
  </div>
</div>`;

  send(res, 200, filesHtml(path.basename(relPath), body));
}

// --- メインハンドラ ---

export async function handleFiles(
  req: http.IncomingMessage,
  res: http.ServerResponse,
  pathname: string,
): Promise<void> {
  const method = req.method ?? "GET";

  if (method !== "GET") {
    send(res, 405, "Method Not Allowed");
    return;
  }

  if (pathname === "/health") {
    send(res, 200, "OK", "text/plain; charset=utf-8");
    return;
  }

  if (pathname === "/" || pathname === "") {
    await handleFileList(res);
    return;
  }

  if (pathname === "/view") {
    const url = new URL(req.url ?? "/", "http://localhost");
    const queryPath = url.searchParams.get("path");
    if (!queryPath) {
      send(
        res,
        400,
        filesHtml(
          "エラー",
          '<div class="container"><div class="alert alert-error">path クエリが必要です</div></div>',
        ),
      );
      return;
    }
    const modeParam = url.searchParams.get("mode");
    const mode: "rendered" | "raw" = modeParam === "raw" ? "raw" : "rendered";
    await handleFileDetail(res, queryPath, mode);
    return;
  }

  send(
    res,
    404,
    filesHtml(
      "404",
      '<div class="container"><div class="alert alert-error">ページが見つかりません</div></div>',
    ),
  );
}
