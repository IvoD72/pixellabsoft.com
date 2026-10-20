/**
 * Екраните на приложенията — САМО истински снимки (`src/assets/`, правят се от
 * `tools/assets.py` от изходниците в папките на приложенията). Рисувани
 * екрани няма: Иво, 12.10.2026 — „това не е екранът“. Приложение без снимка
 * (Calvio) показва иконата си, не измислен екран.
 *
 * Всички снимки на телефон са с една пропорция (1284×2778) — `tools/assets.py`
 * доудължава по-ниските отдолу, вместо рамката да се сплесква.
 *
 * Телефон (`phone`) или прозорец за Windows (`window`). Цветът идва от `--c`
 * на приложението.
 */

const SHOTS = {
  konspekt: {
    kind: 'phone', w: 520, h: 1125,
    alt: {
      bg: 'Екран на Konspekt: резюмето на среща, взетите решения и бутон „Изпрати протокол“.',
      en: 'Konspekt screen: a meeting summary, the decisions taken and a “Send minutes” button.',
    },
  },
  glagoli: {
    kind: 'phone', w: 520, h: 1125,
    alt: {
      bg: 'Екран на Глаголи: книгата се чете на глас, а отдолу е бутонът „Спри и попитай“.',
      en: 'Glagoli screen: the book is read aloud, with a “Pause and ask” button below.',
    },
  },
  sroko: {
    kind: 'phone', w: 520, h: 1125,
    alt: {
      bg: 'Екран на Сроко: два автомобила с оставащите дни до винетката, ГТП, гражданската и книжката.',
      en: 'Sroko screen: two vehicles with the days left on the vignette, roadworthiness test, insurance and licence.',
    },
  },
  sortis: {
    kind: 'window', w: 1280, h: 800, one: true,
    alt: {
      bg: 'Екран на Sortis: таблото с покупките, продажбите, ДДС и документите за проверка.',
      en: 'Sortis screen: the dashboard with purchases, sales, VAT and the documents to check.',
    },
  },
  lingbolt: {
    kind: 'window', w: 1280, h: 749, one: true,
    // On the home cards the whole chat is too small to read, so they show only the translation card.
    peek: { w: 410, h: 260 },
    alt: {
      bg: 'Lingbolt в Google Chat: маркирано съобщение на английски и картата с превода на български, с бутони „Копирай“ и „Чуй“.',
      en: 'Lingbolt in Google Chat: a selected English message and the card with its Bulgarian translation, with “Copy” and “Listen” buttons.',
    },
  },
};

/**
 * Рамката с истинската снимка за дадения език; празно, ако снимка няма.
 * `small` — за малките карти на началната страница: ако приложението има изрязан
 * `peek`, показва него в тесен прозорец.
 */
export function mock(app, lang, small = false) {
  const s = SHOTS[app.slug];
  if (!s) return '';
  const peek = small && s.peek;
  const src = peek ? `/assets/${app.slug}-peek.webp` : s.one ? `/assets/${app.slug}.webp` : `/assets/${app.slug}-${lang}.webp`;
  const w = peek ? s.peek.w : s.w;
  const h = peek ? s.peek.h : typeof s.h === 'object' ? s.h[lang] : s.h;
  const img = `<img src="${src}" alt="${s.alt[lang]}" width="${w}" height="${h}" loading="lazy" decoding="async">`;
  const frame = s.kind === 'window'
    ? `<div class="device window${peek ? ' narrow' : ''}"><div class="bar"><i></i><i></i><i></i></div>${img}</div>`
    : `<div class="device phone"><div class="screen" style="aspect-ratio:${s.w} / ${h}">${img}</div></div>`;
  return `<div class="mockwrap" style="--c:${app.color}">${frame}</div>`;
}

export const MOCK_CSS = `
.mockwrap { display: inline-block; max-width: 100%; }
.device { position: relative; }
.device img { display: block; width: 100%; height: 100%; object-fit: cover; object-position: top center; }
.device.phone { width: 250px; padding: 9px; border-radius: 44px; background: #0d1222;
  box-shadow: inset 0 0 0 1.5px #2a3150, 0 50px 90px -40px rgba(13,25,70,.55), 0 30px 60px -35px color-mix(in srgb, var(--c) 70%, transparent); }
.device.phone .screen { border-radius: 36px; overflow: hidden; background: #0d1222; }
.device.window { width: min(620px, 100%); border-radius: 14px; overflow: hidden; background: #fff;
  box-shadow: 0 0 0 1px rgba(11,20,48,.08), 0 50px 90px -40px rgba(13,25,70,.45), 0 30px 60px -35px color-mix(in srgb, var(--c) 60%, transparent); }
.device.window .bar { display: flex; gap: 6px; padding: 10px 12px; background: #eef1f7; border-bottom: 1px solid rgba(11,20,48,.06); }
.device.window .bar i { width: 10px; height: 10px; border-radius: 50%; background: #cfd5e2; }
.device.window .bar i:first-child { background: #ff6159; } .device.window .bar i:nth-child(2) { background: #ffbd2e; } .device.window .bar i:nth-child(3) { background: #28c941; }
.device.window img { height: auto; }
.mockwrap:has(.window) { display: block; width: min(620px, 100%); }
`;
