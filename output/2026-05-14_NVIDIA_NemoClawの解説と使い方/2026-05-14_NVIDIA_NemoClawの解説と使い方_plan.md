# 記事プラン: NVIDIA NemoClaw の解説と使い方 — 常時稼働 AI エージェントを"安全に"動かす NVIDIA のリファレンススタック

## ユーザー指示

> 記事を作成します「NVIDIA NemoClaw の解説と使い方」

## 記事タイトル（案）

**「NVIDIA NemoClaw の解説と使い方 — 常時稼働 AI エージェントを"安全に"動かすリファレンススタック」**

別案:
- 「OpenClaw を箱の中で動かす — NVIDIA NemoClaw 入門」
- 「自分のマシンで 24/7 AI エージェントを動かす：NemoClaw 完全ガイド」

## 記事の狙いと構成方針

- **対象読者**: 「自分のマシンや DGX Spark / RTX PC で AI エージェントを動かしたい」開発者・技術者。Docker と CLI に抵抗がない層
- **ユーザー指定の論点は2つ**: ①NemoClaw とは何か（解説）、②どうやって使うのか（使い方）
- 最大の混乱ポイントは **NemoClaw / OpenShell / OpenClaw の三層構造**。これを冒頭でテーブル + Mermaid 図で一気に整理する
- 「なぜ存在するのか」= **自律エージェントのセキュリティ問題**（任意のネットワーク・FS アクセス・推論先呼び出しが野放しだとリスク爆増）を最初に置いてフレーミングする
- 「使い方」は curl ワンライナーで始まる **`nemoclaw onboard` のウィザード**を中心にコマンドベースで具体的に示す
- 8つの推論プロバイダ選択肢は表で一覧化し、典型的な選び方を一言で添える
- スタイルガイドに従い、一文を短く区切る／専門用語にその場で噛み砕き／論理の節目に接続フレーズ／本文中インラインリンクを徹底
- 現在は **early preview**（2026-03-16 公開）であり、production-ready ではない点を明示する
- 「Nvidia's version of OpenClaw」という TechCrunch の表現に表れる **「OpenAI の Claude / Codex ローカル版」のような立ち位置**を最後にひと言で位置づける

## 記事構成（セクション一覧）

### 1. リード：常時稼働のエージェントを"あなたの箱"で動かすという選択肢

- 一言サマリ: NemoClaw は、OpenClaw（自前ホストできるエージェント・ゲートウェイ）を **OpenShell サンドボックス**の中で安全に動かすための NVIDIA 公式リファレンススタック
- 公開日: **2026年3月16日、GTC 2026 で発表**、現在 early preview
- 何が嬉しいのか:
  - 自宅 RTX PC / DGX Spark / DGX Station / クラウド GPU の上で、自分の AI エージェントを 24/7 走らせられる
  - 推論をローカルで完結できるのでデータが外に出ない
  - サンドボックスがネットワーク・ファイルシステム・推論先まで縛るので「夜中にエージェントが暴走」しにくい
- 例え話（抽象→具体）: ChatGPT を毎回開いて指示するのが「外食」だとすれば、NemoClaw は「**家のキッチンに専属シェフを住み込ませる**」発想に近い。ただし、刃物の扱いはルールで縛ってある
- **参考ソース:** 001 (NVIDIA 公式), 008 (NVIDIA Blog GTC2026), 010 (TechCrunch), 011 (NVIDIA Forum)

### 2. NemoClaw / OpenShell / OpenClaw — 3つの登場人物を一気に整理

- いきなり名前が3つ出てきて混乱しやすいので、最初に俯瞰する
- **3者の役割テーブル**:

| プロジェクト | 何を担当するか | 立ち位置の比喩 |
|---|---|---|
| **OpenClaw** | エージェント本体（ランタイム、ツール、メモリ、振る舞い） | 厨房で実際に料理を作る**シェフ** |
| **OpenShell** | サンドボックス（ネットワーク・FS・プロセス・推論ルーティング） | シェフを閉じ込める**厨房そのもの** |
| **NemoClaw** | OpenClaw を OpenShell に載せるための CLI・ブループリント・オンボーディング | 厨房にシェフを住まわせる**段取り係** |

- **Mermaid 図**（公式ドキュメントの構造をそのまま日本語化）:
  ```
  NemoClaw (CLI / plugin / blueprint)
      ↓ orchestrates
  OpenShell (Gateway / policy / inference routing)
      ↓ isolates and runs
  OpenClaw (Assistant in sandbox)
  ```
- **ここで効いてくる事実**: NemoClaw は OpenClaw も OpenShell も置き換えない。**両者を NVIDIA のおすすめ構成でひと束にした薄いラッパー**である
- **参考ソース:** 005 (Docs Overview), 006 (Docs How it works), 015 (Docs Ecosystem)

### 3. なぜ NemoClaw が必要なのか — 自律エージェントの3つのリスク

- 段落冒頭で結論: 自律 AI エージェントは「**任意のネット先に接続**」「**ホストの FS にアクセス**」「**任意の推論エンドポイントを呼ぶ**」ができてしまうので、ガードレールなしで放置するとセキュリティ・コスト・コンプライアンス全部のリスクが膨らむ
- 3つのリスクを箇条書きで:
  - **ネットワーク**: 知らないホストに勝手に外向き接続
  - **ファイルシステム**: ホストの秘密ファイルを読みに行く / 書き換える
  - **推論コスト**: 高いモデルを叩き続ける、APIキーを巻き込んだ事故
- NemoClaw が用意する **4層の保護**を表で整理（次セクションに繋ぐ）
- **参考ソース:** 005 (Docs Overview), 006 (Docs How it works), 010 (TechCrunch)

### 4. アーキテクチャ — High-Level コンポーネント図

- 公式の High-Level Component Diagram を日本語化して Mermaid で再現
- **構成要素テーブル**:

| コンポーネント | 役割 |
|---|---|
| Users / operators | CLI・インストーラ・ダッシュボード・チャネルからの起点 |
| NemoClaw control | 設定収集、オンボーディング、ブループリント準備、OpenShell へのリソース要求 |
| OpenShell gateway | サンドボックスのライフサイクル・ネットワーク・ポリシー実行・推論ルーティング・統合の egress 管理 |
| NemoClaw sandbox | OpenClaw + NemoClaw plugin + ブループリント内容 + 補助ツール |
| Inference | NVIDIA Endpoints / NIM / OpenAI 互換 API へのモデルリクエスト受け口 |
| Integrations | Telegram / Discord / Slack / MCP / GitHub などへのゲートウェイ経由 egress |
| State / artifacts | 認証情報・ログ・ワークスペース・ポリシー・トランスクリプトの永続化 |

- **設計原則の要点**:
  - Thin plugin, versioned blueprint（プラグインは薄く、ブループリントは別ペースで進化）
  - Supply chain safety（ブループリントは digest 検証）
  - Reproducible setup（再実行で同じサンドボックスができる）
- **参考ソース:** 006 (Docs How it works), 017 (Docs Architecture)

### 5. 6つの主要機能（Key Features）

- 公式 Overview の Features 表を**そのままテーブルで**載せ、各項目に1行の噛み砕き説明を添える

| 機能 | 公式の要約 | 噛み砕き |
|---|---|---|
| Guided onboarding | 1コマンドでクレデンシャル検証・プロバイダ選択・サンドボックス生成 | 「最初の対話セットアップ」 |
| Hardened blueprint | capability drop・最小権限ネットワーク・宣言的ポリシーを内包した Dockerfile | 「最初から鍵がかかった部屋」 |
| State management | 認証情報を剥がして他マシンに移行できるエージェント状態管理 | 「引っ越し用パッキング」 |
| Messaging channels | Telegram / Discord / Slack を OpenShell 経由で接続 | 「外の連絡口を別室から繋ぐ」 |
| Routed inference | NVIDIA / OpenAI / Anthropic / Gemini / Ollama / vLLM などへの透過的ルーティング | 「モデルを差し替え自由に」 |
| Layered protection | ネットワーク・FS・プロセス・推論の各層を hot-reload またはロック | 「四重の鍵」 |

- **参考ソース:** 005 (Docs Overview)

### 6. 4層の保護（Protection Layers）— 何を、いつ縛るのか

- スタイルガイドに沿い**問題なし / 問題あり**の切り分け表ではなく「**いつ効くのか**」を明示するテーブル:

| 層 | 何を守るか | いつ効くか |
|---|---|---|
| Network | 未許可の outbound 接続をブロック | 実行時 hot-reload 可 |
| Filesystem | 系統パス（/usr, /lib, /etc）を読み取り専用に、/sandbox と /tmp のみ書き込み可 | サンドボックス作成時にロック |
| Process | 特権昇格と危険な syscall をブロック、`ulimit -u 512` で fork-bomb 対策 | サンドボックス作成時にロック |
| Inference | モデル API 呼び出しをコントロールされたバックエンドにルーティング | 実行時 hot-reload 可 |

- 未登録ホストへのアクセスは TUI でオペレータ承認を求める仕組み（一度承認すれば当該セッション中は通る）
- **参考ソース:** 005 (Docs Overview), 006 (Docs How it works), 020 (Docs Network Policies), 021 (Docs Sandbox Hardening)

### 7. インストール — curl ワンライナーで始まる5分セットアップ

- 段落冒頭で要点: **インストーラ1本 + 対話ウィザード**で完結する設計
- **基本コマンド**（インラインリンクで公式ドキュメントへ）:
  ```bash
  curl -fsSL https://www.nvidia.com/nemoclaw.sh | bash
  ```
- インストーラが自動でやること:
  - Node.js が無ければ入れる
  - Docker が無ければ公式 convenience script を呼んで sudo で入れる
  - `nemoclaw onboard` を自動起動
- **ヘッドレス／CI 用**:
  ```bash
  curl -fsSL https://www.nvidia.com/nemoclaw.sh \
    | NEMOCLAW_NON_INTERACTIVE=1 NEMOCLAW_ACCEPT_THIRD_PARTY_SOFTWARE=1 bash
  ```
- DGX Spark / DGX Station では **express install** が選べ、推奨ポリシーとマネージドローカル推論が一発で入る
- nvm/fnm 利用時の `source ~/.bashrc` の罠も補足
- **参考ソース:** 014 (Docs Quickstart), 007 (NVIDIA DevBlog DGX Spark Tutorial)

### 8. オンボードウィザード — 8つの推論プロバイダから選ぶ

- ウィザード本体は次の順に聞いてくる:
  1. 推論プロバイダ
  2. サンドボックス名
  3. Web 検索の有無
  4. メッセージングチャネル（Telegram / Discord / Slack）
  5. ネットワークポリシープリセット
- **推論プロバイダ一覧テーブル**（公式の Quickstart より）:

| # | プロバイダ | API キー環境変数 | ベース URL | 典型的な使いどころ |
|---|---|---|---|---|
| 1 | NVIDIA Endpoints | `NVIDIA_API_KEY` | build.nvidia.com | Nemotron 3 Super 120B など NVIDIA ホスト済みモデル |
| 2 | OpenAI | `OPENAI_API_KEY` | api.openai.com | GPT-5.4 系 |
| 3 | OpenAI 互換エンドポイント | `COMPATIBLE_API_KEY` | 任意 | OpenRouter / vLLM / 自社 NIM など |
| 4 | Anthropic | `ANTHROPIC_API_KEY` | api.anthropic.com | Claude Sonnet 4.6 / Haiku 4.5 / Opus 4.6 |
| 5 | Anthropic 互換エンドポイント | `COMPATIBLE_ANTHROPIC_API_KEY` | 任意 | Claude プロキシ / Bedrock 互換 |
| 6 | Google Gemini | `GEMINI_API_KEY` | generativelanguage.googleapis.com | Gemini 3.1 Pro / Flash など |
| 7 | Local Ollama | 不要 | localhost:11434 | 完全ローカル運用 |
| 8 | Model Router（実験的） | `NVIDIA_API_KEY` | host port 4000 | リクエストごとにモデル振り分け |

- スクリプト化したい場合:
  ```bash
  NEMOCLAW_PROVIDER=routed NVIDIA_API_KEY=<key> nemoclaw onboard --non-interactive
  ```
- **参考ソース:** 014 (Docs Quickstart), 016 (Docs Inference Options)

### 9. 動作の流れ — `nemoclaw onboard` の中で何が起きているか

- 段落冒頭でフレーミング: コマンドは1本だが、内部では**4段階の処理**が走る
- 1. ブループリント解決 + バージョン互換チェック + digest 検証
- 2. 作成・更新する OpenShell リソース（gateway / プロバイダ / サンドボックス / ネットワークポリシー）を決定
- 3. OpenShell CLI を呼び出してリソース作成
- 4. サンドボックス起動。エージェントの推論先は `inference.local` に向き、認証情報はホスト側に残る
- ここでの重要なポイント: **クレデンシャルはサンドボックスに渡らない**（OpenShell の L7 プロキシがプレースホルダを実値に解決して egress する）
- **参考ソース:** 006 (Docs How it works), 015 (Docs Ecosystem), 017 (Docs Architecture)

### 10. NemoClaw を使う vs OpenShell だけで組む — 違いを比較する

- 「**OpenShell の community sandbox でも OpenClaw は動く**」という事実をまず置く。それでも NemoClaw を選ぶ理由はある
- **比較テーブル**（公式 Ecosystem ページから抜粋・要約）:

| 観点 | `openshell sandbox create --from openclaw` | `nemoclaw onboard` |
|---|---|---|
| サンドボックス分離 | OpenShell の seccomp / Landlock / 特権ドロップ | 同上 + 上にさらに制限を重ねる |
| クレデンシャル | OpenShell プロバイダを手動作成 | オンボーディングで自動作成 + ホスト env を自動フィルタ |
| イメージ硬化 | 汎用ツール込み | gcc/g++/make/netcat を剥がしてアタックサーフェスを縮小 |
| FS ポリシー | 同梱ポリシー | /usr, /lib, /etc を RO、/sandbox 配下を RW |
| 推論セットアップ | サンドボックス内で OpenClaw ウィザード起動 | ホストから検証＆ OpenShell ルーティング自動構成 |
| チャネル | OpenClaw 設定を手動 | bot token を OpenShell プロバイダに自動登録 |
| ブループリントのバージョン管理 | なし | バージョン + digest 検証あり |
| 状態移行 | なし | 認証情報を剥がして整合性検証付きで移行 |
| プロセス上限 | 自分で `--ulimit` 指定 | `ulimit -u 512` がエントリポイントで適用 |

- 一言でいえば: **OpenShell パスは「自分でガラスを切る」、NemoClaw パスは「NVIDIA のキットを買う」**
- **参考ソース:** 015 (Docs Ecosystem)

### 11. 動作プラットフォーム — どこで動くのか

- **対応プラットフォーム表**:

| 区分 | 例 | 補足 |
|---|---|---|
| ローカル | RTX PC / RTX PRO Workstation | RTX シリーズで 24/7 ローカル推論 |
| デスク横スパコン | DGX Spark / DGX Station | express install で推奨設定が一発適用 |
| クラウド | 任意の GPU インスタンス | 推論先は OpenAI / Anthropic / Gemini / 自前 NIM など自由 |

- DGX Spark での DevBlog チュートリアル（Nemotron 3 Super 120B + Telegram）に触れ、典型的な「24/7 ローカル AI 秘書」像を提示
- **参考ソース:** 001 (NVIDIA 公式), 007 (NVIDIA DevBlog), 008 (NVIDIA Blog GTC2026), 013 (build.nvidia.com Spark)

### 12. ユースケース — どんな使い方が想定されているか

- 公式に挙げられている3つを起点に、もう少し具体例を肉付けする:
  - **Always-on assistant**: 自宅 PC で常駐し、Telegram/Slack 経由で呼び出せる AI 秘書
  - **Sandboxed testing**: 権限を絞った箱の中でエージェントの挙動を試す研究・検証用途
  - **Remote GPU deployment**: クラウド GPU 上にサンドボックス済みエージェントを永続デプロイ
- DevBlog のチュートリアル（Nemotron 3 Super 120B + Telegram on DGX Spark）が"教科書例"として最も具体的
- **参考ソース:** 005 (Docs Overview), 007 (NVIDIA DevBlog), 013 (build.nvidia.com Spark)

### 13. 現在の状態と注意点

- **early preview**: 2026年3月16日公開、API・挙動は予告なく変わる可能性あり
- **production-ready ではない** と NVIDIA 自身が明記している
- 個人検証・PoC・学習用としては十分使えるが、商用本番投入は様子見が無難
- **参考ソース:** 001 (NVIDIA 公式), 011 (NVIDIA Forum), 010 (TechCrunch)

### 14. まとめ — NemoClaw を一言で位置づける

- 一言でいえば: **「自宅 GPU の上に Claude / Codex 級のエージェントを箱付きで住まわせる」ための NVIDIA 公式キット**
- 主役は OpenShell（隔離）と OpenClaw（エージェント）。NemoClaw はその上に**段取りと初期セキュリティ設定を被せる薄いリファレンス層**
- 「クラウド AI を呼ぶ」だけだった世代から、「自分のハードに常駐させて 24/7 動かす」世代に AI エージェントが移るときの**標準テンプレ**になりうる
- 触ってみる手順は curl ワンライナーで開始 → 対話ウィザード → 5〜10分でサンドボックス起動。心理的ハードルは非常に低い
- **参考ソース:** 001 (NVIDIA 公式), 008 (NVIDIA Blog GTC2026), 010 (TechCrunch)

## 使用するソース一覧

`sources/` ディレクトリ内のファイル:

| # | ファイル | URL | 用途 |
|---|---|---|---|
| 001 | `001_nvidia_nemoclaw_product.md` | https://www.nvidia.com/en-us/ai/nemoclaw/ | 公式ランディング |
| 002 | `002_nvidianews_announcement.md` | https://nvidianews.nvidia.com/news/nvidia-announces-nemoclaw | 発表プレスリリース（取得時にコンテンツ薄、参考扱い） |
| 003 | `003_github_nemoclaw_repo.md` | https://github.com/NVIDIA/NemoClaw | リポジトリ README |
| 004 | `004_docs_index.md` | https://docs.nvidia.com/nemoclaw/latest/index.html | 開発者ガイド入口 |
| 005 | `005_docs_overview.md` | https://docs.nvidia.com/nemoclaw/latest/about/overview.html | 機能・利点・ユースケース概要 |
| 006 | `006_docs_how_it_works.md` | https://docs.nvidia.com/nemoclaw/latest/about/how-it-works.html | アーキテクチャ概要 |
| 007 | `007_nvidia_devblog_build_agent.md` | https://developer.nvidia.com/blog/build-a-secure-always-on-local-ai-agent-with-nvidia-nemoclaw-and-openclaw/ | DGX Spark チュートリアル |
| 008 | `008_nvidia_blog_gtc2026.md` | https://blogs.nvidia.com/blog/rtx-ai-garage-gtc-2026-nemoclaw/ | GTC 2026 文脈 |
| 009 | `009_nvidia_blog_nemotron_labs.md` | https://blogs.nvidia.com/blog/what-openclaw-agents-mean-for-every-organization/ | OpenClaw エージェントの意義 |
| 010 | `010_techcrunch_security.md` | https://techcrunch.com/2026/03/16/nvidias-version-of-openclaw-could-solve-its-biggest-problem-security/ | 第三者視点・位置づけ |
| 011 | `011_nvidia_forum_intro.md` | https://forums.developer.nvidia.com/t/introducing-nvidia-nemoclaw/363701 | 公式フォーラム告知 |
| 012 | `012_build_nvidia_nemoclaw.md` | https://build.nvidia.com/nemoclaw | NIM Build ページ（取得時に薄、参考扱い） |
| 013 | `013_build_nvidia_spark_nemoclaw.md` | https://build.nvidia.com/spark/nemoclaw | DGX Spark Playbook（取得時に薄、参考扱い） |
| 014 | `014_docs_quickstart.md` | https://docs.nvidia.com/nemoclaw/latest/get-started/quickstart.html | クイックスタート全文 |
| 015 | `015_docs_ecosystem.md` | https://docs.nvidia.com/nemoclaw/latest/about/ecosystem.html | OpenShell との関係性・比較 |
| 016 | `016_docs_inference_options.md` | https://docs.nvidia.com/nemoclaw/latest/inference/inference-options.html | 推論プロバイダ詳細 |
| 017 | `017_docs_architecture.md` | https://docs.nvidia.com/nemoclaw/latest/reference/architecture.html | 内部リポジトリ構造 |
| 020 | `020_docs_network_policies.md` | https://docs.nvidia.com/nemoclaw/latest/reference/network-policies.html | ネットワークポリシー詳細 |
| 021 | `021_docs_sandbox_hardening.md` | https://docs.nvidia.com/nemoclaw/latest/deployment/sandbox-hardening.html | サンドボックス硬化詳細 |

## ビジュアル要素

- **Mermaid 図 1**: 3層構造（NemoClaw → OpenShell → OpenClaw）の関係性 (LR フローチャート)
- **Mermaid 図 2**: High-Level Component Diagram（CLI / Control / Gateway / Sandbox / Inference / Integrations / State）
- **Chart.js**: 任意。Protection Layer の「どこで何を縛るか」をマトリクスで表現できそうだが、テーブルで十分なら省く
- **テーブル多数**: 3者の役割／6機能／4層保護／8プロバイダ／NemoClaw vs OpenShell community／対応プラットフォーム

## 確認事項（ユーザーへ）

1. **タイトル案**: 主案でよいか、別案を採用するか
2. **読者レベル**: Docker / CLI に慣れた開発者を想定しているが、もう一段やさしく（非エンジニア寄り）にすべきか
3. **構成の重み付け**: 「解説」と「使い方」がほぼ半々の構成。どちらかに寄せたい場合は教えてほしい
4. **省略・追加**: 上記14セクションのうち削りたい / 追加したい論点があれば
