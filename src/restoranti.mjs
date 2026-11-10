/**
 * Приложение за ресторанти — /restoranti/ (само bg; ресторантите, на които пишем, са в България).
 * Ivo, 10–11.11.2026: продаваме приложението на Urban G.O. на други заведения.
 *
 * Цените са решение на Иво (11.11.2026) — едно място за тях е PRICES тук; същите са във видеото
 * (18 Urban GO/demo/patch_kino.py, s_price) и в имейла до ресторантите. Сменят ли се — и на трите места.
 * Видеото: src/assets/video/prilozhenie-za-restoranti.mp4 (компресирано копие на demo/out/…-4x5.mp4).
 */
import { esc } from './template.mjs';
import { SUPPORT_EMAIL } from './site.mjs';

export const PRICES = {
  once: { upfront: '1 000 €', monthly: '39 €' },
  split: { upfront: '3 × 350 €', monthly: '39 €' },
  monthly: { upfront: '0 €', monthly: '79 €', months: 24 },
  delivery: '300 €',
};

const T = {
  title: 'Приложение за поръчки за вашия ресторант',
  description: 'Собствено приложение с името и менюто на вашия ресторант в App Store и Google Play. Поръчки за вземане и доставка, екран в кухнята, без комисиона на поръчка.',
  badge: 'За ресторанти',
  h1: 'Вашият ресторант — в телефона на всеки клиент',
  lead: 'Собствено приложение за поръчки с вашето име, лого и меню — в App Store и Google Play. Без комисиона на поръчка.',
  how: 'Как работи',
  steps: [
    ['Клиентът сканира QR кода', 'на масата, на витрината или на флаер, и изтегля приложението.'],
    ['Поръчва за вземане или доставка', 'избира ястие, маха домата, избира час, пише име и телефон.'],
    ['В кухнята звънва', 'поръчката излиза на таблет и звънецът не спира, докато не я приемете.'],
    ['Клиентът знае всичко', 'приета, готова, или отказана с причина — веднага, с известие.'],
  ],
  we: 'Ние правим всичко',
  weList: [
    ['Дизайн по ваш вкус', 'цветове, лого, снимки — прилагаме го след вашето одобрение'],
    ['Вашето меню и цени', 'сменяте ги, когато поискате'],
    ['Екран за кухнята', 'със звънец за всяка поръчка и оборот в края на деня'],
    ['App Store и Google Play', 'качваме приложението ние, с вашето име'],
  ],
  need: 'От вас трябва само едно: таблет с тъч екран в кухнята.',
  price: 'Цената — както ви е удобно',
  plans: [
    ['Наведнъж', PRICES.once.upfront, `+ ${PRICES.once.monthly} на месец`],
    ['На 3 вноски', PRICES.split.upfront, `+ ${PRICES.split.monthly} на месец`],
    ['Без първоначална такса', `${PRICES.monthly.monthly} на месец`, `договор за ${PRICES.monthly.months} месеца`],
  ],
  vat: 'Цените са без ДДС. Без комисиона на поръчка. В месечната такса са сървърът, поддръжката и промените в менюто.',
  delivery: `Имате доставка? Доставка до адрес — по желание, още ${PRICES.delivery} без ДДС.`,
  cta: 'Искате такова приложение?',
  ctaLead: 'Пишете ни — отговаряме в рамките на деня.',
  write: 'Пишете ни',
  video: 'Как работи — видео, 2 минути',
};

const CSS = `<style>
.rs { padding-top: 40px; }
.rs .badge { display: inline-block; font-size: 13px; font-weight: 600; background: var(--fg); color: #fff; border-radius: 999px; padding: 5px 12px; margin-bottom: 18px; }
.rs .lead { font-size: 19px; color: var(--muted); max-width: 680px; }
.rs video { width: 100%; max-width: 560px; border-radius: 18px; display: block; margin: 28px 0 8px; background: #000; }
.rs .g2 { display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 16px; margin: 18px 0; }
.rs .box { border: 1px solid var(--line-2); border-radius: 18px; padding: 18px 20px; background: #fff; }
.rs .box b { display: block; margin-bottom: 4px; }
.rs .box span { color: var(--muted); }
.rs .plan .name { font-weight: 600; color: var(--muted); }
.rs .plan .big { font-size: 34px; font-weight: 800; margin: 6px 0 2px; }
.rs .need { background: #FFD60A; color: #111; border-radius: 16px; padding: 14px 18px; font-weight: 700; margin: 10px 0 0; }
.rs .fine { color: var(--muted); font-size: 15px; }
.rs .cta { margin: 40px 0 20px; padding: 26px; border-radius: 22px; background: #0b1430; color: #fff; }
.rs .cta p { color: #c9cde3; }
.rs .cta a.mail { color: #FFD60A; font-weight: 700; }
</style>`;

export function restorantiText() {
  return T;
}

export function restorantiBody() {
  const mail = `mailto:${SUPPORT_EMAIL}?subject=${encodeURIComponent('Приложение за ресторант')}`;
  return `${CSS}<section class="wrap rs">
  <span class="badge">${esc(T.badge)}</span>
  <h1>${esc(T.h1)}</h1>
  <p class="lead">${esc(T.lead)}</p>
  <p><a class="btn primary" href="${mail}">${esc(T.write)}</a></p>
  <video controls playsinline preload="metadata" poster="/assets/video/prilozhenie-za-restoranti.jpg"
    src="/assets/video/prilozhenie-za-restoranti.mp4" aria-label="${esc(T.video)}"></video>
  <small class="fine">${esc(T.video)}</small>
  <h2>${esc(T.how)}</h2>
  <div class="g2">${T.steps.map(([b, s]) => `<div class="box"><b>${esc(b)}</b><span>${esc(s)}</span></div>`).join('')}</div>
  <h2>${esc(T.we)}</h2>
  <div class="g2">${T.weList.map(([b, s]) => `<div class="box"><b>✓ ${esc(b)}</b><span>${esc(s)}</span></div>`).join('')}</div>
  <p class="need">${esc(T.need)}</p>
  <h2>${esc(T.price)}</h2>
  <div class="g2">${T.plans.map(([n, big, small]) => `<div class="box plan"><div class="name">${esc(n)}</div><div class="big">${esc(big)}</div><span>${esc(small)}</span></div>`).join('')}</div>
  <p class="fine">${esc(T.vat)}</p>
  <p class="need">${esc(T.delivery)}</p>
  <div class="cta"><h2 style="margin-top:0;color:#fff">${esc(T.cta)}</h2><p>${esc(T.ctaLead)}</p>
    <p><a class="mail" href="${mail}">${esc(SUPPORT_EMAIL)}</a></p></div>
</section>`;
}
