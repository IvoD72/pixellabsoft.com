"""Картинките за споделяне (og:image, 1200×630) — началото и всяко приложение, BG и EN.

    node build.mjs        # първо — картинките ползват docs/assets
    python tools/og.py    # пише в src/assets/og/ ; после пак node build.mjs

Рисуват се от HTML през Playwright, със същия шрифт и истинските екрани.
"""
import functools
import http.server
import json
import re
import subprocess
import threading
from pathlib import Path

from playwright.sync_api import sync_playwright

SAJT = Path(__file__).resolve().parents[1]
OUT = SAJT / "src" / "assets" / "og"

# Данните за приложенията — направо от src/apps (едно място).
APPS = json.loads(subprocess.run(
    ["node", "--input-type=module", "-e",
     "import { APPS } from './src/apps/index.mjs';"
     "console.log(JSON.stringify(APPS.filter(a => !a.draft).map(a => ({slug: a.slug, name: a.name, nameEn: a.nameEn,"
     " color: a.color, iconImg: a.iconImg, tagline: a.tagline, short: a.short}))))"],
    cwd=SAJT, capture_output=True, text=True, check=True, encoding="utf-8").stdout)
SHOTS = {"sroko", "glagoli", "konspekt"}
WIN = {"sortis"}

CSS = """
@import url('https://fonts.googleapis.com/css2?family=Onest:wght@500;700;800&display=swap');
*{box-sizing:border-box;margin:0}
body{width:1200px;height:630px;overflow:hidden;font-family:Onest,sans-serif;background:#faf9f6;color:#0b1430;position:relative}
.bg{position:absolute;inset:0;background:radial-gradient(50% 70% at 85% 40%,color-mix(in srgb,var(--c) 30%,transparent),transparent 70%),radial-gradient(40% 50% at 10% 100%,rgba(24,195,240,.12),transparent 70%)}
.brand{position:absolute;left:64px;top:52px;display:flex;align-items:center;gap:12px;font-weight:800;font-size:28px;letter-spacing:-.03em}
.brand img{width:46px;height:46px}.lab{background:linear-gradient(115deg,#3a3dff,#1a9bff,#18c8f0);-webkit-background-clip:text;color:transparent}
.txt{position:absolute;left:64px;top:170px;width:600px}
.ic{width:84px;height:84px;border-radius:22px;overflow:hidden;box-shadow:0 14px 30px -14px rgba(11,20,48,.5);margin-bottom:26px}.ic img{width:100%;height:100%}
h1{font-size:64px;line-height:1.02;letter-spacing:-.04em;font-weight:800}
h1 .g{background:linear-gradient(115deg,#3a3dff,#2163ff,#1a9bff,#18c8f0);-webkit-background-clip:text;color:transparent}
p{font-size:28px;color:#556079;margin-top:22px;line-height:1.3;font-weight:500}
.url{position:absolute;left:64px;bottom:44px;font-size:22px;color:#8a93a8;font-weight:500}
.ph{position:absolute;width:300px;padding:10px;border-radius:52px;background:#0d1222;box-shadow:0 40px 80px -30px rgba(13,25,70,.6)}
.ph img{width:100%;display:block;border-radius:43px}
.win{position:absolute;right:-60px;top:150px;width:640px;border-radius:14px;overflow:hidden;background:#fff;box-shadow:0 40px 80px -30px rgba(13,25,70,.5)}
.win .bar{height:30px;background:#eef1f7}.win img{width:100%;display:block}
"""


def card(lang, app=None):
    t = {"bg": ("Малки приложения.", "Ясна цел.", "Вършат работа."),
         "en": ("Small apps.", "Clear purpose.", "Built to be useful.")}[lang]
    url = "pixellabsoft.com" + ("" if lang == "bg" else "/en") + (f"/{app['slug']}" if app else "")
    head = ('<div class="brand"><img src="/assets/logo-mark.png"><span>Pixel <span class="lab">Lab</span></span></div>')
    if not app:
        phones = "".join(
            f'<div class="ph" style="right:{r}px;top:{y}px;transform:rotate({d}deg) scale({s});z-index:{z}">'
            f'<img src="/assets/{n}-{lang}.webp"></div>'
            for n, r, y, d, s, z in (("konspekt", 250, 130, -8, .78, 1), ("sroko", -80, 130, 8, .78, 1), ("glagoli", 80, 70, 0, .95, 2)))
        body = (f'<div class="bg" style="--c:#2152ff"></div>{head}<div class="txt"><h1 style="font-size:54px">{t[0]}<br>'
                f'<span class="g">{t[1]}</span><br>{t[2]}</h1></div>{phones}<div class="url">{url}</div>')
    else:
        name = (lang == "en" and app.get("nameEn")) or app["name"]
        if app["slug"] in SHOTS:
            vis = f'<div class="ph" style="right:90px;top:80px;transform:rotate(4deg)"><img src="/assets/{app["slug"]}-{lang}.webp"></div>'
        elif app["slug"] in WIN:
            vis = '<div class="win"><div class="bar"></div><img src="/assets/sortis.webp"></div>'
        else:
            vis = (f'<div class="ic" style="position:absolute;right:150px;top:170px;width:260px;height:260px;border-radius:64px">'
                   f'<img src="{app["iconImg"]}"></div>')
        body = (f'<div class="bg" style="--c:{app["color"]}"></div>{head}<div class="txt">'
                f'<div class="ic"><img src="{app["iconImg"]}"></div><h1 style="font-size:58px">{name}</h1>'
                f'<p>{app["tagline"][lang]}</p></div>{vis}<div class="url">{url}</div>')
    return f"<!doctype html><html><head><meta charset='utf-8'><style>{CSS}</style></head><body>{body}</body></html>"


def main():
    OUT.mkdir(parents=True, exist_ok=True)
    docs = SAJT / "docs"
    tmp = docs / "_og"
    tmp.mkdir(exist_ok=True)

    class Tih(http.server.SimpleHTTPRequestHandler):
        def log_message(self, *a):
            pass

    srv = http.server.ThreadingHTTPServer(("127.0.0.1", 8799), functools.partial(Tih, directory=str(docs)))
    threading.Thread(target=srv.serve_forever, daemon=True).start()
    try:
        with sync_playwright() as p:
            b = p.chromium.launch()
            pg = b.new_page(viewport={"width": 1200, "height": 630})
            for lang in ("bg", "en"):
                for app in [None] + APPS:
                    name = f"{app['slug'] if app else 'home'}-{lang}"
                    (tmp / f"{name}.html").write_text(card(lang, app), encoding="utf-8")
                    pg.goto(f"http://127.0.0.1:8799/_og/{name}.html")
                    pg.wait_for_load_state("networkidle")
                    pg.wait_for_timeout(300)
                    pg.screenshot(path=str(OUT / f"{name}.png"))
                    print(name)
            b.close()
    finally:
        srv.shutdown()
        for f in tmp.iterdir():
            f.unlink()
        tmp.rmdir()


if __name__ == "__main__":
    main()
