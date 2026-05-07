---
url: https://codezine.jp/article/detail/22261
title: "「あなたのコードは大丈夫？」バイブコーディングに潜む罠と開発者が学ぶべきセキュリティの新常識 (1/3)|CodeZine（コードジン）"
---

[ [[生成AI時代のセキュリティ入門]{itemprop="name"}](/article/corner/1068){itemprop="url"} ]{itemprop="itemListElement" itemscope="" itemtype="https://schema.org/ListItem"}

# 「あなたのコードは大丈夫？」バイブコーディングに潜む罠と開発者が学ぶべきセキュリティの新常識 {#あなたのコードは大丈夫バイブコーディングに潜む罠と開発者が学ぶべきセキュリティの新常識 .c-article_heading itemprop="headline"}

生成AI時代のセキュリティ入門　第1回

[[Kyohei Fukuda]{itemprop="name"}](/author/2176)\[著\] / [CodeZine編集部](/author/1)\[編\]

2025/10/28 11:00

-   [セキュリティ](/article/t/%E3%82%BB%E3%82%AD%E3%83%A5%E3%83%AA%E3%83%86%E3%82%A3){.c-tag}
-   [AI](/article/t/AI){.c-tag}
-   [生成AI](/article/t/%E7%94%9F%E6%88%90AI){.c-tag}

-   [![X](//cz-cdn.shoeisha.jp/static/templates/img/icon/icon_x.svg) ポスト](https://x.com/intent/post?text=%E3%80%8C%E3%81%82%E3%81%AA%E3%81%9F%E3%81%AE%E3%82%B3%E3%83%BC%E3%83%89%E3%81%AF%E5%A4%A7%E4%B8%88%E5%A4%AB%EF%BC%9F%E3%80%8D%E3%83%90%E3%82%A4%E3%83%96%E3%82%B3%E3%83%BC%E3%83%87%E3%82%A3%E3%83%B3%E3%82%B0%E3%81%AB%E6%BD%9C%E3%82%80%E7%BD%A0%E3%81%A8%E9%96%8B%E7%99%BA%E8%80%85%E3%81%8C%E5%AD%A6%E3%81%B6%E3%81%B9%E3%81%8D%E3%82%BB%E3%82%AD%E3%83%A5%E3%83%AA%E3%83%86%E3%82%A3%E3%81%AE%E6%96%B0%E5%B8%B8%E8%AD%98%20%281%2F3%29%7CCodeZine%EF%BC%88%E3%82%B3%E3%83%BC%E3%83%89%E3%82%B8%E3%83%B3%EF%BC%89&url=https://codezine.jp/article/detail/22261&via=codezine){.x-share-button rel="noopener" target="_blank"}

-   ::: {.fb-share-button data-href="https://codezine.jp/article/detail/22261" data-type="button_count"}
    :::

-   [![このエントリーをはてなブックマークに追加](https://b.st-hatena.com/images/entry-button/button-only@2x.png){height="20" style="border: none; max-width: 20px; max-height: 20px; vertical-align: middle;" width="20"}](http://b.hatena.ne.jp/entry/https://codezine.jp/article/detail/22261 "このエントリーをはてなブックマークに追加"){.hatena-bookmark-button hatena-bookmark-layout="simple-balloon"}

[]{#dl}

<figure class="c-article_hero thumbnail">
<img src="//cz-cdn.shoeisha.jp/static/images/article/22261/security1200.png" data-src="//cz-cdn.shoeisha.jp/static/images/article/22261/security1200.png" itemprop="image" width="1200" height="630" />
</figure>

[　生成AIによる開発の華やかな成功事例の裏には、世界中のハッカーから狙われるという現実があります。この連載では、開発の間口が広がった今こそ、セキュリティの重要性を再確認し、安全に開発を続けるための実践的な解決策を提供します。自分がコードを書いたり、サービスを立ち上げたりする際や、周りがバイブコーティングに熱中している際に、一歩引いた視点を持つことは、これからの時代に重宝される能力でしょう。この連載では、セキュリティの解像度を高め、自らアプリを診断し攻撃から守る実践的な力を手に入れることを目指します。]{itemprop="description"}

-   [![X](//cz-cdn.shoeisha.jp/static/templates/img/icon/icon_x.svg) ポスト](https://x.com/intent/post?text=%E3%80%8C%E3%81%82%E3%81%AA%E3%81%9F%E3%81%AE%E3%82%B3%E3%83%BC%E3%83%89%E3%81%AF%E5%A4%A7%E4%B8%88%E5%A4%AB%EF%BC%9F%E3%80%8D%E3%83%90%E3%82%A4%E3%83%96%E3%82%B3%E3%83%BC%E3%83%87%E3%82%A3%E3%83%B3%E3%82%B0%E3%81%AB%E6%BD%9C%E3%82%80%E7%BD%A0%E3%81%A8%E9%96%8B%E7%99%BA%E8%80%85%E3%81%8C%E5%AD%A6%E3%81%B6%E3%81%B9%E3%81%8D%E3%82%BB%E3%82%AD%E3%83%A5%E3%83%AA%E3%83%86%E3%82%A3%E3%81%AE%E6%96%B0%E5%B8%B8%E8%AD%98%20%281%2F3%29%7CCodeZine%EF%BC%88%E3%82%B3%E3%83%BC%E3%83%89%E3%82%B8%E3%83%B3%EF%BC%89&url=https://codezine.jp/article/detail/22261&via=codezine){.x-share-button rel="noopener" target="_blank"}

-   ::: {.fb-share-button data-href="https://codezine.jp/article/detail/22261" data-type="button_count"}
    :::

-   [![このエントリーをはてなブックマークに追加](https://b.st-hatena.com/images/entry-button/button-only@2x.png){height="20" style="border: none; max-width: 20px; max-height: 20px; vertical-align: middle;" width="20"}](http://b.hatena.ne.jp/entry/https://codezine.jp/article/detail/22261 "このエントリーをはてなブックマークに追加"){.hatena-bookmark-button hatena-bookmark-layout="simple-balloon"}

## 目次![](data:image/svg+xml;base64,PHN2ZyBjbGFzcz0iaWNvbiI+PHVzZSB4bGluazpocmVmPSJodHRwczovL2NvZGV6aW5lLmpwL3N0YXRpYy90ZW1wbGF0ZXMvaW1nL2NvbW1vbi9zcHJpdGUuc3ZnI2ljb24tYXJyb3dfZG93biI+PC91c2U+PC9zdmc+){.icon} {#目次 .c-article_toc_heading}

-   

    Page 1

    :   -   [「AIで月収100万円」の裏で、あなたのコードは狙われている]{onclick="ANCHOR_HELPER.goToAnchor(0);return false;"}
        -   [AI推進される今、あえてセキュリティに警鐘を鳴らす理由]{onclick="ANCHOR_HELPER.goToAnchor(1);return false;"}

-   

    [Page 2](/article/detail/22261?p=2)

    :   -   [あなたは大丈夫？脆弱性は「基本的なミス」から生まれる](/article/detail/22261?p=2&anchor=0)
        -   [事例1：セキュリティリスクが浮き彫りになった「1万件の個人情報漏洩」](/article/detail/22261?p=2&anchor=1)
        -   [事例2：開発ブームの裏で急増する、アプリからの情報漏洩](/article/detail/22261?p=2&anchor=2)

-   

    [Page 3](/article/detail/22261?p=3)

    :   -   [「動くけど、危ない」コードが生まれる仕組み](/article/detail/22261?p=3&anchor=0)
        -   [理由1：スピード優先の弊害と「動くコード」の罠](/article/detail/22261?p=3&anchor=1)
        -   [理由2：知識がなくても「完成」してしまう危険性](/article/detail/22261?p=3&anchor=2)
        -   [理由3：個人開発者は攻撃者にとって「格好の標的」](/article/detail/22261?p=3&anchor=3)
        -   [責任はあなたに。AIが生み出すものへの向き合い方](/article/detail/22261?p=3&anchor=4)
        -   [次回予告](/article/detail/22261?p=3&anchor=5)

## 「AIで月収100万円」の裏で、あなたのコードは狙われている {#aiで月収100万円の裏であなたのコードは狙われている .h204}

　「AIにプロンプトを投げたら、数時間でアプリが完成した」

　「月収100万円を達成！これからは生成AI x ソロプレナーの時代だ！」

　SNSを賑わす、きらびやかな成功体験。生成AIの登場は、ソフトウェア開発の世界に革命をもたらしました。これまで専門家だけのものだった高度な技術が民主化され、誰もが「アイディアをカタチにできる」時代が到来したのです。

　この熱狂は「バイブコーディング」という言葉を生み出しました。緻密な設計や厳密なテストよりも、感覚や勢い（Vibe）を重視し、AIと共に高速でプロダクトをリリースする開発スタイルです。

　しかし、その輝かしい成功の裏でいま、「静かな大惨事」が世界中で起きていることをあなたはご存知でしょうか？

## AI推進される今、あえてセキュリティに警鐘を鳴らす理由 {#ai推進される今あえてセキュリティに警鐘を鳴らす理由 .h204}

　はじめまして、Kyohei（X：[\@labelmake](https://x.com/labelmake){target="_blank"}）と申します。普段は外資系IT企業で働きながら、個人でOSSのPDF生成ライブラリ「[pdfme](https://pdfme.com/){target="_blank"}」の開発・運営や、三軒茶屋で「[三茶.dev](http://sancha.dev/){target="_blank"}」という技術コミュニティの主催をしています。

　私自身、CursorやDevinといった最新のAIコーディングツールを日々活用し、その恩恵を大いに受けている一人です。AIはまさに「最強の副操縦士」であり、開発体験を劇的に向上させてくれました。

　しかし、10年以上の開発経験と5年以上の個人開発・OSS運営の経験から、この熱狂の裏側に潜むリスクに強い懸念を抱いています。あまりにも便利すぎるが故に、本来もっとも重要な「セキュリティ」という視点を見過ごしてしまっているのではないか、と懸念しています。

　そのような思いから先日、バイブコーディングとセキュリティについての動画をYouTubeに公開し、私自身もセキュリティに関する事件の調査や、学びを深めています。

バイブコーディングとセキュリティについての動画

　本連載では、AI時代の開発者が見落としがちな「ダウンサイド」に光を当て、皆さんが安心して開発に没頭できるための知識・解決策を共有します。

[会員登録*無料*すると、]{.d-inline-block}[続きをお読みいただけます]{.d-inline-block}

![](//cz-cdn.shoeisha.jp/static/templates/img/common/logo_codezine.svg)

新規会員登録*無料*のご案内

-   ・全ての過去記事が閲覧できます
-   ・会員限定メルマガを受信できます
-   ・翔泳社の本が買える！

    <div>

    500円分のポイントをプレゼント

    </div>

[![](data:image/svg+xml;base64,PHN2ZyBjbGFzcz0iaWNvbiI+PHVzZSB4bGluazpocmVmPSJodHRwczovL2NvZGV6aW5lLmpwL3N0YXRpYy90ZW1wbGF0ZXMvaW1nL2NvbW1vbi9zcHJpdGUuc3ZnI2ljb24tbWFpbCI+PC91c2U+PC9zdmc+){.icon}メールバックナンバー](/ml/backnumber)

    Page 1

    :   -   [「AIで月収100万円」の裏で、あなたのコードは狙われている]{onclick="ANCHOR_HELPER.goToAnchor(0);return false;"}
        -   [AI推進される今、あえてセキュリティに警鐘を鳴らす理由]{onclick="ANCHOR_HELPER.goToAnchor(1);return false;"}

-   

    Page 2

    :   -   [あなたは大丈夫？脆弱性は「基本的なミス」から生まれる](/article/detail/22261?p=2&anchor=0)
        -   [事例1：セキュリティリスクが浮き彫りになった「1万件の個人情報漏洩」](/article/detail/22261?p=2&anchor=1)
        -   [事例2：開発ブームの裏で急増する、アプリからの情報漏洩](/article/detail/22261?p=2&anchor=2)

-   

    Page 3

    :   -   [「動くけど、危ない」コードが生まれる仕組み](/article/detail/22261?p=3&anchor=0)
        -   [理由1：スピード優先の弊害と「動くコード」の罠](/article/detail/22261?p=3&anchor=1)
        -   [理由2：知識がなくても「完成」してしまう危険性](/article/detail/22261?p=3&anchor=2)
        -   [理由3：個人開発者は攻撃者にとって「格好の標的」](/article/detail/22261?p=3&anchor=3)
        -   [責任はあなたに。AIが生み出すものへの向き合い方](/article/detail/22261?p=3&anchor=4)
        -   [次回予告](/article/detail/22261?p=3&anchor=5)

[次のページ\
あなたは大丈夫？脆弱性は「基本的なミス」から生まれる](/article/detail/22261?p=2)

-   [1](#){aria-current="page" onclick="return false;"}
-   [2](/article/detail/22261?p=2)
-   [3](/article/detail/22261?p=3)

[NEXT![](data:image/svg+xml;base64,PHN2ZyBjbGFzcz0iaWNvbiI+PHVzZSB4bGluazpocmVmPSJodHRwczovL2NvZGV6aW5lLmpwL3N0YXRpYy90ZW1wbGF0ZXMvaW1nL2NvbW1vbi9zcHJpdGUuc3ZnI2ljb24tYXJyb3dfcmlnaHQiPjwvdXNlPjwvc3ZnPg==){.icon}](/article/detail/22261?p=2)

この記事は参考になりましたか？

[]{.c-review}

![](data:image/svg+xml;base64,PHN2ZyBjbGFzcz0iYy1zdGFyX2ljb24iPjx1c2UgeGxpbms6aHJlZj0iaHR0cHM6Ly9jb2RlemluZS5qcC9zdGF0aWMvdGVtcGxhdGVzL2ltZy9jb21tb24vc3ByaXRlLnN2ZyNpY29uLXN0YXIiPjwvdXNlPjwvc3ZnPg==){.c-star_icon}

[19]{.c-review_count article-id="22261" review="0"}[参考になった]{.c-review_label}

-   [![](data:image/svg+xml;base64,PHN2ZyBjbGFzcz0iaWNvbiI+PHVzZSB4bGluazpocmVmPSJodHRwczovL2NvZGV6aW5lLmpwL3N0YXRpYy90ZW1wbGF0ZXMvaW1nL2NvbW1vbi9zcHJpdGUuc3ZnI2ljb24tcHJpbnQiPjwvdXNlPjwvc3ZnPg==){.icon}印刷用を表示](/article/detail/22261?mode=print)

-   [![X](//cz-cdn.shoeisha.jp/static/templates/img/icon/icon_x.svg) ポスト](https://x.com/intent/post?text=%E3%80%8C%E3%81%82%E3%81%AA%E3%81%9F%E3%81%AE%E3%82%B3%E3%83%BC%E3%83%89%E3%81%AF%E5%A4%A7%E4%B8%88%E5%A4%AB%EF%BC%9F%E3%80%8D%E3%83%90%E3%82%A4%E3%83%96%E3%82%B3%E3%83%BC%E3%83%87%E3%82%A3%E3%83%B3%E3%82%B0%E3%81%AB%E6%BD%9C%E3%82%80%E7%BD%A0%E3%81%A8%E9%96%8B%E7%99%BA%E8%80%85%E3%81%8C%E5%AD%A6%E3%81%B6%E3%81%B9%E3%81%8D%E3%82%BB%E3%82%AD%E3%83%A5%E3%83%AA%E3%83%86%E3%82%A3%E3%81%AE%E6%96%B0%E5%B8%B8%E8%AD%98%20%281%2F3%29%7CCodeZine%EF%BC%88%E3%82%B3%E3%83%BC%E3%83%89%E3%82%B8%E3%83%B3%EF%BC%89&url=https://codezine.jp/article/detail/22261&via=codezine){.x-share-button rel="noopener" target="_blank"}

-   ::: {.fb-share-button data-href="https://codezine.jp/article/detail/22261" data-type="button_count"}
    :::

-   [![このエントリーをはてなブックマークに追加](https://b.st-hatena.com/images/entry-button/button-only@2x.png){height="20" style="border: none; max-width: 20px; max-height: 20px; vertical-align: middle;" width="20"}](http://b.hatena.ne.jp/entry/https://codezine.jp/article/detail/22261 "このエントリーをはてなブックマークに追加"){.hatena-bookmark-button hatena-bookmark-layout="simple-balloon"}

![](data:image/svg+xml;base64,PHN2ZyBjbGFzcz0iaWNvbiI+PHVzZSB4bGluazpocmVmPSJodHRwczovL2NvZGV6aW5lLmpwL3N0YXRpYy90ZW1wbGF0ZXMvaW1nL2NvbW1vbi9zcHJpdGUuc3ZnI2ljb24tYXJ0aWNsZSI+PC91c2U+PC9zdmc+){.icon}生成AI時代のセキュリティ入門連載記事一覧

:   -   [【「コーダー」から「監督者」へ】「バイブコーディング」で脆弱性を持ち込まないためのマインド\...](/article/detail/22691)
    -   [AIエージェントの死角。「依存関係の脆弱性」と「サプライチェーン攻撃」からプロジェクトを守\...](/article/detail/22526)
    -   [AIが生成したコードに潜む古典的セキュリティホールを解説！セキュリティ設計の基本を知ろう](/article/detail/22465)

    [もっと読む](/article/corner/1068)

![](data:image/svg+xml;base64,PHN2ZyBjbGFzcz0iaWNvbiI+PHVzZSB4bGluazpocmVmPSJodHRwczovL2NvZGV6aW5lLmpwL3N0YXRpYy90ZW1wbGF0ZXMvaW1nL2NvbW1vbi9zcHJpdGUuc3ZnI2ljb24td3JpdGUiPjwvdXNlPjwvc3ZnPg==){.icon}この記事の著者

:   ::: c-profile
    <figure class="c-profile_img">
    <img src="//cz-cdn.shoeisha.jp/static/images/author/1/codezine_icon.png" />
    </figure>

    ::: c-profile_content
    CodeZine編集部（コードジンヘンシュウブ）

    CodeZineは、株式会社翔泳社が運営するソフトウェア開発者向けのWebメディアです。「デベロッパーの成長と課題解決に貢献するメディア」をコンセプトに、現場で役立つ最新情報を日々お届けします。

    ※プロフィールは、執筆時点、または直近の記事の寄稿時点での内容です

    [この著者の最近の執筆記事](/author/1)
    :::
    :::

:   ::: c-profile
    <figure class="c-profile_img">
    <img src="//cz-cdn.shoeisha.jp/static/images/author/2176/image%20(1).png" />
    </figure>

    ::: c-profile_content
    Kyohei Fukuda（キョウヘイ フクダ）

    　広島県出身、東京在住のWebエンジニア。　国内IT企業数社でフロントエンド開発に従事した後、現在は外資IT企業でSolution Engineer兼Developer Advocateを務めている。OSSのPDF生成ライブラリ「[pdfme](https://pdfme.com/){target="_blank"}」を開発し、関連する書類作成サービスを個人開発し運営。　JavaSc\...

    ※プロフィールは、執筆時点、または直近の記事の寄稿時点での内容です

    [この著者の最近の執筆記事](/author/2176)
    :::
    :::

この記事は参考になりましたか？

[ ]{.c-review}

![](data:image/svg+xml;base64,PHN2ZyBjbGFzcz0iYy1zdGFyX2ljb24iPjx1c2UgeGxpbms6aHJlZj0iaHR0cHM6Ly9jb2RlemluZS5qcC9zdGF0aWMvdGVtcGxhdGVzL2ltZy9jb21tb24vc3ByaXRlLnN2ZyNpY29uLXN0YXIiPjwvdXNlPjwvc3ZnPg==){.c-star_icon}

[19]{.c-review_count article-id="22261" count="0" review="none"} [参考になった]{.c-review_label}

この記事をシェア

-   [![X](//cz-cdn.shoeisha.jp/static/templates/img/icon/icon_x.svg) ポスト](https://x.com/intent/post?text=%E3%80%8C%E3%81%82%E3%81%AA%E3%81%9F%E3%81%AE%E3%82%B3%E3%83%BC%E3%83%89%E3%81%AF%E5%A4%A7%E4%B8%88%E5%A4%AB%EF%BC%9F%E3%80%8D%E3%83%90%E3%82%A4%E3%83%96%E3%82%B3%E3%83%BC%E3%83%87%E3%82%A3%E3%83%B3%E3%82%B0%E3%81%AB%E6%BD%9C%E3%82%80%E7%BD%A0%E3%81%A8%E9%96%8B%E7%99%BA%E8%80%85%E3%81%8C%E5%AD%A6%E3%81%B6%E3%81%B9%E3%81%8D%E3%82%BB%E3%82%AD%E3%83%A5%E3%83%AA%E3%83%86%E3%82%A3%E3%81%AE%E6%96%B0%E5%B8%B8%E8%AD%98%20%281%2F3%29%7CCodeZine%EF%BC%88%E3%82%B3%E3%83%BC%E3%83%89%E3%82%B8%E3%83%B3%EF%BC%89&url=https://codezine.jp/article/detail/22261&via=codezine){.x-share-button rel="noopener" target="_blank"}

-   ::: {.fb-share-button data-href="https://codezine.jp/article/detail/22261" data-type="button_count"}
    :::

-   [![このエントリーをはてなブックマークに追加](https://b.st-hatena.com/images/entry-button/button-only@2x.png){height="20" style="border: none; max-width: 20px; max-height: 20px; vertical-align: middle;" width="20"}](http://b.hatena.ne.jp/entry/https://codezine.jp/article/detail/22261 "このエントリーをはてなブックマークに追加"){.hatena-bookmark-button hatena-bookmark-layout="simple-balloon"}

[シェア![](data:image/svg+xml;base64,PHN2ZyBjbGFzcz0iaWNvbiI+PHVzZSB4bGluazpocmVmPSJodHRwczovL2NvZGV6aW5lLmpwL3N0YXRpYy90ZW1wbGF0ZXMvaW1nL2NvbW1vbi9zcHJpdGUuc3ZnI2ljb24tc2hhcmUiPjwvdXNlPjwvc3ZnPg==){.icon}]{.c-article_popup_btn_inner} []{.c-article_popup_btn_close}

[CodeZine（コードジン）]{itemprop="name"} [codezine.jp]{itemprop="url"} [ [https://codezine.jp/static/common/images/czlogo4fb_ogp.png]{itemprop="url"} ]{itemprop="logo" itemscope="itemscope" itemtype="https://schema.org/ImageObject"}

[https://codezine.jp/article/detail/22261]{itemprop="mainEntityOfPage"} [2025/10/28 11:00]{itemprop="dateModified"}
