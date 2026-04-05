# 音声読み上げ機能 実装プラン

## 概要

記事生成時に Gemini 2.5 Pro TTS API で音声ファイル（MP3）を事前生成し、GitHub Pages で配信する。記事ページには HTML5 `<audio>` プレイヤーを表示する。

## 技術選定

| 選択肢 | メリット | デメリット |
|--------|---------|-----------|
| Web Speech API | 無料、API キー不要 | 音声品質がブラウザ/OS 依存、日本語の自然さが低い |
| ElevenLabs | 英語は最高品質 | 日本語が弱い（WER 10.65%）、高額 |
| Fish Audio S2 | ベンチマーク最強、日本語 Tier1 | 商用ライセンス要交渉、OSS ではない |
| **Gemini 2.5 Pro TTS（採用）** | 日本語ナレーション品質が高い、安価（$0.24/100万文字）、ユーザーが既に API キーを保有 | レイテンシ高（事前生成で回避）、最大出力 ~655秒/リクエスト |

→ ユーザーが既に Gemini を常用しており、日本語品質も高い **Gemini 2.5 Pro TTS** を採用する。

## 機能仕様

### 音声生成（ビルド時）

- 記事生成後に `scripts/generate_audio.ts` を実行して MP3 を生成
- 音声ファイルは `output/YYYY-MM-DD_タイトル/YYYY-MM-DD_タイトル.mp3` に保存
- Git にコミットし、`build:site` で `dist_site/articles/` にコピーされる

### 読み上げ対象

- 記事本文のテキストを対象とする
- **除外するもの:**
  - Chart.js グラフ（` ```chart ` コードブロック）
  - Mermaid 図（` ```mermaid ` コードブロック）
  - その他のコードブロック（` ``` `）
  - テーブル — 見出し行のみ読み上げて「（表は省略します）」と案内
  - 「**参考ソース:**」以降の URL リスト
- **含めるもの:**
  - 見出し（# 〜 ###）
  - 段落
  - リスト（箇条書き・番号付き）
  - 引用（blockquote）

### UI（記事ページ）

- 記事ヘッダー（パンくず下）に `<audio>` プレイヤーを表示
- ブラウザネイティブのコントロール（再生/一時停止/シーク/速度変更/ダウンロード）
- 音声ファイルが無い記事にはプレイヤーを表示しない
- サイトのクラシック新聞風デザインに馴染むスタイリング

### 音声設定

- ボイス: `Kore`（Firm トーン、ニュース記事向き — 変更可能）
- サンプルレート: 24kHz
- 出力形式: WAV → ffmpeg で MP3（128kbps）に変換
- 日本語テキストはそのまま送信（Gemini が自動認識）

## アーキテクチャ

### 処理フロー

```
記事 Markdown
    ↓
scripts/generate_audio.ts
    ↓ テキスト抽出・チャンク分割
    ↓ Gemini 2.5 Pro TTS API × N回
    ↓ WAV チャンクを結合
    ↓ ffmpeg で MP3 変換
    ↓
output/YYYY-MM-DD_タイトル/YYYY-MM-DD_タイトル.mp3
    ↓
npm run build:site
    ↓
dist_site/articles/YYYY-MM-DD_タイトル.mp3
```

### 変更・追加ファイル

| ファイル | 操作 | 内容 |
|---------|------|------|
| `scripts/generate_audio.ts` | **新規** | Markdown → テキスト抽出 → Gemini TTS → MP3 生成 |
| `src/render.ts` | 編集 | 記事ページに `<audio>` プレイヤーの HTML/CSS を追加 |
| `scripts/build_static.ts` | 編集 | 音声ファイルを `dist_site/articles/` にコピー |
| `package.json` | 編集 | `@google/genai` 依存追加、`generate:audio` スクリプト追加 |

### 追加パッケージ

| パッケージ | 用途 |
|-----------|------|
| `@google/genai` | Gemini API クライアント（Google AI SDK） |

- `ffmpeg` はシステムにインストール済みであることを前提とする（音声の WAV→MP3 変換に使用）

## 実装の詳細

### `scripts/generate_audio.ts`

```
使い方: tsx scripts/generate_audio.ts <記事Markdownパス>
環境変数: GEMINI_API_KEY
```

#### テキスト抽出ロジック

1. Markdown ファイルを読み込む
2. 正規表現でコードブロック（` ``` `）を除去
3. テーブルは見出し行（`|` 区切りの最初の行）のみ残し「（表は省略します）」を追加
4. 「**参考ソース:**」から次の見出しまでを除去
5. Markdown 記法（`**`, `*`, `[text](url)` → text、`#` 等）を除去してプレーンテキスト化
6. 見出しの前に短い間（改行2つ）を挿入して、読み上げ時の区切りを自然にする

#### チャンク分割

- Gemini TTS の最大出力は約 655 秒（約 11 分）
- 日本語の読み上げ速度は約 300〜350 文字/分
- 安全マージンを取り、**1チャンク最大 2,500 文字**で分割
- `##`（h2）の位置で分割を優先し、h2 が無い場合は段落境界で分割

#### API 呼び出し

```typescript
import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

const response = await ai.models.generateContent({
  model: "gemini-2.5-pro-preview-tts",
  contents: [{ role: "user", parts: [{ text: chunkText }] }],
  config: {
    responseModalities: ["AUDIO"],
    speechConfig: {
      voiceConfig: {
        prebuiltVoiceConfig: { voiceName: "Kore" },
      },
    },
  },
});

// response からインライン音声データ（base64 PCM/WAV）を取得
```

#### 音声結合・変換

1. 各チャンクの WAV データをファイルに保存（`/tmp/chunk_000.wav`, `001.wav`, ...）
2. ffmpeg で結合 + MP3 変換:
   ```bash
   ffmpeg -i "concat:chunk_000.wav|chunk_001.wav|..." -codec:a libmp3lame -b:a 128k output.mp3
   ```
   または ffmpeg の concat demuxer を使用
3. 一時ファイルを削除

### `src/render.ts` の変更

#### `renderArticle()` に `audioSrc` パラメータを追加

```typescript
export async function renderArticle(
  filename: string,
  indexHref = "/",
  audioSrc?: string,  // 追加
): Promise<string | null> {
```

#### CSS 追加

```css
.tts-player {
  margin: 0.8rem 0 1.5rem;
  padding: 0.6rem 1rem;
  background: rgba(44, 44, 44, 0.04);
  border: 1px solid #d5cfc0;
  border-radius: 4px;
}
.tts-player audio {
  width: 100%;
  height: 36px;
}
.tts-player-label {
  font-size: 0.8rem;
  color: #777;
  margin-bottom: 0.3rem;
  letter-spacing: 0.04em;
}
```

#### HTML 追加（`audioSrc` がある場合のみ）

パンくずの直後、本文の前に挿入:

```html
<div class="tts-player">
  <div class="tts-player-label">音声で聴く</div>
  <audio controls preload="none" src="${audioSrc}"></audio>
</div>
```

`preload="none"` でページ読み込み時に音声をダウンロードしない（帯域節約）。

### `scripts/build_static.ts` の変更

記事ループ内で、音声ファイルの存在をチェックしてコピー:

```typescript
// 音声ファイルのコピー
const baseName = article.filename.replace(/\.md$/, "");
const audioSrcPath = path.join("output", baseName, `${baseName}.mp3`);
let audioHref: string | undefined;
try {
  await access(audioSrcPath);
  const audioDest = path.join(ARTICLES_DIR, `${baseName}.mp3`);
  await copyFile(audioSrcPath, audioDest);
  audioHref = `./${baseName}.mp3`;
  console.log(`コピー: articles/${baseName}.mp3`);
} catch {
  // 音声ファイル無し — スキップ
}

// renderArticle に audioSrc を渡す
const html = await renderArticle(article.filename, "../", audioHref);
```

### `package.json` の変更

```json
{
  "scripts": {
    "generate:audio": "tsx scripts/generate_audio.ts"
  },
  "dependencies": {
    "@google/genai": "^1.0.0"
  }
}
```

## 実装ステップ

### Step 1: パッケージ追加
`@google/genai` をインストール。

### Step 2: `scripts/generate_audio.ts` を作成
テキスト抽出 → チャンク分割 → Gemini TTS API 呼び出し → ffmpeg で MP3 変換。

### Step 3: `src/render.ts` を編集
`renderArticle()` に `audioSrc` パラメータを追加。CSS とオーディオプレイヤー HTML を追加。

### Step 4: `scripts/build_static.ts` を編集
音声ファイルの存在チェック・コピー・`renderArticle()` への `audioSrc` 渡し。

### Step 5: 動作確認
- 既存記事で `npm run generate:audio output/YYYY-MM-DD_タイトル/YYYY-MM-DD_タイトル.md` を実行して音声生成を確認
- `npm run build:site` で MP3 が `dist_site/articles/` にコピーされることを確認
- `npm run serve` でプレイヤーが表示され再生できることを確認
- 音声ファイルが無い記事ではプレイヤーが表示されないことを確認

## ファイルサイズの見積もり

- MP3 128kbps: 約 0.94MB/分
- 記事の読み上げ時間: 約 10〜20 分（3,000〜6,000 文字）
- 1 記事あたり: 約 10〜19 MB
- GitHub Pages のリポジトリ上限: 1GB → 約 50〜100 記事分は余裕あり

## コスト見積もり

- Gemini 2.5 Pro TTS: $0.24/100 万文字
- 1 記事あたり約 5,000 文字 → $0.0012/記事
- 事実上無料

## CI について

- GitHub Actions（`pages.yml`）では音声生成を行わない（API キー不要）
- 音声ファイルは記事と一緒に Git にコミット済みの状態でプッシュされる
- `build:site` は既存の MP3 をコピーするだけ

## 対象外（今回のスコープ外）

- リアルタイム音声生成
- 複数ボイスの切り替え UI
- 読み上げ位置のテキストハイライト連動
- チャプターマーカー（将来的に追加可能）
