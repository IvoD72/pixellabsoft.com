"""Казва на IndexNow (Bing, Yandex, Seznam…) кои страници има — след всяко качване.

    python tools/indexnow.py

Адресите са от docs/sitemap.xml, ключът — от build.mjs.
"""
import json
import re
import urllib.request
from pathlib import Path

SAJT = Path(__file__).resolve().parents[1]
key = re.search(r"INDEXNOW_KEY = '([0-9a-f]+)'", (SAJT / "build.mjs").read_text(encoding="utf-8")).group(1)
urls = re.findall(r"<loc>([^<]+)</loc>", (SAJT / "docs" / "sitemap.xml").read_text(encoding="utf-8"))
body = json.dumps({"host": "pixellabsoft.com", "key": key,
                   "keyLocation": f"https://pixellabsoft.com/{key}.txt", "urlList": urls}).encode()
req = urllib.request.Request("https://api.indexnow.org/indexnow", data=body,
                             headers={"Content-Type": "application/json; charset=utf-8"})
with urllib.request.urlopen(req, timeout=30) as r:
    print("IndexNow:", r.status, len(urls), "адреса")
