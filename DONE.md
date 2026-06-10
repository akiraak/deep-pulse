# DONE

<!-- TODO.md から完了済みタスクを移動 -->

- [x] ニュース記事を Markdown にまとめる
- [x] Markdown を HTML に変換して表示する
- [x] HTML 配信用のサーバーを起動できるようにする
- [x] 記事生成フローの自動化（ツール許可の YES/NO 確認を減らす）
- [x] HTML のデザインを複数パターン生成し、ユーザーが選んで適用する
- [x] push 時に GitHub Pages で記事サイトを自動生成・デプロイする
- [x] データセンターのレーザーとCoherent社の記事を生成する
- [x] スティーヴン・キング全作品ガイドの記事を生成する（全作品・シリーズ優先・ネタバレ控えめ＋日本語版の有無） → [プラン](output/2026-06-10_スティーヴン・キング全作品ガイド/2026-06-10_スティーヴン・キング全作品ガイド_plan.md)
- [x] 記事配信サーバーと管理画面サーバーを分離する（`./server.sh` と `./admin.sh` で別々に起動）
- [x] `_note.md` ファイルを記事一覧から除外する（render.ts 修正 + CLAUDE.md 更新）
- [x] 管理画面（admin panel）の実装 → [plans/admin-panel.md](plans/admin-panel.md)
- [x] 管理画面にplansファイルを表示（Markdownレンダリング＋実装内容名表示） → [plans/admin-plans-view.md](plans/admin-plans-view.md)
- [x] サイト名に Claude Code で生成されている文章と分かるようにする → [plans/site-name-claude-code.md](plans/site-name-claude-code.md)
- [x] 管理画面のプラン一覧はプランファイルの更新日付の降順にする
- [x] 管理画面で音声生成のテストを実装（キャラクター選択対応） → [plans/admin-tts-test.md](plans/admin-tts-test.md)
- [x] 音声読み上げ機能を付ける → [plans/text-to-speech.md](plans/text-to-speech.md)
- [x] 動的サーバー（npm run serve）で音声プレイヤー表示・MP3配信に対応
- [x] 記事にサイドバーを付け H2, H3 などの見出しを表示 → [plans/article-sidebar-toc.md](plans/article-sidebar-toc.md)
- [x] output の各mdファイルが見れる管理画面を作る。既存のサーバーとは別 → [plans/output-files-viewer.md](plans/output-files-viewer.md)
- [x] adminの構成を変更（個別記事ワークスペース化）。記事一覧画面 → 個別記事の画面: 左ペインに各md/ファイルへのリンク、右ペインにファイル中身表示（初期は最終生成の記事） → [plans/admin-article-workspace.md](plans/admin-article-workspace.md)
- [x] note 投稿用の md ファイル生成機能を作る（mermaid/chart/4列以上のテーブルを Playwright で PNG 化、3列以下のテーブルは箇条書きに変換） [プラン](plans/note-export.md)
- [x] SpaceX の Form S-1 を読み解く [プラン](output/2026-05-23_SpaceX_S-1を読み解く/2026-05-23_SpaceX_S-1を読み解く_plan.md)
- [x] 記事内の図（Mermaid）をクリックで拡大表示（ライトボックス）。横長レイアウトで図が縮小され文字が潰れる問題の再発防止を CLAUDE.md に明記 [プラン](plans/mermaid-click-zoom.md)
