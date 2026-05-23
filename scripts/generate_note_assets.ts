// note 投稿用の md ファイル と画像アセットを生成する
//
// 使い方:
//   tsx scripts/generate_note_assets.ts <記事ディレクトリ>
//   例: tsx scripts/generate_note_assets.ts output/2026-05-14_NVIDIA_NemoClawの解説と使い方/
//
// 動作:
//   1. 記事ディレクトリ内のメイン md を読み込み、marked.lexer でトークン化
//   2. mermaid / chart コードブロック・テーブル を発見順に処理
//      - mermaid / chart → 常に画像化（./note_assets/<連番>_<種別>_<近接見出し>.png）
//      - テーブル → 4 列以上は画像化、3 列以下は箇条書きに変換
//   3. Playwright で dist_site/articles/<記事名>.html を開き、要素ごとに PNG を保存
//   4. _note_full.md と note_assets/README.md を出力
//
// 画像参照は `[画像挿入: <filename>]` という視認性重視のプレーンテキスト形式で出力する。
// note のリッチテキストエディタは Markdown 画像記法を解釈しないため、貼り付け後も
// 目視で位置を見つけて手動アップロードできるよう、テキストとして残す。

import { readFile, writeFile, mkdir, access } from "fs/promises";
import path from "path";
import { chromium } from "playwright";
import { marked, type Tokens } from "marked";

const ROOT = process.cwd();

interface ImageSpec {
  filename: string;
  kind: "mermaid" | "chart" | "table";
  nearHeading: string;
  /** 同じ種類の要素内で何番目（0-based、DOM 出現順） */
  domIndex: number;
}

function stripMdInline(s: string): string {
  return s
    .replace(/\[([^\]]+)\]\([^)]*\)/g, "$1")
    .replace(/(\*\*|__)(.+?)\1/g, "$2")
    .replace(/(\*|_)(.+?)\1/g, "$2")
    .replace(/`([^`]+)`/g, "$1");
}

function stripOuterBold(s: string): string {
  const trimmed = s.trim();
  const m = trimmed.match(/^\*\*([\s\S]+)\*\*$/);
  return m ? m[1].trim() : trimmed;
}

function makeSlug(text: string, maxLen = 20): string {
  const cleaned = stripMdInline(text || "")
    .replace(/[\\/:*?"<>|]/g, "")
    .replace(/[、。「」『』（）()\[\]【】〜・,.]/g, "")
    .replace(/\s+/g, "_")
    .trim();
  const fallback = cleaned || "section";
  return fallback.slice(0, maxLen);
}

function pad2(n: number): string {
  return String(n).padStart(2, "0");
}

function tableToList(table: Tokens.Table): string {
  const cols = table.header.length;
  if (cols === 0 || table.rows.length === 0) return "";
  const lines: string[] = [];
  if (cols === 1) {
    for (const row of table.rows) {
      lines.push(`- ${row[0].text.trim()}`);
    }
  } else if (cols === 2) {
    for (const row of table.rows) {
      const k = stripOuterBold(row[0].text);
      const v = row[1].text.trim();
      lines.push(`- **${k}**: ${v}`);
    }
  } else {
    // 3 列
    for (const row of table.rows) {
      const k = stripOuterBold(row[0].text);
      const a = row[1].text.trim();
      const b = row[2].text.trim();
      lines.push(`- **${k}**: ${a} — ${b}`);
    }
  }
  return lines.join("\n") + "\n\n";
}

interface TransformResult {
  output: string;
  images: ImageSpec[];
  /** 列数 ≤ 3 で箇条書きに変換されたテーブル数 */
  convertedTables: number;
}

function transform(md: string, assetsRelDir: string): TransformResult {
  const tokens = marked.lexer(md);
  let currentHeading = "intro";
  let mermaidIdx = 0;
  let chartIdx = 0;
  let tableIdx = 0;
  let serial = 0;
  let convertedTables = 0;
  // 直前に <!-- note-image --> マーカーがあったテーブルは、列数に関わらず画像化する
  let forceImageNextTable = false;
  const images: ImageSpec[] = [];
  const out: string[] = [];

  for (const token of tokens) {
    if (token.type === "html" && /note-image/.test(token.raw)) {
      // マーカーコメント自体は note_full に出力しない
      forceImageNextTable = true;
      continue;
    }
    if (token.type === "heading") {
      const h = token as Tokens.Heading;
      currentHeading = stripMdInline(h.text);
      out.push(token.raw);
      continue;
    }
    if (token.type === "code") {
      const code = token as Tokens.Code;
      if (code.lang === "mermaid") {
        serial++;
        const filename = `${pad2(serial)}_mermaid_${makeSlug(currentHeading)}.png`;
        images.push({
          filename,
          kind: "mermaid",
          nearHeading: currentHeading,
          domIndex: mermaidIdx,
        });
        mermaidIdx++;
        out.push(`[画像挿入: ${filename}]\n\n`);
        continue;
      }
      if (code.lang === "chart") {
        serial++;
        const filename = `${pad2(serial)}_chart_${makeSlug(currentHeading)}.png`;
        images.push({
          filename,
          kind: "chart",
          nearHeading: currentHeading,
          domIndex: chartIdx,
        });
        chartIdx++;
        out.push(`[画像挿入: ${filename}]\n\n`);
        continue;
      }
      out.push(token.raw);
      continue;
    }
    if (token.type === "table") {
      const table = token as Tokens.Table;
      const cols = table.header.length;
      const forceImage = forceImageNextTable;
      forceImageNextTable = false;
      if (cols <= 3 && !forceImage) {
        out.push(tableToList(table));
        convertedTables++;
      } else {
        serial++;
        const filename = `${pad2(serial)}_table_${makeSlug(currentHeading)}.png`;
        images.push({
          filename,
          kind: "table",
          nearHeading: currentHeading,
          domIndex: tableIdx,
        });
        out.push(`[画像挿入: ${filename}]\n\n`);
      }
      tableIdx++;
      continue;
    }
    out.push(token.raw);
  }

  return { output: out.join(""), images, convertedTables };
}

async function captureScreenshots(htmlPath: string, images: ImageSpec[], outDir: string) {
  const browser = await chromium.launch();
  const ctx = await browser.newContext({
    deviceScaleFactor: 2,
    viewport: { width: 900, height: 1200 },
  });
  const page = await ctx.newPage();
  await page.goto("file://" + htmlPath, { waitUntil: "networkidle" });

  // Mermaid の SVG レンダリング完了を待つ
  await page.waitForFunction(
    () => {
      const wrappers = document.querySelectorAll(".mermaid-wrapper");
      for (const w of wrappers) {
        if (!w.querySelector("svg")) return false;
      }
      return true;
    },
    { timeout: 20000 },
  );

  // Chart.js の描画を待つ
  await page.waitForTimeout(1500);

  for (const img of images) {
    const outPath = path.join(outDir, img.filename);
    if (img.kind === "mermaid") {
      const locator = page.locator(".mermaid-wrapper").nth(img.domIndex);
      await locator.scrollIntoViewIfNeeded();
      await locator.screenshot({ path: outPath });
    } else if (img.kind === "chart") {
      const canvas = page.locator("canvas[id^='deep-pulse-chart-']").nth(img.domIndex);
      await canvas.scrollIntoViewIfNeeded();
      // canvas の親 div（max-width: 800px の wrapper）を撮る
      const wrapper = canvas.locator("xpath=..");
      await wrapper.screenshot({ path: outPath });
    } else {
      const locator = page.locator("table").nth(img.domIndex);
      await locator.scrollIntoViewIfNeeded();
      await locator.screenshot({ path: outPath });
    }
  }

  await browser.close();
}

function generateReadme(images: ImageSpec[], baseName: string): string {
  const lines: string[] = [];
  lines.push(`# note アップロード用画像（${baseName}）`);
  lines.push("");
  lines.push("`_note_full.md` 内の `[画像挿入: ...]` プレースホルダに対応する PNG ファイルです。");
  lines.push("");
  lines.push("**手順:**");
  lines.push("");
  lines.push("1. `_note_full.md` の本文を note エディタに貼り付ける");
  lines.push("2. 本文中の `[画像挿入: xx.png]` の行を探し、その位置で対応する PNG をドラッグ＆ドロップする");
  lines.push("3. 挿入後、プレースホルダ行（`[画像挿入: xx.png]`）を削除する");
  lines.push("");
  if (images.length === 0) {
    lines.push("（画像化対象なし）");
    return lines.join("\n") + "\n";
  }
  lines.push("| 連番 | 種類 | 近接見出し | ファイル |");
  lines.push("|---|---|---|---|");
  for (const img of images) {
    const kindLabel =
      img.kind === "mermaid"
        ? "Mermaid 図"
        : img.kind === "chart"
          ? "Chart グラフ"
          : "テーブル";
    const num = img.filename.slice(0, 2);
    lines.push(`| ${num} | ${kindLabel} | ${img.nearHeading} | \`${img.filename}\` |`);
  }
  return lines.join("\n") + "\n";
}

async function fileExists(p: string): Promise<boolean> {
  try {
    await access(p);
    return true;
  } catch {
    return false;
  }
}

async function main() {
  const arg = process.argv[2];
  if (!arg) {
    console.error("使い方: tsx scripts/generate_note_assets.ts <記事ディレクトリ>");
    process.exit(1);
  }

  const articleDir = path.resolve(arg);
  const dirName = path.basename(articleDir.replace(/\/$/, ""));
  const mainMd = path.join(articleDir, `${dirName}.md`);

  if (!(await fileExists(mainMd))) {
    console.error(`記事ファイルが見つかりません: ${mainMd}`);
    process.exit(1);
  }

  const htmlPath = path.join(ROOT, "dist_site", "articles", `${dirName}.html`);
  if (!(await fileExists(htmlPath))) {
    console.error(`HTML が見つかりません: ${htmlPath}`);
    console.error("先に \`npm run build:site\` を実行してください。");
    process.exit(1);
  }

  const assetsRelDir = "./note_assets";
  const assetsDir = path.join(articleDir, "note_assets");
  await mkdir(assetsDir, { recursive: true });

  const md = await readFile(mainMd, "utf-8");
  const { output, images, convertedTables } = transform(md, assetsRelDir);

  console.log(`対象記事: ${dirName}`);
  console.log(`  画像化対象: ${images.length} 枚`);
  console.log(`    - mermaid: ${images.filter((i) => i.kind === "mermaid").length}`);
  console.log(`    - chart  : ${images.filter((i) => i.kind === "chart").length}`);
  console.log(`    - table  : ${images.filter((i) => i.kind === "table").length}`);
  console.log(`  箇条書きに変換したテーブル: ${convertedTables}`);

  if (images.length > 0) {
    console.log("画像を生成中...");
    await captureScreenshots(htmlPath, images, assetsDir);
  }

  const outputMdPath = path.join(articleDir, `${dirName}_note_full.md`);
  await writeFile(outputMdPath, output, "utf-8");
  console.log(`生成: ${path.relative(ROOT, outputMdPath)}`);

  const readmePath = path.join(assetsDir, "README.md");
  await writeFile(readmePath, generateReadme(images, dirName), "utf-8");
  console.log(`生成: ${path.relative(ROOT, readmePath)}`);

  for (const img of images) {
    console.log(`  - note_assets/${img.filename}  (${img.nearHeading})`);
  }
}

main().catch((err) => {
  console.error("エラー:", err);
  process.exit(1);
});
