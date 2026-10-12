"""Картинките на сайта от изходниците: знакът от логото, favicon и истинските екрани.

    python tools/assets.py

Пише в src/assets/ (влиза в сайта при `node build.mjs`). Изходниците стоят в
папките на приложенията — сменят ли се екраните, пуска се пак.
"""
from pathlib import Path

from PIL import Image

ROOT = Path(__file__).resolve().parents[3]          # C:\Pixel Lab Claude
OUT = Path(__file__).resolve().parents[1] / "src" / "assets"
LOGO = ROOT / "7 Pixel Lab Soft" / "Logo"


def webp(img, name, width):
    img = img.convert("RGBA") if img.mode in ("RGBA", "LA", "P") else img.convert("RGB")
    h = round(img.height * width / img.width)
    img.resize((width, h), Image.LANCZOS).save(OUT / name, "WEBP", quality=86, method=6)
    print(name, width, h)


def mark():
    """Само знакът „P“ с пикселите — горната част на логото, без надписа."""
    im = Image.open(LOGO / "Pixel Lab Logo - prozrachen izrqzan.png").convert("RGBA")
    alpha = im.getchannel("A")
    pylni = [bool(alpha.crop((0, y, im.width, y + 1)).getbbox()) for y in range(im.height)]
    # Надписът е последният плътен блок отдолу; знакът е всичко над празнината преди него.
    y = im.height - 1
    while not pylni[y]:
        y -= 1
    while pylni[y]:
        y -= 1
    m = im.crop((0, 0, im.width, y))
    m = m.crop(m.getchannel("A").getbbox())
    side = max(m.size)
    sq = Image.new("RGBA", (side, side), (0, 0, 0, 0))
    sq.paste(m, ((side - m.width) // 2, (side - m.height) // 2))
    return sq


#: Пропорцията на екрана на телефон (1284×2778). Всички снимки в рамка на телефон
#: я имат — иначе рамките излизат с различна височина и „сплескани“ (Иво, 12.10).
TEL = 2778 / 1284


def na_telefon(img):
    """Снимка, по-ниска от екран на телефон, се доудължава отдолу с цвета на дъното ѝ."""
    img = img.convert("RGB")
    h = round(img.width * TEL)
    if img.height >= h - 2:
        return img.crop((0, 0, img.width, h)) if img.height > h else img
    # Фонът на екрана — от левия ръб долу (дъното може да е отрязана карта, не фон).
    fon = img.crop((0, img.height - 40, 4, img.height)).resize((1, 1), Image.LANCZOS).getpixel((0, 0))
    out = Image.new("RGB", (img.width, h), fon)
    out.paste(img, (0, 0))
    # Последните редове се стопяват във фона — отрязаното отдолу не стои като плоча.
    pad = min(120, img.height // 8)
    plast = Image.new("RGB", (img.width, pad), fon)
    maska = Image.linear_gradient("L").resize((img.width, pad))
    out.paste(plast, (0, img.height - pad), maska)
    return out


def ikona(src, name, fon=None):
    """Иконата на приложението, 128×128; прозрачният знак — върху фон."""
    im = Image.open(src).convert("RGBA")
    if fon:
        side = max(im.size)
        bg = Image.new("RGBA", (round(side * 1.3), round(side * 1.3)), fon)
        bg.paste(im, ((bg.width - im.width) // 2, (bg.height - im.height) // 2), im)
        im = bg
    im.resize((128, 128), Image.LANCZOS).save(OUT / name, optimize=True)
    print(name)


def main():
    OUT.mkdir(parents=True, exist_ok=True)
    m = mark()
    m.resize((128, 128), Image.LANCZOS).save(OUT / "logo-mark.png", optimize=True)
    for size in (32, 180, 512):
        pad = round(size * 0.12) if size > 32 else 1
        bg = Image.new("RGBA", (size, size), (255, 255, 255, 0 if size == 32 else 255))
        inner = m.resize((size - 2 * pad, size - 2 * pad), Image.LANCZOS)
        bg.paste(inner, (pad, pad), inner)
        bg.save(OUT / f"favicon-{size}.png", optimize=True)
    for name in ("za tamen fon", "prozrachen"):
        im = Image.open(LOGO / f"Pixel Lab Logo - {name} izrqzan.png")
        webp(im, f"logo-{'dark' if 'tamen' in name else 'light'}.webp", 440)

    k = ROOT / "6 Konspekt" / "04 Dizajn" / "v2"
    webp(na_telefon(Image.open(k / "07 · Резултат — Резюме.png")), "konspekt-bg.webp", 520)
    webp(na_telefon(Image.open(k / "07 · EN · Result — Summary.png")), "konspekt-en.webp", 520)

    # Глаголи: BG — екранът от Google Play (без лентата на Android отдолу), EN — от App Store.
    g = Image.open(ROOT / "3 Glasika" / "bildove" / "grafiki-play" / "03-pleyar.png")
    webp(na_telefon(g.crop((0, 0, g.width, round(g.height * 0.93)))), "glagoli-bg.webp", 520)
    webp(na_telefon(Image.open(ROOT / "3 Glasika" / "04 Dizajn" / "skrijnshoti" / "app-store" / "glagoli-2-player.png")),
         "glagoli-en.webp", 520)

    # Сроко: снимките от 23.09 — изходниците са в tools/izhodnici/.
    for lang in ("bg", "en"):
        src = Path(__file__).resolve().parent / "izhodnici" / f"sroko-{lang}.webp"
        webp(na_telefon(Image.open(src)), f"sroko-{lang}.webp", 520)

    ikona(ROOT / "8 Sroko" / "04 Dizajn" / "ikonka" / "sroko-icon-512-play.png", "icon-sroko.png")
    ikona(ROOT / "3 Glasika" / "bildove" / "grafiki-play" / "ikona-512.png", "icon-glagoli.png")
    ikona(ROOT / "6 Konspekt" / "04 Dizajn" / "play" / "play-icon-512.png", "icon-konspekt.png")
    ikona(ROOT / "2 Nelo" / "5-mobilen-app" / "calvio-app" / "assets" / "icon.png", "icon-calvio.png")
    ikona(ROOT / "1 Sortis" / "sortis-site" / "assets" / "sortis-mark.png", "icon-sortis.png", fon=(255, 255, 255, 255))

    webp(Image.open(ROOT / "1 Sortis" / "sortis-site" / "assets" / "pomosht" / "07-tablo.png"), "sortis.webp", 1280)


if __name__ == "__main__":
    main()
