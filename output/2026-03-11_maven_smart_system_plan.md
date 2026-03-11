# 記事プラン: Maven Smart System（MSS）— 米軍のAI戦争を支える頭脳

## テーマ

ベネズエラ攻撃・イラン攻撃で注目を集めた軍事AIシステム「Maven Smart System（MSS）」の全体像を解説。Project Mavenの歴史からMSSの技術的仕組み、実戦での使用実績、そしてAnthropicとの対立まで包括的に分析する。

## 構成案

### 1. 導入 — 「AIが戦争を変えた日」
- 2026年1月のベネズエラ・マドゥロ拘束作戦でClaudeが使用されたことの衝撃
- 2月末〜3月のイラン攻撃（Operation Epic Fury）で約900の標的を12時間で攻撃
- これらの作戦の中核にあるMaven Smart Systemとは何か

**ソース:**
- https://www.axios.com/2026/02/13/anthropic-claude-maduro-raid-pentagon
- https://www.foxnews.com/us/ai-tool-claude-helped-capture-venezuelan-dictator-maduro-us-military-raid-operation-report
- https://nanonets.com/blog/ai-warfare-operation-epic-fury-2026/
- https://ja.wikipedia.org/wiki/2026%E5%B9%B4%E3%82%A2%E3%83%A1%E3%83%AA%E3%82%AB%E5%90%88%E8%A1%86%E5%9B%BD%E3%81%AB%E3%82%88%E3%82%8B%E3%83%99%E3%83%8D%E3%82%BA%E3%82%A8%E3%83%A9%E6%94%BB%E6%92%83

### 2. Project Mavenの歴史 — Googleからの撤退、Palantirへの継承
- 2017年4月: 国防副長官メモによる「Algorithmic Warfare Cross-Functional Team」設立
- 当初の目的: ドローン映像の自動解析
- 2018年: Google社員の抗議活動と契約非更新
- Palantir Technologiesへの移管とMaven Smart Systemへの発展
- 2025年: 契約額4.8億ドル→約13億ドルへ拡大

**ソース:**
- https://en.wikipedia.org/wiki/Project_Maven
- https://www.elrisala.com/we-want-to-use-it-for-everything-how-project-maven-became-central-to-americas-ai-powered-warfare/
- https://defensescoop.com/2025/05/23/dod-palantir-maven-smart-system-contract-increase/
- https://warroom.armywarcollege.edu/podcasts/data-driven-defense/

### 3. Maven Smart Systemの技術アーキテクチャ
- プラットフォーム構成: Palantir AIP + AWS + 各種AIモデル
- データ融合: 衛星画像、ドローン映像、通信傍受、OSINT、150以上の情報フィード
- AI/ML統合: 標的識別・優先順位付け・兵器マッチング
- Claude AI（Anthropic）の役割: 情報分析・標的推薦・被害評価
- Impact Level 6（IL6）認定環境での運用（機密ネットワーク対応）
- オープンアーキテクチャ: サードパーティツール統合可能

**ソース:**
- https://www.missiledefenseadvocacy.org/maven-smart-system/
- https://www.itssverona.it/maven-and-setaf-af-how-ai-is-reshaping-modern-military-command
- https://investors.palantir.com/news-details/2024/Anthropic-and-Palantir-Partner-to-Bring-Claude-AI-Models-to-AWS-for-U.S.-Government-Intelligence-and-Defense-Operations/
- https://defensescoop.com/2026/01/06/dod-enterprise-command-and-control-program-office/
- https://blog.palantir.com/maven-smart-system-innovating-for-the-alliance-5ebc31709eea

### 4. MSSの実戦投入
- ベネズエラ攻撃（2026年1月）: マドゥロ拘束作戦での情報分析支援
- イラン攻撃「Operation Epic Fury」（2026年2月末〜3月）: キルチェーンの劇的圧縮
  - 従来数週間→リアルタイムオペレーションへ
  - 20人で2,000人分の作業を実現（イラク自由作戦との比較）
- NATO展開: STEADFAST DETERRENCE 2025での導入、同盟国間標準化

**ソース:**
- https://nanonets.com/blog/ai-warfare-operation-epic-fury-2026/
- https://www.republicworld.com/world-news/maven-smart-system-explained-the-us-ai-technology-behind-1000-strikes-in-iran-during-operation-epic-furys-first-day
- https://www.nbcnews.com/tech/security/anthropic-ai-defense-war-venezuela-maduro-rcna259603
- https://www.jwc.nato.int/article/jwc-integrate-maven/
- https://shape.nato.int/news-releases/nato-acquires-aienabled-warfighting-system-
- https://www.army.mil/article/283473/contracting_personnel_use_ai_maven_smart_system_simulation_during_warfighter_exercise

### 5. キルチェーンの圧縮 — AIは戦争の速度をどう変えたか
- 従来のキルチェーン: 標的発見→検証→ブリーフィング→承認→攻撃（数時間〜数日）
- AI導入後: センサーデータ自動統合→AI推薦→人間承認→攻撃
- 「数週間の戦闘計画をリアルタイムオペレーションに変えた」
- 人間の判断が介在する設計（Human-in-the-loop）の重要性

**ソース:**
- https://www.ainewsinternational.com/ai-kill-chain-how-the-u-s-is-using-artificial-intelligence-to-bomb-iran/
- https://thephrasemaker.com/2026/03/03/the-45-second-kill-chain-calculation-of-2026-ai-warfare/
- https://theconversation.com/us-military-leans-into-ai-for-attack-on-iran-but-the-tech-doesnt-lessen-the-need-for-human-judgment-in-war-277831
- https://responsiblestatecraft.org/ai-war-iran/
- https://globalsecurityreview.com/signals-of-a-new-revolution-maven-smart-system-and-the-ai-rma-horizon/

### 6. Anthropicと国防総省の対立
- 2024年: Anthropic-Palantir-AWS三社の軍事AI提携
- 2026年2月13日: WSJ報道でベネズエラ作戦へのClaude使用が判明
- Anthropicの立場: 自律型兵器・国内大規模監視への使用制限を要求
- 国防総省の立場: 全ての合法的用途への無制限アクセスを要求
- 2026年3月5日: 国防長官がAnthropicを「サプライチェーンリスク」に認定
- 2026年3月9日: Anthropicがトランプ政権を提訴
- Microsoftが差止め請求でAnthropicを支持

**ソース:**
- https://www.semafor.com/article/02/17/2026/palantir-partnership-is-at-heart-of-anthropic-pentagon-rift
- https://fortune.com/2026/03/07/pentagon-emil-michael-anthropic-claude-defense-ai-openai-iran-war-palantir/
- https://www.cnbc.com/2026/03/09/anthropic-was-the-pentagons-choice-for-ai-now-its-banned-and-experts-are-worried.html
- https://www.cnbc.com/2026/03/09/anthropic-trump-claude-ai-supply-chain-risk.html
- https://www.cnbc.com/2026/03/10/microsoft-says-court-should-temporarily-block-pentagon-ban-anthropic.html
- https://techcrunch.com/2026/03/09/anthropic-sues-defense-department-over-supply-chain-risk-designation/
- https://www.cnbc.com/2026/03/04/pentagon-blacklist-anthropic-defense-tech-claude.html
- https://www.nikkei.com/article/DGXZQOGN16AJ00W6A210C2000000/
- https://www.nikkei.com/article/DGXZQOGN270FP0X20C26A2000000/
- https://www.bloomberg.com/jp/news/articles/2026-02-27/TB4QTJT9NJLU00
- https://www.bloomberg.com/jp/news/articles/2026-03-05/TBG7TFT9NJLT00

### 7. 軍事AIの倫理的課題と今後の展望
- 「AIキルチェーン」への批判: 人間の判断時間の縮小
- 自律型兵器への発展リスク
- 民間AI企業の軍事利用をめぐるガバナンスの空白
- AI RMA（軍事革命）の可能性と限界
- OpenAI・xAIなど代替企業への切り替えの動き

**ソース:**
- https://globalsecurityreview.com/signals-of-a-new-revolution-maven-smart-system-and-the-ai-rma-horizon/
- https://theconversation.com/us-military-leans-into-ai-for-attack-on-iran-but-the-tech-doesnt-lessen-the-need-for-human-judgment-in-war-277831
- https://xtech.nikkei.com/atcl/nxt/column/18/00001/11527/
- https://bisi.org.uk/reports/pentagon-ai-integration-and-anthropic-ethics-strategy-and-the-future-of-defence-technology-partnerships
- https://www.euronews.com/next/2026/03/06/ai-on-the-battlefield-how-is-the-us-integrating-ai-into-its-military
