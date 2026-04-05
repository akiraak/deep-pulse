// TTS コアロジックモジュール
// Markdown → テキスト抽出 → Gemini TTS → MP3 生成

import { readFile, writeFile, unlink, mkdir } from "fs/promises";
import path from "path";
import { execFile } from "child_process";
import { GoogleGenAI } from "@google/genai";
import { TtsCharacter, getCharacter } from "./tts_characters.js";

// --- テキスト抽出 ---

/** Markdown からコードブロック・テーブル・参考ソースを除去し、読み上げ用テキストを返す */
export function extractTextFromMarkdown(md: string): string {
  let text = md;

  // コードブロック（chart, mermaid, その他すべて）を除去
  text = text.replace(/```[\s\S]*?```/g, "");

  // 「**参考ソース:**」から次の見出しまでを除去
  text = text.replace(/\*\*参考ソース[::]\*\*[\s\S]*?(?=\n#{1,6}\s|\n$|$)/g, "");

  // テーブル: 見出し行のみ残して「（表は省略します）」に置換
  text = text.replace(
    /(\|[^\n]+\|\n)\|[-| :]+\|\n(\|[^\n]+\|\n?)*/g,
    (_match, headerRow: string) => {
      const headers = headerRow
        .split("|")
        .map((h: string) => h.trim())
        .filter((h: string) => h);
      return headers.join("、") + "（表は省略します）\n";
    },
  );

  // Markdown リンク [text](url) → text
  text = text.replace(/\[([^\]]+)\]\([^)]+\)/g, "$1");

  // 見出しの前に改行を入れて間を作る
  text = text.replace(/\n(#{1,6})\s/g, "\n\n$1 ");

  // Markdown 記号を除去
  text = text.replace(/^#{1,6}\s+/gm, ""); // 見出し記号
  text = text.replace(/\*\*(.+?)\*\*/g, "$1"); // 太字
  text = text.replace(/\*(.+?)\*/g, "$1"); // 斜体
  text = text.replace(/`([^`]+)`/g, "$1"); // インラインコード
  text = text.replace(/^>\s?/gm, ""); // 引用
  text = text.replace(/^[-*+]\s/gm, ""); // リスト記号
  text = text.replace(/^\d+\.\s/gm, ""); // 番号付きリスト
  text = text.replace(/!\[[^\]]*\]\([^)]+\)/g, ""); // 画像
  text = text.replace(/^---$/gm, ""); // 区切り線

  // 連続する空行を2つに制限
  text = text.replace(/\n{3,}/g, "\n\n");

  return text.trim();
}

// --- チャンク分割 ---

const MAX_CHUNK_CHARS = 2500;

/** テキストを ## 境界で分割し、2500文字以内のチャンクにする */
export function splitIntoChunks(text: string): string[] {
  // ## で分割
  const sections = text.split(/\n(?=\S.*\n)/);

  // まず h2 レベルでセクション分割を試みる
  const h2Sections: string[] = [];
  let current = "";
  for (const line of text.split("\n")) {
    // 元テキストでは見出し記号は除去済みだが、改行2つの境界で分割
    current += line + "\n";
    // セクション区切りを検出（空行2つ以上）
    if (current.endsWith("\n\n\n") || current.endsWith("\n\n")) {
      // これ以上追加するとオーバーする場合、ここで切る
      if (current.trim()) {
        h2Sections.push(current.trim());
        current = "";
      }
    }
  }
  if (current.trim()) {
    h2Sections.push(current.trim());
  }

  // セクションを MAX_CHUNK_CHARS 以内にまとめる
  const chunks: string[] = [];
  let chunk = "";

  for (const section of h2Sections) {
    if (section.length > MAX_CHUNK_CHARS) {
      // セクション自体が長い場合、段落で分割
      if (chunk.trim()) {
        chunks.push(chunk.trim());
        chunk = "";
      }
      const paragraphs = section.split(/\n\n/);
      for (const para of paragraphs) {
        if (chunk.length + para.length + 2 > MAX_CHUNK_CHARS && chunk.trim()) {
          chunks.push(chunk.trim());
          chunk = "";
        }
        chunk += para + "\n\n";
      }
    } else if (chunk.length + section.length + 2 > MAX_CHUNK_CHARS) {
      if (chunk.trim()) {
        chunks.push(chunk.trim());
      }
      chunk = section + "\n\n";
    } else {
      chunk += section + "\n\n";
    }
  }
  if (chunk.trim()) {
    chunks.push(chunk.trim());
  }

  return chunks.length > 0 ? chunks : [text];
}

// --- Gemini TTS API ---

/** 1チャンクの音声データを生成して WAV Buffer を返す */
export async function generateAudioChunk(
  text: string,
  apiKey: string,
  character?: TtsCharacter,
): Promise<Buffer> {
  const ai = new GoogleGenAI({ apiKey });
  const ch = character ?? getCharacter("chobi");

  const prompt = `${ch.stylePrompt}\n\n${text}`;

  const response = await ai.models.generateContent({
    model: "gemini-2.5-flash-preview-tts",
    contents: [{ role: "user", parts: [{ text: prompt }] }],
    config: {
      responseModalities: ["AUDIO"],
      speechConfig: {
        voiceConfig: {
          prebuiltVoiceConfig: { voiceName: ch.voiceName },
        },
      },
    },
  });

  const audioData =
    response.candidates?.[0]?.content?.parts?.[0]?.inlineData?.data;
  if (!audioData) {
    throw new Error("音声データが返されませんでした");
  }

  return Buffer.from(audioData, "base64");
}

// --- ffmpeg 結合・変換 ---

function runFfmpeg(args: string[]): Promise<string> {
  return new Promise((resolve, reject) => {
    execFile("ffmpeg", args, { maxBuffer: 50 * 1024 * 1024 }, (err, stdout, stderr) => {
      if (err) {
        reject(new Error(`ffmpeg エラー: ${stderr || err.message}`));
      } else {
        resolve(stdout + stderr);
      }
    });
  });
}

/** 複数の WAV ファイルを結合して MP3 に変換 */
export async function concatAndConvertToMp3(
  wavFiles: string[],
  outputPath: string,
): Promise<string> {
  if (wavFiles.length === 0) {
    throw new Error("WAV ファイルがありません");
  }

  if (wavFiles.length === 1) {
    // 単一ファイルの場合は直接変換
    await runFfmpeg([
      "-y",
      "-f", "s16le",
      "-ar", "24000",
      "-ac", "1",
      "-i", wavFiles[0],
      "-codec:a", "libmp3lame",
      "-b:a", "128k",
      outputPath,
    ]);
    return outputPath;
  }

  // 複数ファイルの場合: concat demuxer を使用
  const tmpDir = path.dirname(wavFiles[0]);
  const concatListPath = path.join(tmpDir, "concat_list.txt");
  const concatContent = wavFiles.map((f) => `file '${f}'`).join("\n");
  await writeFile(concatListPath, concatContent);

  // まず raw PCM を WAV にラップしてから結合
  const wrappedFiles: string[] = [];
  for (let i = 0; i < wavFiles.length; i++) {
    const wrappedPath = path.join(tmpDir, `wrapped_${i}.wav`);
    await runFfmpeg([
      "-y",
      "-f", "s16le",
      "-ar", "24000",
      "-ac", "1",
      "-i", wavFiles[i],
      "-c", "copy",
      wrappedPath,
    ]);
    wrappedFiles.push(wrappedPath);
  }

  // concat list を更新
  const wrappedListContent = wrappedFiles.map((f) => `file '${f}'`).join("\n");
  await writeFile(concatListPath, wrappedListContent);

  await runFfmpeg([
    "-y",
    "-f", "concat",
    "-safe", "0",
    "-i", concatListPath,
    "-codec:a", "libmp3lame",
    "-b:a", "128k",
    outputPath,
  ]);

  // 一時ファイル削除
  for (const f of [...wavFiles, ...wrappedFiles, concatListPath]) {
    try {
      await unlink(f);
    } catch {
      // ignore
    }
  }

  return outputPath;
}

// --- メイン関数 ---

export interface TtsProgressCallback {
  (current: number, total: number, message: string): void;
}

/** Markdown ファイルから音声を生成し、MP3 パスを返す */
export async function generateArticleAudio(
  mdPath: string,
  outputMp3Path: string,
  apiKey: string,
  onProgress?: TtsProgressCallback,
  characterId?: string,
): Promise<string> {
  const character = characterId ? getCharacter(characterId) : getCharacter("chobi");
  const md = await readFile(mdPath, "utf-8");
  const text = extractTextFromMarkdown(md);
  const chunks = splitIntoChunks(text);

  onProgress?.(0, chunks.length, `${chunks.length} チャンクに分割しました`);

  const tmpDir = "/tmp/deep-pulse-tts";
  await mkdir(tmpDir, { recursive: true });

  const wavFiles: string[] = [];
  for (let i = 0; i < chunks.length; i++) {
    onProgress?.(i + 1, chunks.length, `チャンク ${i + 1}/${chunks.length} を処理中...`);
    const wavData = await generateAudioChunk(chunks[i], apiKey, character);
    const wavPath = path.join(tmpDir, `chunk_${String(i).padStart(3, "0")}.raw`);
    await writeFile(wavPath, wavData);
    wavFiles.push(wavPath);
  }

  onProgress?.(chunks.length, chunks.length, "MP3 に変換中...");
  await concatAndConvertToMp3(wavFiles, outputMp3Path);

  return outputMp3Path;
}

/** テキストから直接音声を生成（テスト用）。一時 MP3 パスを返す */
export async function generateTextAudio(
  text: string,
  apiKey: string,
  onProgress?: TtsProgressCallback,
  characterId?: string,
): Promise<string> {
  const character = characterId ? getCharacter(characterId) : getCharacter("chobi");
  const chunks = splitIntoChunks(text);

  onProgress?.(0, chunks.length, `${chunks.length} チャンクに分割しました`);

  const tmpDir = "/tmp/deep-pulse-tts";
  await mkdir(tmpDir, { recursive: true });

  const wavFiles: string[] = [];
  for (let i = 0; i < chunks.length; i++) {
    onProgress?.(i + 1, chunks.length, `チャンク ${i + 1}/${chunks.length} を処理中...`);
    const wavData = await generateAudioChunk(chunks[i], apiKey, character);
    const wavPath = path.join(tmpDir, `test_chunk_${String(i).padStart(3, "0")}.raw`);
    await writeFile(wavPath, wavData);
    wavFiles.push(wavPath);
  }

  const outputPath = path.join(tmpDir, `test_${Date.now()}.mp3`);
  onProgress?.(chunks.length, chunks.length, "MP3 に変換中...");
  await concatAndConvertToMp3(wavFiles, outputPath);

  return outputPath;
}
