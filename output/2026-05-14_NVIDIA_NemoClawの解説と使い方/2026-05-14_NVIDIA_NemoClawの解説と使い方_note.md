# NVIDIA NemoClaw を5分で全部理解する——自宅 GPU に住む 24/7 AI エージェント

2026年3月16日、GTC キーノートで NVIDIA が発表した **NemoClaw**。OpenClaw の作者ピーター・シュタインベルガー氏と共同開発した、**常時稼働 AI エージェントを"自分のハード"で安全に動かすためのリファレンススタック**だ。インストールはこれだけ——`curl -fsSL https://www.nvidia.com/nemoclaw.sh | bash`。5分後にはあなたの箱の中に、ネットワークもファイルシステムも縛られた AI 秘書が立ち上がる。

## 読みどころ

- **NemoClaw / OpenShell / OpenClaw の3層構造**: 似た名前が3つ出てくるが、シェフ・厨房・段取り係に例えると一気に整理がつく
- **自律エージェントの3つのリスク**: 任意のネットへの接続、ホスト FS アクセス、推論コスト暴走——これを構造的に縛るための4層ガードレール
- **8つの推論プロバイダ**: NVIDIA Endpoints / OpenAI / Anthropic / Gemini / OpenAI 互換 / Anthropic 互換 / Local Ollama / Model Router。完全ローカル運用も可能
- **OpenShell 単体でも動くという事実**: それでも NemoClaw を選ぶ理由は、Dockerfile 硬化・ブループリント digest 検証・状態移行などの「上乗せ」にある
- **「すべての会社が OpenClaw 戦略を持つべきだ」**: GTC ステージでフアン CEO が Linux・Kubernetes・HTML と並べた一節が、NVIDIA の本気度をよく表している
