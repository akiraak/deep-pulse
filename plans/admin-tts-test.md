# 管理画面で音声生成テスト 実装プラン

## 概要

管理画面（port 3001）に音声生成のテスト機能を追加する。記事を選択して音声を生成・再生できるようにし、本番導入前に TTS の品質やパラメータを検証できるようにする。

前提として `scripts/generate_audio.ts`（TTS メインプラン参照）がまだ存在しないため、本タスクでこのスクリプトも合わせて実装する。

## 機能仕様

### 1. TTS テストページ（`/tts`）

管理画面のナビゲーションに「TTS テスト」リンクを追加し、専用ページを設ける。

#### UI 構成

```
┌────────────────────────────────────────────┐
│ TTS テスト                                  │
├────────────────────────────────────────────┤
│ ■ キャラクター                              │
│ (●) ちょビ（先生）  ( ) なるこ（生徒）      │
│                                            │
│ ■ 記事から生成                              │
│ ┌──────────────────────────────────┐       │
│ │ [記事を選択 ▼]                    │       │
│ └──────────────────────────────────┘       │
│ [記事全体を生成]                            │
│                                            │
│ ■ テキストから生成                          │
│ ┌──────────────────────────────────┐       │
│ │                                  │       │
│ │ （テキスト入力エリア）            │       │
│ │                                  │       │
│ └──────────────────────────────────┘       │
│ 文字数: 0                                  │
│ [音声を生成]                               │
│                                            │
│ ■ 生成結果                                 │
│ ┌──────────────────────────────────┐       │
│ │ [ステータス表示]                  │       │
│ │ [<audio> プレイヤー]             │       │
│ │ [ダウンロードリンク]              │       │
│ └──────────────────────────────────┘       │
└────────────────────────────────────────────┘
```

#### 機能詳細

- **記事から生成**: ドロップダウンで記事を選択し、Markdown からテキストを抽出して TTS 生成。生成した MP3 は記事ディレクトリに保存される
- **テキストから生成**: 任意のテキストを入力して TTS テスト。一時ファイルとして生成し、ブラウザで再生のみ（保存しない）
- **生成結果**: 生成中のステータス（チャンク進捗）、完了後にオーディオプレイヤーとダウンロードリンクを表示

### 2. API エンドポイント

| メソッド | パス | 説明 |
|---------|------|------|
| POST | `/tts/generate` | 記事全体の音声生成（MP3 を記事ディレクトリに保存） |
| POST | `/tts/test` | テキストから音声生成（一時ファイル、保存しない） |
| GET | `/tts/status` | 生成中のジョブ進捗を返す |
| GET | `/tts/audio/:filename` | 生成済み音声ファイルを配信（記事ディレクトリ or 一時ファイル） |

#### `POST /tts/generate`

リクエスト:
```json
{ "filename": "2025-04-01_記事タイトル.md", "characterId": "chobi" }
```

レスポンス:
```json
{ "success": true, "jobId": "abc123" }
```

- バックグラウンドで `generate_audio.ts` のロジックを実行
- 生成完了後、`output/YYYY-MM-DD_タイトル/YYYY-MM-DD_タイトル.mp3` に保存

#### `POST /tts/test`

リクエスト:
```json
{ "text": "テストしたいテキスト", "characterId": "naruko" }
```

レスポンス:
```json
{ "success": true, "jobId": "def456" }
```

- 送信されたテキストをそのまま TTS に渡す（Markdown 解析なし）
- `/tmp/deep-pulse-tts/` に一時 MP3 を生成

#### `GET /tts/status`

レスポンス:
```json
{
  "jobId": "abc123",
  "status": "processing",
  "progress": { "current": 2, "total": 5 },
  "message": "チャンク 2/5 を処理中..."
}
```

または完了時:
```json
{
  "jobId": "abc123",
  "status": "done",
  "audioUrl": "/tts/audio/2025-04-01_記事タイトル.mp3"
}
```

#### `GET /tts/audio/:filename`

- 記事ディレクトリ内の MP3 または `/tmp/deep-pulse-tts/` 内の一時 MP3 を `audio/mpeg` で配信

## キャラクター設定

ai-twitch-cast のキャラクター定義を取り込み、キャラクターごとに異なる声・スタイルで読み上げる。

### キャラクター定義

| キャラ | 役割 | Gemini ボイス | スタイル指示 |
|--------|------|---------------|-------------|
| **ちょビ** | 先生（メイン解説） | Despina | 終始にこにこしているような、柔らかく楽しげなトーンで読み上げてください |
| **なるこ** | 生徒（合いの手・質問） | Kore | 元気で明るい声で、好奇心いっぱいに読み上げてください |

- キャラクター定義は `src/tts_characters.ts` に配列として管理する
- 各キャラクターは `id`, `name`, `voiceName`, `stylePrompt` を持つ
- 管理画面の TTS テストページでキャラクターを選択可能にする
- API エンドポイントに `characterId` パラメータを追加する
- 記事全体の生成時は「ちょビ」をデフォルトとする

### キャラクター型定義

```typescript
export interface TtsCharacter {
  id: string;
  name: string;
  voiceName: string;      // Gemini TTS ボイス名
  stylePrompt: string;    // 読み上げスタイル指示（system_instruction として送信）
}
```

### Gemini TTS API でのスタイル指示

`system_instruction` にキャラクターの `stylePrompt` を渡すことで、声のトーン・雰囲気を制御する:

```typescript
const response = await ai.models.generateContent({
  model: "gemini-2.5-flash-preview-tts",
  contents: [{ role: "user", parts: [{ text: chunkText }] }],
  config: {
    responseModalities: ["AUDIO"],
    speechConfig: {
      voiceConfig: {
        prebuiltVoiceConfig: { voiceName: character.voiceName },
      },
    },
    systemInstruction: character.stylePrompt,
  },
});
```

## アーキテクチャ

### 変更・追加ファイル

| ファイル | 操作 | 内容 |
|---------|------|------|
| `scripts/generate_audio.ts` | 済 | Markdown → テキスト抽出 → Gemini TTS → MP3 生成（メインプラン準拠） |
| `src/tts.ts` | 済 | TTS コアロジックをモジュール化。`generate_audio.ts` と管理画面の両方から使う |
| `src/tts_characters.ts` | **新規** | キャラクター定義（ちょビ・なるこ） |
| `src/admin.ts` | 編集 | TTS テストページにキャラクター選択 UI を追加、API に `characterId` パラメータ追加 |
| `package.json` | 済 | `@google/genai` 依存追加、`generate:audio` スクリプト追加 |

### モジュール構成

```
src/tts_characters.ts（キャラクター定義）
  └── TTS_CHARACTERS: TtsCharacter[]  # ちょビ・なるこ等
  └── getCharacter(id: string): TtsCharacter

src/tts.ts（コアロジック）
  ├── extractTextFromMarkdown(md: string): string     # Markdown → 読み上げ用テキスト
  ├── splitIntoChunks(text: string): string[]          # チャンク分割
  ├── generateAudioChunk(text: string, character): Buffer  # 1チャンク TTS（キャラ指定）
  ├── concatAndConvertToMp3(wavFiles: string[]): string # WAV 結合 → MP3
  └── generateArticleAudio(mdPath: string, opts?): MP3パス  # 一連の処理をまとめた関数

scripts/generate_audio.ts（CLIエントリーポイント）
  └── src/tts.ts を呼び出すだけ（--character オプション対応）

src/admin.ts（管理画面）
  └── src/tts.ts を呼び出して TTS テスト機能を提供（キャラ選択 UI 付き）
```

### ジョブ管理

- インメモリの Map でジョブ状態を管理（`Map<string, TtsJob>`）
- 同時実行は 1 ジョブまで（API キーのレートリミット考慮）
- ジョブは生成完了後 30 分で自動クリーンアップ

```typescript
interface TtsJob {
  id: string;
  status: "queued" | "processing" | "done" | "error";
  progress: { current: number; total: number };
  message: string;
  audioPath?: string;  // 完了時の MP3 パス
  error?: string;
  createdAt: number;
}
```

## 実装ステップ

### Step 1: パッケージ追加（済）

`@google/genai` をインストール。

### Step 2: `src/tts.ts` を作成（済）

TTS コアロジックをモジュールとして実装（メインプランの仕様に準拠）。

### Step 3: `scripts/generate_audio.ts` を作成（済）

CLI エントリーポイント。`src/tts.ts` を呼び出すだけのラッパー。

### Step 4: `src/admin.ts` を編集（済・キャラ対応で再編集）

TTS テストページ・API エンドポイント・ナビゲーション追加。

### Step 5: `src/tts_characters.ts` を新規作成（済）

- `TtsCharacter` インターフェース定義
- ちょビ・なるこの 2 キャラクターを定義
- `getCharacter(id)` ヘルパー関数

### Step 6: `src/tts.ts` を編集 — キャラクター対応（済）

- `generateAudioChunk()` に `TtsCharacter` パラメータを追加
- `systemInstruction` で `stylePrompt` を送信
- `voiceName` をキャラクターから取得するように変更
- `generateArticleAudio()` / `generateTextAudio()` にもキャラクターパラメータ追加

### Step 7: `src/admin.ts` を編集 — キャラクター選択 UI（済）

- TTS テストページにキャラクター選択（ラジオボタン）を追加
- `POST /tts/generate`・`POST /tts/test` に `characterId` パラメータを追加
- 選択したキャラクターを `src/tts.ts` に渡す

### Step 8: `scripts/generate_audio.ts` を編集 — `--character` オプション（済）

- CLI 引数で `--character chobi` / `--character naruko` を受け付ける
- デフォルトは `chobi`

### Step 9: 動作確認

- `GEMINI_API_KEY` を設定して管理画面を起動
- ちょビ / なるこを切り替えてテキスト TTS テスト
- 記事選択で全文の TTS 生成テスト
- 進捗表示・エラーハンドリングの確認
- CLI（`scripts/generate_audio.ts --character naruko`）からの動作確認

## 環境変数

| 変数 | 必須 | 説明 |
|------|------|------|
| `GEMINI_API_KEY` | Yes | Gemini API キー |
| `ADMIN_PORT` | No | 管理画面ポート（デフォルト: 3001） |

- API キー未設定時は TTS テストページに警告を表示し、生成ボタンを無効化する

## 前提条件

- `ffmpeg` がシステムにインストール済みであること
- `GEMINI_API_KEY` が設定済みであること
