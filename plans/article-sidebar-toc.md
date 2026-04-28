# 記事にサイドバー（目次）を付ける

## 目的

記事ページで H2 / H3 の見出しを抽出し、サイドバーに目次（TOC: Table of Contents）として表示する。読者が長い記事の中を移動しやすくし、現在地を把握できるようにする。

## 対象範囲

- 個別記事ページ（`renderArticle()` 経由）のみ。記事一覧ページにはサイドバーを表示しない
- 動的サーバー (`src/server.ts`) と静的サイトビルド (`scripts/build_static.ts`) の両方で同じ表示にする
- 現状の serif フォント・`#faf8f0` 背景・`#8b0000` アクセントカラーを維持する

## 段階的ロールアウト

レイアウトの大規模変更となるため、まず 1 記事だけで検証し、問題がなければ全記事に展開する。

### Phase 1: `2026-04-28_世界モデルと動画生成AI` のみで検証

- 対象記事の判定方法: `renderArticle()` 内で、特定のファイル名（または記事ディレクトリ名）に一致する場合のみサイドバー付きレイアウトを使う
- 実装上は次のような分岐を入れる:

```ts
const TOC_ENABLED_ARTICLES = new Set([
  "2026-04-28_世界モデルと動画生成AI.md",
]);

if (TOC_ENABLED_ARTICLES.has(filename)) {
  // サイドバー付きレイアウトで描画
} else {
  // 従来レイアウトで描画
}
```

- これ以外の記事は CSS / レイアウトとも従来通り（`max-width: 900px` の単一カラム）

### Phase 2: 全記事へ展開

Phase 1 で次が確認できたら、`TOC_ENABLED_ARTICLES` の判定を撤去し、全記事をサイドバー付きレイアウトに統一する:

- 対象記事で目次・本文・Mermaid / Chart.js が正しく表示される
- サイドバー単体のスクロールが意図通り動作する
- モバイル表示が崩れない
- ユーザーから「読みやすい」OK が出る

Phase 2 では追加で「H2 が 0 個の短い記事」「Markdown のみで Mermaid 等を含まない記事」の表示確認も行う。

## 動作仕様

1. **抽出対象**: H2 と H3 の見出し（H4 以下は対象外。H1 は記事タイトルなので除外）
2. **アンカー ID**: 各見出しに自動で `id` 属性を付与し、サイドバーの目次項目をクリックすると該当位置にスムーズスクロールする
3. **サイドバー表示位置**: 画面幅が広い場合は記事右側にサイドバーを sticky 表示。狭い場合は記事冒頭に通常の目次セクションとして表示（折りたたみは行わない）
4. **サイドバー内の独立スクロール**: 目次が長くてビューポート高さを超える場合、ページ全体ではなくサイドバー単体が縦スクロールする（`max-height: calc(100vh - 4rem); overflow-y: auto;`）
5. **アクティブハイライト**（オプション、優先度低）: スクロール位置に応じて、現在表示中のセクションに対応する目次項目を強調表示
6. **見出しなしの場合**: H2 が 0 個ならサイドバーを描画しない（短い記事への配慮）

## レイアウト案

### デスクトップ（画面幅 >= 1100px）

```
┌─────────────────────────────────────────────────┐
│  site-header (deep-pulse / breadcrumb)          │
├──────────────┬──────────────────────────────────┤
│              │                                   │
│  本文        │  サイドバー（sticky）             │
│  (max 900px) │  (220px 幅)                      │
│              │  ・H2 見出し                     │
│              │    ・H3 見出し                   │
│              │    ・H3 見出し                   │
│              │  ・H2 見出し                     │
│              │  ...                             │
└──────────────┴──────────────────────────────────┘
```

サイドバーを右側に置く理由: 縦書きでない日本語の serif レイアウトは左揃えが基本のため、視線移動の自然な行き先である右側に配置するのが読みやすい。

### モバイル（画面幅 < 1100px）

サイドバーは記事冒頭の H1 直下に、通常の目次セクションとして表示する（折りたたみなし、常に展開状態）。

```
┌──────────────────────────────┐
│  site-header                 │
├──────────────────────────────┤
│  H1 タイトル                  │
│  > サブタイトル               │
│  ┌────────────────────────┐  │
│  │ 目次                    │  │
│  │ ・H2 見出し             │  │
│  │   ・H3 見出し           │  │
│  │ ・H2 見出し             │  │
│  └────────────────────────┘  │
│                              │
│  本文…                       │
└──────────────────────────────┘
```

## 実装方針

### 1. 見出し抽出とアンカー付与（`src/render.ts`）

`marked` のカスタムレンダラーで `heading` を上書きし、H2/H3 に対して連番ベースの ID を付与する。

```ts
let headingCounter = 0;
const headings: { level: number; text: string; id: string }[] = [];

const headingRenderer = {
  heading(token: Tokens.Heading): string {
    const id = `heading-${headingCounter++}`;
    if (token.depth === 2 || token.depth === 3) {
      headings.push({ level: token.depth, text: token.text, id });
      return `<h${token.depth} id="${id}">${marked.parseInline(token.text)}</h${token.depth}>`;
    }
    return false; // h1, h4以下はデフォルト
  },
};
```

ID 採番は連番方式（`heading-0`, `heading-1`, ...）にする。理由: 日本語タイトルのスラグ化はライブラリ依存で挙動がブレるため、シンプルで衝突しない連番が安全。

### 2. TOC HTML 生成

`renderArticle()` 内で、`marked()` 実行後に集めた `headings` 配列から TOC を生成する。

```ts
function buildToc(headings: { level: number; text: string; id: string }[]): string {
  if (headings.length === 0) return "";
  const items = headings.map(h => {
    const indent = h.level === 3 ? ' class="toc-h3"' : "";
    return `<li${indent}><a href="#${h.id}">${escapeHtml(h.text)}</a></li>`;
  }).join("\n");
  return `<nav class="toc"><div class="toc-title">目次</div><ul>${items}</ul></nav>`;
}
```

### 3. レイアウト変更（`wrapHtml()`）

新たに `tocHtml` パラメータを受け取り、次のような構造にする:

```html
<div class="layout">
  <main class="article-main">
    <!-- モバイル用 TOC（H1 直下に挿入。CSS で表示制御） -->
    <div class="toc-mobile">{tocHtml}</div>
    {body}
  </main>
  <aside class="sidebar">
    {tocHtml}      <!-- デスクトップ用 sticky サイドバー（内部スクロール可） -->
  </aside>
</div>
```

`tocHtml` は同じ内容を 2 ヶ所に出すが、CSS のメディアクエリでデスクトップは `.sidebar` のみ、モバイルは `.toc-mobile` のみを表示する。

### 4. CSS 追加

主な追加スタイル:

```css
.layout {
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 240px;
  gap: 2.5rem;
}
.article-main { min-width: 0; max-width: 900px; }
.sidebar {
  position: sticky;
  top: 2rem;
  align-self: start;
  font-size: 0.85rem;
  /* ビューポート高さを超える場合はサイドバー単体でスクロール */
  max-height: calc(100vh - 4rem);
  overflow-y: auto;
  /* スクロールバーを控えめに */
  scrollbar-width: thin;
  scrollbar-color: #c0b9a8 transparent;
}
.sidebar::-webkit-scrollbar { width: 6px; }
.sidebar::-webkit-scrollbar-thumb { background: #c0b9a8; border-radius: 3px; }
.sidebar::-webkit-scrollbar-track { background: transparent; }
.toc-title {
  font-weight: 700; letter-spacing: 0.06em; text-transform: uppercase;
  border-bottom: 2px solid #2c2c2c; padding-bottom: 0.3rem; margin-bottom: 0.5rem;
}
.toc ul { list-style: none; margin: 0; padding: 0; }
.toc li { padding: 0.3rem 0; border-bottom: 1px solid #e8e2d0; }
.toc li.toc-h3 { padding-left: 1rem; font-size: 0.78rem; color: #555; }
.toc a {
  color: #1c1c1c; border-bottom: none; display: block;
  text-indent: 0; line-height: 1.4;
}
.toc a:hover { color: #8b0000; }

/* スムーズスクロール */
html { scroll-behavior: smooth; scroll-padding-top: 1rem; }

/* モバイル: サイドバーを非表示、本文上部の TOC を有効化 */
.toc-mobile { display: none; margin: 1.2rem 0; padding: 1rem; background: rgba(44,44,44,0.03); border: 1px solid #d5cfc0; border-radius: 4px; }
@media (max-width: 1100px) {
  .layout { grid-template-columns: 1fr; }
  .sidebar { display: none; }
  .toc-mobile { display: block; }
}
@media (max-width: 600px) {
  body { padding: 1rem; }
}
```

`body` の `max-width: 900px` を外し、`.layout` 側で 1200px 制限する。記事本文は `.article-main { max-width: 900px }` で従来の幅を維持。

### 5. 静的サイトビルド対応

`scripts/build_static.ts` は `renderArticle()` を呼び出すだけなので、`render.ts` の修正だけで両方に反映される。新規 CSS や JS ファイルの追加は不要（CSS は埋め込み）。

## 影響範囲

- `src/render.ts` — `renderArticle()`、`wrapHtml()`、CSS の追加。`heading` カスタムレンダラーの追加
- `src/server.ts` — 変更不要
- `scripts/build_static.ts` — 変更不要

## 確認項目

### Phase 1（対象: `2026-04-28_世界モデルと動画生成AI` のみ）

- [ ] 対象記事でサイドバーが右側に表示され、H2 / H3 がリスト化される
- [ ] サイドバー目次のクリックで該当セクションへスクロールする
- [ ] **目次が長い場合、サイドバー単体でスクロールでき、ページ全体はスクロールしない**
- [ ] モバイル画面では本文上部に通常の目次セクションが表示される（折りたたみなし）
- [ ] 既存の Mermaid / Chart.js でレイアウトが崩れない
- [ ] 記事一覧ページにはサイドバーが表示されない
- [ ] **対象外記事（例: `2026-03-17_Maven_Smart_Systemの全貌` 等）が従来通り表示される**（レイアウトに変化がない）
- [ ] 動的サーバー (`npm run serve`) と静的ビルド (`npm run build:site`) の両方で同じ表示になる

### Phase 2（全記事展開時）

- [ ] H2 だけの記事、H2 + H3 混在の記事、H2 が 0 個の短い記事それぞれで正しく表示される
- [ ] Mermaid / Chart.js を含まないテキスト中心の記事もレイアウトが崩れない
- [ ] 全 17 記事をひと通り目視確認

## オプション機能（今回スコープ外）

- スクロール位置に応じたアクティブセクションのハイライト（IntersectionObserver 利用）
- TOC の H2 を折りたたみ可能にする
- アンカーリンク（見出しホバー時に `#` リンクを表示）

これらは別タスクとして必要に応じて切り出す。
