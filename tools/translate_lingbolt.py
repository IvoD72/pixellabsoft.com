"""Превежда страницата на Lingbolt на езиците от src/i18n/langs.mjs → src/i18n/lingbolt.json.

    GEMINI_KEY=... python tools/translate_lingbolt.py

Източникът е английският текст (node tools/lingbolt_source.mjs). Превежда се само
липсващото и това, чийто английски се е сменил; останалото стои, както е.
Проверява, че имената, клавишите и цените са оцелели.
"""
import json
import os
import subprocess
import sys
import time
import unicodedata
import urllib.error
import urllib.request
from concurrent.futures import ThreadPoolExecutor
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
OUT = ROOT / "src" / "i18n" / "lingbolt.json"
MODEL = "gemini-3.1-pro-preview"
KEEP = ["Lingbolt", "Ctrl+Shift+R", "Ctrl+Z", "Ctrl", "⚡", "Pro", "Windows", "Viber", "WhatsApp", "Google Chat", "PDF", "Zoom", "Teams", "Google Meet"]
# Prices and numbers: the digits must survive (a language may write 6,99 € or €6.99, 15 000 or 15.000).
DIGITS = ["699", "5999", "999", "300", "15000", "40", "10", "64", "45", "30"]

PROMPT = """You translate the web page of Lingbolt, a small Windows program that translates text in any app.
"Pro" is the paid plan — keep the word Pro. Translate every value of this JSON object into {lang}.
Rules: clear, natural marketing wording a native speaker would write (informal "you" where the language has it);
keep Lingbolt, Ctrl, Ctrl+Z, Ctrl+Shift+R, ⚡, Pro, Windows, Viber, WhatsApp, Google Chat, PDF, Zoom, Teams and Google Meet exactly as written;
keep every number and price (write prices and thousands the way {lang} does, the euro stays the euro);
the button names Copy, Listen, Talk and Record + summary are the program's buttons — translate them as a {lang} program would label them;
keep the same keys. Return only the JSON object.

{src}"""


def ask(key: str, lang: str, src: dict) -> dict:
    body = {
        "contents": [{"parts": [{"text": PROMPT.format(lang=lang, src=json.dumps(src, ensure_ascii=False, indent=1))}]}],
        # Thinking is billed as output: on Pro's default it cost ~$35 for the 40-language runs of 19–25.10.2026.
        "generationConfig": {"responseMimeType": "application/json", "temperature": 0.2,
                             "thinkingConfig": {"thinkingLevel": "low"}},
    }
    req = urllib.request.Request(
        f"https://generativelanguage.googleapis.com/v1beta/models/{MODEL}:generateContent",
        data=json.dumps(body).encode(), headers={"Content-Type": "application/json", "x-goog-api-key": key})
    for wait in (0, 20, 60, 120):          # 429 = too many at once: wait and ask again
        time.sleep(wait)
        try:
            with urllib.request.urlopen(req, timeout=180) as r:
                text = json.load(r)["candidates"][0]["content"]["parts"][0]["text"]
            return json.loads(text)
        except urllib.error.HTTPError as e:
            if e.code != 429:
                raise
        except TimeoutError:               # a slow answer (29.10.2026): ask again, like a 429
            print(f"{lang}: timed out, asking again", flush=True)
    raise RuntimeError(f"{lang}: Gemini keeps saying 429 or timing out")


def digits(text: str) -> str:
    """All the digits, as 0–9 (Persian writes ۴۰, Arabic may write ٤٠)."""
    return "".join(str(unicodedata.digit(c)) for c in text if c.isdigit())


def problems(english: dict, t: dict) -> list[str]:
    out = [f"missing {k}" for k in english if not t.get(k)]
    for k, v in english.items():
        got = t.get(k, "")
        for token in KEEP:
            if v.count(token) and got.count(token) < v.count(token):
                out.append(f"{k}: lost {token!r}")
        for d in DIGITS:
            if d in digits(v) and d not in digits(got):
                out.append(f"{k}: lost {d}")
    return out


def main() -> None:
    key = os.environ.get("GEMINI_KEY") or sys.exit("GEMINI_KEY is not set")
    english = json.loads(subprocess.run(["node", "tools/lingbolt_source.mjs"], cwd=ROOT, check=True,
                                        capture_output=True, encoding="utf-8").stdout)
    langs = json.loads(subprocess.run(
        ["node", "--input-type=module", "-e",
         "import { LINGBOLT_LANGS } from './src/i18n/langs.mjs'; console.log(JSON.stringify(LINGBOLT_LANGS))"],
        cwd=ROOT, check=True, capture_output=True, encoding="utf-8").stdout)
    done = json.loads(OUT.read_text(encoding="utf-8")) if OUT.exists() else {}
    before = done.pop("_en", {})
    changed = {k for k in english if before.get(k) != english[k]}
    todo = [l for l in langs if l["code"] not in ("bg", "en")]

    def one(lang):
        have = {k: v for k, v in done.get(lang["code"], {}).items() if k in english and k not in changed}
        need = {k: v for k, v in english.items() if k not in have or problems({k: v}, {k: have[k]})}
        if not need:
            return lang["code"], have
        for _ in range(3):
            t = {**have, **{k: v for k, v in ask(key, f"{lang['english']} ({lang['native']})", need).items() if k in need}}
            bad = problems(english, t)
            if not bad:
                print(lang["code"], "ok", len(need), flush=True)
                return lang["code"], t
            print(lang["code"], "retry:", bad[:3], flush=True)
        return lang["code"], None

    failed = []
    with ThreadPoolExecutor(4) as pool:
        for code, t in pool.map(one, todo):
            if t is None:
                failed.append(code)
            else:
                done[code] = t
    # The good ones are kept either way; a failed language is asked again next run.
    for code in failed:
        done.pop(code, None)
    done["_en"] = english
    OUT.write_text(json.dumps(done, ensure_ascii=False, indent=1, sort_keys=True) + "\n", encoding="utf-8")
    if failed:
        sys.exit(f"could not get a clean translation: {', '.join(failed)}")
    print(len(todo), "languages,", len(english), "strings each")


if __name__ == "__main__":
    main()
