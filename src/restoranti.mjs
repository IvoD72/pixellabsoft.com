/**
 * Приложение за ресторанти — /restoranti/ (само bg; ресторантите, на които пишем, са в България).
 * Ivo, 10–11.11.2026: продаваме приложението на Urban G.O. на други заведения.
 *
 * Цените са решение на Иво (11.11.2026) — едно място за тях е PRICES тук; същите са във видеото
 * (18 Urban GO/demo/patch_kino.py, s_price) и в имейла до ресторантите. Сменят ли се — и на трите места.
 * Видеото: src/assets/video/pixel-lab-restoranti.mp4 (компресирано копие на demo/out/…-4x5.mp4).
 */
import { esc } from './template.mjs';
import { SUPPORT_EMAIL } from './site.mjs';

export const PRICES = {
  once: { upfront: '1 000 €', monthly: '39 €' },
  split: { upfront: '3 × 350 €', monthly: '39 €' },
  monthly: { upfront: '0 €', monthly: '79 €', months: 24 },
  delivery: '300 €',
};

/** Launch offer for the first 5 restaurants (Ivo, 17.11.2026). Lower `left` as each one signs; 0 hides the box. */
export const PROMO = {
  slots: 5,
  left: 5,
  once: { upfront: '490 €', monthly: '39 €', was: '1 000 €' },
  monthly: { monthly: '59 €', months: 24, after: '39 €', was: '79 €' },
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
    ['В кухнята звънва', 'поръчката излиза на таблет, а звънецът и гласът „Нова поръчка!“ не спират, докато не я приемете.'],
    ['Клиентът знае всичко', 'приета, готова, или отказана с причина — веднага, с известие.'],
  ],
  we: 'Ние правим всичко',
  weList: [
    ['Дизайн по ваш вкус', 'цветове, лого, снимки — прилагаме го след вашето одобрение'],
    ['Вашето меню и цени', 'сменяте ги, когато поискате'],
    ['Екран за кухнята', 'звънец и глас „Нова поръчка!“ за всяка поръчка, оборот в края на деня'],
    ['App Store и Google Play', 'качваме приложението ние, с вашето име'],
  ],
  need: 'От вас трябва само едно: таблет с тъч екран в кухнята.',
  price: 'Цената — както ви е удобно',
  plans: [
    ['Наведнъж', PRICES.once.upfront, `+ ${PRICES.once.monthly} на месец`],
    ['На 3 вноски', PRICES.split.upfront, `+ ${PRICES.split.monthly} на месец`],
    ['Без първоначална такса', `${PRICES.monthly.monthly} на месец`, `договор за ${PRICES.monthly.months} месеца`],
  ],
  promo: `Цена за първите ${PROMO.slots} заведения`,
  promoLeft: `Остават ${PROMO.left} от ${PROMO.slots} места`,
  promoPlans: [
    ['Наведнъж', PROMO.once.upfront, PROMO.once.was, `+ ${PROMO.once.monthly} на месец`],
    ['Без първоначална такса', `${PROMO.monthly.monthly} на месец`, PROMO.monthly.was,
      `договор за ${PROMO.monthly.months} месеца, после ${PROMO.monthly.after} на месец`],
  ],
  promoTerms: 'Цената остава ваша, докато ползвате приложението. Срещу нея искаме само две неща: да показваме приложението ви като пример и кратък отзив, когато тръгне.',
  regular: 'Обичайна цена',
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
.rs .promo { border: 2px solid #FFD60A; border-radius: 22px; padding: 20px; margin: 18px 0 26px; background: #fffbe6; }
.rs .promo h3 { margin: 0 0 4px; font-size: 22px; }
.rs .promo .badge { background: #FFD60A; color: #111; }
.rs .promo s { font-size: 18px; font-weight: 600; color: var(--muted); margin-left: 6px; }
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
  <video controls playsinline preload="metadata" poster="/assets/video/pixel-lab-restoranti.jpg"
    src="/assets/video/pixel-lab-restoranti.mp4" aria-label="${esc(T.video)}"></video>
  <small class="fine">${esc(T.video)}</small>
  <h2>${esc(T.how)}</h2>
  <div class="g2">${T.steps.map(([b, s]) => `<div class="box"><b>${esc(b)}</b><span>${esc(s)}</span></div>`).join('')}</div>
  <h2>${esc(T.we)}</h2>
  <div class="g2">${T.weList.map(([b, s]) => `<div class="box"><b>✓ ${esc(b)}</b><span>${esc(s)}</span></div>`).join('')}</div>
  <p class="need">${esc(T.need)}</p>
  <h2>${esc(T.price)}</h2>
  ${PROMO.left > 0 ? `<div class="promo"><span class="badge">${esc(T.promoLeft)}</span>
    <h3>${esc(T.promo)}</h3>
    <div class="g2">${T.promoPlans.map(([n, big, was, small]) => `<div class="box plan"><div class="name">${esc(n)}</div><div class="big">${esc(big)} <s>${esc(was)}</s></div><span>${esc(small)}</span></div>`).join('')}</div>
    <p class="fine">${esc(T.promoTerms)}</p></div>
  <h3>${esc(T.regular)}</h3>` : ''}
  <div class="g2">${T.plans.map(([n, big, small]) => `<div class="box plan"><div class="name">${esc(n)}</div><div class="big">${esc(big)}</div><span>${esc(small)}</span></div>`).join('')}</div>
  <p class="fine">${esc(T.vat)}</p>
  <p class="need">${esc(T.delivery)}</p>
  <div class="cta"><h2 style="margin-top:0;color:#fff">${esc(T.cta)}</h2><p>${esc(T.ctaLead)}</p>
    <p><a class="mail" href="${mail}">${esc(SUPPORT_EMAIL)}</a></p></div>
</section>`;
}
