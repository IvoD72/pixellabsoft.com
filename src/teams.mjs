/**
 * Lingbolt за фирми — /lingbolt/teams/ (bg и en). Дизайн „Lingbolt — Фирми“, екран 1 (25.10.2026).
 *
 * Цените са тези от server/app/limits.py (ORG_PRICES_EUR, ORG_MIN_SEATS, ORG_MAX_SEATS) — сменят ли се там,
 * сменят се и тук. „Купи“ е GET към сървъра (/v1/org/buy), който пренасочва към Stripe; без JS формата
 * пак работи, скриптът само смята сумата.
 */
import { esc } from './template.mjs';

export const SERVER = 'https://lingbolt-73339647229.europe-west1.run.app';
export const PRICES = { month: 9.99, year: 99.99 };
export const SEATS = { min: 3, max: 100, start: 10 };
const PER_SEAT = { talkMin: 30, recordH: 3 };   // Pro's minutes per seat (TALK_SECONDS_MONTH, MEETING_SECONDS_MONTH)

const T = {
  bg: {
    title: 'Lingbolt за фирми', badge: 'За фирми',
    h1: 'Lingbolt за целия екип',
    lead: 'Един фирмен ключ, инсталация на всички компютри наведнъж и общи минути за срещите. От 3 места нагоре.',
    month: 'Месечно', year: 'Годишно · 2 месеца подарък',
    perMonth: '+ ДДС на място на месец', perYear: '+ ДДС на място на година',
    seatIs: 'Едно място = един компютър. Сменя се свободно.',
    seats: 'Места', total: 'Общо', vat: '+ ДДС', buy: 'Купи',
    pay: 'Плащане с карта през Stripe. Фактура на фирмата с ДДС номера.',
    pool: 'Общо за екипа на месец', record: 'ч запис + конспект на срещи', talk: 'ч Разговор — превод на глас на живо',
    poolNote: 'Минутите са общи: който има повече срещи, ползва от тези на колегите. Когато свършат — общи кредити за цялата фирма.',
    seat: 'Всяко място има всичко от Про',
    seatList: ['Превод навсякъде с ⚡ — 15 000 думи на ден', 'Превод на екрана — 10 на ден', 'Естествен глас — 45 мин на месец', 'Слушане със субтитри · 40 езика'],
    gets: 'Какво получава фирмата',
    cards: [
      ['Един фирмен ключ', 'Един ключ за всички места. Никой служител не плаща и не въвежда нищо.'],
      ['Инсталация наведнъж', 'Тиха инсталация за целия компютър — през скрипт, GPO, Intune или SCCM.'],
      ['Страница за администратора', 'Кои компютри са вътре, колко минути са ползвани, места и кредити — на едно място.'],
      ['Общи минути и кредити', 'Минутите на всички места са в общ портфейл. Кредитите — също.'],
      ['Обновяване от администратора', 'Инсталирано за всички, Lingbolt не се обновява сам — новата версия я пуска фирмата.'],
      ['Фактура за всеки период', 'Една фактура за всички места, по имейл, на името на фирмата.'],
    ],
    how: 'Как се пуска на 20 компютъра',
    steps: [['Купуваш места.', 'По имейл идват фирменият ключ и линк към страницата на администратора.'],
      ['Пускаш една команда', 'през системата, с която разпращаш програми.'],
      ['Готово.', 'Lingbolt тръгва на всеки компютър, вече като фирмен — без вход и без настройки.']],
    signed: 'Инсталаторът е подписан от Pixel Lab EOOD. Без командата — обикновена инсталация, ключът се въвежда веднъж.',
    download: 'Изтегли инсталатора',
    fine: [['Места по всяко време.', 'Добавяш или махаш места от страницата на администратора; Stripe смята разликата до края на периода.'],
      ['Текстовете са ваши.', 'Не пазим какво превеждате или какво се казва на срещите. Администраторът вижда само минути и компютри.'],
      ['Под 3 места?', 'Вземи Lingbolt Про — 6,99 € на месец за един човек, от менюто на програмата.']],
    more: 'Цените са без ДДС. За повече от 100 места пишете на support@pixellabsoft.com.',
    back: 'Към Lingbolt',
  },
  en: {
    title: 'Lingbolt for teams', badge: 'For teams',
    h1: 'Lingbolt for the whole team',
    lead: 'One company key, installed on every computer at once, and shared minutes for meetings. From 3 seats.',
    month: 'Monthly', year: 'Yearly · 2 months free',
    perMonth: '+ VAT per seat a month', perYear: '+ VAT per seat a year',
    seatIs: 'One seat = one computer. Move it freely.',
    seats: 'Seats', total: 'Total', vat: '+ VAT', buy: 'Buy',
    pay: 'Card payment through Stripe. An invoice to the company with its VAT number.',
    pool: 'For the whole team, every month', record: 'h of meeting recording + minutes', talk: 'h of Conversation — live voice translation',
    poolNote: 'The minutes are shared: whoever has more meetings uses the colleagues’ minutes. After them — credits for the whole company.',
    seat: 'Every seat has all of Pro',
    seatList: ['Translation anywhere with ⚡ — 15,000 words a day', 'Screen translation — 10 a day', 'Natural voice — 45 min a month', 'Listening with subtitles · 40 languages'],
    gets: 'What the company gets',
    cards: [
      ['One company key', 'One key for every seat. No employee pays or types anything.'],
      ['Installed at once', 'A silent install for the whole computer — by script, GPO, Intune or SCCM.'],
      ['An admin page', 'Which computers are in, how many minutes were used, seats and credits — in one place.'],
      ['Shared minutes and credits', 'The minutes of all seats are one pool. So are the credits.'],
      ['Updates by the admin', 'Installed for everyone, Lingbolt does not update itself — the company rolls out new versions.'],
      ['An invoice every period', 'One invoice for all seats, by email, in the company’s name.'],
    ],
    how: 'How it gets onto 20 computers',
    steps: [['You buy seats.', 'The company key and a link to the admin page come by email.'],
      ['You run one command', 'through whatever you use to roll out programs.'],
      ['Done.', 'Lingbolt starts on every computer, already as the company’s — no sign-in, no setup.']],
    signed: 'The installer is signed by Pixel Lab EOOD. Without the command it is a normal install, and the key is typed once.',
    download: 'Download the installer',
    fine: [['Seats at any time.', 'Add or remove seats on the admin page; Stripe bills the difference to the end of the period.'],
      ['Your texts stay yours.', 'We do not keep what you translate or what is said in meetings. The admin sees only minutes and computers.'],
      ['Fewer than 3 seats?', 'Get Lingbolt Pro — €6.99 a month for one person, from the program’s menu.']],
    more: 'Prices exclude VAT. For more than 100 seats write to support@pixellabsoft.com.',
    back: 'Back to Lingbolt',
  },
};

export const teamsText = lang => T[lang === 'bg' ? 'bg' : 'en'];

const money = (v, lang) => lang === 'bg' ? `${v.toFixed(2).replace('.', ',')} €` : `€${v.toFixed(2)}`;

const CSS = `<style>
.tm { padding-top: 40px; }
.tm .badge { display: inline-block; font-size: 13px; font-weight: 600; background: var(--fg); color: #fff; border-radius: 999px; padding: 5px 12px; margin-bottom: 18px; }
.tm .lead { font-size: 19px; color: var(--muted); max-width: 640px; }
.tm .grid2 { display: grid; grid-template-columns: repeat(auto-fit, minmax(min(300px, 100%), 1fr)); gap: 20px; margin: 36px 0 0; }
.tm .grid2 > *, .tm .grid3 > * { min-width: 0; }
.tm .card { box-sizing: border-box; background: #fff; border: 1px solid var(--line); border-radius: 20px; padding: 26px; }
.tm .dark { background: var(--fg); color: #fff; border: 0; }
.tm .dark p, .tm .dark li { color: #c9cde6; }
.tm .tabs { display: inline-flex; flex-wrap: wrap; gap: 4px; background: var(--bg-2); border-radius: 12px; padding: 4px; border: 0; margin: 0 0 16px; }
.tm .tabs label { padding: 9px 14px; border-radius: 9px; font-size: 15px; font-weight: 600; color: var(--muted); cursor: pointer; }
.tm .tabs input { position: absolute; opacity: 0; }
.tm .tabs input:checked + span { color: var(--fg); }
.tm .tabs label:has(input:checked) { background: #fff; box-shadow: 0 1px 3px rgba(11,20,48,.12); }
.tm .tabs input:focus-visible + span { outline: 2px solid var(--blue); outline-offset: 4px; }
.tm .price { font-size: 44px; font-weight: 700; letter-spacing: -.03em; }
.tm .row { display: flex; justify-content: space-between; align-items: center; gap: 12px; border-top: 1px solid var(--line); padding-top: 16px; margin-top: 16px; }
.tm .seats input { width: 84px; height: 44px; font: 600 20px var(--font); text-align: center; border: 1px solid var(--line-2); border-radius: 12px; }
.tm .total { font-size: 22px; font-weight: 700; }
.tm .buy { width: 100%; justify-content: center; margin-top: 18px; font-size: 17px; cursor: pointer; }
.tm small { color: var(--muted); font-size: 14px; }
.tm .nums { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 12px; margin: 14px 0; }
.tm .nums div { background: #1c2142; border-radius: 14px; padding: 14px; }
.tm .nums b { display: block; font-size: 30px; color: #fff; }
.tm h2 { margin: 64px 0 22px; font-size: clamp(24px, 3vw, 32px); }
.tm .grid3 { display: grid; grid-template-columns: repeat(auto-fit, minmax(min(300px, 100%), 1fr)); gap: 18px; }
.tm .grid3 h3 { font-size: 17px; letter-spacing: -.01em; margin: 0 0 6px; }
.tm .grid3 p { font-size: 15px; color: var(--muted); margin: 0; }
.tm .step { display: flex; gap: 14px; font-size: 16px; color: var(--muted); }
.tm .step i { flex: none; width: 34px; height: 34px; border-radius: 999px; background: var(--blue); color: #fff; font-style: normal; font-weight: 700; display: grid; place-items: center; }
.tm .step b { color: var(--fg); }
.tm pre { background: var(--fg); color: #e8ecff; border-radius: 14px; padding: 18px 20px; overflow-x: auto; font-size: 15px; margin: 22px 0 8px; }
.tm .fine { margin-top: 48px; font-size: 15px; color: var(--muted); }
.tm .fine b { color: var(--fg); }
</style>`;

export function teamsBody(lang, download) {
  const w = teamsText(lang);
  const per = { month: w.perMonth, year: w.perYear };
  const tab = (plan, label, on) =>
    `<label><input type="radio" name="plan" value="${plan}"${on ? ' checked' : ''}><span>${esc(label)}</span></label>`;
  return `${CSS}<section class="wrap tm">
  <span class="badge">${esc(w.badge)}</span>
  <h1>${esc(w.h1)}</h1>
  <p class="lead">${esc(w.lead)}</p>
  <div class="grid2">
    <form class="card" method="get" action="${SERVER}/v1/org/buy" id="tm-buy">
      <input type="hidden" name="lang" value="${lang === 'bg' ? 'bg' : 'en'}">
      <fieldset class="tabs"><legend class="sr" style="position:absolute;left:-9999px">${esc(w.title)}</legend>
        ${tab('month', w.month, true)}${tab('year', w.year, false)}</fieldset>
      <div><span class="price" data-unit>${esc(money(PRICES.month, lang))}</span> <small data-per>${esc(per.month)}</small></div>
      <small>${esc(w.seatIs)}</small>
      <div class="row seats"><label for="tm-seats"><b>${esc(w.seats)}</b></label>
        <input id="tm-seats" name="seats" type="number" min="${SEATS.min}" max="${SEATS.max}" value="${SEATS.start}" required></div>
      <div class="row"><span>${esc(w.total)}</span><span class="total"><span data-total>${esc(money(PRICES.month * SEATS.start, lang))}</span> <small>${esc(w.vat)}</small></span></div>
      <button class="btn primary buy" type="submit">${esc(w.buy)}</button>
      <p style="margin:12px 0 0;text-align:center"><small>${esc(w.pay)}</small></p>
    </form>
    <div class="card dark">
      <p style="margin:0;font-weight:600;color:#b9beda">${esc(w.pool)}</p>
      <div class="nums"><div><b data-rec>${SEATS.start * PER_SEAT.recordH}</b>${esc(w.record)}</div>
        <div><b data-talk>${SEATS.start * PER_SEAT.talkMin / 60}</b>${esc(w.talk)}</div></div>
      <p>${esc(w.poolNote)}</p>
      <p style="margin:0;color:#fff;font-weight:600">${esc(w.seat)}</p>
      <ul style="margin:6px 0 0;padding-left:20px">${w.seatList.map(s => `<li>${esc(s)}</li>`).join('')}</ul>
    </div>
  </div>
  <h2>${esc(w.gets)}</h2>
  <div class="grid3">${w.cards.map(([h, p]) => `<div class="card"><h3>${esc(h)}</h3><p>${esc(p)}</p></div>`).join('')}</div>
  <h2>${esc(w.how)}</h2>
  <div class="grid3">${w.steps.map(([b, s], i) => `<div class="step"><i>${i + 1}</i><span><b>${esc(b)}</b> ${esc(s)}</span></div>`).join('')}</div>
  <pre><code>LingboltSetup.exe /ALLUSERS /VERYSILENT /KEY=LB-ORG-XXXX-XXXX-XXXX</code></pre>
  <small>${esc(w.signed)} <a href="${download}" style="text-decoration:underline">${esc(w.download)}</a></small>
  <div class="grid3 fine">${w.fine.map(([b, s]) => `<div><b>${esc(b)}</b> ${esc(s)}</div>`).join('')}</div>
  <p class="fine">${esc(w.more)}</p>
</section>
<script>
(() => {
  const f = document.getElementById('tm-buy');
  if (!f) return;
  const price = ${JSON.stringify(PRICES)}, per = ${JSON.stringify(per)}, bg = ${lang === 'bg'};
  const fmt = v => bg ? v.toFixed(2).replace('.', ',').replace(/\\B(?=(\\d{3})+(?!\\d))/g, ' ') + ' €'
                      : '€' + v.toFixed(2).replace(/\\B(?=(\\d{3})+(?!\\d))/g, ',');
  const upd = () => {
    const plan = f.plan.value, n = Math.min(${SEATS.max}, Math.max(${SEATS.min}, parseInt(f.seats.value, 10) || ${SEATS.min}));
    f.querySelector('[data-unit]').textContent = fmt(price[plan]);
    f.querySelector('[data-per]').textContent = per[plan];
    f.querySelector('[data-total]').textContent = fmt(price[plan] * n);
    document.querySelector('[data-rec]').textContent = n * ${PER_SEAT.recordH};
    document.querySelector('[data-talk]').textContent = (n * ${PER_SEAT.talkMin} / 60).toString().replace('.', bg ? ',' : '.');
  };
  f.addEventListener('input', upd);
  upd();
})();
</script>`;
}
