# Maven Smart System（MSS）— 米軍のAI戦争を支える頭脳

2026年2月28日、米軍はイランに対する大規模軍事作戦「[Operation Epic Fury](https://defensescoop.com/2026/03/11/us-military-using-ai-against-iran-operation-epic-fury-adm-cooper/)」を開始した。**最初の24時間で1,000以上の標的が攻撃され**、11日間で[5,500以上の標的](https://defensescoop.com/2026/03/11/us-military-using-ai-against-iran-operation-epic-fury-adm-cooper/)に達した。従来の紛争なら数週間を要したであろう規模だ。

その2か月前——2026年1月3日には、米特殊作戦部隊がベネズエラの首都カラカスを急襲し、[マドゥロ大統領を拘束](https://www.foxnews.com/us/ai-tool-claude-helped-capture-venezuelan-dictator-maduro-us-military-raid-operation-report)。この作戦でもAIが情報分析を支援していたことが後に判明した。

これらの作戦の中核にあるのが、**Maven Smart System（MSS）** という軍事AIプラットフォームだ。衛星画像、ドローン映像、通信傍受をAIが統合し、標的を推薦する——スマホのナビアプリが渋滞情報・天気・事故情報を一つの画面にまとめて「最速ルート」を提示するように、MSSは戦場のあらゆるデータを一つの画面に統合して「最優先標的」を提示する。

しかしこのシステムは、技術の成果だけでなく、**前例のない政治的対立**をも引き起こした。AIの使い方をめぐり、開発企業Anthropicと米国防総省が衝突。Anthropicは「サプライチェーンリスク」に認定され、連邦裁判所に提訴するという異例の事態に発展した。

本稿では、Maven Smart Systemの歴史・技術・実戦投入、そしてそれが引き起こした対立と倫理的課題を包括的に解説する。

**参考ソース:**
- [Centcom commander touts use of AI in fight against Iran during Operation Epic Fury](https://defensescoop.com/2026/03/11/us-military-using-ai-against-iran-operation-epic-fury-adm-cooper/)
- [US military used Anthropic's Claude AI in Nicolás Maduro capture operation](https://www.foxnews.com/us/ai-tool-claude-helped-capture-venezuelan-dictator-maduro-us-military-raid-operation-report)
- [Maven Smart System Explained: The US AI Technology Behind 1,000 Strikes in Iran](https://www.republicworld.com/world-news/maven-smart-system-explained-the-us-ai-technology-behind-1000-strikes-in-iran-during-operation-epic-furys-first-day)

> 元記事（グラフ・相関図付き）: https://akiraak.github.io/deep-pulse/articles/2026-03-17_Maven_Smart_System%E3%81%AE%E5%85%A8%E8%B2%8C.html

---

## 登場人物と相関図

この問題には、テクノロジー企業・政府機関・国際組織が複雑に絡み合っている。まず主要プレイヤーを整理しよう。

**【テクノロジー企業】**
- **Palantir Technologies**（防衛テック企業）— Maven Smart Systemの開発・運用。MSSの主契約者
- **Anthropic**（AI開発企業）— Claudeモデルを提供。機密ネットワーク初のAIモデルだったが「サプライチェーンリスク」に認定
- **OpenAI**（AI開発企業）— Anthropic排除後に国防総省と機密環境利用契約を締結
- **xAI / Musk**（AI開発企業）— Grokの機密システム利用契約を締結
- **Microsoft**（テック企業）— Anthropicの訴訟を支持。差止め請求で法廷に参加

**【米国政府】**
- **米国防総省（DoD）** — MSSの発注者。「全合法用途への無制限アクセス」を要求
- **ピート・ヘグセス**（国防長官）— 「戦争遂行を許可しないAIモデルは採用しない」と宣言
- **エミール・マイケル**（国防総省CTO）— Anthropic依存の「脆弱性」を指摘。代替AI調達を主導

**【その他】**
- **ダリオ・アモデイ**（Anthropic CEO）— 自律型兵器と大規模監視への2つの例外を主張
- **アレックス・カープ**（Palantir CEO）— 禁止令下でもClaude継続使用を表明
- **NATO**（国際軍事同盟）— MSS NATOを導入。同盟国間のAI標準化を推進

**【関係性の構図】**

- **Palantir** → MSSにClaude統合 → **Anthropic**
- **Palantir** → 13億ドル契約 → **国防総省**
- **Anthropic** → 自律兵器・監視に制限要求 → **国防総省**
- **国防総省** → サプライチェーンリスク認定 → **Anthropic**
- **Anthropic** → 提訴 → **ホワイトハウス**
- **Microsoft** → 差止め請求支持 → **Anthropic**
- **国防総省** → 代替契約 → **OpenAI** / **xAI**
- **Palantir** → MSS NATO提供 → **NATO**

**参考ソース:**
- [Palantir partnership is at heart of Anthropic, Pentagon rift](https://www.semafor.com/article/02/17/2026/palantir-partnership-is-at-heart-of-anthropic-pentagon-rift)
- [Pentagon official recalls 'whoa moment'](https://fortune.com/2026/03/07/pentagon-emil-michael-anthropic-claude-defense-ai-openai-iran-war-palantir/)

---

## Project Mavenの歴史 — Googleの撤退からPalantirへの継承

### 始まりは「ドローン映像の山」

Maven Smart Systemの原点は、2017年4月26日に遡る。[国防副長官ロバート・ワーク](https://en.wikipedia.org/wiki/Project_Maven)が発出した一通のメモ——「Algorithmic Warfare Cross-Functional Team」の設立指示——がすべての始まりだった。中国のAI軍事応用に対する危機感がその動機だ。

当初の任務はシンプルだった。米軍のドローンが毎日収集する膨大な映像データを、[コンピュータビジョンで自動解析](https://en.wikipedia.org/wiki/Project_Maven)すること。初期資金は約7,000万ドル。最初にこの任務を担ったのは**Google**で、[約900万ドルの契約](https://en.wikipedia.org/wiki/Project_Maven)だった。

家庭で例えるなら、毎日届く1,000通の郵便物を手作業で仕分けしていたところに、「AIで自動仕分けしよう」と言い出したのがProject Mavenだ。

### Google社員の反乱

しかし2018年、転機が訪れる。「AIの軍事利用への加担」に抗議して、[約4,000人のGoogle社員が公開書簡に署名](https://en.wikipedia.org/wiki/Project_Maven)。メレディス・ウィテカーらが率いたウォークアウトの結果、Googleは契約を更新しなかった。

### Palantirの台頭

この空白を埋めたのが**Palantir Technologies**だ。社内では映画『トロン』（1982年）にちなんで[「Tron」と呼ばれていた](https://www.elrisala.com/we-want-to-use-it-for-everything-how-project-maven-became-central-to-americas-ai-powered-warfare/)このプロジェクトを引き継いだPalantirは、単なるドローン映像解析を超え、包括的なAI戦闘支援プラットフォーム——Maven Smart System（MSS）へと発展させた。

**【Project Maven 年表】**
- **2017年4月** — Project Maven設立（初期資金 $7,000万）
- **2017年** — Google契約（約 $900万）
- **2018年** — Google撤退、Palantir継承
- **2020年** — 初のScarlet Dragon演習
- **2022年** — ウクライナ軍にMSS基本版提供
- **2024年5月** — Palantir正式契約（$4億8,000万 / 5年IDIQ）
- **2025年5月** — 契約拡大（[$12億7,500万](https://defensescoop.com/2025/05/23/dod-palantir-maven-smart-system-contract-increase/)）

> **契約額の推移:** 2017年 0.7億ドル → 2024年 4.8億ドル → 2025年 12.75億ドル（約18倍に拡大）

2025年5月、国防総省は契約上限を[当初の4億8,000万ドルから約12億7,500万ドルに引き上げた](https://defensescoop.com/2025/05/23/dod-palantir-maven-smart-system-contract-increase/)。NGA長官フランク・ウィットワース海軍中将は、[2万人以上のアクティブユーザーが35以上の軍事ツールでMSSを利用](https://defensescoop.com/2025/05/23/dod-palantir-maven-smart-system-contract-increase/)しており、2024年1月以降そのユーザー数が倍増したことを明らかにした。

**参考ソース:**
- [Project Maven - Wikipedia](https://en.wikipedia.org/wiki/Project_Maven)
- ['We want to use it for everything': How Project Maven became central to America's AI-powered warfare](https://www.elrisala.com/we-want-to-use-it-for-everything-how-project-maven-became-central-to-americas-ai-powered-warfare/)
- ['Growing demand' sparks DOD to raise Palantir's Maven contract to more than $1B](https://defensescoop.com/2025/05/23/dod-palantir-maven-smart-system-contract-increase/)

---

## MSSの技術アーキテクチャ — 150以上のデータソースを統合するAI戦闘脳

### データ融合基盤

MSSの核心は、あらゆる情報ソースを一つの「共通作戦図（Common Operating Picture）」に統合する能力にある。[衛星画像、兵站データ、オープンソースインテリジェンス（OSINT）、作戦入力](https://www.itssverona.it/maven-and-setaf-af-how-ai-is-reshaping-modern-military-command)をリアルタイムで融合し、意思決定サイクルを劇的に圧縮する。

[150以上のデータソース](https://en.wikipedia.org/wiki/Project_Maven)を統合するMSSは、料理に例えるなら「全世界のレシピサイト・食材データベース・アレルギー情報・季節情報を統合して、今夜の最適メニューを提案するAI」のようなものだ。ただし、間違えた場合のコストは桁違いに大きい。

**【統合されるデータソース】**
- **画像情報**（衛星画像、商用衛星データ）→ 地上施設・車両の識別
- **動画情報**（ドローン映像）→ リアルタイム戦場監視
- **通信情報**（通信傍受）→ 敵の指揮通信分析
- **レーダー**（合成開口レーダー / SAR）→ 航空機・ミサイル追跡
- **公開情報**（OSINT、ソーシャルメディア）→ 公開情報分析、偽情報検知
- **位置情報**（IPアドレス、ジオタグ）→ 位置特定・追跡

### 9つのシステムを1つに統合

[MSSは9つの別々の軍事情報システムを1つのインターフェースに統合](https://www.theregister.com/2026/03/13/palantirs_maven_smart_system_iran/)した。画面上では、黄色い枠が潜在的標的、青い枠が友軍または攻撃禁止区域を示す。[人間の攻撃命令を直接兵器に伝達](https://en.wikipedia.org/wiki/Project_Maven)することも可能だ。

### AI/MLの役割とClaude

MSS内のAI/ML機能が担うタスクは以下の通りだ：

- **標的識別・優先順位付け** — 車両、建物、軍事インフラを自動認識し、戦略的重要度でランク付け
- **兵器マッチング** — AI Asset Tasking Recommenderが[どの爆撃機・弾薬をどの標的に割り当てるか提案](https://en.wikipedia.org/wiki/Project_Maven)
- **被害評価** — 攻撃後のインパクトを分析
- **兵站予測** — 展開部隊への補給需要を予測

この中でAnthropicの**Claude**は、[2024年11月にPalantirのAI Platform上で統合](https://investors.palantir.com/news-details/2024/Anthropic-and-Palantir-Partner-to-Bring-Claude-AI-Models-to-AWS-for-U.S.-Government-Intelligence-and-Defense-Operations/)された。Claude 3/3.5ファミリーは、**Impact Level 6（IL6）** 認定環境で運用され、[機密（Secret）レベルまでのデータを扱える](https://investors.palantir.com/news-details/2024/Anthropic-and-Palantir-Partner-to-Bring-Claude-AI-Models-to-AWS-for-U.S.-Government-Intelligence-and-Defense-Operations/)——民間AIモデルとして初の快挙だった。2025年7月には、国防総省が[Anthropicと最大2億ドルの契約](https://www.cnbc.com/2026/03/05/anthropic-pentagon-ai-claude-iran.html)を締結した。

**【MSSのデータフロー】**
データ入力（衛星画像・ドローン映像・通信傍受・公開情報・レーダー）
　→ データ融合（150+ソース統合）
　　→ AI/ML処理（Claude + コンピュータビジョン）
　　　→ 統合UI（黄=標的 / 青=友軍）
　　　　→ **人間が承認**
　　　　　→ 標的リスト（優先順位付き）→ 兵器割当 → 被害評価

### NATOへの展開

MSSは米軍の枠を超え、NATOにも展開されている。2025年3月25日、[NATOがPalantirのMSS NATOを取得](https://shape.nato.int/news-releases/nato-acquires-aienabled-warfighting-system-)。5月には[STEADFAST DETERRENCE 2025で初実戦投入](https://en.wikipedia.org/wiki/Project_Maven)され、10月のSTEADFAST DUEL 2025では全3つのNATO統合軍司令部が参加する大規模運用テストが行われた。

**参考ソース:**
- [Maven Smart System](https://www.missiledefenseadvocacy.org/maven-smart-system/)
- [Maven and SETAF-AF: How AI is Reshaping Modern Military Command](https://www.itssverona.it/maven-and-setaf-af-how-ai-is-reshaping-modern-military-command)
- [Anthropic and Palantir Partner to Bring Claude AI Models to AWS](https://investors.palantir.com/news-details/2024/Anthropic-and-Palantir-Partner-to-Bring-Claude-AI-Models-to-AWS-for-U.S.-Government-Intelligence-and-Defense-Operations/)
- [Project Maven - Wikipedia](https://en.wikipedia.org/wiki/Project_Maven)

---

## MSSの実戦投入 — ベネズエラからイラン、そしてNATOへ

### ベネズエラ・マドゥロ拘束作戦（2026年1月）

2026年1月3日未明、米特殊作戦部隊がカラカスを急襲し、マドゥロ大統領と妻を拘束・米国に連行した。この作戦で、[ClaudeがPalantirとの提携を通じて情報分析に使用された](https://www.foxnews.com/us/ai-tool-claude-helped-capture-venezuelan-dictator-maduro-us-military-raid-operation-report)ことが2月13日の報道で判明。Anthropicは[機密ネットワーク上で稼働する最初の民間AIモデル](https://www.foxnews.com/us/ai-tool-claude-helped-capture-venezuelan-dictator-maduro-us-military-raid-operation-report)だった。

Semaforの報道によれば、マドゥロ作戦後の定期確認で、[Anthropicの担当者がPalantir幹部に軍事利用への懸念を示した](https://www.semafor.com/article/02/17/2026/palantir-partnership-is-at-heart-of-anthropic-pentagon-rift)。そのPalantir幹部は、Anthropicが自社技術の軍事利用に反対するかもしれないと懸念し、国防総省に報告。これが対立の引き金となった。

### Operation Epic Fury — イラン攻撃（2026年2月28日〜）

トランプ大統領の命令で2026年2月28日に開始されたOperation Epic Furyで、MSSは真価を発揮した。

**【Operation Epic Fury の主要数値】**
- **最初の24時間の攻撃標的数:** [1,000以上](https://www.republicworld.com/world-news/maven-smart-system-explained-the-us-ai-technology-behind-1000-strikes-in-iran-during-operation-epic-furys-first-day)
- **11日間の累計攻撃標的数:** [5,500以上](https://defensescoop.com/2026/03/11/us-military-using-ai-against-iran-operation-epic-fury-adm-cooper/)
- **標的の種類:** ドローン・弾道ミサイル基地、指揮統制施設、艦船、防空システム
- **展開兵力:** 約50,000人（中東全域）
- **イランのドローン攻撃減少率:** [83%減](https://defensescoop.com/2026/03/11/us-military-using-ai-against-iran-operation-epic-fury-adm-cooper/)
- **イランの弾道ミサイル攻撃減少率:** [90%減](https://defensescoop.com/2026/03/11/us-military-using-ai-against-iran-operation-epic-fury-adm-cooper/)

米中央軍司令官ブラッド・クーパー提督は、[「AIツールが膨大なデータを数秒で処理し、指揮官がノイズを排除してより賢い判断をより速く下せるようにしている」](https://defensescoop.com/2026/03/11/us-military-using-ai-against-iran-operation-epic-fury-adm-cooper/)と述べた。同時に「**何を撃ち、何を撃たず、いつ撃つかは、常に人間が最終決定する**」とも強調した。

> **攻撃規模の推移:** 1日目 1,000標的 → 4日目 2,000標的 → 11日目 5,500標的

ただし、精度には限界もある。[砂漠地形では気象や環境要因により精度が30%以下に低下する](https://www.elrisala.com/we-want-to-use-it-for-everything-how-project-maven-became-central-to-americas-ai-powered-warfare/)場合もあると指摘されている。

### イラン学校爆撃事件

Operation Epic Fury中に、イラン南部ミナブの女子校が米軍の攻撃を受け、[170人以上が死亡](https://www.nbcnews.com/politics/national-security/democrats-ask-pentagon-iran-school-strike-role-ai-rcna263083)——その大半が児童だった。[120人以上の民主党下院議員がヘグセス国防長官に対し](https://www.nbcnews.com/politics/national-security/democrats-ask-pentagon-iran-school-strike-role-ai-rcna263083)、「Maven Smart Systemがこの学校を標的として識別したのか？ もしそうなら、人間がその標的の正確性を検証したのか？」と質問。[41人の上院民主党議員も](https://www.commondreams.org/news/artificial-intelligence-iran-war)調査を要求した。

国防総省は暫定的に、この攻撃が[「隣接するイラン軍基地の一部だった学校建物に対する米軍のターゲティングミス」](https://www.nbcnews.com/politics/national-security/democrats-ask-pentagon-iran-school-strike-role-ai-rcna263083)によるものだと結論づけた。

**参考ソース:**
- [US military used Anthropic's Claude AI in Nicolás Maduro capture operation](https://www.foxnews.com/us/ai-tool-claude-helped-capture-venezuelan-dictator-maduro-us-military-raid-operation-report)
- [Palantir partnership is at heart of Anthropic, Pentagon rift](https://www.semafor.com/article/02/17/2026/palantir-partnership-is-at-heart-of-anthropic-pentagon-rift)
- [Centcom commander touts use of AI in fight against Iran](https://defensescoop.com/2026/03/11/us-military-using-ai-against-iran-operation-epic-fury-adm-cooper/)
- [Maven Smart System Explained: The US AI Technology Behind 1,000 Strikes](https://www.republicworld.com/world-news/maven-smart-system-explained-the-us-ai-technology-behind-1000-strikes-in-iran-during-operation-epic-furys-first-day)
- [Democrats ask Pentagon about Iran school strike and role of AI](https://www.nbcnews.com/politics/national-security/democrats-ask-pentagon-iran-school-strike-role-ai-rcna263083)

---

## キルチェーンの圧縮 — 「12時間」が「45秒」に

### 従来のキルチェーン

軍事用語で「キルチェーン」とは、標的の発見から攻撃実行までの一連のプロセスを指す。料理で言えば「食材を見つける→洗う→切る→調理する→盛り付ける→食卓に出す」に相当する。従来、各ステップには検証・承認が必要で、[高価値標的であれば数日を要した](https://www.republicworld.com/world-news/maven-smart-system-explained-the-us-ai-technology-behind-1000-strikes-in-iran-during-operation-epic-furys-first-day)。

**【キルチェーンの6ステップ】**
1. **Find（発見）** — 衛星やドローンで標的を検知
2. **Fix（固定）** — 正確な位置座標の確認
3. **Track（追跡）** — 移動標的の継続監視
4. **Target（選定）** — 攻撃手段・手法の決定
5. **Engage（交戦）** — 攻撃の実行
6. **Assess（評価）** — 攻撃効果の判定

### AIによる劇的な圧縮

MSSの導入により、このタイムラインは劇的に圧縮された。

**【ターゲティング処理時間の変遷】**
- **従来** — 数時間〜数日（人間のみで処理）
- **[2020年・初回Scarlet Dragon演習](https://www.missiledefenseadvocacy.org/maven-smart-system/)** — 12時間（743分）／AI初導入
- **[現在・2026年](https://www.missiledefenseadvocacy.org/maven-smart-system/)** — 1分未満／MSS完全稼働
- **[Epic Fury推計](https://thephrasemaker.com/2026/03/03/the-45-second-kill-chain-calculation-of-2026-ai-warfare/)** — 20〜45秒/標的（1,000標的÷20人÷8時間）

[イラク自由作戦（2003年）では同等の成果を上げるのに2,000人が必要だったが、MSSは20人で同じ効率を達成した](https://www.missiledefenseadvocacy.org/maven-smart-system/)とされる。これは社員2,000人の会社が、20人のスタートアップに同じ仕事で追い抜かれたようなものだ。

### Decision Compression — 45秒で生死を決める問題

しかし、速度の向上は深刻な問題も生む。[「Decision Compression（判断圧縮）」](https://thephrasemaker.com/2026/03/03/the-45-second-kill-chain-calculation-of-2026-ai-warfare/)——AIが標的を高速に生成するため、人間の承認者に与えられる判断時間が極端に短くなる現象だ。

Operation Epic Furyの1,000標的/24時間を推計すると、[1標的あたりの確認時間は20〜45秒](https://thephrasemaker.com/2026/03/03/the-45-second-kill-chain-calculation-of-2026-ai-warfare/)。これは靴紐を結ぶ時間で生死を決定するようなものだ。[DoD指令3000.09](https://thephrasemaker.com/2026/03/03/the-45-second-kill-chain-calculation-of-2026-ai-warfare/)はシステムを「半自律型」と定義しているが、**オペレーターに与えるべき最低限の判断時間は定義していない**。

サイバーセキュリティ学者のJon R. Lindsayは、[「軍事におけるAI利用の増加は、実際には戦争における人間の重要性を高めている」](https://theconversation.com/us-military-leans-into-ai-for-attack-on-iran-but-the-tech-doesnt-lessen-the-need-for-human-judgment-in-war-277831)と主張する。AIは予測能力を向上させるが、何を予測し、その予測をどう適用するかを決定するには、機械が持ちえない価値判断が必要だからだ。

**参考ソース:**
- [Decision Compression: AI Calculation In The 2026 Iran Conflict](https://thephrasemaker.com/2026/03/03/the-45-second-kill-chain-calculation-of-2026-ai-warfare/)
- [US military leans into AI for attack on Iran](https://theconversation.com/us-military-leans-into-ai-for-attack-on-iran-but-the-tech-doesnt-lessen-the-need-for-human-judgment-in-war-277831)
- [Maven Smart System](https://www.missiledefenseadvocacy.org/maven-smart-system/)
- [Pentagon AI chief praises Palantir tech for speeding battlefield strikes](https://www.theregister.com/2026/03/13/palantirs_maven_smart_system_iran/)

---

## Anthropicと国防総省の対立 — 「サプライチェーンリスク」の衝撃

### 提携から亀裂へ

2024年11月、Anthropic・Palantir・AWSの三社は、[米国政府にClaude AIを提供する提携を発表](https://investors.palantir.com/news-details/2024/Anthropic-and-Palantir-Partner-to-Bring-Claude-AI-Models-to-AWS-for-U.S.-Government-Intelligence-and-Defense-Operations/)した。ClaudeはIL6認定環境で運用される最初の民間AIモデルとなり、2025年7月には[最大2億ドルの国防総省契約](https://www.cnbc.com/2026/03/05/anthropic-pentagon-ai-claude-iran.html)を獲得。

しかし2026年1月のマドゥロ作戦後、亀裂が走った。国防総省はAnthropicに「**all lawful uses（全合法用途）**」契約への署名を求めた——Claudeの使用にいかなる制限も付けないことを意味する。

### Anthropicの2つのレッドライン

Anthropicはこの要求を拒否。同社が求めたのは、たった2つの保証だった：

1. **完全自律型兵器への使用禁止** — 人間の介在なしに攻撃を実行する兵器
2. **米国市民に対する大規模国内監視への使用禁止**

Anthropic CEO ダリオ・アモデイは、[公式声明](https://www.anthropic.com/news/where-stand-department-war)で「**私たちは運用上の意思決定に民間企業が関与すべきではないと考えている——それは軍の役割だ。私たちの懸念は、高レベルの使用領域に関する例外のみだ**」と述べた。

職場の例えで言えば、IT部門が「セキュリティソフトをインストールしますが、社員の私的メール監視と、自動でPCをロックする機能だけは制限させてください」と言ったところ、経営陣が「すべて無制限にしろ」と返したような構図だ。

### 対立のタイムライン

- **2024年11月** — Anthropic-Palantir-AWS提携発表
- **2026年1月3日** — マドゥロ拘束作戦でClaude使用
- **1月12日** — ヘグセス国防長官がAnthropicを暗に批判
- **2月13日** — WSJ報道でClaude使用が公に
- **2月17日** — Semafor: Palantir幹部が国防総省に通報
- **2月23日** — xAI、機密システム利用契約を締結
- **2月27日** — [ヘグセスがX（旧Twitter）でサプライチェーンリスク認定を発表](https://www.cnbc.com/2026/03/05/anthropic-pentagon-ai-claude-iran.html)
- **2月28日** — [トランプが全連邦機関にAnthropic技術の使用即時停止を指示](https://www.cnbc.com/2026/03/05/anthropic-pentagon-ai-claude-iran.html)。トランプ:「犬のようにクビにした」。OpenAI、国防総省と契約発表。Operation Epic Fury開始
- **3月5日** — [国防総省が正式にサプライチェーンリスクに認定](https://www.cnbc.com/2026/03/05/anthropic-pentagon-ai-claude-iran.html)。防衛請負業者にClaude不使用の証明を義務化
- **3月9日** — [Anthropicがトランプ政権を提訴](https://www.cnbc.com/2026/03/09/anthropic-trump-claude-ai-supply-chain-risk.html)。「前例のない違法な措置」「修正第1条への報復」と主張
- **3月10日** — [MicrosoftがAnthropicを支持し、差止め請求](https://www.cnbc.com/2026/03/10/microsoft-says-court-should-temporarily-block-pentagon-ban-anthropic.html)。[22人の元軍高官](https://federalnewsnetwork.com/artificial-intelligence/2026/03/microsoft-backs-anthropic-urging-a-judge-to-halt-pentagons-actions-against-ai-company/)（元空軍・陸軍・海軍長官、沿岸警備隊長官を含む）も支持

Anthropicは史上初めてサプライチェーンリスクに認定された**米国企業**だ。この認定は従来、[ファーウェイのような外国の敵性組織](https://www.cnbc.com/2026/03/09/anthropic-trump-claude-ai-supply-chain-risk.html)に対して適用されてきたものだった。

### 矛盾：禁止しながら使い続ける

皮肉なのは、国防総省がAnthropicを「サプライチェーンリスク」に認定した**その同日に**、[イランでの軍事作戦でClaude AIを使い続けていた](https://www.cnbc.com/2026/03/05/anthropic-pentagon-ai-claude-iran.html)ことだ。Palantir CEOのアレックス・カープも[「我々は引き続きClaudeを使用している」](https://www.cnbc.com/2026/03/12/karp-palantir-anthropic-claude-pentagon-blacklist.html)と公言。

Anthropicは[公式声明](https://www.anthropic.com/news/where-stand-department-war)で「**戦闘作戦の最中に戦闘員や国家安全保障の専門家から重要なツールを奪わないことが最優先だ。Anthropicは必要な限り、名目上のコストでモデルを提供し続ける**」と表明した。

**参考ソース:**
- [Anthropic officially told by DOD that it's a supply chain risk](https://www.cnbc.com/2026/03/05/anthropic-pentagon-ai-claude-iran.html)
- [Anthropic sues Trump administration over Pentagon blacklist](https://www.cnbc.com/2026/03/09/anthropic-trump-claude-ai-supply-chain-risk.html)
- [Microsoft says court should temporarily block Pentagon ban Anthropic](https://www.cnbc.com/2026/03/10/microsoft-says-court-should-temporarily-block-pentagon-ban-anthropic.html)
- [Where things stand with the Department of War](https://www.anthropic.com/news/where-stand-department-war)
- [Karp: Palantir still using Anthropic's Claude amid Pentagon blacklist](https://www.cnbc.com/2026/03/12/karp-palantir-anthropic-claude-pentagon-blacklist.html)
- [Microsoft and retired military chiefs back Anthropic](https://federalnewsnetwork.com/artificial-intelligence/2026/03/microsoft-backs-anthropic-urging-a-judge-to-halt-pentagons-actions-against-ai-company/)

---

## 代替AIへの急速な移行 — しかし置換は容易ではない

### OpenAIの「妥協」

Anthropicが排除された翌日の2月28日、[OpenAIは国防総省と機密環境利用契約を発表](https://www.npr.org/2026/02/27/nx-s1-5729118/trump-anthropic-pentagon-openai-ai-weapons-ban)した。MIT Technology Reviewはこれを[「OpenAIの妥協——Anthropicが恐れていたもの」](https://www.technologyreview.com/2026/03/02/1133850/openais-compromise-with-the-pentagon-is-what-anthropic-feared/)と評した。

OpenAI CEOのサム・アルトマンは、国防総省が[「安全性への深い敬意と、最善の結果を達成するためのパートナーシップへの意欲」](https://www.cnbc.com/2026/03/05/anthropic-pentagon-ai-claude-iran.html)を示したと述べた。しかし、Anthropicが固守した「自律型兵器・大規模監視への制限」をOpenAIがどこまで保持しているかは、明確になっていない。

### xAI（Musk）の参入

さらに2月23日には、[Elon MuskのxAIが国防総省とGrokの機密システム利用契約を締結](https://www.axios.com/2026/02/23/ai-defense-department-deal-musk-xai-grok)。Anthropicに続き、機密環境で利用可能なAIモデルの選択肢が広がった。

**【軍事AI契約の現状】**
- **Anthropic**（2024年11月 / Claude 3・3.5）→ サプライチェーンリスク認定、排除進行中
- **xAI**（2026年2月23日 / Grok）→ 機密環境利用契約締結
- **OpenAI**（2026年2月28日 / GPT）→ 機密環境利用契約締結

### 置換の困難さ

しかし、Defense Oneは「[Anthropicの代替には数か月から12か月以上かかる](https://www.defenseone.com/threats/2026/02/it-would-take-pentagon-months-replace-anthropics-ai-tools-sources/411741/)」と報じた。国防総省CTO エミール・マイケルも、Claudeへの依存が「[もしこのソフトウェアがダウンしたら次の戦闘はどうなるのか](https://fortune.com/2026/03/07/pentagon-emil-michael-anthropic-claude-defense-ai-openai-iran-war-palantir/)」という脆弱性を生んでいたと認めた。

スマホの例えで言えば、長年使ってきたiPhoneからAndroidへの乗り換えに似ている——アプリの再インストールだけでなく、ワークフロー全体を再構築する必要がある。しかも戦争の真っ最中に。

**参考ソース:**
- [OpenAI's 'compromise' with the Pentagon is what Anthropic feared](https://www.technologyreview.com/2026/03/02/1133850/openais-compromise-with-the-pentagon-is-what-anthropic-feared/)
- [OpenAI announces Pentagon deal after Trump bans Anthropic](https://www.npr.org/2026/02/27/nx-s1-5729118/trump-anthropic-pentagon-openai-ai-weapons-ban)
- [Musk's xAI and Pentagon reach deal to use Grok in classified systems](https://www.axios.com/2026/02/23/ai-defense-department-deal-musk-xai-grok)
- [It would take the Pentagon months to replace Anthropic's AI tools](https://www.defenseone.com/threats/2026/02/it-would-take-pentagon-months-replace-anthropics-ai-tools-sources/411741/)
- [Pentagon official recalls 'whoa moment'](https://fortune.com/2026/03/07/pentagon-emil-michael-anthropic-claude-defense-ai-openai-iran-war-palantir/)

---

## 軍事AIの倫理的課題と今後の展望

### 自動化バイアスのリスク

MSSの能力が実証される一方で、深刻な懸念が提起されている。[専門家は「自動化バイアス」——オペレーターがAIの出力を独立した検証なしに信頼する傾向](https://www.elrisala.com/we-want-to-use-it-for-everything-how-project-maven-became-central-to-americas-ai-powered-warfare/)を指摘している。イスラエルのAI標的システム「Lavender」では、ある情報将校が[「各標的に20秒を費やした。人間としての付加価値はゼロで、承認スタンプに過ぎなかった」](https://www.elrisala.com/we-want-to-use-it-for-everything-how-project-maven-became-central-to-americas-ai-powered-warfare/)と証言している。

ロンドン・スクール・オブ・エコノミクスのElke Schwarz博士は[「速度とスケールが最優先される。それがこのシステムの魅惑であり、誘惑だ」](https://www.elrisala.com/we-want-to-use-it-for-everything-how-project-maven-became-central-to-americas-ai-powered-warfare/)と警告する。

### Nature誌の提言：「法が整うまで停止せよ」

2026年3月、[Nature誌は社説](https://www.nature.com/articles/d41586-026-00762-y)で「軍事におけるAIの使用を、法的枠組みが合意されるまで停止すべきだ」と提言した。中国国防省も「AIの無制限な軍事利用は、アルゴリズムに生死の権限を与えるリスクがある」と警告している。

### ガバナンスの空白

今回の対立が浮き彫りにしたのは、**民間AI企業の軍事利用に関するガバナンスの空白**だ。

**【論点別の評価】**

**問題あり:**
- 自律型兵器へのAI利用 → 法的枠組みが未整備
- Human-in-the-loop → 45秒の承認は形骸化リスク
- AI標的精度 → 砂漠地形で30%以下に低下
- 民間AI企業の軍事利用ルール → 調停する枠組みが不在
- 国際法との整合性 → UN専門家が「深刻なリスク」警告

**一定の対応あり:**
- Human-in-the-loop → 制度上は人間が最終決定
- AI標的精度 → 処理速度は劇的に向上
- 複数AIベンダーの確保 → OpenAI・xAIと契約済み（ただし移行に12か月以上）
- 国際法との整合性 → NATOで標準化推進中

Anthropicは自社のAI安全原則を守ろうとし、国防総省は戦時の運用自由度を求めた。どちらの主張にも合理性はあるが、それを調停する枠組みが存在しない。

### AI軍事革命（RMA）の可能性と限界

Global Security Reviewに寄稿したMatthew J. Fecteau中佐は、MSSが[軍事革命（Revolution in Military Affairs）の兆候を示している](https://globalsecurityreview.com/signals-of-a-new-revolution-maven-smart-system-and-the-ai-rma-horizon/)と論じつつ、「**最高の道具でも、文化的シフトなしにはRMA達成に失敗する可能性がある**」と警告する。技術だけでなく、教義・戦術・組織・文化の同時的変革が必要だというのだ。

19世紀の電信が「初めてのリアルタイム指揮」を可能にしたように、AIは指揮統制の根本的変革をもたらしうる。しかし、MSSは間違いなく戦争の速度を変えた。だが、戦争を「より良く」するのか、それとも「より速く」するだけなのか——その答えは、技術の中ではなく、**それを使う人間と制度の側**にある。

**参考ソース:**
- ['We want to use it for everything': How Project Maven became central to America's AI-powered warfare](https://www.elrisala.com/we-want-to-use-it-for-everything-how-project-maven-became-central-to-americas-ai-powered-warfare/)
- [Stop the use of AI in war until laws can be agreed](https://www.nature.com/articles/d41586-026-00762-y)
- [From Anthropic to Iran: Who sets the limits on AI's use in war and surveillance?](https://theconversation.com/from-anthropic-to-iran-who-sets-the-limits-on-ais-use-in-war-and-surveillance-277334)
- [Signals of a New Revolution: Maven Smart System and the AI-RMA Horizon](https://globalsecurityreview.com/signals-of-a-new-revolution-maven-smart-system-and-the-ai-rma-horizon/)
- [Decision Compression: AI Calculation In The 2026 Iran Conflict](https://thephrasemaker.com/2026/03/03/the-45-second-kill-chain-calculation-of-2026-ai-warfare/)
