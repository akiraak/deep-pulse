---
url: https://deepmind.google/models/veo/
title: "Veo — Google DeepMind"
---

注: 元ページの動的コンテンツの抽出が限定的だったため、WebFetch (Claude API 内部経由) でまとめた要約を掲載。

## 概要

Google DeepMind の動画生成モデル Veo の最新版は **Veo 3.1**。「Video, meet audio. Our latest video generation model, designed to empower filmmakers and storytellers.」と紹介され、ネイティブ音声統合の進化が強調されている。

## 主要機能

### 動画生成

- **解像度**: 1080p および 4K
- **長さ**: 標準で 8 秒の動画
- **音声**: 動画と同期したダイアログ・効果音・環境音のネイティブ生成

### 制御機能

- **参照ベース生成**: シーン、キャラクター、物体の参照画像を提供して生成を誘導
- **スタイル転送**: スタイル参照画像で一貫した美的表現を適用
- **キャラクター一貫性**: 参照画像により異なるシーン間でキャラクターの外見を保持
- **シーン拡張**: 最終フレームを使ってクリップを延長
- **オブジェクトの挿入・削除**: 自然な構図を保ちつつ要素を追加・削除
- **カメラコントロール**: ズーム、パン、移動を精密に指定
- **First/Last frame transitions**: 提供されたキーフレーム間で滑らかに遷移

## 技術的性能

### 物理・リアリズム

「real world physics and audio」を強調し、MovieGenBench ベンチマークの人間評価で「visually realistic physics」について「state of the art results」を達成。

### プロンプト追従

「improved prompt adherence, meaning more accurate responses to your instructions」と競合システムに対する優位性を主張。

### ベンチマーク

MovieGenBench および VBench で次の項目をリード:
- 全体的な選好度
- text-to-video の正確性
- image-to-video の品質
- 音声・映像の同期

## バージョン履歴

| バージョン | 主な機能 |
|-----------|---------|
| Veo 1 | 初期リリース |
| Veo 2 | 前世代 |
| Veo 3 | 制御機能の拡張、長尺対応 |
| **Veo 3.1** | ネイティブ音声生成、物理向上、プロンプト追従改善 |

2026 年には **Veo 3.1 Lite** がリリースされ、「Veo 3.1 Fast の 50% 未満のコスト、同じスピード」での高ボリュームアプリケーション向けが提供開始。

## 利用可能な経路

- Gemini（Web インターフェース）
- Flow（映像制作専用ツール）
- Google Vids（職場向け動画作成）
- Google AI Studio（開発者向け）
- Gemini API
- Vertex AI Studio（エンタープライズ）

## 安全性とウォーターマーク

「SynthID」によるウォーターマーキング — 「AI が生成したコンテンツのウォーターマークと検出のための先進技術」。記憶コンテンツや安全性チェックも実施。

## 提携先

- **Primordial Soup**（ダーレン・アロノフスキー監督との実写・Veo 統合短編 3 作品）
- **Promise Studios**（MUSE プラットフォームでのストーリーボード）
- **Volley Games**（AI 駆動 RPG シネマティクス）
- **OpusClip**（モーショングラフィックスとプロモ動画）

## 既知の限界

「短い発話セグメントで自然で一貫した音声を作ることは、引き続き活発な開発領域」。音声同期と一貫した発話の生成が継続的な開発優先事項。
