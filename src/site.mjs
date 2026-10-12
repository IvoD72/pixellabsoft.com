/**
 * Общите неща за сайта: фирмата, езиците, надписите извън приложенията.
 *
 * ⚑ Фирмените данни са тези от Търговския регистър и от поръчката на домейна.
 * Смени ли се адрес или имейл — тук, и `node build.mjs`.
 */

export const DOMAIN = 'pixellabsoft.com';
export const SUPPORT_EMAIL = 'support@pixellabsoft.com';

export const COMPANY = {
  bg: { name: 'Пиксел Лаб ЕООД', eik: 'ЕИК 205472124', address: 'ул. Славянска 24, 5100 Горна Оряховица, България' },
  en: { name: 'Pixel Lab EOOD', eik: 'Company ID 205472124', address: '24 Slavyanska St., 5100 Gorna Oryahovitsa, Bulgaria' },
};

export const LANGS = ['bg', 'en'];

export const STRINGS = {
  bg: {
    siteName: 'Пиксел Лаб Софт',
    tagline: 'Малки приложения, които вършат една работа добре.',
    homeLead:
      'Правим приложения за хора, които нямат време за сложни програми. ' +
      'Всяко решава един конкретен проблем — и толкова.',
    apps: 'Приложенията',
    support: 'Поддръжка',
    privacy: 'Политика за поверителност',
    deletion: 'Изтриване на акаунт',
    terms: 'Условия за ползване',
    home: 'Начало',
    otherLang: 'English',
    updated: 'Последна промяна',
    supportLead:
      'Пиши ни на адреса долу. Отговаряме в работни дни, обикновено до 24 часа. ' +
      'Кажи кое приложение и какъв телефон ползваш — спестява един въпрос.',
    supportEmailLabel: 'Имейл за поддръжка',
    statusSoon: 'Скоро',
    statusTesting: 'В тестване',
    statusStore: 'Наличен',
    statusWindows: 'Програма за Windows',
    more: 'Виж повече',
    eyebrow: 'Пиксел Лаб · приложения за телефон и компютър',
    heroHtml: 'Малки приложения, които вършат <span class="grad">една работа</span> добре.',
    principles: [
      ['Един проблем, едно приложение', 'Без излишни екрани и настройки. Отваряш, свършваш работата, затваряш.'],
      ['Данните са твои', 'Записи и документи не стоят при нас повече, отколкото трябва за работата — и никога не се ползват за обучение на модели.'],
      ['Написано на човешки', 'Условията и политиките казват какво приложението прави наистина — без юридическа мъгла.'],
    ],
    contents: 'Съдържание',
    supportPage: 'Страница за поддръжка',
    supportTitle: 'Пиши ни — отговаря човек.',
    appStore: 'App Store',
    playStore: 'Google Play',
    download: 'Изтегли за Windows',
    website: 'Сайтът на приложението',
    legalNote: 'Тези текстове описват какво приложението прави наистина, на човешки език.',
    footerRights: 'Всички права запазени.',
    heroLines: ['Малки приложения.', 'Ясна цел.', 'Вършат работа.'],
    studio: 'Малко студио за приложения',
    gridTitle: 'Пет приложения, пет конкретни задачи.',
    gridLead: 'Всяко е направено около една ясна работа — лесно за разбиране, лесно за ползване.',
    featured: 'Водещо',
    alsoTitle: 'Още в лабораторията',
    alsoLead: 'Тези още не са в магазините — работим по тях.',
    aboutEyebrow: 'За Пиксел Лаб Софт',
    aboutTitle: 'Малко студио, което предпочита полезното пред сложното.',
    aboutText: 'Правим софтуер за истински ежедневни нужди. Всяко приложение решава едно нещо — и го решава така, че да се разбира от пръв поглед.',
    contact: 'Пиши ни',
    getOn: 'Изтегли от',
    getOnPlay: 'Изтегли от',
    downloadFor: 'Изтегли за',
    seeApps: 'Виж приложенията',
    appsLead: 'Всяко решава един конкретен проблем. Отваряш, свършваш работата, затваряш.',
  },
  en: {
    siteName: 'Pixel Lab Soft',
    tagline: 'Small apps that do one job well.',
    homeLead:
      'We build apps for people who have no time for complicated software. ' +
      'Each one solves one specific problem — and nothing else.',
    apps: 'Apps',
    support: 'Support',
    privacy: 'Privacy Policy',
    deletion: 'Deleting your account',
    terms: 'Terms of Use',
    home: 'Home',
    otherLang: 'Български',
    updated: 'Last updated',
    supportLead:
      'Write to the address below. We answer on business days, usually within 24 hours. ' +
      'Tell us which app and which phone you use — it saves one question.',
    supportEmailLabel: 'Support email',
    statusSoon: 'Coming soon',
    statusTesting: 'In testing',
    statusStore: 'Available',
    statusWindows: 'Windows program',
    more: 'Learn more',
    eyebrow: 'Pixel Lab · apps for phone and desktop',
    heroHtml: 'Small apps that do <span class="grad">one job</span> well.',
    principles: [
      ['One problem, one app', 'No spare screens or settings. Open it, get the job done, close it.'],
      ['Your data stays yours', 'Recordings and documents are not kept longer than the job needs — and are never used to train models.'],
      ['Written in plain language', 'The terms and policies say what the app really does — no legal fog.'],
    ],
    contents: 'Contents',
    supportPage: 'Support page',
    supportTitle: 'Write to us — a person answers.',
    appStore: 'App Store',
    playStore: 'Google Play',
    download: 'Download for Windows',
    website: 'App website',
    legalNote: 'These texts describe what the app actually does, in plain language.',
    footerRights: 'All rights reserved.',
    heroLines: ['Small apps.', 'Clear purpose.', 'Built to be useful.'],
    studio: 'A small app studio',
    gridTitle: 'Five apps, five specific jobs.',
    gridLead: 'Each one is built around one clear task — simple to understand, easy to use.',
    featured: 'Featured',
    alsoTitle: 'Also in the lab',
    alsoLead: 'These are not in the stores yet — we are working on them.',
    aboutEyebrow: 'About Pixel Lab Soft',
    aboutTitle: 'A small studio that prefers useful over complicated.',
    aboutText: 'We build software for real everyday needs. Each app solves one thing — and solves it so it makes sense at first glance.',
    contact: 'Contact us',
    getOn: 'Download on the',
    getOnPlay: 'Get it on',
    downloadFor: 'Download for',
    seeApps: 'See the apps',
    appsLead: 'Each one solves one specific problem. Open it, get the job done, close it.',
  },
};
