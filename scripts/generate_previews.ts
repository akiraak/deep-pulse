import { readFileSync, writeFileSync } from "fs";
import { marked } from "marked";

const mdPath = "/home/ubuntu/deep-pulse/output/2026-03-11_hormuz_blockade.md";
const outDir = "/home/ubuntu/deep-pulse/output/design_preview";

const mdContent = readFileSync(mdPath, "utf-8");
const articleHtml = marked(mdContent) as string;

interface Theme {
  filename: string;
  title: string;
  css: string;
}

const themes: Theme[] = [
  {
    filename: "1_minimal.html",
    title: "Minimal",
    css: `
      :root {
        --text: #1a1a1a;
        --bg: #ffffff;
        --muted: #666666;
        --border: #e0e0e0;
        --accent: #0066cc;
      }
      * { margin: 0; padding: 0; box-sizing: border-box; }
      html { font-size: 16px; -webkit-text-size-adjust: 100%; }
      body {
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Hiragino Kaku Gothic ProN", "Hiragino Sans", "Noto Sans JP", "Yu Gothic", sans-serif;
        color: var(--text);
        background: var(--bg);
        line-height: 1.85;
        padding: 2rem 1.5rem;
        max-width: 780px;
        margin: 0 auto;
      }
      h1 {
        font-size: 1.75rem;
        font-weight: 700;
        line-height: 1.3;
        margin-bottom: 0.5rem;
        border-bottom: 2px solid var(--text);
        padding-bottom: 0.75rem;
      }
      h2 {
        font-size: 1.3rem;
        font-weight: 600;
        margin-top: 2.5rem;
        margin-bottom: 0.75rem;
        padding-bottom: 0.4rem;
        border-bottom: 1px solid var(--border);
      }
      h3 {
        font-size: 1.1rem;
        font-weight: 600;
        margin-top: 1.8rem;
        margin-bottom: 0.5rem;
      }
      p { margin-bottom: 1rem; }
      a { color: var(--accent); text-decoration: none; }
      a:hover { text-decoration: underline; }
      blockquote {
        border-left: 3px solid var(--border);
        margin: 1.5rem 0;
        padding: 0.75rem 1.25rem;
        color: var(--muted);
        background: #fafafa;
      }
      blockquote p { margin-bottom: 0.4rem; }
      ul, ol { margin: 0.75rem 0 1rem 1.5rem; }
      li { margin-bottom: 0.4rem; }
      strong { font-weight: 700; }
      hr { border: none; border-top: 1px solid var(--border); margin: 2rem 0; }
      @media (max-width: 600px) {
        body { padding: 1rem; font-size: 0.95rem; }
        h1 { font-size: 1.4rem; }
      }
    `,
  },
  {
    filename: "2_newspaper.html",
    title: "Newspaper",
    css: `
      :root {
        --text: #1c1c1c;
        --bg: #f9f6f0;
        --muted: #555;
        --border: #c0b9a8;
        --accent: #8b0000;
        --rule: #2c2c2c;
      }
      * { margin: 0; padding: 0; box-sizing: border-box; }
      html { font-size: 16px; -webkit-text-size-adjust: 100%; }
      body {
        font-family: Georgia, "Times New Roman", "Noto Serif JP", "Hiragino Mincho ProN", "Yu Mincho", "MS PMincho", serif;
        color: var(--text);
        background: var(--bg);
        line-height: 1.9;
        padding: 2.5rem 1.5rem;
        max-width: 720px;
        margin: 0 auto;
      }
      h1 {
        font-size: 2rem;
        font-weight: 900;
        line-height: 1.2;
        text-align: center;
        margin-bottom: 0.3rem;
        letter-spacing: 0.03em;
      }
      h1 + blockquote {
        text-align: center;
        border: none;
        background: none;
        color: var(--muted);
        font-style: italic;
        padding: 0;
        margin-bottom: 1.5rem;
      }
      h1 + blockquote::after {
        content: "";
        display: block;
        width: 60%;
        margin: 1rem auto 0;
        border-bottom: 3px double var(--rule);
      }
      h2 {
        font-size: 1.25rem;
        font-weight: 700;
        margin-top: 2rem;
        margin-bottom: 0.5rem;
        text-transform: uppercase;
        letter-spacing: 0.05em;
        border-top: 2px solid var(--rule);
        border-bottom: 1px solid var(--rule);
        padding: 0.4rem 0;
      }
      h3 {
        font-size: 1.05rem;
        font-weight: 700;
        margin-top: 1.5rem;
        margin-bottom: 0.5rem;
        font-style: italic;
      }
      p { margin-bottom: 0.9rem; text-align: justify; text-indent: 1em; }
      p:first-child { text-indent: 0; }
      a { color: var(--accent); text-decoration: none; border-bottom: 1px dotted var(--accent); }
      a:hover { border-bottom-style: solid; }
      blockquote {
        margin: 1.5rem 1rem;
        padding: 1rem 1.5rem;
        border-left: 3px solid var(--accent);
        background: rgba(139,0,0,0.04);
        font-style: italic;
        color: var(--muted);
      }
      blockquote p { text-indent: 0; margin-bottom: 0.3rem; }
      ul, ol { margin: 0.75rem 0 1rem 1.5rem; }
      li { margin-bottom: 0.35rem; }
      li p { text-indent: 0; }
      strong { font-weight: 700; }
      hr {
        border: none;
        border-top: 1px solid var(--border);
        margin: 2rem 3rem;
      }
      @media (max-width: 600px) {
        body { padding: 1rem; font-size: 0.93rem; }
        h1 { font-size: 1.5rem; }
        p { text-indent: 0; }
      }
    `,
  },
  {
    filename: "3_dark.html",
    title: "Dark Mode",
    css: `
      :root {
        --bg: #1a1a2e;
        --surface: #22223a;
        --text: #e0e0e0;
        --muted: #9e9e9e;
        --accent: #00d4ff;
        --accent2: #ff6b9d;
        --border: #333355;
      }
      * { margin: 0; padding: 0; box-sizing: border-box; }
      html { font-size: 16px; -webkit-text-size-adjust: 100%; }
      body {
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Hiragino Kaku Gothic ProN", "Hiragino Sans", "Noto Sans JP", "Yu Gothic", sans-serif;
        color: var(--text);
        background: var(--bg);
        line-height: 1.85;
        padding: 2rem 1.5rem;
        max-width: 780px;
        margin: 0 auto;
      }
      h1 {
        font-size: 1.8rem;
        font-weight: 700;
        line-height: 1.3;
        margin-bottom: 0.5rem;
        color: #ffffff;
        border-bottom: 2px solid var(--accent);
        padding-bottom: 0.75rem;
      }
      h2 {
        font-size: 1.3rem;
        font-weight: 600;
        margin-top: 2.5rem;
        margin-bottom: 0.75rem;
        color: var(--accent);
      }
      h3 {
        font-size: 1.1rem;
        font-weight: 600;
        margin-top: 1.8rem;
        margin-bottom: 0.5rem;
        color: var(--accent2);
      }
      p { margin-bottom: 1rem; }
      a { color: var(--accent); text-decoration: none; }
      a:hover { color: var(--accent2); text-decoration: underline; }
      blockquote {
        border-left: 3px solid var(--accent);
        margin: 1.5rem 0;
        padding: 0.75rem 1.25rem;
        color: var(--muted);
        background: var(--surface);
        border-radius: 0 6px 6px 0;
      }
      blockquote p { margin-bottom: 0.4rem; }
      ul, ol { margin: 0.75rem 0 1rem 1.5rem; }
      li { margin-bottom: 0.4rem; }
      strong { font-weight: 700; color: #ffffff; }
      hr { border: none; border-top: 1px solid var(--border); margin: 2rem 0; }
      ::selection { background: var(--accent); color: var(--bg); }
      @media (max-width: 600px) {
        body { padding: 1rem; font-size: 0.95rem; }
        h1 { font-size: 1.4rem; }
      }
    `,
  },
  {
    filename: "4_magazine.html",
    title: "Magazine",
    css: `
      :root {
        --text: #2d2d2d;
        --bg: #f5f5f5;
        --white: #ffffff;
        --accent: #e63946;
        --accent-dark: #c1121f;
        --muted: #6b6b6b;
        --border: #ddd;
      }
      * { margin: 0; padding: 0; box-sizing: border-box; }
      html { font-size: 16px; -webkit-text-size-adjust: 100%; }
      body {
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Hiragino Kaku Gothic ProN", "Hiragino Sans", "Noto Sans JP", "Yu Gothic", sans-serif;
        color: var(--text);
        background: var(--bg);
        line-height: 1.85;
        padding: 0;
        margin: 0;
      }
      body > h1:first-child,
      body > h1:first-of-type {
        font-size: 2.4rem;
        font-weight: 900;
        line-height: 1.15;
        padding: 3rem 2rem 2rem;
        margin: 0;
        background: linear-gradient(135deg, var(--accent), var(--accent-dark));
        color: #ffffff;
        text-align: center;
      }
      .article-wrap {
        max-width: 780px;
        margin: 0 auto;
        padding: 2rem 1.5rem;
      }
      h2 {
        font-size: 1.35rem;
        font-weight: 700;
        margin-top: 2.5rem;
        margin-bottom: 0.75rem;
        padding-left: 0.75rem;
        border-left: 4px solid var(--accent);
        color: var(--text);
      }
      h3 {
        font-size: 1.1rem;
        font-weight: 600;
        margin-top: 1.8rem;
        margin-bottom: 0.5rem;
        color: var(--accent-dark);
      }
      p { margin-bottom: 1rem; }
      a { color: var(--accent); text-decoration: none; font-weight: 500; }
      a:hover { text-decoration: underline; }
      blockquote {
        margin: 1.5rem 0;
        padding: 1.25rem 1.5rem;
        background: var(--white);
        border-radius: 8px;
        box-shadow: 0 2px 12px rgba(0,0,0,0.08);
        border-left: 4px solid var(--accent);
        color: var(--muted);
        font-style: italic;
      }
      blockquote p { margin-bottom: 0.4rem; }
      ul, ol { margin: 0.75rem 0 1rem 1.5rem; }
      li { margin-bottom: 0.4rem; }
      strong { font-weight: 700; }
      hr { border: none; border-top: 1px solid var(--border); margin: 2rem 0; }
      @media (max-width: 600px) {
        body > h1:first-child,
        body > h1:first-of-type { font-size: 1.6rem; padding: 2rem 1rem 1.5rem; }
        .article-wrap { padding: 1rem; }
        body { font-size: 0.95rem; }
      }
    `,
  },
  {
    filename: "5_terminal.html",
    title: "Terminal",
    css: `
      :root {
        --bg: #0d1117;
        --text: #00ff41;
        --dim: #00aa2a;
        --accent: #ffb000;
        --muted: #3a5a3a;
        --border: #1a3a1a;
        --glow: rgba(0, 255, 65, 0.08);
      }
      * { margin: 0; padding: 0; box-sizing: border-box; }
      html { font-size: 15px; -webkit-text-size-adjust: 100%; }
      body {
        font-family: "Courier New", Consolas, "Noto Sans Mono CJK JP", "Source Han Code JP", monospace;
        color: var(--text);
        background: var(--bg);
        line-height: 1.8;
        padding: 2rem 1.5rem;
        max-width: 820px;
        margin: 0 auto;
      }
      /* scanline effect */
      body::after {
        content: "";
        position: fixed;
        top: 0; left: 0;
        width: 100%;
        height: 100%;
        background: repeating-linear-gradient(
          0deg,
          transparent,
          transparent 2px,
          rgba(0,0,0,0.15) 2px,
          rgba(0,0,0,0.15) 4px
        );
        pointer-events: none;
        z-index: 9999;
      }
      h1 {
        font-size: 1.5rem;
        font-weight: 700;
        line-height: 1.3;
        margin-bottom: 0.5rem;
        color: var(--accent);
        text-shadow: 0 0 8px rgba(255, 176, 0, 0.5);
      }
      h1::before { content: "# "; color: var(--dim); }
      h2 {
        font-size: 1.15rem;
        font-weight: 700;
        margin-top: 2.5rem;
        margin-bottom: 0.75rem;
        color: var(--accent);
      }
      h2::before { content: "## "; color: var(--dim); }
      h3 {
        font-size: 1rem;
        font-weight: 700;
        margin-top: 1.8rem;
        margin-bottom: 0.5rem;
        color: var(--text);
      }
      h3::before { content: "### "; color: var(--dim); }
      p { margin-bottom: 1rem; }
      a { color: var(--accent); text-decoration: underline; text-decoration-style: dotted; }
      a:hover { text-shadow: 0 0 6px rgba(255,176,0,0.6); }
      a::before { content: "["; color: var(--dim); }
      a::after { content: "]"; color: var(--dim); }
      blockquote {
        border-left: 2px solid var(--dim);
        margin: 1.5rem 0;
        padding: 0.75rem 1.25rem;
        color: var(--dim);
        background: var(--glow);
      }
      blockquote p { margin-bottom: 0.4rem; }
      blockquote::before { content: "> "; color: var(--muted); }
      ul, ol { margin: 0.75rem 0 1rem 1.5rem; }
      li { margin-bottom: 0.4rem; }
      li::marker { color: var(--dim); }
      strong { font-weight: 700; color: var(--accent); }
      hr { border: none; border-top: 1px dashed var(--dim); margin: 2rem 0; }
      ::selection { background: var(--text); color: var(--bg); }
      @media (max-width: 600px) {
        body { padding: 1rem; font-size: 0.9rem; }
        h1 { font-size: 1.2rem; }
      }
    `,
  },
];

for (const theme of themes) {
  // For the magazine theme, wrap content in a div for layout purposes
  let bodyContent = articleHtml;
  if (theme.filename === "4_magazine.html") {
    // Extract the first h1 and put the rest in a wrapper div
    const h1Match = articleHtml.match(/^(<h1[^>]*>.*?<\/h1>)/s);
    if (h1Match) {
      const h1 = h1Match[1];
      const rest = articleHtml.slice(h1Match[0].length);
      bodyContent = `${h1}\n<div class="article-wrap">${rest}</div>`;
    }
  }

  const html = `<!DOCTYPE html>
<html lang="ja">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>${theme.title} — ホルムズ海峡封鎖</title>
<style>${theme.css}
</style>
</head>
<body>
${bodyContent}
</body>
</html>`;

  writeFileSync(`${outDir}/${theme.filename}`, html, "utf-8");
  console.log(`Written: ${theme.filename}`);
}

console.log("Done. All 5 themes generated.");
