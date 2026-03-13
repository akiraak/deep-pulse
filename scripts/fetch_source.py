#!/usr/bin/env python3
"""
URL から記事本文を取得し、YAML フロントマター付き Markdown で保存するスクリプト。
BeautifulSoup で本文抽出 → pandoc で Markdown 変換。

Usage:
  python3 scripts/fetch_source.py <url> <output_path>
"""

import subprocess
import sys
import re
from bs4 import BeautifulSoup, Comment

def fetch_html(url: str) -> str:
    result = subprocess.run(
        ["curl", "-sL", "-m", "30", "--retry", "2",
         "-H", "User-Agent: Mozilla/5.0 (compatible; DeepPulse/1.0)",
         url],
        capture_output=True, text=True, timeout=60
    )
    return result.stdout

def extract_title(soup: BeautifulSoup) -> str:
    # <title> タグから取得
    if soup.title and soup.title.string:
        return soup.title.string.strip()
    # og:title から取得
    og = soup.find("meta", property="og:title")
    if og and og.get("content"):
        return og["content"].strip()
    # h1 から取得
    h1 = soup.find("h1")
    if h1:
        return h1.get_text(strip=True)
    return "タイトル不明"

def extract_body(soup: BeautifulSoup) -> str:
    # コメント、script、style、nav、header、footer を除去
    for tag in soup.find_all(["script", "style", "noscript", "iframe"]):
        tag.decompose()
    for comment in soup.find_all(string=lambda t: isinstance(t, Comment)):
        comment.extract()

    # 本文候補を優先順位で探す
    body = None
    for selector in ["article", "main", '[role="main"]', ".article-body",
                     ".entry-content", ".post-content", "#content", ".content"]:
        body = soup.select_one(selector)
        if body:
            break

    if not body:
        body = soup.find("body") or soup

    # nav, header, footer, aside を本文内から除去
    for tag in body.find_all(["nav", "header", "footer", "aside"]):
        tag.decompose()

    return str(body)

def html_to_markdown(html: str) -> str:
    result = subprocess.run(
        ["pandoc", "-f", "html", "-t", "markdown", "--wrap=none",
         "--no-highlight"],
        input=html, capture_output=True, text=True, timeout=30
    )
    md = result.stdout

    # pandoc の div/span マークアップを除去
    md = re.sub(r'^:::\s*\{[^}]*\}\s*$', '', md, flags=re.MULTILINE)
    md = re.sub(r'^:::\s*\S+\s*$', '', md, flags=re.MULTILINE)
    md = re.sub(r'^:::\s*$', '', md, flags=re.MULTILINE)
    # 連続空行を2行まで
    md = re.sub(r'\n{3,}', '\n\n', md)
    return md.strip()

def main():
    if len(sys.argv) != 3:
        print(f"Usage: {sys.argv[0]} <url> <output_path>", file=sys.stderr)
        sys.exit(1)

    url = sys.argv[1]
    output_path = sys.argv[2]

    try:
        html = fetch_html(url)
        if not html.strip():
            raise RuntimeError("Empty response")

        soup = BeautifulSoup(html, "html.parser")
        title = extract_title(soup)
        body_html = extract_body(soup)
        markdown = html_to_markdown(body_html)

        with open(output_path, "w", encoding="utf-8") as f:
            f.write(f"---\nurl: {url}\ntitle: \"{title}\"\n---\n\n{markdown}\n")

        print(f"OK: {title}")
    except Exception as e:
        with open(output_path, "w", encoding="utf-8") as f:
            f.write(f"---\nurl: {url}\ntitle: \"取得失敗\"\n---\n\nエラー: {e}\n")
        print(f"FAIL: {e}", file=sys.stderr)
        sys.exit(1)

if __name__ == "__main__":
    main()
