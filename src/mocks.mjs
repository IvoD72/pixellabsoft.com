/**
 * Стилизирани екрани („mockups") на приложенията — чист HTML/CSS, без
 * картинки. Показват какво прави продуктът, не са истинските екрани;
 * когато има реални скрийншоти, се заменят (или се слагат до тях).
 *
 * Всеки mock е телефон (`phone`) или прозорец за Windows (`window`).
 * Текстовете вътре са на езика на страницата. Цветът идва от `--c`
 * на приложението, така че рамката и акцентите съвпадат с картата му.
 */

const T = {
  bg: {
    konspekt: {
      title: 'Седмична среща', meta: '27 мин · 3 говорещи', rec: 'Записва…',
      tabs: ['Резюме', 'Решения', 'Задачи'],
      items: [
        ['Мария', 'Да пратим офертата до петък'],
        ['Иван', 'Проверява цените на доставчика'],
        ['Мария', 'Следваща среща — вторник'],
      ],
      quote: '„…до петък най-късно, иначе губим срока."',
    },
    sortis: {
      title: 'Sortis', status: 'Разчетени 12 от 13', check: '1 за проверка',
      head: ['Доставчик', '№', 'Дата', 'Сума', 'ДДС'],
      rows: [
        ['Техномаркет ЕООД', '0001234', '03.09', '412,00', '82,40'],
        ['Петрол АД', '7781209', '03.09', '96,50', '19,30'],
        ['Офис Експрес', '0045621', '02.09', '158,20', '31,64'],
        ['Спиди АД', '3390017', '01.09', '12,90', '2,58'],
      ],
      export: 'Изнеси в Excel',
    },
    glagoli: {
      book: 'The Silent Patient', chapter: 'Глава 7', time: '12:48 / 41:10',
      line: '„Тя не проговори нито дума в продължение на шест години…"',
      ask: 'Кой е Тео?', answer: 'Психотерапевтът, който разказва историята. Без да издавам края.',
    },
    sroko: {
      title: 'Моите коли', bell: 'Напомняне 7 дни преди',
      cars: [
        ['CB 4821 KX', 'Годишна · до 14.03.2027', 'ok'],
        ['BT 1177 PA', 'Изтича след 6 дни', 'warn'],
        ['CB 9034 MH', 'Уикенд · до 8.09', 'ok'],
      ],
      cta: 'Плати винетка',
    },
  },
  en: {
    konspekt: {
      title: 'Weekly meeting', meta: '27 min · 3 speakers', rec: 'Recording…',
      tabs: ['Summary', 'Decisions', 'Tasks'],
      items: [
        ['Maria', 'Send the offer by Friday'],
        ['Ivan', 'Checks the supplier prices'],
        ['Maria', 'Next meeting — Tuesday'],
      ],
      quote: '“…by Friday at the latest, or we miss the deadline.”',
    },
    sortis: {
      title: 'Sortis', status: '12 of 13 read', check: '1 to check',
      head: ['Supplier', 'No.', 'Date', 'Amount', 'VAT'],
      rows: [
        ['Technomarket Ltd', '0001234', '3 Sep', '412.00', '82.40'],
        ['Petrol AD', '7781209', '3 Sep', '96.50', '19.30'],
        ['Office Express', '0045621', '2 Sep', '158.20', '31.64'],
        ['Speedy AD', '3390017', '1 Sep', '12.90', '2.58'],
      ],
      export: 'Export to Excel',
    },
    glagoli: {
      book: 'The Silent Patient', chapter: 'Chapter 7', time: '12:48 / 41:10',
      line: '“She did not say a single word for six years…”',
      ask: 'Who is Theo?', answer: 'The psychotherapist telling the story. No spoilers.',
    },
    sroko: {
      title: 'My cars', bell: 'Reminder 7 days before',
      cars: [
        ['CB 4821 KX', 'Annual · until 14 Mar 2027', 'ok'],
        ['BT 1177 PA', 'Expires in 6 days', 'warn'],
        ['CB 9034 MH', 'Weekend · until 8 Sep', 'ok'],
      ],
      cta: 'Buy vignette',
    },
  },
};

const phone = inner => `<div class="mock phone"><div class="screen"><div class="statusbar"><span>9:41</span><span class="sig"></span></div>${inner}</div></div>`;
const win = inner => `<div class="mock window"><div class="titlebar"><i></i><i></i><i></i></div>${inner}</div>`;

const MOCKS = {
  konspekt(t) {
    const bars = Array.from({ length: 22 }, (_, i) => `<i style="--h:${[.3,.6,.9,.5,.8,.4,1,.7,.35,.85,.55,.95,.45,.75,.6,.9,.4,.8,.5,.7,.35,.6][i]};--d:${(i * 73) % 900}ms"></i>`).join('');
    return phone(`
<div class="k-head"><b>${t.title}</b><span>${t.meta}</span></div>
<div class="k-wave">${bars}</div>
<div class="k-rec"><span class="dot"></span>${t.rec}</div>
<div class="k-tabs">${t.tabs.map((x, i) => `<span${i === 2 ? ' class="on"' : ''}>${x}</span>`).join('')}</div>
<ul class="k-list">${t.items.map(([who, what]) => `<li><span class="who">${who}</span>${what}</li>`).join('')}</ul>
<div class="k-quote">${t.quote}</div>`);
  },
  sortis(t) {
    return win(`
<div class="s-top"><b>${t.title}</b><span class="ok">${t.status}</span><span class="warn">${t.check}</span><span class="btn-s">${t.export}</span></div>
<table class="s-table"><thead><tr>${t.head.map(h => `<th>${h}</th>`).join('')}</tr></thead>
<tbody>${t.rows.map((r, i) => `<tr${i === 1 ? ' class="hl"' : ''}>${r.map(c => `<td>${c}</td>`).join('')}</tr>`).join('')}</tbody></table>
<div class="s-doc"><i></i><i></i><i></i></div>`);
  },
  glagoli(t) {
    return phone(`
<div class="g-cover"><span>${t.book}</span></div>
<div class="g-chapter"><b>${t.chapter}</b><span>${t.time}</span></div>
<div class="g-bar"><i></i></div>
<div class="g-controls"><span></span><span class="play"></span><span></span></div>
<p class="g-line">${t.line}</p>
<div class="g-ask"><span class="q">${t.ask}</span><span class="a">${t.answer}</span></div>`);
  },
  sroko(t) {
    return phone(`
<div class="r-head"><b>${t.title}</b><span class="bell">${t.bell}</span></div>
<ul class="r-cars">${t.cars.map(([plate, until, st]) => `<li class="${st}"><span class="plate">${plate}</span><span>${until}</span></li>`).join('')}</ul>
<div class="r-cta">${t.cta}</div>`);
  },
};

/** HTML на екрана на приложение за дадения език; празно, ако няма mock. */
export function mock(app, lang) {
  const fn = MOCKS[app.slug];
  const t = T[lang]?.[app.slug];
  return fn && t ? `<div class="mockwrap" style="--c:${app.color}">${fn(t)}</div>` : '';
}

export const MOCK_CSS = `
.mockwrap { max-width: 100%; --screen: #0e0e12; --ink: #f2f0ea; --ink-2: #9d9a92; --panel: #17171c; display: inline-block; font-family: var(--text); font-size: 11px; line-height: 1.35; color: var(--ink); text-align: left; letter-spacing: 0; }
.mock { position: relative; }
.mock.phone { width: 236px; height: 486px; padding: 8px; border-radius: 42px; background: #1c1c21; box-shadow: inset 0 0 0 1px rgba(255,255,255,.12), 0 40px 80px -30px rgba(0,0,0,.8), 0 24px 50px -30px color-mix(in srgb, var(--c) 70%, transparent); }
.mock.phone .screen { position: relative; height: 100%; border-radius: 34px; background: var(--screen); overflow: hidden; padding: 12px 14px; display: flex; flex-direction: column; gap: 9px; }
.mock.phone .screen::before { content: ""; position: absolute; top: 8px; left: 50%; width: 72px; height: 20px; transform: translateX(-50%); border-radius: 12px; background: #1c1c21; }
.statusbar { display: flex; justify-content: space-between; font-size: 10px; font-weight: 600; color: var(--ink-2); padding: 2px 6px 6px; }
.sig { width: 14px; height: 8px; border-radius: 2px; border: 1px solid var(--ink-2); position: relative; }
.sig::after { content: ""; position: absolute; inset: 1px; right: 4px; background: var(--ink-2); border-radius: 1px; }
.mock.window { width: min(440px, 100%); border-radius: 14px; background: var(--panel); box-shadow: inset 0 0 0 1px rgba(255,255,255,.1), 0 40px 80px -30px rgba(0,0,0,.8), 0 24px 50px -30px color-mix(in srgb, var(--c) 60%, transparent); }
.titlebar { display: flex; gap: 6px; padding: 10px 12px; background: #1d1d23; border-bottom: 1px solid rgba(255,255,255,.06); border-radius: 14px 14px 0 0; }
.titlebar i { width: 9px; height: 9px; border-radius: 50%; background: #3a3a42; }
.titlebar i:first-child { background: var(--c); }

/* Konspekt */
.k-head b { display: block; font-size: 15px; font-family: var(--display); font-weight: 600; letter-spacing: -.01em; }
.k-head span { color: var(--ink-2); }
.k-wave { display: flex; align-items: center; gap: 3px; height: 54px; padding: 0 2px; }
.k-wave i { flex: 1; height: calc(var(--h) * 100%); border-radius: 3px; background: var(--c); opacity: .9; animation: kwave 1.6s ease-in-out var(--d) infinite alternate; transform-origin: center; }
@keyframes kwave { from { transform: scaleY(.55); } to { transform: scaleY(1); } }
.k-rec { display: flex; align-items: center; gap: 7px; color: var(--ink-2); font-weight: 500; }
.k-rec .dot { width: 8px; height: 8px; border-radius: 50%; background: var(--c); box-shadow: 0 0 0 3px color-mix(in srgb, var(--c) 25%, transparent); animation: kdot 1.4s ease-in-out infinite; }
@keyframes kdot { 50% { opacity: .35; } }
.k-tabs { display: flex; gap: 4px; background: var(--panel); border-radius: 10px; padding: 3px; }
.k-tabs span { flex: 1; text-align: center; padding: 5px 0; border-radius: 8px; color: var(--ink-2); font-weight: 500; }
.k-tabs .on { background: #26262d; color: var(--ink); }
.k-list { list-style: none; margin: 0; padding: 0; display: grid; gap: 6px; }
.k-list li { padding: 8px 10px; border-radius: 10px; background: var(--panel); display: flex; flex-direction: column; gap: 2px; }
.k-list .who { color: var(--c); font-weight: 600; font-size: 10px; }
.k-quote { margin-top: auto; padding: 8px 10px; border-left: 2px solid var(--c); color: var(--ink-2); font-style: italic; }

/* Sortis */
.s-top { display: flex; align-items: center; gap: 8px; padding: 10px 12px; font-size: 11px; }
.s-top b { font-family: var(--display); font-weight: 600; margin-right: auto; font-size: 13px; }
.s-top .ok { color: var(--c); font-weight: 600; }
.s-top .warn { color: #f2a33a; font-weight: 600; }
.s-top .btn-s { background: var(--c); color: #061a12; font-weight: 600; padding: 5px 10px; border-radius: 7px; }
.s-table { width: 100%; border-collapse: collapse; font-size: 11px; font-variant-numeric: tabular-nums; }
.s-table th { text-align: left; font-weight: 600; color: var(--ink-2); padding: 6px 12px; border-top: 1px solid rgba(255,255,255,.06); border-bottom: 1px solid rgba(255,255,255,.06); font-size: 10px; letter-spacing: .04em; text-transform: uppercase; }
.s-table td { padding: 8px 12px; border-bottom: 1px solid rgba(255,255,255,.05); white-space: nowrap; }
@media (max-width: 480px) { .s-table th:nth-child(2), .s-table td:nth-child(2) { display: none; } .s-top .warn { display: none; } }
.s-table td:nth-child(n+4) { text-align: right; }
.s-table th:nth-child(n+4) { text-align: right; }
.s-table .hl td { background: color-mix(in srgb, var(--c) 10%, transparent); }
.s-doc { position: absolute; right: -16px; bottom: -18px; width: 54px; height: 70px; border-radius: 6px; background: #f4f2ec; padding: 12px 8px; display: grid; gap: 6px; align-content: start; transform: rotate(6deg); box-shadow: 0 10px 20px -10px rgba(0,0,0,.6); }
.s-doc i { height: 4px; border-radius: 2px; background: #c9c6be; }
.s-doc i:first-child { width: 60%; background: var(--c); }
.mock.window { position: relative; padding-bottom: 6px; }
.mockwrap:has(.window) { display: block; width: min(440px, 100%); }

/* Glagoli */
.g-cover { height: 150px; border-radius: 16px; background: linear-gradient(160deg, color-mix(in srgb, var(--c) 85%, #000), color-mix(in srgb, var(--c) 40%, #000)); display: flex; align-items: flex-end; padding: 14px; font-family: var(--display); font-weight: 600; font-size: 15px; letter-spacing: -.01em; line-height: 1.15; }
.g-chapter { display: flex; justify-content: space-between; align-items: baseline; }
.g-chapter b { font-size: 13px; }
.g-chapter span { color: var(--ink-2); font-variant-numeric: tabular-nums; }
.g-bar { height: 4px; border-radius: 2px; background: var(--panel); overflow: hidden; }
.g-bar i { display: block; width: 31%; height: 100%; background: var(--c); border-radius: 2px; }
.g-controls { display: flex; justify-content: center; align-items: center; gap: 22px; padding: 4px 0; }
.g-controls span { width: 12px; height: 12px; border-radius: 3px; background: var(--ink-2); opacity: .7; }
.g-controls .play { width: 44px; height: 44px; border-radius: 50%; background: var(--c); opacity: 1; position: relative; }
.g-controls .play::after { content: ""; position: absolute; left: 18px; top: 13px; border-left: 14px solid #1a1206; border-top: 9px solid transparent; border-bottom: 9px solid transparent; }
.g-line { margin: 0; color: var(--ink-2); font-style: italic; font-size: 11.5px; }
.g-ask { margin-top: auto; display: grid; gap: 6px; }
.g-ask span { padding: 8px 10px; border-radius: 12px; max-width: 88%; }
.g-ask .q { background: var(--c); color: #1a1206; font-weight: 600; justify-self: end; border-bottom-right-radius: 4px; }
.g-ask .a { background: var(--panel); border-bottom-left-radius: 4px; }

/* Sroko */
.r-head b { display: block; font-size: 15px; font-family: var(--display); font-weight: 600; letter-spacing: -.01em; }
.r-head .bell { display: inline-block; margin-top: 6px; color: var(--ink-2); padding: 4px 8px; border-radius: 999px; background: var(--panel); font-size: 10px; }
.r-cars { list-style: none; margin: 4px 0 0; padding: 0; display: grid; gap: 8px; }
.r-cars li { padding: 10px 12px; border-radius: 12px; background: var(--panel); display: flex; flex-direction: column; gap: 3px; border-left: 3px solid var(--c); }
.r-cars li.warn { border-left-color: #f2a33a; }
.r-cars li.warn span:last-child { color: #f2a33a; font-weight: 600; }
.r-cars .plate { font-family: var(--display); font-weight: 600; font-size: 12px; letter-spacing: .04em; }
.r-cars span:last-child { color: var(--ink-2); }
.r-cta { margin-top: auto; text-align: center; padding: 11px; border-radius: 12px; background: var(--c); color: #fff; font-weight: 600; font-size: 12px; }

@media (prefers-reduced-motion: reduce) { .k-wave i, .k-rec .dot { animation: none; } }
`;
