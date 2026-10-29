/**
 * Lingbolt — страници за една нужда (29.10.2026, реклама стъпка 1): всяка хваща точно търсене
 * („преводач за WhatsApp на компютъра“…) и води към изтеглянето. Текстът описва само това, което
 * програмата наистина прави (същото като src/apps/lingbolt.mjs). BG и EN тук; другите 38 езика —
 * src/i18n/lingbolt.json (ключове use.<slug>.…, tools/translate_lingbolt.py).
 */
import { STRINGS } from './site.mjs';
import { WINDOWS, esc, href, withLang } from './template.mjs';
import { mock } from './mocks.mjs';

export const USES = {
  whatsapp: {
    title: {
      bg: 'Преводач за WhatsApp и Viber на компютъра — Lingbolt',
      en: 'WhatsApp and Viber translator for your computer — Lingbolt',
    },
    description: {
      bg: 'Превеждай съобщения във WhatsApp и Viber на компютъра с едно цъкане: получените — на твоя език, написаното от теб — на техния. А в разговорите те чуват преведен на живо. 40 езика, Windows.',
      en: 'Translate WhatsApp and Viber messages on your computer with one click: the ones you get into your language, the ones you write into theirs. And in calls they hear you translated live. 40 languages, Windows.',
    },
    h1: { bg: 'Превод на WhatsApp и Viber на компютъра', en: 'WhatsApp and Viber translation on your computer' },
    lead: {
      bg: 'Получиш ли съобщение на чужд език, четеш го на твоя. Пишеш на твоя език, а другият получава съобщението на своя. Без копиране в преводач и обратно.',
      en: 'Get a message in another language and read it in yours. Write in your language, and the other person gets it in theirs. No copying into a translator and back.',
    },
    how: { bg: 'Как става', en: 'How it works' },
    steps: {
      bg: [
        ['Изтегли Lingbolt.', 'Стои до часовника и работи в WhatsApp, Viber и всяка друга програма на Windows.'],
        ['Получено съобщение?', 'Маркирай го и до него излиза ⚡. Едно цъкане и преводът е на картичка до мишката.'],
        ['Отговаряш?', 'Пиши на твоя език и натисни Ctrl два пъти: текстът в полето става на техния език, готов за изпращане.'],
      ],
      en: [
        ['Download Lingbolt.', 'It sits by the clock and works in WhatsApp, Viber and any other program on Windows.'],
        ['Got a message?', 'Select it and a ⚡ appears next to it. One click and the translation shows on a card by the mouse.'],
        ['Replying?', 'Write in your language and press Ctrl twice: the text in the field becomes their language, ready to send.'],
      ],
    },
    faqTitle: { bg: 'Честите въпроси', en: 'Questions people ask' },
    faq: {
      bg: [
        ['Безплатно ли е?', 'Да, до 300 думи превод на ден. Първите 7 дни са Про подарък, без карта. Lingbolt Про е 6,99 € на месец.'],
        ['А разговорите по WhatsApp и Viber?', 'С Про има „Разговор“: говориш на твоя език, а другият те чува преведен на живо, с естествен мъжки или женски глас. Ти чуваш него на твоя език.'],
        ['Другият вижда ли, че ползвам преводач?', 'Не. Той получава обикновено съобщение на своя език.'],
        ['Пазят ли се съобщенията ми?', 'Не. Текстът минава криптиран през нашия сървър в ЕС само за превода и не се пази, нито се записва.'],
      ],
      en: [
        ['Is it free?', 'Yes, up to 300 words translated a day. The first 7 days are Pro as a gift, no card needed. Lingbolt Pro is €6.99 a month.'],
        ['What about WhatsApp and Viber calls?', 'Pro has Talk: you speak in your language and the other person hears you translated live, in a natural male or female voice. You hear them in yours.'],
        ['Does the other person see that I use a translator?', 'No. They get an ordinary message in their language.'],
        ['Are my messages kept?', 'No. The text goes encrypted through our server in the EU only to be translated, and it is neither kept nor logged.'],
      ],
    },
    more: { bg: 'Всичко, което Lingbolt може', en: 'Everything Lingbolt can do' },
  },
  zoom: {
    title: {
      bg: 'Превод на живо в Zoom, Teams и Google Meet — Lingbolt',
      en: 'Live translation in Zoom, Teams and Google Meet — Lingbolt',
    },
    description: {
      bg: 'Говориш на твоя език, а другите в срещата те чуват преведен на живо, с естествен глас. Ти чуваш тях на твоя език, със субтитри. Zoom, Teams, Google Meet, WhatsApp и Viber. 40 езика, Windows.',
      en: 'You speak in your language and the others in the meeting hear you translated live, in a natural voice. You hear them in yours, with subtitles. Zoom, Teams, Google Meet, WhatsApp and Viber. 40 languages, Windows.',
    },
    h1: { bg: 'Превод на живо в Zoom, Teams и Google Meet', en: 'Live translation in Zoom, Teams and Google Meet' },
    lead: {
      bg: 'Говориш на твоя език, а другите те чуват на своя, с естествен мъжки или женски глас. Те говорят на техния, а ти ги чуваш и четеш на твоя. Без преводач в срещата.',
      en: 'You speak in your language and the others hear you in theirs, in a natural male or female voice. They speak in theirs, and you hear and read them in yours. No interpreter in the meeting.',
    },
    how: { bg: 'Как става', en: 'How it works' },
    steps: {
      bg: [
        ['Изтегли Lingbolt', 'и отвори „Разговор“ от иконата до часовника. Lingbolt идва със собствен микрофон, Lingbolt Microphone, през който програмата за срещи чува превода.'],
        ['„Превеждай мен“:', 'говориш на твоя език, а другите чуват превода ти на живо. Твоят глас остава тихо под него, като в дублиран филм.'],
        ['„Превеждай тях“:', 'чуваш другите на твоя език и четеш субтитри, докато говорят.'],
      ],
      en: [
        ['Download Lingbolt', 'and open Talk from the icon by the clock. Lingbolt comes with its own microphone, Lingbolt Microphone, through which your meeting app hears the translation.'],
        ['Translate me:', 'you speak in your language and the others hear your translation live. Your own voice stays quietly underneath, like a dubbed film.'],
        ['Translate them:', 'you hear the others in your language and read subtitles while they speak.'],
      ],
    },
    faqTitle: { bg: 'Честите въпроси', en: 'Questions people ask' },
    faq: {
      bg: [
        ['В кои програми работи?', 'В Zoom, Microsoft Teams, Google Meet, WhatsApp и Viber за компютър, и във всяка програма, в която можеш да избереш микрофон.'],
        ['Колко струва?', 'Разговорът е в Lingbolt Про: 6,99 € на месец, с 30 минути Разговор на месец. Ако ти трябват повече, има кредити от 9,99 €, без абонамент. Първите 7 дни са Про подарък, с 20 минути Разговор, без карта.'],
        ['Трябва ли да кажа на другите?', 'Да. Гласът, който чуват, е създаден от изкуствен интелект, и е честно да знаят, че ползваш превод.'],
        ['Записва ли се разговорът?', 'Не. Звукът минава криптиран през нашия сървър в ЕС само за превода и не се пази, нито се записва. Ако искаш протокол на срещата, „Запис + конспект“ е отделен бутон.'],
      ],
      en: [
        ['Which programs does it work in?', 'In Zoom, Microsoft Teams, Google Meet, WhatsApp and Viber for desktop, and in any program where you can choose a microphone.'],
        ['How much does it cost?', 'Talk is in Lingbolt Pro: €6.99 a month, with 30 minutes of Talk a month. Need more? There are credits from €9.99, no subscription. The first 7 days are Pro as a gift, with 20 minutes of Talk, no card needed.'],
        ['Should I tell the others?', 'Yes. The voice they hear is made by AI, and it is fair that they know you use a translator.'],
        ['Is the conversation recorded?', 'No. The sound goes encrypted through our server in the EU only to be translated, and it is neither kept nor logged. If you want minutes of the meeting, Record + summary is a separate button.'],
      ],
    },
    more: { bg: 'Всичко, което Lingbolt може', en: 'Everything Lingbolt can do' },
  },
};

const CSS = `<style>
.use { padding-top: 32px; }
.use .lead { font-size: 19px; color: var(--muted); max-width: 640px; margin: 14px 0 24px; }
.use h2 { margin: 56px 0 20px; font-size: clamp(24px, 3vw, 32px); }
.use .steps { display: grid; gap: 18px; max-width: 640px; }
.use .step { display: flex; gap: 14px; font-size: 16px; color: var(--muted); min-width: 0; }
.use .step i { flex: none; width: 34px; height: 34px; border-radius: 999px; background: var(--blue); color: #fff; font-style: normal; font-weight: 700; display: grid; place-items: center; }
.use .step b { color: var(--fg); }
.use details { border-top: 1px solid var(--line); padding: 16px 0; max-width: 760px; }
.use summary { font-weight: 600; font-size: 17px; cursor: pointer; }
.use details p { color: var(--muted); margin: 10px 0 0; }
.use .more { display: inline-block; margin-top: 32px; text-decoration: underline; }
</style>`;

/** The page body: hero with the download button, the three steps, the questions, a link to the main page. */
export function useBody(lang, slug, app) {
  const u = USES[slug];
  const t = STRINGS[lang];
  const m = mock(app, lang);
  const pick = f => u[f][lang] ?? u[f].en;
  return `${CSS}<section class="app-hero use">
  <div>
    <img class="wordmark" src="${app.wordmark}" alt="Lingbolt" width="260" height="84">
    <h1>${esc(pick('h1'))}</h1>
    <p class="lead">${esc(pick('lead'))}</p>
    <div class="stores"><a class="store-btn" href="${withLang(app.external.download, lang)}">${WINDOWS}<span>${esc(t.downloadFor)}<b>Windows</b></span></a></div>
  </div>
  <div class="visual" style="--c:${app.color}">${m}</div>
</section>
<section class="section read use">
  <h2>${esc(pick('how'))}</h2>
  <div class="steps">${pick('steps').map(([b, s], i) => `<div class="step"><i>${i + 1}</i><span><b>${esc(b)}</b> ${esc(s)}</span></div>`).join('')}</div>
  <h2>${esc(pick('faqTitle'))}</h2>
  ${pick('faq').map(([q, a]) => `<details><summary>${esc(q)}</summary><p>${esc(a)}</p></details>`).join('\n  ')}
  <a class="more" href="${href(lang, app.slug + '/')}">${esc(pick('more'))} →</a>
</section>`;
}

/** Flat English words for the translation tool, and back: use.<slug>.<field>[.<i>[.<j>]]. */
export function useSource() {
  const out = {};
  for (const [slug, u] of Object.entries(USES))
    for (const [f, v] of Object.entries(u)) {
      const en = v.en;
      if (typeof en === 'string') out[`use.${slug}.${f}`] = en;
      else en.forEach((row, i) => row.forEach((s, j) => { out[`use.${slug}.${f}.${i}.${j}`] = s; }));
    }
  return out;
}

export function useTranslated(code, t) {
  for (const [slug, u] of Object.entries(USES))
    for (const [f, v] of Object.entries(u)) {
      if (typeof v.en === 'string') v[code] = t[`use.${slug}.${f}`];
      else v[code] = v.en.map((row, i) => row.map((_, j) => t[`use.${slug}.${f}.${i}.${j}`]));
      if (v[code] === undefined || (Array.isArray(v[code]) && v[code].flat().some(s => !s)))
        throw new Error(`src/i18n/lingbolt.json: ${code} misses use.${slug}.${f} — run tools/translate_lingbolt.py`);
    }
}

/** On Lingbolt's main page: one link per need, so people and search engines find these pages. */
export function useLinks(lang, app) {
  return `<section class="section read use"><div class="links">${Object.entries(USES).map(([slug, u]) =>
    `<a href="${href(lang, `${app.slug}/${slug}/`)}">${esc(u.h1[lang] ?? u.h1.en)} →</a>`).join('\n')}</div></section>`;
}
