// 管理画面モジュール
// 記事の一覧・プレビュー・ソース閲覧・削除・ビルド実行を提供する

import http from "http";
import { readFile, readdir, rm, stat } from "fs/promises";
import path from "path";
import { exec } from "child_process";
import { marked } from "marked";
import { listArticles } from "./render.js";

const OUTPUT_DIR = path.resolve("output");
const PLANS_DIR = path.resolve("plans");

// --- CSS ---

const ADMIN_CSS = `
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
  .admin-header .logo span { color: #60a5fa; }
  .admin-header nav a {
    color: #94a3b8; text-decoration: none; font-size: 0.9rem;
    padding: 0.3rem 0.6rem; border-radius: 4px; transition: color 0.15s;
  }
  .admin-header nav a:hover, .admin-header nav a.active { color: #f1f5f9; background: rgba(255,255,255,0.1); }
  .container { max-width: 960px; margin: 2rem auto; padding: 0 1.5rem; }
  h1 { font-size: 1.5rem; font-weight: 700; margin-bottom: 1.2rem; color: #1e293b; }
  .card {
    background: #fff; border-radius: 8px; padding: 1.5rem;
    box-shadow: 0 1px 3px rgba(0,0,0,0.08); margin-bottom: 1.2rem;
  }
  .stats { display: grid; grid-template-columns: repeat(auto-fit, minmax(180px, 1fr)); gap: 1rem; margin-bottom: 1.5rem; }
  .stat-card {
    background: #fff; border-radius: 8px; padding: 1.2rem 1.5rem;
    box-shadow: 0 1px 3px rgba(0,0,0,0.08); text-align: center;
  }
  .stat-card .value { font-size: 2rem; font-weight: 700; color: #1e293b; }
  .stat-card .label { font-size: 0.85rem; color: #64748b; margin-top: 0.2rem; }
  table { width: 100%; border-collapse: collapse; }
  th {
    text-align: left; font-size: 0.8rem; font-weight: 600; color: #64748b;
    text-transform: uppercase; letter-spacing: 0.05em;
    padding: 0.6rem 0.8rem; border-bottom: 2px solid #e2e8f0;
  }
  td { padding: 0.7rem 0.8rem; border-bottom: 1px solid #e2e8f0; font-size: 0.92rem; }
  tr:hover td { background: #f8fafc; }
  a { color: #2563eb; text-decoration: none; }
  a:hover { text-decoration: underline; }
  .btn {
    display: inline-block; padding: 0.4rem 1rem; border-radius: 6px;
    font-size: 0.85rem; font-weight: 500; cursor: pointer;
    text-decoration: none; border: none; transition: background 0.15s;
  }
  .btn-primary { background: #2563eb; color: #fff; }
  .btn-primary:hover { background: #1d4ed8; text-decoration: none; }
  .btn-danger { background: #dc2626; color: #fff; }
  .btn-danger:hover { background: #b91c1c; text-decoration: none; }
  .btn-secondary { background: #e2e8f0; color: #1e293b; }
  .btn-secondary:hover { background: #cbd5e1; text-decoration: none; }
  .actions { display: flex; gap: 0.5rem; }
  .badge {
    display: inline-block; padding: 0.15rem 0.5rem; border-radius: 4px;
    font-size: 0.78rem; font-weight: 500;
  }
  .badge-blue { background: #dbeafe; color: #1e40af; }
  .badge-green { background: #dcfce7; color: #166534; }
  .breadcrumb {
    font-size: 0.85rem; color: #64748b; margin-bottom: 1rem;
  }
  .breadcrumb a { color: #64748b; }
  .breadcrumb a:hover { color: #2563eb; }
  .breadcrumb .sep { margin: 0 0.4em; }
  .source-content {
    background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 6px;
    padding: 1.2rem 1.5rem; font-size: 0.9rem; line-height: 1.8;
    white-space: pre-wrap; word-wrap: break-word; overflow-x: auto;
  }
  .build-output {
    background: #1e293b; color: #e2e8f0; border-radius: 6px;
    padding: 1.2rem 1.5rem; font-family: "SF Mono", "Fira Code", monospace;
    font-size: 0.82rem; line-height: 1.6; white-space: pre-wrap;
    max-height: 400px; overflow-y: auto;
  }
  .alert {
    padding: 1rem 1.2rem; border-radius: 6px; margin-bottom: 1rem;
    font-size: 0.9rem;
  }
  .alert-success { background: #dcfce7; color: #166534; border: 1px solid #bbf7d0; }
  .alert-error { background: #fef2f2; color: #991b1b; border: 1px solid #fecaca; }
  .preview-bar {
    background: #fef3c7; border-bottom: 1px solid #fde68a;
    padding: 0.5rem 1.5rem; font-size: 0.85rem; color: #92400e;
    display: flex; align-items: center; gap: 1rem;
  }
  .preview-bar a { color: #92400e; font-weight: 600; }
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
    .stats { grid-template-columns: 1fr 1fr; }
    .actions { flex-direction: column; }
  }
`;

// --- HTML ヘルパー ---

function adminHtml(title: string, body: string): string {
  return `<!DOCTYPE html>
<html lang="ja">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${escHtml(title)} — deep-pulse 管理画面</title>
  <style>${ADMIN_CSS}</style>
</head>
<body>
<header class="admin-header">
  <a href="/" class="logo">deep-pulse <span>admin</span></a>
  <nav>
    <a href="/">ダッシュボード</a>
    <a href="/articles">記事一覧</a>
    <a href="/plans">プラン</a>
    <a href="http://localhost:3000" target="_blank">公開サイト</a>
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

// --- 記事ディレクトリ解決 ---

/** 記事の格納ディレクトリを返す（サブディレクトリ or トップレベル） */
async function resolveArticleDir(filename: string): Promise<string | null> {
  const baseName = filename.replace(/\.md$/, "");
  // サブディレクトリ形式を先にチェック
  const subDir = path.join(OUTPUT_DIR, baseName);
  try {
    const s = await stat(subDir);
    if (s.isDirectory()) return subDir;
  } catch {
    // フォールバック
  }
  // トップレベル形式: ディレクトリなし
  const topLevel = path.join(OUTPUT_DIR, filename);
  try {
    await stat(topLevel);
    return OUTPUT_DIR;
  } catch {
    return null;
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

// --- ルートハンドラー ---

function send(
  res: http.ServerResponse,
  status: number,
  body: string,
  contentType = "text/html; charset=utf-8",
) {
  res.writeHead(status, { "Content-Type": contentType });
  res.end(body);
}

/** POST ボディを読み取る */
function readBody(req: http.IncomingMessage): Promise<string> {
  return new Promise((resolve) => {
    let data = "";
    req.on("data", (chunk: Buffer) => { data += chunk.toString(); });
    req.on("end", () => resolve(data));
  });
}

/** ダッシュボード */
async function handleDashboard(res: http.ServerResponse): Promise<void> {
  const articles = await listArticles();
  const latestDate = articles.length > 0 ? articles[0].date : "—";

  const body = `
<div class="container">
  <h1>ダッシュボード</h1>
  <div class="stats">
    <div class="stat-card">
      <div class="value">${articles.length}</div>
      <div class="label">記事数</div>
    </div>
    <div class="stat-card">
      <div class="value">${latestDate}</div>
      <div class="label">最新記事</div>
    </div>
  </div>
  <div class="card">
    <h2 style="font-size:1.1rem;margin-bottom:0.8rem;">クイックアクション</h2>
    <div class="actions">
      <a href="/articles" class="btn btn-primary">記事一覧</a>
      <button class="btn btn-secondary" onclick="runBuild()">静的ビルド実行</button>
    </div>
    <div id="build-result" style="margin-top:1rem;display:none;"></div>
  </div>
  <div class="card">
    <h2 style="font-size:1.1rem;margin-bottom:0.8rem;">最近の記事</h2>
    ${
      articles.length === 0
        ? "<p>記事がありません</p>"
        : `<table>
      <thead><tr><th>日付</th><th>タイトル</th><th></th></tr></thead>
      <tbody>
        ${articles
          .slice(0, 5)
          .map(
            (a) => `<tr>
          <td>${escHtml(a.date)}</td>
          <td><a href="/articles/${encodeURIComponent(a.filename)}/preview">${escHtml(a.title)}</a></td>
          <td><a href="/articles/${encodeURIComponent(a.filename)}/sources" class="badge badge-blue">ソース</a></td>
        </tr>`,
          )
          .join("\n")}
      </tbody>
    </table>`
    }
  </div>
</div>
<script>
function runBuild() {
  const el = document.getElementById('build-result');
  el.style.display = 'block';
  el.innerHTML = '<div class="alert" style="background:#f0f9ff;color:#0c4a6e;">ビルド中...</div>';
  fetch('/build', { method: 'POST' })
    .then(r => r.json())
    .then(d => {
      if (d.success) {
        el.innerHTML = '<div class="alert alert-success">ビルド完了</div><div class="build-output">' + escapeHtml(d.output) + '</div>';
      } else {
        el.innerHTML = '<div class="alert alert-error">ビルド失敗</div><div class="build-output">' + escapeHtml(d.output) + '</div>';
      }
    })
    .catch(() => {
      el.innerHTML = '<div class="alert alert-error">通信エラー</div>';
    });
}
function escapeHtml(s) {
  const d = document.createElement('div');
  d.textContent = s;
  return d.innerHTML;
}
</script>`;

  send(res, 200, adminHtml("ダッシュボード", body));
}

/** 記事一覧 */
async function handleArticleList(res: http.ServerResponse): Promise<void> {
  const articles = await listArticles();

  // 各記事のファイルサイズを取得
  const rows: string[] = [];
  for (const a of articles) {
    let size = "—";
    const dir = await resolveArticleDir(a.filename);
    if (dir) {
      try {
        const filePath = path.join(dir, a.filename);
        const s = await stat(filePath);
        size = formatBytes(s.size);
      } catch {
        // ignore
      }
    }

    // ソース数を取得
    let sourceCount = 0;
    if (dir && dir !== OUTPUT_DIR) {
      try {
        const sources = await readdir(path.join(dir, "sources"));
        sourceCount = sources.length;
      } catch {
        // no sources dir
      }
    }

    rows.push(`<tr>
      <td>${escHtml(a.date)}</td>
      <td><a href="/articles/${encodeURIComponent(a.filename)}/preview">${escHtml(a.title)}</a></td>
      <td>${size}</td>
      <td>${sourceCount > 0 ? `<span class="badge badge-blue">${sourceCount} 件</span>` : "—"}</td>
      <td class="actions">
        <a href="/articles/${encodeURIComponent(a.filename)}/preview" class="btn btn-secondary">プレビュー</a>
        <a href="/articles/${encodeURIComponent(a.filename)}/sources" class="btn btn-secondary">ソース</a>
        <button class="btn btn-danger" onclick="confirmDelete('${escHtml(a.filename)}')">削除</button>
      </td>
    </tr>`);
  }

  const body = `
<div class="container">
  <h1>記事一覧（${articles.length} 件）</h1>
  ${
    articles.length === 0
      ? '<div class="card"><p>記事がありません</p></div>'
      : `<div class="card" style="overflow-x:auto;">
    <table>
      <thead><tr><th>日付</th><th>タイトル</th><th>サイズ</th><th>ソース</th><th>操作</th></tr></thead>
      <tbody>${rows.join("\n")}</tbody>
    </table>
  </div>`
  }
</div>
<script>
function confirmDelete(filename) {
  if (confirm('「' + filename + '」を削除しますか？\\nこの操作は元に戻せません。')) {
    fetch('/articles/' + encodeURIComponent(filename) + '/delete', { method: 'POST' })
      .then(r => r.json())
      .then(d => {
        if (d.success) {
          alert('削除しました');
          location.reload();
        } else {
          alert('削除に失敗しました: ' + d.error);
        }
      })
      .catch(() => alert('通信エラー'));
  }
}
</script>`;

  send(res, 200, adminHtml("記事一覧", body));
}

/** 記事プレビュー */
async function handlePreview(
  res: http.ServerResponse,
  filename: string,
): Promise<void> {
  // render.ts の renderArticle を動的に使う
  const { renderArticle } = await import("./render.js");
  const html = await renderArticle(filename, "/");
  if (!html) {
    send(res, 404, adminHtml("エラー", '<div class="container"><div class="alert alert-error">記事が見つかりません</div></div>'));
    return;
  }

  // プレビューバーを挿入
  const previewBar = `<div class="preview-bar">
  <a href="/articles">← 管理画面に戻る</a>
  <span>プレビュー表示: ${escHtml(filename)}</span>
  <a href="/articles/${encodeURIComponent(filename)}/sources">ソース一覧</a>
</div>`;
  const modified = html.replace("<body>", `<body>${previewBar}`);
  send(res, 200, modified);
}

/** ソース一覧 */
async function handleSourceList(
  res: http.ServerResponse,
  filename: string,
): Promise<void> {
  const dir = await resolveArticleDir(filename);
  if (!dir || dir === OUTPUT_DIR) {
    send(
      res,
      200,
      adminHtml(
        "ソース一覧",
        `<div class="container">
          <div class="breadcrumb"><a href="/articles">記事一覧</a><span class="sep">/</span>${escHtml(filename)}<span class="sep">/</span>ソース</div>
          <div class="card"><p>この記事にはソースディレクトリがありません</p></div>
        </div>`,
      ),
    );
    return;
  }

  const sourcesDir = path.join(dir, "sources");
  let sourceFiles: string[] = [];
  try {
    sourceFiles = (await readdir(sourcesDir)).sort();
  } catch {
    // no sources
  }

  const rows: string[] = [];
  for (const sf of sourceFiles) {
    let url = "—";
    let title = sf;
    try {
      const content = await readFile(path.join(sourcesDir, sf), "utf-8");
      const fm = parseFrontmatter(content);
      if (fm.title) title = fm.title;
      if (fm.url) url = `<a href="${escHtml(fm.url)}" target="_blank" rel="noopener">${escHtml(fm.url.length > 60 ? fm.url.slice(0, 57) + "..." : fm.url)}</a>`;
    } catch {
      // ignore
    }
    rows.push(`<tr>
      <td>${escHtml(sf)}</td>
      <td>${escHtml(title)}</td>
      <td>${url}</td>
      <td><a href="/articles/${encodeURIComponent(filename)}/sources/${encodeURIComponent(sf)}" class="btn btn-secondary">表示</a></td>
    </tr>`);
  }

  const body = `
<div class="container">
  <div class="breadcrumb">
    <a href="/articles">記事一覧</a><span class="sep">/</span>
    <a href="/articles/${encodeURIComponent(filename)}/preview">${escHtml(filename)}</a><span class="sep">/</span>
    ソース
  </div>
  <h1>ソース一覧（${sourceFiles.length} 件）</h1>
  ${
    sourceFiles.length === 0
      ? '<div class="card"><p>ソースファイルがありません</p></div>'
      : `<div class="card" style="overflow-x:auto;">
    <table>
      <thead><tr><th>ファイル</th><th>タイトル</th><th>URL</th><th></th></tr></thead>
      <tbody>${rows.join("\n")}</tbody>
    </table>
  </div>`
  }
</div>`;

  send(res, 200, adminHtml("ソース一覧", body));
}

/** 個別ソース表示 */
async function handleSourceDetail(
  res: http.ServerResponse,
  filename: string,
  sourceName: string,
): Promise<void> {
  const dir = await resolveArticleDir(filename);
  if (!dir || dir === OUTPUT_DIR) {
    send(res, 404, adminHtml("エラー", '<div class="container"><div class="alert alert-error">ソースが見つかりません</div></div>'));
    return;
  }

  const sourcePath = path.join(dir, "sources", sourceName);
  let content: string;
  try {
    content = await readFile(sourcePath, "utf-8");
  } catch {
    send(res, 404, adminHtml("エラー", '<div class="container"><div class="alert alert-error">ソースファイルが見つかりません</div></div>'));
    return;
  }

  const fm = parseFrontmatter(content);

  const body = `
<div class="container">
  <div class="breadcrumb">
    <a href="/articles">記事一覧</a><span class="sep">/</span>
    <a href="/articles/${encodeURIComponent(filename)}/preview">${escHtml(filename)}</a><span class="sep">/</span>
    <a href="/articles/${encodeURIComponent(filename)}/sources">ソース</a><span class="sep">/</span>
    ${escHtml(sourceName)}
  </div>
  <h1>${escHtml(fm.title ?? sourceName)}</h1>
  ${fm.url ? `<p style="margin-bottom:1rem;"><a href="${escHtml(fm.url)}" target="_blank" rel="noopener">${escHtml(fm.url)}</a></p>` : ""}
  <div class="card">
    <div class="source-content">${escHtml(content)}</div>
  </div>
</div>`;

  send(res, 200, adminHtml(fm.title ?? sourceName, body));
}

/** 記事削除 */
async function handleDelete(
  req: http.IncomingMessage,
  res: http.ServerResponse,
  filename: string,
): Promise<void> {
  await readBody(req);

  // パストラバーサル防止
  if (filename.includes("..") || filename.includes("/")) {
    send(res, 400, JSON.stringify({ success: false, error: "不正なファイル名" }), "application/json");
    return;
  }

  const dir = await resolveArticleDir(filename);
  if (!dir) {
    send(res, 404, JSON.stringify({ success: false, error: "記事が見つかりません" }), "application/json");
    return;
  }

  try {
    if (dir !== OUTPUT_DIR) {
      // サブディレクトリごと削除
      await rm(dir, { recursive: true });
    } else {
      // トップレベルの .md ファイルのみ削除
      await rm(path.join(OUTPUT_DIR, filename));
      // _plan.md があれば削除
      const planFile = path.join(OUTPUT_DIR, filename.replace(/\.md$/, "_plan.md"));
      try {
        await rm(planFile);
      } catch {
        // plan がなくてもエラーにしない
      }
    }
    send(res, 200, JSON.stringify({ success: true }), "application/json");
  } catch (err) {
    send(res, 500, JSON.stringify({ success: false, error: String(err) }), "application/json");
  }
}

/** プラン一覧 */
async function handlePlanList(res: http.ServerResponse): Promise<void> {
  let files: string[] = [];
  try {
    files = (await readdir(PLANS_DIR))
      .filter((f) => f.endsWith(".md"))
      .sort();
  } catch {
    // plans ディレクトリが無い場合
  }

  const rows: string[] = [];
  for (const f of files) {
    let size = "—";
    let mtime = "—";
    let heading = "—";
    try {
      const s = await stat(path.join(PLANS_DIR, f));
      size = formatBytes(s.size);
      mtime = s.mtime.toISOString().slice(0, 10);
    } catch {
      // ignore
    }
    try {
      const content = await readFile(path.join(PLANS_DIR, f), "utf-8");
      const h1Match = content.match(/^#\s+(.+)$/m);
      if (h1Match) heading = h1Match[1];
    } catch {
      // ignore
    }
    rows.push(`<tr>
      <td><a href="/plans/${encodeURIComponent(f)}">${escHtml(f)}</a></td>
      <td>${escHtml(heading)}</td>
      <td>${size}</td>
      <td>${mtime}</td>
      <td><a href="/plans/${encodeURIComponent(f)}" class="btn btn-secondary">表示</a></td>
    </tr>`);
  }

  const body = `
<div class="container">
  <h1>プラン一覧（${files.length} 件）</h1>
  ${
    files.length === 0
      ? '<div class="card"><p>プランファイルがありません</p></div>'
      : `<div class="card" style="overflow-x:auto;">
    <table>
      <thead><tr><th>ファイル</th><th>内容</th><th>サイズ</th><th>更新日</th><th></th></tr></thead>
      <tbody>${rows.join("\n")}</tbody>
    </table>
  </div>`
  }
</div>`;

  send(res, 200, adminHtml("プラン一覧", body));
}

/** プラン詳細 */
async function handlePlanDetail(
  res: http.ServerResponse,
  filename: string,
): Promise<void> {
  const filePath = path.join(PLANS_DIR, filename);
  let content: string;
  try {
    content = await readFile(filePath, "utf-8");
  } catch {
    send(res, 404, adminHtml("エラー", '<div class="container"><div class="alert alert-error">プランファイルが見つかりません</div></div>'));
    return;
  }

  const renderedHtml = await marked.parse(content);

  const body = `
<div class="container">
  <div class="breadcrumb">
    <a href="/plans">プラン一覧</a><span class="sep">/</span>
    ${escHtml(filename)}
  </div>
  <div class="card">
    <div class="markdown-body">${renderedHtml}</div>
  </div>
</div>`;

  send(res, 200, adminHtml(filename, body));
}

/** 静的ビルド実行 */
async function handleBuild(
  req: http.IncomingMessage,
  res: http.ServerResponse,
): Promise<void> {
  await readBody(req);

  exec("npm run build:site", { cwd: path.resolve(".") }, (err, stdout, stderr) => {
    const output = (stdout + "\n" + stderr).trim();
    if (err) {
      send(res, 200, JSON.stringify({ success: false, output }), "application/json");
    } else {
      send(res, 200, JSON.stringify({ success: true, output }), "application/json");
    }
  });
}

// --- メインハンドラー ---

export async function handleAdmin(
  req: http.IncomingMessage,
  res: http.ServerResponse,
  pathname: string,
): Promise<void> {
  const method = req.method ?? "GET";

  // POST /build
  if (method === "POST" && pathname === "/build") {
    await handleBuild(req, res);
    return;
  }

  // POST /articles/:filename/delete
  const deleteMatch = pathname.match(/^\/articles\/([^/]+)\/delete$/);
  if (method === "POST" && deleteMatch) {
    await handleDelete(req, res, decodeURIComponent(deleteMatch[1]));
    return;
  }

  // GET routes
  if (method !== "GET") {
    send(res, 405, "Method Not Allowed");
    return;
  }

  // ダッシュボード
  if (pathname === "/" || pathname === "") {
    await handleDashboard(res);
    return;
  }

  // /plans/:filename
  const planDetailMatch = pathname.match(/^\/plans\/([^/]+)$/);
  if (planDetailMatch) {
    const filename = decodeURIComponent(planDetailMatch[1]);
    if (filename.includes("..")) {
      send(res, 400, "不正なリクエストです");
      return;
    }
    await handlePlanDetail(res, filename);
    return;
  }

  // /plans
  if (pathname === "/plans" || pathname === "/plans/") {
    await handlePlanList(res);
    return;
  }

  // /articles
  if (pathname === "/articles" || pathname === "/articles/") {
    await handleArticleList(res);
    return;
  }

  // /articles/:filename/preview
  const previewMatch = pathname.match(/^\/articles\/([^/]+)\/preview$/);
  if (previewMatch) {
    const filename = decodeURIComponent(previewMatch[1]);
    if (filename.includes("..")) {
      send(res, 400, "不正なリクエストです");
      return;
    }
    await handlePreview(res, filename);
    return;
  }

  // /articles/:filename/sources/:source
  const sourceDetailMatch = pathname.match(/^\/articles\/([^/]+)\/sources\/([^/]+)$/);
  if (sourceDetailMatch) {
    const filename = decodeURIComponent(sourceDetailMatch[1]);
    const sourceName = decodeURIComponent(sourceDetailMatch[2]);
    if (filename.includes("..") || sourceName.includes("..")) {
      send(res, 400, "不正なリクエストです");
      return;
    }
    await handleSourceDetail(res, filename, sourceName);
    return;
  }

  // /articles/:filename/sources
  const sourcesMatch = pathname.match(/^\/articles\/([^/]+)\/sources$/);
  if (sourcesMatch) {
    const filename = decodeURIComponent(sourcesMatch[1]);
    if (filename.includes("..")) {
      send(res, 400, "不正なリクエストです");
      return;
    }
    await handleSourceList(res, filename);
    return;
  }

  send(res, 404, adminHtml("404", '<div class="container"><div class="alert alert-error">ページが見つかりません</div></div>'));
}
