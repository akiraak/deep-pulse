# 音声読み上げ機能 実装プラン

## 概要

記事ページに音声読み上げボタンを追加し、ブラウザの Web Speech API（SpeechSynthesis）で記事本文を日本語音声で読み上げる。外部 API やサーバーサイド処理は不要で、GitHub Pages の静的サイトでもそのまま動作する。

## 技術選定

| 選択肢 | メリット | デメリット |
|--------|---------|-----------|
| **Web Speech API（採用）** | 無料、API キー不要、クライアント完結、全モダンブラウザ対応 | 音声品質はブラウザ/OS 依存、日本語ボイスの有無は環境次第 |
| Google Cloud TTS 等 | 高品質 | 有料、API キー管理、サーバー or ビルド時生成が必要 |

→ プロジェクトの静的サイト構成に合致する **Web Speech API** を採用する。

## 機能仕様

### UI

- 記事ページのヘッダー（パンくず下）に読み上げコントロールバーを表示
  - ▶ 再生 / ⏸ 一時停止 / ⏹ 停止 の 3 ボタン
  - 読み上げ速度スライダー（0.5x 〜 2.0x、デフォルト 1.0x）
  - 現在読み上げ中のセクション名を表示
- トップページ（記事一覧）には表示しない
- サイトのクラシック新聞風デザインに馴染むスタイリング

### 読み上げ対象

- 記事本文のテキストを対象とする
- **除外するもの:**
  - Chart.js グラフ（`<canvas>` / `<script>` ブロック）
  - Mermaid 図（`.mermaid-wrapper` 内）
  - `<pre><code>` コードブロック
  - テーブル（`<table>`）— 読み上げると冗長になるため、見出し行のみ読み上げて「（表は省略します）」と案内する
  - 「参考ソース:」リスト — URL の羅列は読み上げに不適
- **含めるもの:**
  - 見出し（h1 〜 h3）
  - 段落（`<p>`）
  - リスト（`<ul>`, `<ol>`）
  - 引用（`<blockquote>`）

### 読み上げ制御

- テキストをセクション（`<h2>` 区切り）ごとにチャンクに分割して読み上げる
  - SpeechSynthesis は 1 発話あたりの文字数に制限があるブラウザがあるため、さらにパラグラフ単位で分割
- セクション読み上げ中に該当の `<h2>` をハイライト表示（薄い背景色）する
- ページ離脱時に自動停止する

### 日本語音声

- `speechSynthesis.getVoices()` から `lang === "ja-JP"` のボイスを優先的に選択
- 日本語ボイスが無い環境ではデフォルトボイスにフォールバックし、コントロールバーに注記を表示

## アーキテクチャ

### 変更ファイル

| ファイル | 操作 | 内容 |
|---------|------|------|
| `src/render.ts` | 編集 | 記事ページの HTML に TTS コントロール UI + JavaScript を追加 |

- 新規ファイルの追加は不要
- 既存の Chart.js / Mermaid.js と同じパターン（HTML テンプレート内にインライン JS）で実装する
- `build_static.ts`・`server.ts` の変更は不要（`render.ts` の変更が自動的に反映される）

### 実装箇所の詳細

#### `src/render.ts` の変更点

1. **CSS 追加** — `CSS` 定数に TTS コントロールバーのスタイルを追加
   - `.tts-bar`: コントロールバーのコンテナ（記事ヘッダー下に固定表示ではなくフロー内配置）
   - `.tts-btn`: ボタンスタイル（サイトのダークトーンに合わせる）
   - `.tts-btn.active`: 再生中ボタンのアクティブ状態
   - `.tts-speed`: 速度スライダー
   - `.tts-status`: 現在のセクション名表示
   - `.tts-reading`: 読み上げ中セクションのハイライト
   - レスポンシブ対応（モバイルではボタンを小さくする）

2. **HTML 追加** — `wrapHtml()` 関数で、記事ページ（`breadcrumb` がある場合）のみ `body` の前に TTS コントロールバー HTML を挿入
   ```html
   <div class="tts-bar" id="tts-bar">
     <button class="tts-btn" id="tts-play" title="再生">▶</button>
     <button class="tts-btn" id="tts-pause" title="一時停止" disabled>⏸</button>
     <button class="tts-btn" id="tts-stop" title="停止" disabled>⏹</button>
     <label class="tts-speed-label">
       速度: <input type="range" id="tts-speed" class="tts-speed" min="0.5" max="2" step="0.1" value="1">
       <span id="tts-speed-val">1.0x</span>
     </label>
     <span class="tts-status" id="tts-status"></span>
   </div>
   ```

3. **JavaScript 追加** — `</body>` の前に `<script>` ブロックを追加。内容:
   - `extractReadableText()`: DOM から読み上げ対象テキストをセクション単位で抽出
     - `querySelectorAll` で本文要素を走査
     - chart / mermaid / code / 参考ソースリストを除外
     - テーブルは見出し行のテキストのみ取得 + 「（表は省略します）」を追加
   - `splitIntoUtterances(sections)`: 各セクションをさらにパラグラフ単位に分割し、`SpeechSynthesisUtterance` の配列を生成
   - `selectJapaneseVoice()`: 日本語ボイスを選択するヘルパー
   - 再生/一時停止/停止のイベントハンドラー
   - 速度スライダーの変更ハンドラー
   - セクションハイライトの制御
   - `beforeunload` イベントでの自動停止

## 実装ステップ

### Step 1: CSS の追加
`render.ts` の `CSS` 定数末尾に TTS コントロールバーのスタイルを追加する。

### Step 2: HTML コントロールバーの追加
`wrapHtml()` 関数内で、記事ページ判定（`breadcrumb` の有無）に基づいて TTS バーの HTML を `<header>` と本文の間に挿入する。

### Step 3: JavaScript の実装
`wrapHtml()` 関数で記事ページの場合のみ `</body>` の前に TTS 用の `<script>` を挿入する。

### Step 4: 動作確認
- `npm run serve` で起動し、記事ページで読み上げが動作することを確認
- `npm run build:site` で静的ビルドが正常に完了することを確認
- モバイル幅でのレスポンシブ表示を確認

## 追加パッケージ

なし（Web Speech API はブラウザ組み込み）

## ブラウザ対応状況

- Chrome / Edge: 日本語ボイス複数あり。最も安定
- Safari (macOS/iOS): 日本語ボイスあり。iOS では初回タップが必要（autoplay 制限）
- Firefox: 日本語ボイスは OS 依存。Linux では少ない場合がある

## 対象外（今回のスコープ外）

- 音声ファイル（mp3 等）の事前生成・配信
- 外部 TTS API の利用
- 読み上げ位置の記事内スクロール追従
- 音声のダウンロード機能
