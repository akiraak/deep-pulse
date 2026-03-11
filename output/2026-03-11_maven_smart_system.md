# Maven Smart System（MSS）— 米軍のAI戦争を支える頭脳

2026年、アメリカ軍の軍事作戦は新たな次元に入った。1月のベネズエラ・マドゥロ大統領拘束作戦、そして2月末から続くイラン攻撃「Operation Epic Fury」。これらの作戦で繰り返し言及されるのが、**Maven Smart System（MSS）** という軍事AIプラットフォームだ。衛星画像、ドローン映像、通信傍受を統合し、AIが標的を推薦する——かつて数週間を要した戦闘計画を「リアルタイムオペレーション」に変えたとされるこのシステムの全体像を、その歴史・技術・実戦投入・そして引き起こした政治的対立まで包括的に解説する。

---

## Project Mavenの誕生 — ドローン映像の山を処理せよ

Maven Smart Systemの原点は、2017年4月に遡る。米国防副長官が発出した一通のメモ——「Algorithmic Warfare Cross-Functional Team」の設立指示が全ての始まりだった。後に「[Project Maven](https://en.wikipedia.org/wiki/Project_Maven)」と呼ばれるこのプロジェクトの最初の任務は、米軍のドローンが毎日収集する膨大な映像データを、コンピュータビジョンで自動解析することだった。

当初、この任務を担ったのはGoogleだ。しかし2018年、同社の従業員が「AIの軍事利用への加担」に抗議してウォークアウトを実施。[Google社内の強い反発を受け](https://www.pbs.org/newshour/show/amid-pressure-from-employees-google-drops-pentagons-project-maven-account)、同社はProject Mavenの契約を更新しなかった。

この空白を埋めたのが**Palantir Technologies**だ。社内では映画「トロン」（1982年）にちなんで「[Tron](https://www.elrisala.com/we-want-to-use-it-for-everything-how-project-maven-became-central-to-americas-ai-powered-warfare/)」と呼ばれていたこのプロジェクトを引き継いだPalantirは、単なるドローン映像解析を超え、包括的なAI戦闘支援プラットフォーム——Maven Smart System（MSS）へと発展させた。

2022年にはロシアのウクライナ侵攻を受け、[ウクライナ軍に基本的なバージョンが提供](https://www.elrisala.com/we-want-to-use-it-for-everything-how-project-maven-became-central-to-americas-ai-powered-warfare/)されロシア軍の車両・建物・人員の識別に使用された。2025年5月には契約額が当初の4億8,000万ドルから[約13億ドルに拡大](https://defensescoop.com/2025/05/23/dod-palantir-maven-smart-system-contract-increase/)された。国防総省は「戦闘司令部の需要増」をその理由に挙げている。

---

## MSSの技術アーキテクチャ — 150以上のデータソースを統合するAI戦闘脳

### データ融合基盤

MSSの核心は、あらゆる情報ソースを一つの「共通作戦図（Common Operating Picture）」に統合する能力にある。[衛星画像、兵站データ、オープンソースインテリジェンス（OSINT）、作戦入力](https://www.itssverona.it/maven-and-setaf-af-how-ai-is-reshaping-modern-military-command)をリアルタイムで融合し、意思決定サイクルを数時間から数秒に圧縮する。

具体的には、以下のデータソースが統合される：

- **衛星画像・商用衛星データ** — 地上の施設や車両の識別
- **ドローン映像** — リアルタイムの戦場監視
- **通信傍受** — 敵の指揮通信の分析
- **レーダーデータ** — 航空機・ミサイルの追跡
- **OSINT** — 公開情報、ソーシャルメディア分析
- **150以上の情報フィード** — [各種インテリジェンスソースの統合](https://www.ainewsinternational.com/ai-kill-chain-how-the-u-s-is-using-artificial-intelligence-to-bomb-iran/)

### プラットフォーム構成

MSSは**Palantir AIP（AI Platform）** をベースに、**Amazon Web Services（AWS）** 上で運用される。2024年にはAnthropicとPalantir、AWSが提携し、[米国政府の情報・防衛業務にClaudeモデルを提供](https://investors.palantir.com/news-details/2024/Anthropic-and-Palantir-Partner-to-Bring-Claude-AI-Models-to-AWS-for-U.S.-Government-Intelligence-and-Defense-Operations/)する体制が整えられた。Claudeは**Impact Level 6（IL6）** 認定環境で運用され、機密ネットワーク上での使用が可能となった最初の民間AIモデルとなった。

さらに国防総省は2026年1月、MSSとEdge Data Meshを統合した「[Enterprise C2 Suite](https://defensescoop.com/2026/01/06/dod-enterprise-command-and-control-program-office/)」構想を発表。Combined Joint All-Domain Command and Control（CJADC2）——陸・海・空・宇宙・サイバー空間を横断して全軍のセンサー、攻撃手段、意思決定者をつなぐ統合指揮統制の中核としてMSSを位置づけた。

### AI/MLの役割

MSS内のAI/ML機能は以下のタスクを担う：

- **標的識別・優先順位付け** — 車両、建物、軍事インフラを自動認識し、戦略的重要度でランク付け
- **兵器マッチング** — 標的に対して適切な兵器種別を推薦
- **被害評価** — 攻撃後のインパクトを分析
- **兵站予測** — 展開部隊への補給需要を予測

この中でAnthropicの**Claude**は、[Palantirとの提携を通じて情報入力を分析し、標的を戦略的重要度でランク付けし、作戦開始後の攻撃影響を評価](https://www.ainewsinternational.com/ai-kill-chain-how-the-u-s-is-using-artificial-intelligence-to-bomb-iran/)する役割を担っていた。Palantirのカスタマイズされた防衛ソフトウェアソリューションの[約10〜20%をフロンティア言語モデルが占める](https://www.semafor.com/article/02/17/2026/palantir-partnership-is-at-heart-of-anthropic-pentagon-rift)とされる。

### オープンアーキテクチャ

MSSの重要な設計思想は**オープンアーキテクチャ**だ。サードパーティの分析ツールを統合でき、ユーザーはインターフェースをカスタマイズ可能。Dataminr First AlertやSprinklrといった外部プラットフォームとの連携により、[ソーシャルメディア分析やリアルタイムの偽情報検知](https://www.itssverona.it/maven-and-setaf-af-how-ai-is-reshaping-modern-military-command)も実現している。

---

## 実戦投入 — ベネズエラからイラン、そしてNATOへ

### ベネズエラ・マドゥロ拘束作戦（2026年1月）

2026年1月3日未明、米特殊作戦部隊がベネズエラの首都カラカスを急襲し、ニコラス・マドゥロ大統領と妻を拘束・米国に連行した。この作戦で、AnthropicのClaude AIが[Palantirとの提携を通じて配備され](https://www.foxnews.com/us/ai-tool-claude-helped-capture-venezuelan-dictator-maduro-us-military-raid-operation-report)、情報分析に使用された。

この事実が2月13日に報道されると、Anthropic社内で動揺が走った。Semaforの報道によれば、[マドゥロ拘束作戦を監視する当局者の画面にClaudeが表示されている](https://www.semafor.com/article/02/17/2026/palantir-partnership-is-at-heart-of-anthropic-pentagon-rift)のをAnthropicの関係者が確認。定期的な確認の中でAnthropicの担当者がPalantir幹部に軍事利用への懸念を示したところ、その幹部が国防総省に報告し、対立の引き金となった。

### Operation Epic Fury — イラン攻撃（2026年2月末〜）

2026年2月28日、米国とイスラエルはイランに対する大規模軍事作戦「Operation Epic Fury」を開始した。作戦の目標は核兵器開発の阻止、弾道ミサイル備蓄の破壊、代理テロネットワークの無力化、海軍の壊滅だった。

この作戦でMSSは真価を発揮した。[最初の12時間で約900の標的が攻撃された](https://nanonets.com/blog/ai-warfare-operation-epic-fury-2026/)——従来の紛争であれば「数日、おそらく1週間」を要したであろう規模だ。MSSは5つの戦闘司令部にわたって衛星画像、地理情報、通信傍受を統合し、同時並行での攻撃実行を可能にした。

ただし、精度には限界もある。MSSは[1時間に約1,000件の標的推薦を生成する](https://www.elrisala.com/we-want-to-use-it-for-everything-how-project-maven-became-central-to-americas-ai-powered-warfare/)能力を持つ一方、[砂漠地形では気象や環境要因により精度が30%以下に低下する](https://www.elrisala.com/we-want-to-use-it-for-everything-how-project-maven-became-central-to-americas-ai-powered-warfare/)場合もあると指摘されている。

### NATO展開

MSSは米軍の枠を超え、NATOにも展開されている。2025年4月には[NATOがPalantirのMaven AIを軍事計画に採用](https://shape.nato.int/news-releases/nato-acquires-aienabled-warfighting-system-)することを決定。NATO連合軍作戦司令部（Allied Command Operations）に配備され、[STEADFAST DETERRENCE 2025](https://www.itssverona.it/maven-and-setaf-af-how-ai-is-reshaping-modern-military-command)などの演習で使用された。同盟国間でMSSの利用を標準化し、分野横断的調整の向上と意思決定の加速を実現している。

また、米陸軍では現在[2万人以上のアクティブユーザー](https://defensescoop.com/2025/05/23/dod-palantir-maven-smart-system-contract-increase/)が35以上の軍事ツールでMSSを利用しており、そのユーザー数は2024年1月以降倍増している。

---

## キルチェーンの圧縮 — 「数週間」が「数時間」に

### 従来のキルチェーン

軍事用語で「キルチェーン」とは、標的の発見から攻撃実行までの一連のプロセスを指す。従来、このプロセスは以下のステップを踏む：

1. **発見（Find）** — 衛星やドローンで標的を検知
2. **固定（Fix）** — 正確な位置座標の確認
3. **追跡（Track）** — 移動する標的の継続監視
4. **選定（Target）** — 攻撃手段と手法の決定
5. **交戦（Engage）** — 攻撃の実行
6. **評価（Assess）** — 攻撃効果の判定

このプロセスには[検証、クロスリファレンス、ブリーフィング、承認という各段階があり、通常数時間。高価値の指導者ターゲットであれば数日を要した](https://nanonets.com/blog/ai-warfare-operation-epic-fury-2026/)。

### AIによる圧縮

MSSの導入により、このタイムラインは劇的に圧縮された。MSSの開発初期（2020年）には[ターゲティングデータの処理に12時間を要していたものが、現在は1分未満](https://www.missiledefenseadvocacy.org/maven-smart-system/)で完了する。

Operation Epic Furyでは、AIシステムが[「ドローン映像、衛星画像、通信傍受を人間の分析チームでは到底及ばない速度で融合」](https://nanonets.com/blog/ai-warfare-operation-epic-fury-2026/)し、指導者ターゲティング、防空制圧、核施設攻撃を同時並行で実行することを可能にした。[最初の24時間で1,000以上の潜在的標的が生成・優先順位付け](https://www.ainewsinternational.com/ai-kill-chain-how-the-u-s-is-using-artificial-intelligence-to-bomb-iran/)された。

イラク自由作戦（2003年）では同等の成果を上げるのに[2,000人の人員が必要だったが、MSSは20人で同じ効率を達成](https://www.missiledefenseadvocacy.org/maven-smart-system/)したとされる。

### Human-in-the-loop — 人間は依然として不可欠

キルチェーンの圧縮は議論を呼んでいるが、MSSの設計思想は**人間が判断の中心に留まる**ことを前提としている。サイバーセキュリティ学者のJon R. Lindsayは、[「意思決定支援システムは人間の意思決定を支援するものであり、AIが人間に取って代わるわけではない」](https://theconversation.com/us-military-leans-into-ai-for-attack-on-iran-but-the-tech-doesnt-lessen-the-need-for-human-judgment-in-war-277831)と強調する。

Lindsayはさらに、[「軍事におけるAI利用の増加は、実際には戦争における人間の重要性を高めている」](https://theconversation.com/us-military-leans-into-ai-for-attack-on-iran-but-the-tech-doesnt-lessen-the-need-for-human-judgment-in-war-277831)と主張する。AIは予測能力を向上させるが、何を予測し、その予測をどう適用するかを決定するには——機械が持ちえない価値判断が必要だからだ。

---

## Anthropicと国防総省の対立 — 「シリコンバレーのイデオロギーに人質は取らせない」

### 対立の発端

2024年、Anthropic・Palantir・AWSの三社は米国政府にClaude AIを提供する[提携を発表](https://investors.palantir.com/news-details/2024/Anthropic-and-Palantir-Partner-to-Bring-Claude-AI-Models-to-AWS-for-U.S.-Government-Intelligence-and-Defense-Operations/)した。Claudeは国防総省の機密ネットワーク上で稼働する[唯一のAIモデル](https://nanonets.com/blog/ai-warfare-operation-epic-fury-2026/)となった。

しかし2026年1月のベネズエラ作戦での使用が明らかになると、亀裂が走った。国防総省はAnthropicに対し、**全ての合法的用途への無制限アクセス（"all lawful uses"契約）** への署名を求めた。

### Anthropicの拒否

Anthropicはこの要求を拒否。同社が求めたのは、以下の2点に関する保証だった：

- **完全自律型兵器への使用禁止**
- **米国市民に対する大規模国内監視への使用禁止**

Anthropicの広報は[「あらゆる使用は使用ポリシーに準拠する必要がある」](https://www.foxnews.com/us/ai-tool-claude-helped-capture-venezuelan-dictator-maduro-us-military-raid-operation-report)と述べ、同社が掲げるAI安全原則を崩す姿勢はないことを示した。

### 国防総省の報復

ピート・ヘグセス国防長官は[「戦争遂行を許可しないAIモデルは採用しない」](https://www.semafor.com/article/02/17/2026/palantir-partnership-is-at-heart-of-anthropic-pentagon-rift)と宣言。2026年3月5日、国防総省はAnthropicを**「サプライチェーンリスク」** に正式認定した。これにより、[防衛請負業者はAnthropicのモデルを軍事業務で使用することが禁じられた](https://www.cnbc.com/2026/03/04/pentagon-blacklist-anthropic-defense-tech-claude.html)。

国防総省報道官のキングスリー・ウィルソンは[「アメリカの兵士がシリコンバレーのイデオロギーに人質に取られることは決してない」](https://www.elrisala.com/we-want-to-use-it-for-everything-how-project-maven-became-central-to-americas-ai-powered-warfare/)と述べた。

### Anthropicの提訴とMicrosoftの支持

3月9日、Anthropicはトランプ政権を相手取り[連邦裁判所に提訴](https://techcrunch.com/2026/03/09/anthropic-sues-defense-department-over-supply-chain-risk-designation/)。サプライチェーンリスク認定は「前例のない違法な措置」であり、通常は外国の敵性組織に対して適用されるものだと主張した。さらに、この措置がAI政策に関する発言を理由とした**合衆国憲法修正第1条（言論の自由）への報復**であると訴えた。

翌10日には[MicrosoftがAnthropicを支持し、差止め請求への支援を表明](https://www.cnbc.com/2026/03/10/microsoft-says-court-should-temporarily-block-pentagon-ban-anthropic.html)した。

### 代替への急速な移行

国防総省の技術担当次官エミール・マイケルは、Anthropicへの依存が「[もしこのソフトウェアがダウンしたら、何かのガードレールが発動したら、次の戦闘はどうなるのか](https://fortune.com/2026/03/07/pentagon-emil-michael-anthropic-claude-defense-ai-openai-iran-war-palantir/)」という脆弱性を生んでいたと振り返る。

対策として、国防総省は**OpenAI**、**xAI**、**Google**との契約を急速に進め、[「全てのプロバイダーを確保したい」](https://fortune.com/2026/03/07/pentagon-emil-michael-anthropic-claude-defense-ai-openai-iran-war-palantir/)として単一ベンダーへの依存からの脱却を図っている。

---

## 軍事AIの倫理的課題と今後の展望

### AIキルチェーンへの批判

MSSの能力が実証される一方で、深刻な懸念も提起されている。

**自動化バイアス** — [オペレーターがAIの出力を独立した検証なしに信頼する傾向](https://www.elrisala.com/we-want-to-use-it-for-everything-how-project-maven-became-central-to-americas-ai-powered-warfare/)が指摘されている。MSSが推薦した標的を人間が「ゴム印を押すように」承認してしまうリスクだ。

**アルゴリズムの偏り** — 「軍事年齢の男性」といった[ターゲティング基準が十分な正当性を欠く](https://www.elrisala.com/we-want-to-use-it-for-everything-how-project-maven-became-central-to-americas-ai-powered-warfare/)という批判がある。

**歴史的教訓** — 技術に依存した過去の失敗は繰り返されうる。ベトナム戦争のIgloo Whiteシステムは[ベトナム側のデコイに欺かれ](https://theconversation.com/us-military-leans-into-ai-for-attack-on-iran-but-the-tech-doesnt-lessen-the-need-for-human-judgment-in-war-277831)、1988年には米イージス巡洋艦がイランの旅客機を誤射、1999年にはステルス爆撃機がベオグラードの中国大使館を爆撃した。

**民間人リスク** — [人口密集地域では民間人への被害リスクが高まる](https://www.ainewsinternational.com/ai-kill-chain-how-the-u-s-is-using-artificial-intelligence-to-bomb-iran/)。AIが標的を推薦しても、その攻撃が引き起こす二次的被害の判断は人間に委ねられるべきだ。

2025年4月には専門家が[国連に文書を提出し、AI支援ターゲティングシステムが国際人道法に「深刻なリスク」をもたらす](https://www.elrisala.com/we-want-to-use-it-for-everything-how-project-maven-became-central-to-americas-ai-powered-warfare/)と警告している。

### AI軍事革命（RMA）の可能性と限界

Global Security Reviewに寄稿したMatthew J. Fecteau中佐は、MSSが[軍事革命（Revolution in Military Affairs）の兆候を示している](https://globalsecurityreview.com/signals-of-a-new-revolution-maven-smart-system-and-the-ai-rma-horizon/)と論じつつ、「最高の道具でも、文化的シフトなしにはRMA達成に失敗する可能性がある」と警告する。技術だけでなく、教義・戦術・組織・文化の**同時的変革**が必要だというのだ。

19世紀の電信が「初めてのリアルタイム指揮」を可能にしたように、AIは指揮統制の根本的変革をもたらしうる。しかし、その実現には技術導入にとどまらない制度的・組織的な再編が不可欠だ。

### ガバナンスの空白

今回の対立が浮き彫りにしたのは、**民間AI企業の軍事利用に関するガバナンスの空白**だ。Anthropicは自社のAI安全原則を守ろうとし、国防総省は戦時の運用自由度を求めた。どちらの主張にも合理性はあるが、それを調停する枠組みが存在しない。

Anthropicの排除後、国防総省はOpenAIやxAIへの切り替えを急いでいるが、これらの企業が同様の倫理的制約を課さない保証はない——あるいは、課すべき制約を自ら放棄するリスクもある。

MSSは間違いなく戦争の形を変えた。しかし、AIが戦争を「より良く」するのか、それとも「より速く」するだけなのか——その答えは、技術の中ではなく、それを使う人間と制度の側にある。

---

## 参考ソース

- [Pentagon used Anthropic's Claude during Maduro raid - Axios](https://www.axios.com/2026/02/13/anthropic-claude-maduro-raid-pentagon)
- [AI tool Claude helped capture Venezuelan dictator Maduro - Fox News](https://www.foxnews.com/us/ai-tool-claude-helped-capture-venezuelan-dictator-maduro-us-military-raid-operation-report)
- [AI Arms Race Has Real Numbers: Pentagon vs China 2026 - Nanonets](https://nanonets.com/blog/ai-warfare-operation-epic-fury-2026/)
- [How Project Maven became central to America's AI-powered warfare - Elrisala](https://www.elrisala.com/we-want-to-use-it-for-everything-how-project-maven-became-central-to-americas-ai-powered-warfare/)
- [DOD Palantir Maven Smart System contract increase - DefenseScoop](https://defensescoop.com/2025/05/23/dod-palantir-maven-smart-system-contract-increase/)
- [Maven Smart System - Missile Defense Advocacy Alliance](https://www.missiledefenseadvocacy.org/maven-smart-system/)
- [Maven and SETAF-AF: How AI is Reshaping Modern Military Command - ITSS Verona](https://www.itssverona.it/maven-and-setaf-af-how-ai-is-reshaping-modern-military-command)
- [Anthropic and Palantir Partner to Bring Claude AI Models to AWS - Palantir](https://investors.palantir.com/news-details/2024/Anthropic-and-Palantir-Partner-to-Bring-Claude-AI-Models-to-AWS-for-U.S.-Government-Intelligence-and-Defense-Operations/)
- [DOD maps out plan for new enterprise command-and-control program office - DefenseScoop](https://defensescoop.com/2026/01/06/dod-enterprise-command-and-control-program-office/)
- [AI Kill Chain: How AI Is Changing Modern Warfare - AI News International](https://www.ainewsinternational.com/ai-kill-chain-how-the-u-s-is-using-artificial-intelligence-to-bomb-iran/)
- [Palantir partnership is at heart of Anthropic, Pentagon rift - Semafor](https://www.semafor.com/article/02/17/2026/palantir-partnership-is-at-heart-of-anthropic-pentagon-rift)
- [Pentagon's 'whoa moment' with Anthropic - Fortune](https://fortune.com/2026/03/07/pentagon-emil-michael-anthropic-claude-defense-ai-openai-iran-war-palantir/)
- [Defense tech companies are dropping Claude after Pentagon's Anthropic blacklist - CNBC](https://www.cnbc.com/2026/03/04/pentagon-blacklist-anthropic-defense-tech-claude.html)
- [Anthropic was the Pentagon's choice for AI. Now it's banned - CNBC](https://www.cnbc.com/2026/03/09/anthropic-was-the-pentagons-choice-for-ai-now-its-banned-and-experts-are-worried.html)
- [Anthropic sues Trump administration over supply chain risk - CNBC](https://www.cnbc.com/2026/03/09/anthropic-trump-claude-ai-supply-chain-risk.html)
- [Microsoft says court should temporarily block Pentagon ban on Anthropic - CNBC](https://www.cnbc.com/2026/03/10/microsoft-says-court-should-temporarily-block-pentagon-ban-anthropic.html)
- [Anthropic sues Defense Department over supply-chain risk designation - TechCrunch](https://techcrunch.com/2026/03/09/anthropic-sues-defense-department-over-supply-chain-risk-designation/)
- [Signals of a New Revolution: Maven Smart System and the AI-RMA Horizon - Global Security Review](https://globalsecurityreview.com/signals-of-a-new-revolution-maven-smart-system-and-the-ai-rma-horizon/)
- [US military leans into AI for attack on Iran - The Conversation](https://theconversation.com/us-military-leans-into-ai-for-attack-on-iran-but-the-tech-doesnt-lessen-the-need-for-human-judgment-in-war-277831)
- [NATO acquires AI-enabled Warfighting System - SHAPE NATO](https://shape.nato.int/news-releases/nato-acquires-aienabled-warfighting-system-)
- [US used 'Claude' to strike over 1000 targets - Responsible Statecraft](https://responsiblestatecraft.org/ai-war-iran/)
- [2026年アメリカ合衆国によるベネズエラ攻撃 - Wikipedia](https://ja.wikipedia.org/wiki/2026%E5%B9%B4%E3%82%A2%E3%83%A1%E3%83%AA%E3%82%AB%E5%90%88%E8%A1%86%E5%9B%BD%E3%81%AB%E3%82%88%E3%82%8B%E3%83%99%E3%83%8D%E3%82%BA%E3%82%A8%E3%83%A9%E6%94%BB%E6%92%83)
- [Amid pressure from employees, Google drops Pentagon's Project Maven account - PBS](https://www.pbs.org/newshour/show/amid-pressure-from-employees-google-drops-pentagons-project-maven-account)
