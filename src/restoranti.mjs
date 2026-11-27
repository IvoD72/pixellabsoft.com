/**
 * Приложение за ресторанти — /restoranti/ (само bg; ресторантите, на които пишем, са в България).
 * Ivo, 10–11.11.2026: продаваме приложението на Urban G.O. на други заведения.
 *
 * Цени на страницата няма (Иво, 24.11.2026): „Цена по договаряне“, както и в края на видеото. PRICES и PROMO остават
 * тук като справка за офертите; PROMO.slots / period / left движат само лентата „Стартови условия“.
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

/** Launch offer for the first 5 restaurants, 15 November – 31 December (Ivo, 17.11.2026; extended 21.11.2026). Lower `left` as each one signs;
 * 0 hides the banner and the box (also set it to 0 when the period ends). */
export const PROMO = {
  slots: 5,
  period: 'до 31 декември',
  left: 5,
  once: { upfront: '490 €', monthly: '39 €', was: '1 000 €' },
  monthly: { monthly: '59 €', months: 24, after: '39 €', was: '79 €' },
};

const T = {
  title: 'Приложение за поръчки за вашия ресторант',
  description: 'Собствено приложение с името и менюто на вашия ресторант в App Store и Google Play. Поръчки за вземане и доставка, екран в кухнята, без комисиона на поръчка.',
  badge: 'За ресторанти',
  h1: 'Вашият ресторант — в телефона на всеки клиент',
  lead: 'Собствено приложение за поръчки с вашето име, лого и меню в App Store и Google Play. Без комисиона на поръчка.',
  how: 'Как работи',
  steps: [
    ['Клиентът сканира QR кода', 'на масата, на витрината или от флаер и изтегля приложението.'],
    ['Поръчва за вземане или доставка', 'избира ястие, маха домата, избира час, пише име и телефон.'],
    ['В кухнята звънва', 'поръчката излиза на таблет, а звънецът и гласът „Нова поръчка!“ не спират, докато не я приемете.'],
    ['Клиентът знае всичко', 'приета, готова или отказана с причина — разбира веднага с известие.'],
  ],
  we: 'Ние правим всичко',
  weList: [
    ['Дизайн по ваш вкус', 'цветове, лого, снимки — пускаме го след вашето одобрение'],
    ['Вашето меню и цени', 'сменяте ги, когато поискате'],
    ['Екран за кухнята', 'звънец и глас „Нова поръчка!“ за всяка поръчка, оборот в края на деня'],
    ['App Store и Google Play', 'качваме приложението ние, с вашето име'],
  ],
  need: 'От вас се иска само един обикновен таблет за кухнята.',
  price: 'Цена по договаряне',
  priceLead: 'Всяко заведение е различно, затова нямаме една цена за всички. Пишете ни какво ви трябва и до един работен ден ще ви пратим оферта без ангажимент.',
  priceIn: 'Какво влиза винаги',
  priceInList: [
    ['Приложението с вашето име', 'в App Store и Google Play, с вашето лого, цветове и меню'],
    ['Екранът за кухнята', 'поръчки, време за приготвяне, работно време, меню, обедно меню — всичко се управлява от таблета'],
    ['Сървър, поддръжка и обновления', 'ние се грижим приложението да работи, а промените в менюто си ги правите сами'],
    ['Без комисиона на поръчка', 'всяка поръчка е изцяло ваша — няма процент за нас'],
  ],
  priceDepends: 'Цената зависи от броя на обектите, дали предлагате доставка до адрес, имате ли обедно меню и колко специален дизайн искате. Можете да платите наведнъж или с месечна такса — както ви е удобно.',
  plans: [
    ['Наведнъж', PRICES.once.upfront, `+ ${PRICES.once.monthly} на месец`],
    ['На 3 вноски', PRICES.split.upfront, `+ ${PRICES.split.monthly} на месец`],
    ['Без първоначална такса', `${PRICES.monthly.monthly} на месец`, `договор за ${PRICES.monthly.months} месеца`],
  ],
  promo: `Стартова цена за първите ${PROMO.slots} заведения · ${PROMO.period}`,
  banner: [`Стартови условия · ${PROMO.period}`, `За първите ${PROMO.slots} заведения — по-изгодно, срещу отзив и пример`, 'Пишете ни'],
  promoLeft: `Остават ${PROMO.left} от ${PROMO.slots} места`,
  promoPlans: [
    ['Наведнъж', PROMO.once.upfront, PROMO.once.was, `+ ${PROMO.once.monthly} на месец`],
    ['Без първоначална такса', `${PROMO.monthly.monthly} на месец`, PROMO.monthly.was,
      `договор за ${PROMO.monthly.months} месеца, после ${PROMO.monthly.after} на месец`],
  ],
  promoTerms: 'Тази цена остава за вас, докато ползвате приложението. В замяна искаме само две неща — да го показваме като пример и да ни напишете кратък отзив, когато тръгне.',
  regular: 'Обичайна цена',
  vat: 'Цените са без ДДС. Няма комисиона на поръчка. Месечната такса включва сървъра, поддръжката и промените в менюто.',
  delivery: `Имате доставка? Модул за доставка до адрес (по желание) — още ${PRICES.delivery} без ДДС.`,
  cta: 'Искате такова приложение?',
  ctaLead: 'Пишете ни — отговаряме в рамките на деня.',
  write: 'Пишете ни',
  video: 'Как работи — видео, 2 минути',
  // the full explainer (24.11.2026): kitchen and phone side by side, every module incl. the menu and delivery
  video2: 'Подробно видео (7 минути) — кухнята и телефонът един до друг: поръчки, работно време, меню, обедно меню и доставка',
};

const CSS = `<style>
.rs { padding-top: 40px; }
.rs .badge { display: inline-block; font-size: 13px; font-weight: 600; background: var(--fg); color: #fff; border-radius: 999px; padding: 5px 12px; margin-bottom: 18px; }
.rs .lead { font-size: 19px; color: var(--muted); max-width: 680px; }
.rs video { width: 100%; max-width: 560px; border-radius: 18px; display: block; margin: 28px 0 8px; background: #000; }
.rs video.wide { max-width: 960px; }
.rs .g2 { display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 16px; margin: 18px 0; }
.rs .box { border: 1px solid var(--line-2); border-radius: 18px; padding: 18px 20px; background: #fff; }
.rs .box b { display: block; margin-bottom: 4px; }
.rs .box span { color: var(--muted); }
.rs .plan .name { font-weight: 600; color: var(--muted); }
.rs .plan .big { font-size: 34px; font-weight: 800; margin: 6px 0 2px; }
.rs .need { background: #FFD60A; color: #111; border-radius: 16px; padding: 14px 18px; font-weight: 700; margin: 10px 0 0; }
.rs .promo-bar { display: flex; flex-wrap: wrap; align-items: center; gap: 6px 14px; background: #FFD60A; color: #111; border-radius: 16px; padding: 12px 18px; margin: 0 0 22px; text-decoration: none; }
.rs .promo-bar b { font-size: 16px; }
.rs .promo-bar span { font-size: 15px; }
.rs .promo-bar em { font-style: normal; font-weight: 700; margin-left: auto; text-decoration: underline; }
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
  ${PROMO.left > 0 ? `<a class="promo-bar" href="#cena"><b>${esc(T.banner[0])}</b><span>${esc(T.banner[1])}</span><em>${esc(T.banner[2])} →</em></a>` : ''}
  <span class="badge">${esc(T.badge)}</span>
  <h1>${esc(T.h1)}</h1>
  <p class="lead">${esc(T.lead)}</p>
  <p><a class="btn primary" href="${mail}">${esc(T.write)}</a></p>
  <video controls playsinline preload="metadata" poster="/assets/video/pixel-lab-restoranti.jpg"
    src="/assets/video/pixel-lab-restoranti.mp4" aria-label="${esc(T.video)}"></video>
  <small class="fine">${esc(T.video)}</small>
  <video class="wide" controls playsinline preload="metadata" poster="/assets/video/pixel-lab-restoranti-podrobno.jpg"
    src="/assets/video/pixel-lab-restoranti-podrobno.mp4" aria-label="${esc(T.video2)}"></video>
  <small class="fine">${esc(T.video2)}</small>
  <h2>${esc(T.how)}</h2>
  <div class="g2">${T.steps.map(([b, s]) => `<div class="box"><b>${esc(b)}</b><span>${esc(s)}</span></div>`).join('')}</div>
  <h2>${esc(T.we)}</h2>
  <div class="g2">${T.weList.map(([b, s]) => `<div class="box"><b>✓ ${esc(b)}</b><span>${esc(s)}</span></div>`).join('')}</div>
  <p class="need">${esc(T.need)}</p>
  <h2 id="cena">${esc(T.price)}</h2>
  <p class="lead">${esc(T.priceLead)}</p>
  ${PROMO.left > 0 ? `<div class="promo"><span class="badge">${esc(T.promoLeft)}</span>
    <h3>Стартови условия за първите ${PROMO.slots} заведения · ${esc(PROMO.period)}</h3>
    <p class="fine">${esc(T.promoTerms)}</p></div>` : ''}
  <h3>${esc(T.priceIn)}</h3>
  <div class="g2">${T.priceInList.map(([b, s2]) => `<div class="box"><b>✓ ${esc(b)}</b><span>${esc(s2)}</span></div>`).join('')}</div>
  <p class="fine">${esc(T.priceDepends)}</p>
  <p><a class="btn primary" href="${mail}">Поискайте оферта</a></p>
  <div class="cta"><h2 style="margin-top:0;color:#fff">${esc(T.cta)}</h2><p>${esc(T.ctaLead)}</p>
    <p><a class="mail" href="${mail}">${esc(SUPPORT_EMAIL)}</a></p></div>
</section>`;
}
