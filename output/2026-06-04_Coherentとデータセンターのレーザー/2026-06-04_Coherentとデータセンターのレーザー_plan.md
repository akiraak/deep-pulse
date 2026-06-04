# 生成プラン: データセンターのレーザーとCoherent（コヒレント）社

## ユーザー指示

> 記事の作成「データーセンターに使用されているレーザーを開発しているコヒレント社について調べる。何故レーザーが重要なのかを技術的な内容も含めて重点的に調査する」

## 記事の狙い・方針

- AIデータセンターの「神経網」を支える**レーザー**に焦点を当て、**なぜ電気（銅）ではなく光（レーザー）なのか**を物理から技術的に解き明かす
- そのレーザーを供給する西側唯一の有力プレイヤー **Coherent（コヒレント）社** を軸に、技術・製品・企業・市場の全体像を描く
- 技術解説が主役。専門用語（EML / VCSEL / CW DFB / InP / CPO / ELS / WDM / link budget など）はその場で噛み砕いて説明する
- 読者像: AI・半導体・データセンターに関心はあるが光通信の専門家ではない層

## 想定タイトル

**「AIデータセンターの心臓を照らす光 — Coherentのレーザーが計算インフラを支える理由」**

- ファイル名: `2026-06-04_Coherentとデータセンターのレーザー.md`

## 記事構成（案）

### 1. はじめに — NVIDIAが2,000億円を投じた「地味な部品」
- フック: 2026年3月、NVIDIAがCoherentに約20億ドルを投資。Coherent株は52週間で **+424%**、時価総額は約816億ドルに。なぜGPUの会社が「レーザー会社」にこれほど賭けるのか？
- 結論の先出し: AIの計算は無数のGPUを束ねて初めて成立する。その束ね役＝配線が銅から**光（レーザー）**に置き換わりつつあり、その光源を作れる会社が決定的に重要になっている

### 2. 全体像 — 主要技術と関係図（俯瞰セクション）
- データセンターの2つの配線レイヤーを整理: **スケールアウト（scale-out）**＝ラックをまたいでGPUクラスタ同士をつなぐ網／**スケールアップ（scale-up）**＝1台の巨大GPUのように密結合する網
- レーザー種類（VCSEL / EML / CW DFB）と用途を**表**で整理
- **Mermaid 俯瞰図**: 「電気信号」→「トランシーバ（レーザーで光に変換）」→「光ファイバ」→ scale-out（プラガブル）/ scale-up（CPO+ELS）の2系統
- Coherentが垂直統合で押さえている領域（材料InP→レーザー→トランシーバ→アイソレータ→TEC）を提示
- 参考: 001, 004, 011, 012

### 3. なぜ光なのか — 銅の物理的な壁
- 結論先出し: 「銅は速くなるほど短くしか届かない」
- 電気信号は距離とともに急速に減衰。NVLink級の速度では銅は **実効1m未満** に制限される
- 銅の限界が「ワールドサイズ（1つのscale-upドメインで束ねられるGPU数）」を縛る → ラックをまたぐ規模では光が必須
- 光子の優位性: 電気抵抗を受けない／電磁干渉を出さない／3インチでも300mでも信号品質が劣化しない
- ただし「短距離・ラック内は当面は銅が安くて省電力」という現実（〜2028年は銅が共存）も公平に書く
- **例え話**: 銅＝近所への手押し車（近いと速くて安い）／光＝遠距離の宅配便（遠くても品質一定）
- 参考: 001, 009, 010, semiengineering/SDxCentral 検索結果

### 4. レーザーは光通信の「キャリア（運び手）」— 基礎の仕組み
- レーザー＝情報を載せる**搬送波**。光に「振幅・周波数・位相・偏波」で情報を変調して送る
- **link budget（リンクバジェット）**の概念: 送信〜受信までに許される信号損失の総量。損失が少ないほど低電力・低エラー・低コスト
- 波長を増やす（WDM）と帯域は増えるがコスト・複雑さも増す、というトレードオフ
- レーザー産業の規模: 2024年に **200億ドル超**、2030年に **300億ドル超** 見込み。AIデータセンターが既に市場の半分以上
- **Chart.js（棒/折れ線）**: レーザー市場規模 2024→2030 の成長
- 参考: 001

### 5. レーザーの3つの顔 — VCSEL / EML / CW（DFB）
- 各方式をその場で噛み砕いて説明:
  - **VCSEL**（垂直共振器面発光レーザー / GaAs・850nm）: 短距離・低コスト・低電力。ラック内〜数百m
  - **EML**（電界吸収変調レーザー / InP）: レーザーと変調器を1チップに集積。高速・きれいな波形・長距離。800G/1.6Tの主力だが「作るのが難しく、2026年は入手難」
  - **CW DFB レーザー**（連続波・分布帰還型 / InP）: 変調しない一定光を出し、変調はシリコンフォトニクス側（マッハツェンダ変調器）で行う。チップ構造が単純で量産しやすく、EML不足の回避策として採用拡大
  - 補足: **DML**（直接変調レーザー）はVCSELとEMLの中間
- **比較表**（波長・距離・速度・変調方式・コスト・消費電力）
- **Chart.js**: 3方式の到達距離レンジ比較（横棒）
- **例え話**: EML＝発声と歌詞が一体の歌手／CW＝伴奏（一定の光）に別の人（変調器）が歌詞を乗せる
- 参考: 004, 001, 002, 003

### 6. なぜ「インジウムリン（InP）」なのか — 材料の話
- AIデータセンター用高速レーザーの本命は **InP（III-V族化合物半導体）**
- InPはO帯（1,260〜1,360nm、赤外）の波長を出せる。O帯は**色分散（波長ごとの速度差でパルスが時間的に広がる現象）が最小**で、CPOに最適
- VCSEL（GaAs）が出すのは700〜900nm。用途が違う
- Coherentは「数十年で1億個以上を実フィールド投入」した実績あるInPプラットフォームを持つ。アルミ不使用の量子井戸で高信頼
- 製造の難しさ＝参入障壁。Coherentは業界初の**6インチInPウェハ**へ移行し、テキサス州シャーマンの新工場で生産能力5倍へ
- 参考: 001, 002, 003, 014

### 7. スケールアウトの主役 — プラガブル光トランシーバ（800G / 1.6T）
- プラガブル＝活線挿抜できる「抜き差しできる光モジュール」。レーザーが壊れても安く素早く交換できる
- 現在は800Gが広く展開、1.6Tが立ち上がり中。CoherentのEML/シリコンフォトニクスが牽引、200G VCSELベースの1.6Tは翌年立ち上げ予定
- Coherentの200G InP EML（800G=4レーン、1.6T=8レーン）と、シリコンフォトニクス向けCW DFB（15%省電力、70mW/1310nm、85℃非冷却動作）
- 参考: 002, 003, 011, 013

### 8. スケールアップの新領域 — CPOと「外付けレーザー源（ELS）」
- **CPO（co-packaged optics）**＝光エンジンをスイッチ/GPUと同じパッケージに同居させ、電気の引き回しを最小化。低消費電力・高帯域密度・低遅延
- ここで肝になるのが **ELS（外部レーザー源）/ ELSFP**: レーザーをあえてGPUパッケージの外に置く
  - 理由: 1,000W級GPUの熱でレーザーの波長がずれる（InPは **0.1nm/℃** ドリフト）。外付け＋**TEC（熱電クーラー）**で温度を±20℃以内に保ち波長を安定させる／故障時に交換しやすい
- **ELSFPの光路**（Mermaidで図解）: レーザー → コリメートレンズ（楕円ビームを円形に整形）→ アイソレータ（戻り光を遮断、YIG磁気光学素子。Coherentが世界の大半を製造）→ 集光レンズ → 斜めカットのファイバ
- 数字の肌感: InP CW UHPレーザーは300〜400mW（一部600mW）、放熱はその3〜4倍。ELSFPの**ウォールプラグ効率は10〜15%**。1つのレーザーで4/8/16本のファイバを駆動するため高出力が要る
- **WDM/OCI-MSA**: AMD/Broadcom/Meta/Microsoft/NVIDIA/OpenAIが策定したスケールアップ用オープン規格。8波長（各方向4波長）を提案
- CoherentのOFC 2026デモ: 6.4T（32×200G）ソケット型CPO＋ELS、VCSELマルチモードCPO、シリコン上InP変調器400G/レーン
- 参考: 001, 005, 006, 007, 013

### 9. Coherentという会社 — 素材からレーザーまで一気通貫
- 沿革（**Mermaidタイムライン**）: II-VI（材料会社）→ 2019 Finisar買収（光トランシーバ首位、データセンター実績22年）→ 2022 Coherent買収（70億ドル、社名をCoherentに）
- CEO Jim Anderson（2024年6月就任、元Lattice CEO、AMD/Intel/Broadcom出身）
- **垂直統合**の強み: InP EML・InP CW・VCSELを自社製造できる数少ない会社。アイソレータ・TECも内製
- 財務（**Chart.js**）: FY2024 売上47.08億ドル → FY2025 **57.81億ドル（+22.8%）**、粗利率37.9%。直近四半期はData center & Communicationsが10.9億ドル
- 市場機会: 既存市場500億ドル超＋AIサーバ向け新市場200億ドル超（同社見解）
- 「西側で唯一、サーバ間をつなぐ光トランシーバを量産できる主要メーカー」
- 参考: 008, 011, 012, SEC 8-K 検索結果

### 10. 供給制約と勢力図 — レーザーが「金を積んでも買えない」時代
- 大手3社（Coherent / Lumentum / Sumitomo）で**約68%**シェア。Broadcom・三菱・MACOM等も
- 800G+トランシーバ出荷は2025年2,400万個 → 2026年 **約6,300万個（2.6倍）** 見込み
- **EML不足**: NVIDIAが主要サプライヤの生産枠を先押さえ、他社の納期は2027年超へ。800G生産は2027年まで需要に40〜60%届かない（McKinsey）
- LumentumもCoherentも「売り切れ・前金が必要」。両社の時価総額は1年で約10倍
- NVIDIAが両社に各20億ドル投資（2026年3月）し供給と米国内製造を確保
- **赤信号/青信号の表**: 需要（青）／EML供給（赤）／CW供給（黄）／VCSEL供給（青、2022-23不足から回復）
- 参考: 001, 004, 012

### 11. 今後の展望
- スケールアップが今後5年で「全銅 → 主にCPO（一部NPO・VCSEL）」へ移行
- NVIDIAロードマップではCPOは2028年から
- レーン速度の進化: 200G → 300G → 400G/レーン（CoherentがECOC2025/OFC2026でデモ）
- WDM多波長化（O帯100nm幅に1.5nm間隔で多数）でさらに帯域拡大
- リスク: 供給逼迫、CPOの歩留まり・保守性、銅の延命、地政学（材料・製造の集中）
- Coherentの賭け: 6インチInP・テキサス新工場・垂直統合で「供給力こそ競争優位」

### 12. まとめ
- 一言で: AIの計算競争は、突き詰めると「光を作って正確に運ぶ」競争でもある
- レーザーはAIデータセンターの心拍。その心臓部の素材・光源・部品を一気通貫で持つCoherentは、AIインフラの隠れた要石

## 図・グラフ・表の一覧

| 種類 | 内容 | セクション |
|------|------|-----------|
| Mermaid | データセンター配線の俯瞰（scale-out/scale-up × レーザー種類） | 2 |
| Mermaid | ELSFPの光路図 | 8 |
| Mermaid | Coherent沿革タイムライン | 9 |
| 表 | レーザー種類と用途の全体像 | 2 |
| 表 | VCSEL/EML/CW 比較（波長・距離・速度・変調・コスト・電力） | 5 |
| 表 | 供給の赤信号/青信号 | 10 |
| Chart.js | レーザー市場規模 2024→2030 | 4 |
| Chart.js | 3方式の到達距離レンジ（横棒） | 5 |
| Chart.js | 800G+トランシーバ出荷 2025→2026 | 10 |
| Chart.js | Coherent売上 FY2024→FY2025 | 9 |

## ソース一覧（sources/）

| # | ファイル | URL | 主な用途 |
|---|---------|-----|---------|
| 001 | 001_semiengineering_lasers_heartbeat.md | https://semiengineering.com/lasers-are-the-heartbeat-of-the-optical-ai-data-center/ | 物理・InP・CW UHP・ELSFP光路・市場規模・WDM/OCI-MSA・NVIDIA投資（中核） |
| 002 | 002_coherent_200G_InP_EML.md | https://www.coherent.com/news/press-releases/coherent-introduces-200g-indium-phosphile-electro-absorption-modulated-lasers | 200G InP EML（800G/1.6T） |
| 003 | 003_coherent_CW_DFB_silicon_photonics.md | https://www.coherent.com/news/press-releases/high-efficiency-lasers-for-silicon-photonics-transceivers | CW DFB・15%省電力・70mW・6インチfab・5倍 |
| 004 | 004_edgeoptic_eml_vcsel_cw_guide.md | https://edgeoptic.com/kb_article/eml-vs-vcsel-vs-cw-laser-which-optical-transceiver-laser-is-right-for-you | 3方式比較表・EML不足・コスト・DML |
| 005 | 005_coherent_CPO_OFC2026.md | https://www.coherent.com/news/press-releases/coherent-co-packaged-optics-cpo-technologies-ofc-2026 | CPOデモ（6.4T/VCSEL/InP変調器400G） |
| 006 | 006_stocktitan_coherent_cpo_ofc2026.md | https://www.stocktitan.net/news/COHR/coherent-demonstrates-multiple-co-packaged-optics-cpo-technologies-9b9rcc85qq6s.html | CPO 6.4T/400Gレーン補足 |
| 007 | 007_viks_why_cpo_external_lasers.md | https://www.viksnewsletter.com/p/why-cpo-uses-external-lasers | なぜCPOは外付けレーザーか |
| 008 | 008_coherent_powering_innovation_photons.md | https://www.coherent.com/news/blog/powering-innovation-with-photons | CMO Q&A・リーダーシップ |
| 009 | 009_benpouladian_optical_interconnect_boom.md | https://benpouladian.com/the-ai-datacenter-optical-interconnect/ | 光インターコネクトのブーム背景 |
| 010 | 010_semiengineering_all_optical_5years.md | https://semiengineering.com/all-ai-data-center-interconnects-will-be-optical-within-5-years/ | 5年で全光化 |
| 011 | 011_coherent_datacom_innovation_ai_era.md | https://www.coherent.com/news/blog/enabling-ai-next-gen-datacenters | AI時代のデータコム革新・垂直統合 |
| 012 | 012_insidermonkey_cohr_leader.md | https://www.insidermonkey.com/blog/coherent-corp-cohr-a-leader-in-optical-transceivers-amid-ai-data-center-growth-1774841/ | 沿革・財務・NVIDIA投資・株価・CEO |
| 013 | 013_stocktitan_coherent_ecoc2025_300G.md | https://www.stocktitan.net/news/COHR/coherent-showcases-next-generation-optical-innovations-at-ecoc-qxip7hmycqtk.html | ECOC2025・300G/レーン |
| 014 | 014_coherent_inp_optoelectronics.md | https://www.coherent.com/networking/optoelectronic-devices/inp-optoelectronics | InP光電子デバイス一覧 |

## 備考
- 「深掘り」表現は使わない（ユーザー設定）
- 各セクション末尾に「参考ソース」を分散配置（CLAUDE.md 準拠）
- 執筆時は各セクションごとに対応ソースを読み直してファクトチェックする
