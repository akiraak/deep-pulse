# 音声読み上げ機能 実装プラン

## 概要

記事生成時に Gemini 2.5 Flash Preview TTS API で音声ファイル（MP3）を事前生成し、GitHub Pages で配信する。記事ページには HTML5 `<audio>` プレイヤーを表示する。

管理画面（port 3001）に TTS テストページを設け、キャラクター選択・テキスト入力・記事選択で音声生成を試せるようにした。

## 実装状況

| 項目 | ステータス |
|------|-----------|
| TTS コアロジック（`src/tts.ts`） | 済 |
| キャラクター定義（`src/tts_characters.ts`） | 済 |
| CLI エントリーポイント（`scripts/generate_audio.ts`） | 済 |
| 管理画面 TTS テストページ（`src/admin.ts`） | 済 |
| 記事ページへの `<audio>` プレイヤー埋め込み（`src/render.ts`） | 済 |
| 静的サイトビルドでの MP3 コピー（`scripts/build_static.ts`） | 済 |

## 技術選定

| 選択肢 | メリット | デメリット |
|--------|---------|-----------|
| Web Speech API | 無料、API キー不要 | 音声品質がブラウザ/OS 依存、日本語の自然さが低い |
| ElevenLabs | 英語は最高品質 | 日本語が弱い（WER 10.65%）、高額 |
| Fish Audio S2 | ベンチマーク最強、日本語 Tier1 | 商用ライセンス要交渉、OSS ではない |
| **Gemini 2.5 Flash Preview TTS（採用）** | 日本語ナレーション品質が高い、安価、ユーザーが既に API キーを保有 | レイテンシ高（事前生成で回避）、最大出力 ~655秒/リクエスト |

## キャラクター設定

ai-twitch-cast のキャラクター定義を取り込み、キャラクターごとに異なる声・スタイルで読み上げる。

| キャラ | 役割 | Gemini ボイス | スタイル指示 |
|--------|------|---------------|-------------|
| **ちょビ** | 先生（メイン解説） | Despina | 終始にこにこしているような、柔らかく楽しげなトーンで読み上げてください |
| **なるこ** | 生徒（合いの手・質問） | Kore | 元気で明るい声で、好奇心いっぱいに読み上げてください |

- キャラクター定義は `src/tts_characters.ts` に配列として管理
- 各キャラクターは `id`, `name`, `voiceName`, `stylePrompt` を持つ
- デフォルトは「ちょビ」

## アーキテクチャ

### モジュール構成

```
src/tts_characters.ts（キャラクター定義）
  ├── TTS_CHARACTERS: TtsCharacter[]
  └── getCharacter(id: string): TtsCharacter

src/tts.ts（コアロジック）
  ├── extractTextFromMarkdown(md): string        # Markdown → 読み上げ用テキスト
  ├── splitIntoChunks(text): string[]             # チャンク分割（2,500文字単位）
  ├── generateAudioChunk(text, apiKey, character): Buffer  # 1チャンク TTS
  ├── concatAndConvertToMp3(wavFiles): string     # WAV 結合 → MP3
  ├── generateArticleAudio(mdPath, outputMp3Path, apiKey, onProgress?, characterId?)  # 記事全体
  └── generateTextAudio(text, apiKey, onProgress?, characterId?)  # テキスト直接（テスト用）

scripts/generate_audio.ts（CLIエントリーポイント）
  └── src/tts.ts を呼び出す（--character オプション対応）

src/admin.ts（管理画面）
  └── src/tts.ts を呼び出して TTS テスト機能を提供
```

### 処理フロー

```
記事 Markdown or テキスト入力
    ↓
テキスト抽出・チャンク分割（2,500文字/チャンク）
    ↓
Gemini 2.5 Flash Preview TTS API × N回
  （キャラクターの voiceName + stylePrompt を適用）
    ↓
WAV チャンクを結合
    ↓
ffmpeg で MP3 変換
    ↓
output/YYYY-MM-DD_タイトル/YYYY-MM-DD_タイトル.mp3（記事生成時）
or /tmp/deep-pulse-tts/（テスト時）
```

### 読み上げ対象テキストの抽出ルール

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

## 管理画面 TTS テストページ（実装済み）

### UI 構成

```
┌────────────────────────────────────────────┐
│ TTS テスト                                  │
├────────────────────────────────────────────┤
│ ■ キャラクター                              │
│ (●) ちょビ（先生）  ( ) なるこ（生徒）      │
│                                            │
│ ■ 記事から生成                              │
│ [記事を選択 ▼]                              │
│ [記事全体を生成]                            │
│                                            │
│ ■ テキストから生成                          │
│ [テキスト入力エリア（6行）]                  │
│ 文字数: 0                                  │
│ [音声を生成]                               │
│                                            │
│ ■ 生成結果                                 │
│ [ステータス + プログレスバー]               │
│ [<audio> プレイヤー]                       │
│ [ダウンロードリンク]                        │
└────────────────────────────────────────────┘
```

### API エンドポイント

| メソッド | パス | 説明 |
|---------|------|------|
| POST | `/tts/generate` | 記事全体の音声生成（MP3 を記事ディレクトリに保存） |
| POST | `/tts/test` | テキストから音声生成（一時ファイル、保存しない） |
| GET | `/tts/status` | 生成中のジョブ進捗を返す |
| GET | `/tts/audio/:filename` | 生成済み音声ファイルを配信 |

### ジョブ管理

- インメモリ Map でジョブ状態を管理（`Map<string, TtsJob>`）
- 同時実行は 1 ジョブまで（API レートリミット考慮）
- ジョブは生成完了後 30 分で自動クリーンアップ
- ブラウザ側は 1.5 秒間隔でポーリングして進捗を表示

### Gemini TTS API 呼び出し

```typescript
const ai = new GoogleGenAI({ apiKey });
const response = await ai.models.generateContent({
  model: "gemini-2.5-flash-preview-tts",
  contents: [{ role: "user", parts: [{ text: prompt }] }],
  config: {
    responseModalities: ["AUDIO"],
    speechConfig: {
      voiceConfig: {
        prebuiltVoiceConfig: { voiceName: character.voiceName },
      },
    },
  },
});
```

キャラクターの `stylePrompt` はプロンプトの前置きとしてテキストに組み込む。

## CLI（実装済み）

```bash
tsx scripts/generate_audio.ts <記事Markdownパス> [--character chobi|naruko]
```

- デフォルトキャラクターは `chobi`
- 環境変数 `GEMINI_API_KEY` が必要

## 変更・追加ファイル一覧

| ファイル | 操作 | 内容 |
|---------|------|------|
| `src/tts.ts` | **新規（済）** | TTS コアロジック（テキスト抽出・チャンク分割・API呼び出し・MP3変換） |
| `src/tts_characters.ts` | **新規（済）** | キャラクター定義（ちょビ・なるこ） |
| `scripts/generate_audio.ts` | **新規（済）** | CLI エントリーポイント（--character オプション対応） |
| `src/admin.ts` | 編集（済） | TTS テストページ・API エンドポイント・ナビゲーション追加 |
| `src/admin_index.ts` | 編集（済） | `.env` ファイル読み込み処理を追加 |
| `package.json` | 編集（済） | `@google/genai` 依存追加 |
| `.env.example` | **新規（済）** | 環境変数設定例 |
| `src/render.ts` | 編集（済） | 記事ページに `<audio>` プレイヤーの HTML/CSS を追加 |
| `scripts/build_static.ts` | 編集（済） | 音声ファイルを `dist_site/articles/` にコピー |

## 実装完了

すべての項目が実装済み。

### 記事ページへの `<audio>` プレイヤー埋め込み

- `src/render.ts` の `renderArticle()` に `audioSrc` パラメータを追加
- h1 タイトル直下（サブタイトル blockquote があればその直後）にオーディオプレイヤーを挿入
- 音声ファイルが無い記事にはプレイヤーを表示しない

### 静的サイトビルドでの MP3 コピー

- `scripts/build_static.ts` で音声ファイルの存在をチェックし `dist_site/articles/` にコピー
- `renderArticle()` に `audioSrc` を渡す

## 環境要件

| 要件 | 説明 |
|------|------|
| `GEMINI_API_KEY` | Google AI Studio で取得した Gemini API キー（必須） |
| `ADMIN_PORT` | 管理画面ポート（デフォルト: 3001、オプション） |
| `ffmpeg` | システムにインストール済みであること |

## コスト見積もり

- Gemini 2.5 Flash Preview TTS: 低コスト
- 1 記事あたり約 5,000 文字 → 事実上無料

## CI について

- GitHub Actions（`pages.yml`）では音声生成を行わない（API キー不要）
- 音声ファイルは記事と一緒に Git にコミット済みの状態でプッシュされる
- `build:site` は既存の MP3 をコピーするだけ
