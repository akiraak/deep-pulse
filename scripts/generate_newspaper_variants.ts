import { readFileSync, writeFileSync, mkdirSync, existsSync } from "fs";

// ---------------------------------------------------------------------------
// 1. Read the body content from 2_newspaper.html (lines 100-241)
// ---------------------------------------------------------------------------
const sourcePath =
  "/home/ubuntu/deep-pulse/output/design_preview/2_newspaper.html";
const outDir =
  "/home/ubuntu/deep-pulse/output/design_preview/newspaper";

if (!existsSync(outDir)) {
  mkdirSync(outDir, { recursive: true });
}

const sourceHtml = readFileSync(sourcePath, "utf-8");

// Extract everything between <body> and </body>
const bodyMatch = sourceHtml.match(/<body>([\s\S]*?)<\/body>/);
if (!bodyMatch) {
  throw new Error("Could not find <body>...</body> in source HTML");
}
const bodyContent = bodyMatch[1].trim();

// ---------------------------------------------------------------------------
// 2. Define 20 newspaper-style CSS variations
// ---------------------------------------------------------------------------

interface Variant {
  number: string;    // "01" .. "20"
  name: string;
  css: string;
}

const serifJP = `Georgia, "Times New Roman", "Noto Serif JP", "Hiragino Mincho ProN", "Yu Mincho", "MS PMincho", serif`;
const sansJP = `-apple-system, BlinkMacSystemFont, "Segoe UI", "Noto Sans JP", "Hiragino Kaku Gothic ProN", "Hiragino Sans", "Yu Gothic", "Meiryo", sans-serif`;
const gothicJP = `"Noto Sans JP", "Hiragino Kaku Gothic ProN", "Hiragino Sans", "Yu Gothic", "Meiryo", sans-serif`;
const minchoJP = `"Noto Serif JP", "Hiragino Mincho ProN", "Yu Mincho", "MS PMincho", Georgia, serif`;

const variants: Variant[] = [
  // -----------------------------------------------------------------------
  // 01 — Classic Broadsheet
  // -----------------------------------------------------------------------
  {
    number: "01",
    name: "Classic Broadsheet",
    css: `
      * { margin: 0; padding: 0; box-sizing: border-box; }
      html { font-size: 16px; -webkit-text-size-adjust: 100%; }
      body {
        font-family: ${serifJP};
        color: #1c1c1c;
        background: #faf8f0;
        line-height: 1.9;
        padding: 2.5rem 2rem;
        max-width: 900px;
        margin: 0 auto;
      }
      h1 {
        font-size: 2.4rem;
        font-weight: 900;
        line-height: 1.15;
        text-align: center;
        margin-bottom: 0.3rem;
        letter-spacing: 0.04em;
        font-family: ${serifJP};
      }
      h1 + blockquote {
        text-align: center; border: none; background: none;
        color: #777; font-style: italic; padding: 0; margin-bottom: 1.5rem;
      }
      h1 + blockquote::after {
        content: ""; display: block; width: 60%; margin: 1rem auto 0;
        border-bottom: 3px double #2c2c2c;
      }
      h2 {
        font-size: 1.3rem; font-weight: 700; margin-top: 2rem; margin-bottom: 0.5rem;
        text-transform: uppercase; letter-spacing: 0.06em;
        border-top: 2px solid #2c2c2c; border-bottom: 1px solid #2c2c2c;
        padding: 0.4rem 0;
      }
      h3 { font-size: 1.05rem; font-weight: 700; margin-top: 1.5rem; margin-bottom: 0.5rem; font-style: italic; }
      p { margin-bottom: 0.9rem; text-align: justify; text-indent: 1em;
          column-rule: 1px solid #c0b9a8; }
      p:first-child { text-indent: 0; }
      a { color: #8b0000; text-decoration: none; border-bottom: 1px dotted #8b0000; }
      a:hover { border-bottom-style: solid; }
      blockquote {
        margin: 1.5rem 1rem; padding: 1rem 1.5rem;
        border-left: 3px solid #8b0000; background: rgba(139,0,0,0.04);
        font-style: italic; color: #555;
      }
      blockquote p { text-indent: 0; margin-bottom: 0.3rem; }
      ul, ol { margin: 0.75rem 0 1rem 1.5rem; }
      li { margin-bottom: 0.35rem; }
      li p { text-indent: 0; }
      strong { font-weight: 700; }
      hr { border: none; border-top: 1px solid #c0b9a8; margin: 2rem 3rem; }
      @media (max-width: 600px) {
        body { padding: 1rem; font-size: 0.93rem; max-width: 100%; }
        h1 { font-size: 1.6rem; }
        p { text-indent: 0; }
      }
    `,
  },

  // -----------------------------------------------------------------------
  // 02 — Compact Tabloid
  // -----------------------------------------------------------------------
  {
    number: "02",
    name: "Compact Tabloid",
    css: `
      * { margin: 0; padding: 0; box-sizing: border-box; }
      html { font-size: 15px; -webkit-text-size-adjust: 100%; }
      body {
        font-family: ${sansJP};
        color: #111; background: #ffffff;
        line-height: 1.75; padding: 1.5rem 1rem;
        max-width: 600px; margin: 0 auto;
        border: 3px solid #111;
      }
      h1 {
        font-size: 2rem; font-weight: 900; line-height: 1.1;
        text-align: center; margin-bottom: 0.2rem;
        text-transform: uppercase; letter-spacing: 0.02em;
        font-family: ${gothicJP};
        border-bottom: 4px solid #111; padding-bottom: 0.5rem;
      }
      h1 + blockquote {
        text-align: center; border: none; background: none;
        color: #666; font-style: normal; font-weight: 700;
        padding: 0.2rem 0; margin-bottom: 1rem;
        border-bottom: 2px solid #111;
      }
      h1 + blockquote::after { display: none; }
      h2 {
        font-size: 1.15rem; font-weight: 800; margin-top: 1.8rem; margin-bottom: 0.4rem;
        background: #111; color: #fff; padding: 0.3rem 0.6rem;
        text-transform: uppercase; letter-spacing: 0.04em;
      }
      h3 { font-size: 1rem; font-weight: 700; margin-top: 1.3rem; margin-bottom: 0.4rem; color: #333; }
      p { margin-bottom: 0.8rem; text-align: justify; }
      a { color: #111; text-decoration: none; border-bottom: 2px solid #111; font-weight: 600; }
      a:hover { background: #111; color: #fff; }
      blockquote {
        margin: 1.2rem 0; padding: 0.8rem 1rem;
        border-left: 4px solid #111; background: #f5f5f5;
        font-style: italic; color: #444;
      }
      blockquote p { margin-bottom: 0.3rem; }
      ul, ol { margin: 0.6rem 0 0.8rem 1.2rem; }
      li { margin-bottom: 0.3rem; }
      strong { font-weight: 800; }
      hr { border: none; border-top: 2px solid #111; margin: 1.5rem 0; }
      @media (max-width: 600px) {
        body { padding: 0.8rem; font-size: 0.9rem; border-width: 2px; }
        h1 { font-size: 1.4rem; }
      }
    `,
  },

  // -----------------------------------------------------------------------
  // 03 — Sepia Vintage
  // -----------------------------------------------------------------------
  {
    number: "03",
    name: "Sepia Vintage",
    css: `
      * { margin: 0; padding: 0; box-sizing: border-box; }
      html { font-size: 16px; -webkit-text-size-adjust: 100%; }
      body {
        font-family: ${serifJP};
        color: #3c2f1e; background: #f4eed8;
        line-height: 1.9; padding: 2.5rem 1.5rem;
        max-width: 750px; margin: 0 auto;
        border: 3px double #8b7355;
      }
      h1 {
        font-size: 2.2rem; font-weight: 900; line-height: 1.2;
        text-align: center; margin-bottom: 0.3rem;
        letter-spacing: 0.05em; color: #2a1f0e;
        font-family: ${minchoJP};
      }
      h1 + blockquote {
        text-align: center; border: none; background: none;
        color: #7a6a55; font-style: italic; padding: 0; margin-bottom: 1.5rem;
      }
      h1 + blockquote::after {
        content: ""; display: block; width: 50%; margin: 0.8rem auto 0;
        border-bottom: 2px double #8b7355;
      }
      h2 {
        font-size: 1.2rem; font-weight: 700; margin-top: 2rem; margin-bottom: 0.5rem;
        letter-spacing: 0.06em; color: #2a1f0e;
        border-top: 1px solid #8b7355; border-bottom: 1px solid #8b7355;
        padding: 0.35rem 0;
      }
      h3 { font-size: 1.05rem; font-weight: 700; margin-top: 1.5rem; margin-bottom: 0.5rem;
           font-style: italic; color: #4a3c28; }
      p { margin-bottom: 0.9rem; text-align: justify; text-indent: 1em; }
      p:first-child { text-indent: 0; }
      /* Drop cap for first paragraph after h2 */
      h2 + p::first-letter {
        font-size: 3.2em; float: left; line-height: 0.8;
        padding-right: 0.1em; padding-top: 0.05em;
        color: #2a1f0e; font-weight: 700;
      }
      a { color: #6b4226; text-decoration: none; border-bottom: 1px dotted #6b4226; }
      a:hover { color: #3c2f1e; border-bottom-style: solid; }
      blockquote {
        margin: 1.5rem 1rem; padding: 1rem 1.5rem;
        border-left: 3px solid #8b7355; background: rgba(139,115,85,0.08);
        font-style: italic; color: #5a4d3a;
      }
      blockquote p { text-indent: 0; margin-bottom: 0.3rem; }
      ul, ol { margin: 0.75rem 0 1rem 1.5rem; }
      li { margin-bottom: 0.35rem; }
      li p { text-indent: 0; }
      strong { font-weight: 700; color: #2a1f0e; }
      hr { border: none; border-top: 1px dashed #8b7355; margin: 2rem 3rem; }
      @media (max-width: 600px) {
        body { padding: 1rem; font-size: 0.93rem; border-width: 2px; }
        h1 { font-size: 1.5rem; }
        p { text-indent: 0; }
        h2 + p::first-letter { font-size: 1em; float: none; padding: 0; }
      }
    `,
  },

  // -----------------------------------------------------------------------
  // 04 — Black & White
  // -----------------------------------------------------------------------
  {
    number: "04",
    name: "Black & White",
    css: `
      * { margin: 0; padding: 0; box-sizing: border-box; }
      html { font-size: 16px; -webkit-text-size-adjust: 100%; }
      body {
        font-family: ${serifJP};
        color: #000; background: #fff;
        line-height: 1.85; padding: 2rem 1.5rem;
        max-width: 760px; margin: 0 auto;
      }
      h1 {
        font-size: 2.2rem; font-weight: 900; line-height: 1.15;
        text-align: center; margin-bottom: 0.3rem;
        border-top: 4px solid #000; border-bottom: 4px solid #000;
        padding: 0.5rem 0;
      }
      h1 + blockquote {
        text-align: center; border: none; background: none;
        color: #333; font-style: italic; padding: 0; margin-bottom: 1.5rem;
      }
      h1 + blockquote::after {
        content: ""; display: block; width: 40%; margin: 0.8rem auto 0;
        border-bottom: 2px solid #000;
      }
      h2 {
        font-size: 1.25rem; font-weight: 800; margin-top: 2rem; margin-bottom: 0.5rem;
        text-transform: uppercase; letter-spacing: 0.05em;
        border-top: 3px solid #000; border-bottom: 1px solid #000;
        padding: 0.4rem 0;
      }
      h3 { font-size: 1.05rem; font-weight: 700; margin-top: 1.5rem; margin-bottom: 0.5rem; }
      p { margin-bottom: 0.9rem; text-align: justify; text-indent: 1em; }
      p:first-child { text-indent: 0; }
      a { color: #000; text-decoration: underline; font-weight: 600; }
      a:hover { background: #000; color: #fff; text-decoration: none; }
      blockquote {
        margin: 1.5rem 1rem; padding: 1rem 1.5rem;
        border-left: 4px solid #000; background: #f5f5f5;
        font-style: italic; color: #333;
      }
      blockquote p { text-indent: 0; margin-bottom: 0.3rem; }
      ul, ol { margin: 0.75rem 0 1rem 1.5rem; }
      li { margin-bottom: 0.35rem; }
      li p { text-indent: 0; }
      strong { font-weight: 900; }
      hr { border: none; border-top: 2px solid #000; margin: 2rem 3rem; }
      @media (max-width: 600px) {
        body { padding: 1rem; font-size: 0.93rem; }
        h1 { font-size: 1.5rem; }
        p { text-indent: 0; }
      }
    `,
  },

  // -----------------------------------------------------------------------
  // 05 — Financial Times
  // -----------------------------------------------------------------------
  {
    number: "05",
    name: "Financial Times",
    css: `
      * { margin: 0; padding: 0; box-sizing: border-box; }
      html { font-size: 16px; -webkit-text-size-adjust: 100%; }
      body {
        font-family: ${sansJP};
        color: #333; background: #fff1e5;
        line-height: 1.8; padding: 2rem 1.5rem;
        max-width: 780px; margin: 0 auto;
      }
      h1 {
        font-size: 2rem; font-weight: 700; line-height: 1.2;
        margin-bottom: 0.3rem; color: #1a1a2e;
        font-family: ${sansJP};
      }
      h1 + blockquote {
        border: none; background: none;
        color: #66605c; font-style: normal; padding: 0;
        margin-bottom: 1.5rem; font-size: 0.9rem;
        border-bottom: 1px solid #ccc1b7; padding-bottom: 0.8rem;
      }
      h1 + blockquote::after { display: none; }
      h2 {
        font-size: 1.2rem; font-weight: 700; margin-top: 2rem; margin-bottom: 0.5rem;
        color: #1a1a2e; border-bottom: 1px solid #ccc1b7; padding-bottom: 0.3rem;
      }
      h3 { font-size: 1.05rem; font-weight: 600; margin-top: 1.5rem; margin-bottom: 0.5rem; color: #1a1a2e; }
      p { margin-bottom: 0.9rem; }
      a { color: #1a1a2e; text-decoration: none; border-bottom: 1px solid #9e7e5e; }
      a:hover { color: #990f3d; border-bottom-color: #990f3d; }
      blockquote {
        margin: 1.5rem 0; padding: 1rem 1.5rem;
        border-left: 3px solid #990f3d; background: rgba(153,15,61,0.04);
        font-style: italic; color: #66605c;
      }
      blockquote p { margin-bottom: 0.3rem; }
      ul, ol { margin: 0.75rem 0 1rem 1.5rem; }
      li { margin-bottom: 0.35rem; }
      strong { font-weight: 700; color: #1a1a2e; }
      hr { border: none; border-top: 1px solid #ccc1b7; margin: 2rem 0; }
      @media (max-width: 600px) {
        body { padding: 1rem; font-size: 0.93rem; }
        h1 { font-size: 1.5rem; }
      }
    `,
  },

  // -----------------------------------------------------------------------
  // 06 — Le Monde
  // -----------------------------------------------------------------------
  {
    number: "06",
    name: "Le Monde",
    css: `
      * { margin: 0; padding: 0; box-sizing: border-box; }
      html { font-size: 16px; -webkit-text-size-adjust: 100%; }
      body {
        font-family: ${serifJP};
        color: #222; background: #ffffff;
        line-height: 1.85; padding: 2.5rem 2rem;
        max-width: 780px; margin: 0 auto;
      }
      h1 {
        font-size: 2rem; font-weight: 700; line-height: 1.25;
        margin-bottom: 0.3rem; color: #003366;
        font-family: ${serifJP};
        letter-spacing: 0.02em;
      }
      h1 + blockquote {
        border: none; background: none;
        color: #777; font-style: italic; padding: 0;
        margin-bottom: 2rem;
      }
      h1 + blockquote::after {
        content: ""; display: block; width: 80px; margin: 1rem auto 0;
        border-bottom: 2px solid #003366;
      }
      h2 {
        font-size: 1.2rem; font-weight: 600; margin-top: 2.5rem; margin-bottom: 0.6rem;
        color: #003366; border-bottom: none; padding-bottom: 0.2rem;
        text-decoration: underline; text-underline-offset: 4px;
        text-decoration-thickness: 1px; text-decoration-color: #003366;
      }
      h3 { font-size: 1.05rem; font-weight: 600; margin-top: 1.5rem; margin-bottom: 0.5rem;
           color: #444; font-style: italic; }
      p { margin-bottom: 1rem; text-align: justify; text-indent: 1.5em; }
      p:first-child { text-indent: 0; }
      a { color: #003366; text-decoration: none; border-bottom: 1px solid #003366; }
      a:hover { color: #0055aa; }
      blockquote {
        margin: 1.5rem 2rem; padding: 1rem 1.5rem;
        border-left: 2px solid #003366; background: #f8f9fa;
        font-style: italic; color: #555;
      }
      blockquote p { text-indent: 0; margin-bottom: 0.3rem; }
      ul, ol { margin: 0.75rem 0 1rem 1.5rem; }
      li { margin-bottom: 0.35rem; }
      li p { text-indent: 0; }
      strong { font-weight: 700; }
      hr { border: none; border-top: 1px solid #ddd; margin: 2rem 4rem; }
      @media (max-width: 600px) {
        body { padding: 1rem; font-size: 0.93rem; }
        h1 { font-size: 1.5rem; }
        p { text-indent: 0; }
      }
    `,
  },

  // -----------------------------------------------------------------------
  // 07 — Asahi Style
  // -----------------------------------------------------------------------
  {
    number: "07",
    name: "Asahi Style",
    css: `
      * { margin: 0; padding: 0; box-sizing: border-box; }
      html { font-size: 16px; -webkit-text-size-adjust: 100%; }
      body {
        font-family: ${minchoJP};
        color: #1a1a1a; background: #fafafa;
        line-height: 1.9; padding: 2rem 1.5rem;
        max-width: 760px; margin: 0 auto;
      }
      h1 {
        font-size: 2rem; font-weight: 900; line-height: 1.2;
        margin-bottom: 0.3rem;
        font-family: ${gothicJP};
        border-left: 5px solid #c41e3a; padding-left: 0.8rem;
      }
      h1 + blockquote {
        border: none; background: none;
        color: #888; font-style: normal; padding: 0 0 0 0.8rem;
        margin-bottom: 1.2rem; font-size: 0.9rem;
        border-left: 5px solid transparent;
      }
      h1 + blockquote::after {
        content: ""; display: block; width: 100%;
        margin: 0.8rem 0 0; border-bottom: 1px solid #ddd;
      }
      h2 {
        font-size: 1.2rem; font-weight: 700; margin-top: 2rem; margin-bottom: 0.5rem;
        font-family: ${gothicJP};
        color: #c41e3a;
        border-bottom: 2px solid #c41e3a; padding-bottom: 0.3rem;
      }
      h3 { font-size: 1.05rem; font-weight: 700; margin-top: 1.5rem; margin-bottom: 0.5rem;
           font-family: ${gothicJP}; color: #333; }
      p { margin-bottom: 0.9rem; text-align: justify; text-indent: 1em; }
      p:first-child { text-indent: 0; }
      a { color: #c41e3a; text-decoration: none; }
      a:hover { text-decoration: underline; }
      blockquote {
        margin: 1.5rem 0; padding: 1rem 1.5rem;
        border-left: 3px solid #c41e3a; background: rgba(196,30,58,0.03);
        font-style: normal; color: #555;
      }
      blockquote p { text-indent: 0; margin-bottom: 0.3rem; }
      ul, ol { margin: 0.75rem 0 1rem 1.5rem; }
      li { margin-bottom: 0.35rem; }
      li p { text-indent: 0; }
      strong { font-weight: 700; }
      hr { border: none; border-top: 1px solid #ddd; margin: 2rem 2rem; }
      @media (max-width: 600px) {
        body { padding: 1rem; font-size: 0.93rem; }
        h1 { font-size: 1.5rem; }
        p { text-indent: 0; }
      }
    `,
  },

  // -----------------------------------------------------------------------
  // 08 — Two Column
  // -----------------------------------------------------------------------
  {
    number: "08",
    name: "Two Column",
    css: `
      * { margin: 0; padding: 0; box-sizing: border-box; }
      html { font-size: 15px; -webkit-text-size-adjust: 100%; }
      body {
        font-family: ${serifJP};
        color: #1c1c1c; background: #f9f6f0;
        line-height: 1.8; padding: 2rem 1.5rem;
        max-width: 900px; margin: 0 auto;
        columns: 2; column-gap: 2.5rem; column-rule: 1px solid #c0b9a8;
      }
      h1 {
        font-size: 2rem; font-weight: 900; line-height: 1.15;
        text-align: center; margin-bottom: 0.3rem;
        column-span: all;
      }
      h1 + blockquote {
        text-align: center; border: none; background: none;
        color: #777; font-style: italic; padding: 0;
        margin-bottom: 1.5rem; column-span: all;
      }
      h1 + blockquote::after {
        content: ""; display: block; width: 60%; margin: 1rem auto 0;
        border-bottom: 3px double #2c2c2c;
      }
      h2 {
        font-size: 1.15rem; font-weight: 700; margin-top: 1.5rem; margin-bottom: 0.4rem;
        text-transform: uppercase; letter-spacing: 0.05em;
        border-top: 2px solid #2c2c2c; border-bottom: 1px solid #2c2c2c;
        padding: 0.3rem 0; break-after: avoid;
      }
      h3 { font-size: 1rem; font-weight: 700; margin-top: 1.2rem; margin-bottom: 0.4rem;
           font-style: italic; break-after: avoid; }
      p { margin-bottom: 0.8rem; text-align: justify; text-indent: 1em; }
      p:first-child { text-indent: 0; }
      a { color: #8b0000; text-decoration: none; border-bottom: 1px dotted #8b0000; }
      a:hover { border-bottom-style: solid; }
      blockquote {
        margin: 1rem 0.5rem; padding: 0.8rem 1rem;
        border-left: 3px solid #8b0000; background: rgba(139,0,0,0.04);
        font-style: italic; color: #555;
      }
      blockquote p { text-indent: 0; margin-bottom: 0.3rem; }
      ul, ol { margin: 0.6rem 0 0.8rem 1.2rem; }
      li { margin-bottom: 0.3rem; }
      li p { text-indent: 0; }
      strong { font-weight: 700; }
      hr { border: none; border-top: 1px solid #c0b9a8; margin: 1.5rem 1rem; column-span: all; }
      @media (max-width: 700px) {
        body { columns: 1; padding: 1rem; font-size: 0.93rem; }
        h1 { font-size: 1.5rem; }
        p { text-indent: 0; }
      }
    `,
  },

  // -----------------------------------------------------------------------
  // 09 — Large Type Edition
  // -----------------------------------------------------------------------
  {
    number: "09",
    name: "Large Type Edition",
    css: `
      * { margin: 0; padding: 0; box-sizing: border-box; }
      html { font-size: 18px; -webkit-text-size-adjust: 100%; }
      body {
        font-family: ${serifJP};
        color: #222; background: #fffef8;
        line-height: 2.1; padding: 3rem 2rem;
        max-width: 800px; margin: 0 auto;
      }
      h1 {
        font-size: 2.4rem; font-weight: 800; line-height: 1.25;
        text-align: center; margin-bottom: 0.5rem;
        letter-spacing: 0.03em;
      }
      h1 + blockquote {
        text-align: center; border: none; background: none;
        color: #666; font-style: italic; padding: 0; margin-bottom: 2rem;
        font-size: 1.1rem;
      }
      h1 + blockquote::after {
        content: ""; display: block; width: 50%; margin: 1.2rem auto 0;
        border-bottom: 2px solid #333;
      }
      h2 {
        font-size: 1.5rem; font-weight: 700; margin-top: 2.5rem; margin-bottom: 0.8rem;
        border-top: 2px solid #333; padding-top: 0.5rem;
      }
      h3 { font-size: 1.2rem; font-weight: 700; margin-top: 2rem; margin-bottom: 0.6rem;
           color: #444; }
      p { margin-bottom: 1.2rem; text-align: justify; }
      a { color: #0055aa; text-decoration: underline; text-underline-offset: 3px; }
      a:hover { color: #003366; }
      blockquote {
        margin: 2rem 1rem; padding: 1.2rem 1.8rem;
        border-left: 4px solid #0055aa; background: #f5f5f0;
        font-style: italic; color: #555; font-size: 1.05rem;
      }
      blockquote p { margin-bottom: 0.4rem; }
      ul, ol { margin: 1rem 0 1.2rem 2rem; }
      li { margin-bottom: 0.5rem; }
      strong { font-weight: 800; }
      hr { border: none; border-top: 1px solid #ccc; margin: 2.5rem 3rem; }
      @media (max-width: 600px) {
        html { font-size: 16px; }
        body { padding: 1rem; }
        h1 { font-size: 1.8rem; }
      }
    `,
  },

  // -----------------------------------------------------------------------
  // 10 — Ink on Paper
  // -----------------------------------------------------------------------
  {
    number: "10",
    name: "Ink on Paper",
    css: `
      * { margin: 0; padding: 0; box-sizing: border-box; }
      html { font-size: 16px; -webkit-text-size-adjust: 100%; }
      body {
        font-family: ${serifJP};
        color: #111; background: #f5f0e8;
        line-height: 1.9; padding: 2.5rem 1.5rem;
        max-width: 740px; margin: 0 auto;
        text-shadow: 0 0 0.3px rgba(0,0,0,0.3);
      }
      h1 {
        font-size: 2.2rem; font-weight: 900; line-height: 1.15;
        text-align: center; margin-bottom: 0.3rem;
        letter-spacing: 0.04em;
        text-shadow: 0.5px 0.5px 0 rgba(0,0,0,0.15);
      }
      h1 + blockquote {
        text-align: center; border: none; background: none;
        color: #555; font-style: italic; padding: 0;
        margin-bottom: 1.5rem;
      }
      h1 + blockquote::after {
        content: ""; display: block; width: 55%; margin: 1rem auto 0;
        border-bottom: 2px solid #333;
      }
      h2 {
        font-size: 1.25rem; font-weight: 700; margin-top: 2rem; margin-bottom: 0.5rem;
        text-transform: uppercase; letter-spacing: 0.05em;
        border-top: 2px solid #222; border-bottom: 1px solid #222;
        padding: 0.4rem 0;
        text-shadow: 0.5px 0.5px 0 rgba(0,0,0,0.12);
      }
      h3 { font-size: 1.05rem; font-weight: 700; margin-top: 1.5rem; margin-bottom: 0.5rem;
           font-style: italic; }
      p { margin-bottom: 0.9rem; text-align: justify; text-indent: 1em; }
      p:first-child { text-indent: 0; }
      a { color: #2a1f0a; text-decoration: none; border-bottom: 1px solid #2a1f0a; }
      a:hover { background: rgba(0,0,0,0.06); }
      blockquote {
        margin: 1.5rem 1rem; padding: 1rem 1.5rem;
        border-left: 3px solid #444; background: rgba(0,0,0,0.03);
        font-style: italic; color: #444;
      }
      blockquote p { text-indent: 0; margin-bottom: 0.3rem; }
      ul, ol { margin: 0.75rem 0 1rem 1.5rem; }
      li { margin-bottom: 0.35rem; }
      li p { text-indent: 0; }
      strong { font-weight: 800; }
      hr { border: none; border-top: 1px solid #999; margin: 2rem 3rem; }
      @media (max-width: 600px) {
        body { padding: 1rem; font-size: 0.93rem; }
        h1 { font-size: 1.5rem; }
        p { text-indent: 0; }
      }
    `,
  },

  // -----------------------------------------------------------------------
  // 11 — Evening Edition
  // -----------------------------------------------------------------------
  {
    number: "11",
    name: "Evening Edition",
    css: `
      * { margin: 0; padding: 0; box-sizing: border-box; }
      html { font-size: 16px; -webkit-text-size-adjust: 100%; }
      body {
        font-family: ${serifJP};
        color: #e8dcc8; background: #0a1628;
        line-height: 1.9; padding: 2.5rem 1.5rem;
        max-width: 760px; margin: 0 auto;
      }
      h1 {
        font-size: 2.2rem; font-weight: 900; line-height: 1.15;
        text-align: center; margin-bottom: 0.3rem;
        color: #c9a84c; letter-spacing: 0.04em;
      }
      h1 + blockquote {
        text-align: center; border: none; background: none;
        color: #8a7d6a; font-style: italic; padding: 0;
        margin-bottom: 1.5rem;
      }
      h1 + blockquote::after {
        content: ""; display: block; width: 50%; margin: 1rem auto 0;
        border-bottom: 2px solid #c9a84c;
      }
      h2 {
        font-size: 1.25rem; font-weight: 700; margin-top: 2rem; margin-bottom: 0.5rem;
        color: #c9a84c; text-transform: uppercase; letter-spacing: 0.05em;
        border-top: 1px solid #c9a84c; border-bottom: 1px solid rgba(201,168,76,0.3);
        padding: 0.4rem 0;
      }
      h3 { font-size: 1.05rem; font-weight: 700; margin-top: 1.5rem; margin-bottom: 0.5rem;
           color: #d4c097; font-style: italic; }
      p { margin-bottom: 0.9rem; text-align: justify; text-indent: 1em; }
      p:first-child { text-indent: 0; }
      a { color: #c9a84c; text-decoration: none; border-bottom: 1px dotted #c9a84c; }
      a:hover { color: #e6c972; border-bottom-style: solid; }
      blockquote {
        margin: 1.5rem 1rem; padding: 1rem 1.5rem;
        border-left: 3px solid #c9a84c; background: rgba(201,168,76,0.06);
        font-style: italic; color: #a99a7e;
      }
      blockquote p { text-indent: 0; margin-bottom: 0.3rem; }
      ul, ol { margin: 0.75rem 0 1rem 1.5rem; }
      li { margin-bottom: 0.35rem; }
      li p { text-indent: 0; }
      strong { font-weight: 700; color: #fff; }
      hr { border: none; border-top: 1px solid rgba(201,168,76,0.3); margin: 2rem 3rem; }
      @media (max-width: 600px) {
        body { padding: 1rem; font-size: 0.93rem; }
        h1 { font-size: 1.5rem; }
        p { text-indent: 0; }
      }
    `,
  },

  // -----------------------------------------------------------------------
  // 12 — Modern Minimal
  // -----------------------------------------------------------------------
  {
    number: "12",
    name: "Modern Minimal",
    css: `
      * { margin: 0; padding: 0; box-sizing: border-box; }
      html { font-size: 16px; -webkit-text-size-adjust: 100%; }
      body {
        font-family: ${sansJP};
        color: #333; background: #fff;
        line-height: 1.85; padding: 3rem 2rem;
        max-width: 720px; margin: 0 auto;
      }
      h1 {
        font-size: 1.8rem; font-weight: 600; line-height: 1.3;
        margin-bottom: 0.3rem; color: #111;
        font-family: ${sansJP};
      }
      h1 + blockquote {
        border: none; background: none;
        color: #999; font-style: normal; padding: 0; margin-bottom: 2rem;
        font-size: 0.9rem;
      }
      h1 + blockquote::after {
        content: ""; display: block; width: 40px; margin: 1rem 0 0;
        border-bottom: 1px solid #ddd;
      }
      h2 {
        font-size: 1.15rem; font-weight: 600; margin-top: 2.5rem; margin-bottom: 0.6rem;
        color: #555; border-bottom: 1px solid #eee; padding-bottom: 0.4rem;
      }
      h3 { font-size: 1rem; font-weight: 600; margin-top: 1.8rem; margin-bottom: 0.5rem; color: #666; }
      p { margin-bottom: 1rem; color: #444; }
      a { color: #555; text-decoration: none; border-bottom: 1px solid #ccc; }
      a:hover { color: #111; border-bottom-color: #111; }
      blockquote {
        margin: 1.5rem 0; padding: 1rem 1.5rem;
        border-left: 2px solid #ddd; background: none;
        font-style: italic; color: #888;
      }
      blockquote p { margin-bottom: 0.3rem; }
      ul, ol { margin: 0.75rem 0 1rem 1.5rem; }
      li { margin-bottom: 0.35rem; color: #444; }
      strong { font-weight: 600; color: #222; }
      hr { border: none; border-top: 1px solid #eee; margin: 2.5rem 0; }
      @media (max-width: 600px) {
        body { padding: 1.5rem 1rem; font-size: 0.93rem; }
        h1 { font-size: 1.4rem; }
      }
    `,
  },

  // -----------------------------------------------------------------------
  // 13 — Red Banner
  // -----------------------------------------------------------------------
  {
    number: "13",
    name: "Red Banner",
    css: `
      * { margin: 0; padding: 0; box-sizing: border-box; }
      html { font-size: 16px; -webkit-text-size-adjust: 100%; }
      body {
        font-family: ${serifJP};
        color: #1c1c1c; background: #fff;
        line-height: 1.85; padding: 0;
        max-width: 780px; margin: 0 auto;
        border-top: 6px solid #cc0000;
      }
      body > h1:first-child {
        font-size: 2.2rem; font-weight: 900; line-height: 1.15;
        text-align: center; margin: 0; padding: 1.5rem 1.5rem 0.8rem;
        letter-spacing: 0.04em; color: #1a1a1a;
        background: linear-gradient(to bottom, #fff5f5, #fff);
      }
      h1 + blockquote {
        text-align: center; border: none; background: none;
        color: #cc0000; font-style: normal; font-weight: 700;
        padding: 0 1.5rem; margin-bottom: 0;
        font-size: 0.9rem;
      }
      h1 + blockquote::after {
        content: ""; display: block; width: 100%;
        margin: 0.8rem 0 0; border-bottom: 3px double #cc0000;
      }
      h2 {
        font-size: 1.25rem; font-weight: 700;
        margin: 2rem 1.5rem 0.5rem; padding: 0.4rem 0;
        text-transform: uppercase; letter-spacing: 0.05em;
        border-top: 2px solid #1a1a1a; border-bottom: 1px solid #ddd;
      }
      h3 { font-size: 1.05rem; font-weight: 700;
           margin: 1.5rem 1.5rem 0.5rem; font-style: italic; }
      p { margin: 0 1.5rem 0.9rem; text-align: justify; text-indent: 1em; }
      p:first-child { text-indent: 0; }
      a { color: #cc0000; text-decoration: none; border-bottom: 1px dotted #cc0000; }
      a:hover { border-bottom-style: solid; }
      blockquote {
        margin: 1.5rem 2rem; padding: 1rem 1.5rem;
        border-left: 3px solid #cc0000; background: #fff5f5;
        font-style: italic; color: #555;
      }
      blockquote p { text-indent: 0; margin-left: 0; margin-right: 0; margin-bottom: 0.3rem; }
      ul, ol { margin: 0.75rem 1.5rem 1rem 3rem; }
      li { margin-bottom: 0.35rem; }
      li p { text-indent: 0; margin-left: 0; margin-right: 0; }
      strong { font-weight: 700; }
      hr { border: none; border-top: 1px solid #ddd; margin: 2rem 3rem; }
      @media (max-width: 600px) {
        body { font-size: 0.93rem; }
        body > h1:first-child { font-size: 1.5rem; padding: 1rem 1rem 0.5rem; }
        p, h2, h3 { margin-left: 1rem; margin-right: 1rem; }
        ul, ol { margin-left: 2rem; margin-right: 1rem; }
        p { text-indent: 0; }
      }
    `,
  },

  // -----------------------------------------------------------------------
  // 14 — Gazette
  // -----------------------------------------------------------------------
  {
    number: "14",
    name: "Gazette",
    css: `
      * { margin: 0; padding: 0; box-sizing: border-box; }
      html { font-size: 16px; -webkit-text-size-adjust: 100%; }
      body {
        font-family: ${serifJP};
        color: #222; background: #faf9f5;
        line-height: 1.9; padding: 2.5rem 1.5rem;
        max-width: 760px; margin: 0 auto;
      }
      h1 {
        font-size: 2rem; font-weight: 900; line-height: 1.2;
        text-align: center; margin-bottom: 0.3rem;
        letter-spacing: 0.12em; text-transform: uppercase;
        border-top: 4px double #222; border-bottom: 4px double #222;
        padding: 0.6rem 0;
      }
      h1 + blockquote {
        text-align: center; border: none; background: none;
        color: #777; font-style: italic; padding: 0;
        margin-bottom: 1.8rem; letter-spacing: 0.08em;
      }
      h1 + blockquote::after {
        content: ""; display: block; width: 30%; margin: 0.8rem auto 0;
        border-bottom: 1px solid #999;
      }
      h2 {
        font-size: 1.2rem; font-weight: 700; margin-top: 2rem; margin-bottom: 0.5rem;
        letter-spacing: 0.08em; text-transform: uppercase;
        border-top: 1px solid #999; border-bottom: 1px solid #999;
        padding: 0.35rem 0; text-align: center;
      }
      h3 { font-size: 1.05rem; font-weight: 700; margin-top: 1.5rem; margin-bottom: 0.5rem;
           font-style: italic; letter-spacing: 0.04em; }
      p { margin-bottom: 0.9rem; text-align: justify; text-indent: 1em; }
      p:first-child { text-indent: 0; }
      a { color: #555; text-decoration: none; border-bottom: 1px dotted #555; }
      a:hover { color: #000; border-bottom-style: solid; }
      blockquote {
        margin: 1.5rem 2rem; padding: 1rem 1.5rem;
        border-left: 2px solid #999; border-right: 2px solid #999;
        background: none; font-style: italic; color: #555;
        text-align: center;
      }
      blockquote p { text-indent: 0; margin-bottom: 0.3rem; }
      ul, ol { margin: 0.75rem 0 1rem 1.5rem; }
      li { margin-bottom: 0.35rem; }
      li p { text-indent: 0; }
      strong { font-weight: 700; }
      hr { border: none; border-top: 1px solid #bbb; margin: 2rem 4rem; }
      @media (max-width: 600px) {
        body { padding: 1rem; font-size: 0.93rem; }
        h1 { font-size: 1.4rem; letter-spacing: 0.06em; }
        p { text-indent: 0; }
      }
    `,
  },

  // -----------------------------------------------------------------------
  // 15 — Wire Service
  // -----------------------------------------------------------------------
  {
    number: "15",
    name: "Wire Service",
    css: `
      * { margin: 0; padding: 0; box-sizing: border-box; }
      html { font-size: 15px; -webkit-text-size-adjust: 100%; }
      body {
        font-family: ${sansJP};
        color: #222; background: #fff;
        line-height: 1.6; padding: 1.5rem 1rem;
        max-width: 700px; margin: 0 auto;
      }
      h1 {
        font-size: 1.6rem; font-weight: 800; line-height: 1.2;
        margin-bottom: 0.2rem;
        font-family: "Courier New", Consolas, "Noto Sans Mono CJK JP", monospace, ${sansJP};
        text-transform: uppercase;
      }
      h1 + blockquote {
        border: none; background: none;
        color: #333; font-style: normal; font-weight: 700;
        padding: 0; margin-bottom: 1rem;
        font-family: "Courier New", Consolas, monospace;
        font-size: 0.85rem; text-transform: uppercase;
        letter-spacing: 0.05em;
      }
      h1 + blockquote::after {
        content: ""; display: block; width: 100%;
        margin: 0.5rem 0 0; border-bottom: 2px solid #222;
      }
      h2 {
        font-size: 1.1rem; font-weight: 800; margin-top: 1.5rem; margin-bottom: 0.3rem;
        text-transform: uppercase; letter-spacing: 0.03em;
        font-family: "Courier New", Consolas, monospace, ${sansJP};
        border-top: 1px solid #ddd; padding-top: 0.4rem;
      }
      h3 { font-size: 1rem; font-weight: 700; margin-top: 1.2rem; margin-bottom: 0.3rem;
           font-family: "Courier New", Consolas, monospace, ${sansJP}; }
      p { margin-bottom: 0.7rem; }
      a { color: #0055aa; text-decoration: underline; }
      a:hover { color: #003366; }
      blockquote {
        margin: 1rem 0; padding: 0.6rem 1rem;
        border-left: 3px solid #222; background: #f9f9f9;
        font-style: normal; color: #444;
        font-family: "Courier New", Consolas, monospace, ${sansJP};
        font-size: 0.92rem;
      }
      blockquote p { margin-bottom: 0.3rem; }
      ul, ol { margin: 0.5rem 0 0.7rem 1.2rem; }
      li { margin-bottom: 0.25rem; }
      strong { font-weight: 800; }
      hr { border: none; border-top: 1px dashed #ccc; margin: 1.2rem 0; }
      @media (max-width: 600px) {
        body { padding: 0.8rem; font-size: 0.88rem; }
        h1 { font-size: 1.3rem; }
      }
    `,
  },

  // -----------------------------------------------------------------------
  // 16 — Sunday Magazine
  // -----------------------------------------------------------------------
  {
    number: "16",
    name: "Sunday Magazine",
    css: `
      * { margin: 0; padding: 0; box-sizing: border-box; }
      html { font-size: 16px; -webkit-text-size-adjust: 100%; }
      body {
        font-family: ${serifJP};
        color: #2d2d2d; background: #fefefe;
        line-height: 1.95; padding: 3rem 2rem;
        max-width: 780px; margin: 0 auto;
      }
      h1 {
        font-size: 2.4rem; font-weight: 700; line-height: 1.15;
        text-align: center; margin-bottom: 0.3rem;
        font-family: ${serifJP};
      }
      h1 + blockquote {
        text-align: center; border: none; background: none;
        color: #999; font-style: italic; padding: 0; margin-bottom: 2rem;
      }
      h1 + blockquote::after {
        content: ""; display: block; width: 60px; margin: 1rem auto 0;
        border-bottom: 2px solid #2d2d2d;
      }
      h2 {
        font-size: 1.4rem; font-weight: 700; margin-top: 3rem; margin-bottom: 0.8rem;
        color: #2d2d2d;
      }
      h3 { font-size: 1.1rem; font-weight: 600; margin-top: 2rem; margin-bottom: 0.6rem;
           color: #555; font-style: italic; }
      p { margin-bottom: 1.1rem; text-align: justify; }
      h2 + p, h3 + p { text-indent: 0; }
      h2 + p ~ p, h3 + p ~ p { text-indent: 2em; }
      a { color: #8b0000; text-decoration: none; border-bottom: 1px solid rgba(139,0,0,0.3); }
      a:hover { border-bottom-color: #8b0000; }
      blockquote {
        margin: 2rem 1.5rem; padding: 1.5rem 2rem;
        border: none; background: none;
        font-style: italic; color: #555;
        font-size: 1.15rem; line-height: 1.7;
        border-top: 1px solid #ddd; border-bottom: 1px solid #ddd;
        text-align: center;
      }
      blockquote p { margin-bottom: 0.4rem; text-indent: 0 !important; }
      ul, ol { margin: 1rem 0 1.2rem 1.5rem; }
      li { margin-bottom: 0.4rem; }
      li p { text-indent: 0 !important; }
      strong { font-weight: 700; }
      hr { border: none; border-top: 1px solid #ddd; margin: 2.5rem 5rem; }
      @media (max-width: 600px) {
        body { padding: 1.5rem 1rem; font-size: 0.93rem; }
        h1 { font-size: 1.6rem; }
        blockquote { margin: 1.5rem 0.5rem; padding: 1rem; font-size: 1rem; }
      }
    `,
  },

  // -----------------------------------------------------------------------
  // 17 — Broadsheet Dark
  // -----------------------------------------------------------------------
  {
    number: "17",
    name: "Broadsheet Dark",
    css: `
      * { margin: 0; padding: 0; box-sizing: border-box; }
      html { font-size: 16px; -webkit-text-size-adjust: 100%; }
      body {
        font-family: ${serifJP};
        color: #ddd; background: #2a2a2a;
        line-height: 1.9; padding: 2.5rem 1.5rem;
        max-width: 800px; margin: 0 auto;
      }
      h1 {
        font-size: 2.2rem; font-weight: 900; line-height: 1.15;
        text-align: center; margin-bottom: 0.3rem;
        color: #fff; letter-spacing: 0.03em;
      }
      h1 + blockquote {
        text-align: center; border: none; background: none;
        color: #999; font-style: italic; padding: 0;
        margin-bottom: 1.5rem;
      }
      h1 + blockquote::after {
        content: ""; display: block; width: 60%; margin: 1rem auto 0;
        border-bottom: 2px solid #666;
      }
      h2 {
        font-size: 1.25rem; font-weight: 700; margin-top: 2rem; margin-bottom: 0.5rem;
        color: #eee; text-transform: uppercase; letter-spacing: 0.05em;
        border-top: 2px solid #555; border-bottom: 1px solid #444;
        padding: 0.4rem 0;
      }
      h3 { font-size: 1.05rem; font-weight: 700; margin-top: 1.5rem; margin-bottom: 0.5rem;
           color: #ccc; font-style: italic; }
      p { margin-bottom: 0.9rem; text-align: justify; text-indent: 1em; }
      p:first-child { text-indent: 0; }
      a { color: #8cb4d5; text-decoration: none; border-bottom: 1px dotted #8cb4d5; }
      a:hover { color: #b0d4f1; border-bottom-style: solid; }
      blockquote {
        margin: 1.5rem 1rem; padding: 1rem 1.5rem;
        border-left: 3px solid #8cb4d5; background: rgba(140,180,213,0.06);
        font-style: italic; color: #aaa;
      }
      blockquote p { text-indent: 0; margin-bottom: 0.3rem; }
      ul, ol { margin: 0.75rem 0 1rem 1.5rem; }
      li { margin-bottom: 0.35rem; }
      li p { text-indent: 0; }
      strong { font-weight: 700; color: #fff; }
      hr { border: none; border-top: 1px solid #444; margin: 2rem 3rem; }
      @media (max-width: 600px) {
        body { padding: 1rem; font-size: 0.93rem; }
        h1 { font-size: 1.5rem; }
        p { text-indent: 0; }
      }
    `,
  },

  // -----------------------------------------------------------------------
  // 18 — Pastel Soft
  // -----------------------------------------------------------------------
  {
    number: "18",
    name: "Pastel Soft",
    css: `
      * { margin: 0; padding: 0; box-sizing: border-box; }
      html { font-size: 16px; -webkit-text-size-adjust: 100%; }
      body {
        font-family: ${serifJP};
        color: #3a3a4a; background: #f0f4f8;
        line-height: 1.9; padding: 2.5rem 1.5rem;
        max-width: 760px; margin: 0 auto;
      }
      h1 {
        font-size: 2rem; font-weight: 700; line-height: 1.2;
        text-align: center; margin-bottom: 0.3rem;
        color: #2a2a3a; font-family: ${serifJP};
      }
      h1 + blockquote {
        text-align: center; border: none; background: none;
        color: #8888aa; font-style: italic; padding: 0;
        margin-bottom: 1.5rem;
      }
      h1 + blockquote::after {
        content: ""; display: block; width: 50%; margin: 1rem auto 0;
        border-bottom: 1px solid #c0c8d4;
      }
      h2 {
        font-size: 1.2rem; font-weight: 600; margin-top: 2rem; margin-bottom: 0.5rem;
        color: #4a5568; border-bottom: 1px solid #d0d8e4; padding-bottom: 0.3rem;
      }
      h3 { font-size: 1.05rem; font-weight: 600; margin-top: 1.5rem; margin-bottom: 0.5rem;
           color: #5a6578; }
      p { margin-bottom: 0.9rem; text-align: justify; text-indent: 1em; }
      p:first-child { text-indent: 0; }
      a { color: #5b7aa5; text-decoration: none; border-bottom: 1px solid rgba(91,122,165,0.3); }
      a:hover { color: #3a5a85; border-bottom-color: #3a5a85; }
      blockquote {
        margin: 1.5rem 1rem; padding: 1.2rem 1.5rem;
        border-left: none; border-radius: 8px;
        background: #fff; box-shadow: 0 2px 8px rgba(0,0,0,0.06);
        font-style: italic; color: #6a6a8a;
      }
      blockquote p { text-indent: 0; margin-bottom: 0.3rem; }
      ul, ol { margin: 0.75rem 0 1rem 1.5rem; }
      li { margin-bottom: 0.35rem; }
      li p { text-indent: 0; }
      strong { font-weight: 700; color: #2a2a3a; }
      hr { border: none; border-top: 1px solid #d0d8e4; margin: 2rem 3rem; }
      @media (max-width: 600px) {
        body { padding: 1rem; font-size: 0.93rem; }
        h1 { font-size: 1.5rem; }
        p { text-indent: 0; }
      }
    `,
  },

  // -----------------------------------------------------------------------
  // 19 — High Contrast
  // -----------------------------------------------------------------------
  {
    number: "19",
    name: "High Contrast",
    css: `
      * { margin: 0; padding: 0; box-sizing: border-box; }
      html { font-size: 16px; -webkit-text-size-adjust: 100%; }
      body {
        font-family: ${sansJP};
        color: #fff; background: #000;
        line-height: 1.85; padding: 2rem 1.5rem;
        max-width: 780px; margin: 0 auto;
      }
      h1 {
        font-size: 2.2rem; font-weight: 900; line-height: 1.15;
        text-align: center; margin-bottom: 0.3rem;
        color: #ffd700;
      }
      h1 + blockquote {
        text-align: center; border: none; background: none;
        color: #999; font-style: italic; padding: 0;
        margin-bottom: 1.5rem;
      }
      h1 + blockquote::after {
        content: ""; display: block; width: 50%; margin: 1rem auto 0;
        border-bottom: 2px solid #ffd700;
      }
      h2 {
        font-size: 1.25rem; font-weight: 700; margin-top: 2rem; margin-bottom: 0.5rem;
        color: #ffd700; text-transform: uppercase; letter-spacing: 0.05em;
        border-top: 2px solid #ffd700; padding-top: 0.4rem;
      }
      h3 { font-size: 1.05rem; font-weight: 700; margin-top: 1.5rem; margin-bottom: 0.5rem;
           color: #ffed4a; }
      p { margin-bottom: 0.9rem; }
      a { color: #ffd700; text-decoration: underline; text-underline-offset: 2px; }
      a:hover { color: #ffed4a; }
      blockquote {
        margin: 1.5rem 0; padding: 1rem 1.5rem;
        border-left: 4px solid #ffd700; background: #111;
        font-style: italic; color: #ccc;
      }
      blockquote p { margin-bottom: 0.3rem; }
      ul, ol { margin: 0.75rem 0 1rem 1.5rem; }
      li { margin-bottom: 0.35rem; }
      strong { font-weight: 700; color: #ffd700; }
      hr { border: none; border-top: 1px solid #333; margin: 2rem 0; }
      ::selection { background: #ffd700; color: #000; }
      @media (max-width: 600px) {
        body { padding: 1rem; font-size: 0.93rem; }
        h1 { font-size: 1.5rem; }
      }
    `,
  },

  // -----------------------------------------------------------------------
  // 20 — Nikkei Style
  // -----------------------------------------------------------------------
  {
    number: "20",
    name: "Nikkei Style",
    css: `
      * { margin: 0; padding: 0; box-sizing: border-box; }
      html { font-size: 16px; -webkit-text-size-adjust: 100%; }
      body {
        font-family: ${sansJP};
        color: #333; background: #f4f4f4;
        line-height: 1.85; padding: 2rem 1.5rem;
        max-width: 780px; margin: 0 auto;
      }
      h1 {
        font-size: 1.8rem; font-weight: 700; line-height: 1.25;
        margin-bottom: 0.3rem; color: #00509e;
        font-family: ${gothicJP};
        padding-bottom: 0.5rem;
        border-bottom: 3px solid #00509e;
      }
      h1 + blockquote {
        border: none; background: none;
        color: #777; font-style: normal; padding: 0;
        margin-bottom: 1.5rem; font-size: 0.9rem;
      }
      h1 + blockquote::after { display: none; }
      h2 {
        font-size: 1.2rem; font-weight: 700; margin-top: 2rem; margin-bottom: 0.5rem;
        color: #00509e; font-family: ${gothicJP};
        border-left: 4px solid #00509e; padding-left: 0.7rem;
      }
      h3 { font-size: 1.05rem; font-weight: 600; margin-top: 1.5rem; margin-bottom: 0.5rem;
           color: #444; font-family: ${gothicJP}; }
      p { margin-bottom: 0.9rem; text-align: justify; }
      a { color: #00509e; text-decoration: none; }
      a:hover { text-decoration: underline; }
      blockquote {
        margin: 1.5rem 0; padding: 1rem 1.5rem;
        border: 1px solid #ddd; background: #fff;
        font-style: normal; color: #555;
        border-left: 4px solid #00509e;
      }
      blockquote p { margin-bottom: 0.3rem; }
      ul, ol { margin: 0.75rem 0 1rem 1.5rem; }
      li { margin-bottom: 0.35rem; }
      strong { font-weight: 700; color: #222; }
      hr { border: none; border-top: 1px solid #ddd; margin: 2rem 0; }
      /* Bordered sections for h2 blocks */
      h2 ~ p, h2 ~ ul, h2 ~ ol, h2 ~ blockquote {
        padding-left: 0.5rem; padding-right: 0.5rem;
      }
      @media (max-width: 600px) {
        body { padding: 1rem; font-size: 0.93rem; }
        h1 { font-size: 1.4rem; }
      }
    `,
  },
];

// ---------------------------------------------------------------------------
// 3. Generate all 20 HTML files
// ---------------------------------------------------------------------------

for (const v of variants) {
  const html = `<!DOCTYPE html>
<html lang="ja">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>${v.name} — ホルムズ海峡封鎖</title>
<style>${v.css}
</style>
</head>
<body>
${bodyContent}
</body>
</html>`;

  const filePath = `${outDir}/${v.number}.html`;
  writeFileSync(filePath, html, "utf-8");
  console.log(`Written: ${v.number}.html (${v.name})`);
}

console.log(`\nDone. All ${variants.length} newspaper variants generated in ${outDir}`);
