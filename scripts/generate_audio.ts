// CLI エントリーポイント: 記事 Markdown から音声（MP3）を生成する
// 使い方: tsx scripts/generate_audio.ts <記事Markdownパス> [--character chobi|naruko]
// 環境変数: GEMINI_API_KEY

import path from "path";
import { generateArticleAudio } from "../src/tts.js";

async function main() {
  const args = process.argv.slice(2);
  let mdPath: string | undefined;
  let characterId = "chobi";

  for (let i = 0; i < args.length; i++) {
    if (args[i] === "--character" && i + 1 < args.length) {
      characterId = args[i + 1];
      i++;
    } else if (!args[i].startsWith("--")) {
      mdPath = args[i];
    }
  }

  if (!mdPath) {
    console.error(
      "使い方: tsx scripts/generate_audio.ts <記事Markdownパス> [--character chobi|naruko]",
    );
    process.exit(1);
  }

  const apiKey = process.env["GEMINI_API_KEY"];
  if (!apiKey) {
    console.error("エラー: 環境変数 GEMINI_API_KEY を設定してください");
    process.exit(1);
  }

  const resolvedPath = path.resolve(mdPath);
  const baseName = path.basename(resolvedPath, ".md");
  const dir = path.dirname(resolvedPath);
  const outputMp3 = path.join(dir, `${baseName}.mp3`);

  console.log(`記事: ${resolvedPath}`);
  console.log(`出力: ${outputMp3}`);
  console.log(`キャラクター: ${characterId}`);

  const result = await generateArticleAudio(
    resolvedPath,
    outputMp3,
    apiKey,
    (current, total, message) => {
      console.log(`[${current}/${total}] ${message}`);
    },
    characterId,
  );

  console.log(`完了: ${result}`);
}

main().catch((err) => {
  console.error("エラー:", err);
  process.exit(1);
});
