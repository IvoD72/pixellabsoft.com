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
      'Правим мобилни приложения за хора, които нямат време за сложни програми. ' +
      'Всяко решава един конкретен проблем — и толкова.',
    apps: 'Приложенията',
    support: 'Поддръжка',
    privacy: 'Политика за поверителност',
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
    more: 'Виж повече',
    eyebrow: 'Пиксел Лаб · Горна Оряховица',
    heroHtml: 'Малки приложения, които вършат <em>една работа</em> добре.',
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
    madeIn: 'Направено в Горна Оряховица.',
  },
  en: {
    siteName: 'Pixel Lab Soft',
    tagline: 'Small apps that do one job well.',
    homeLead:
      'We build mobile apps for people who have no time for complicated software. ' +
      'Each one solves one specific problem — and nothing else.',
    apps: 'Apps',
    support: 'Support',
    privacy: 'Privacy Policy',
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
    more: 'Learn more',
    eyebrow: 'Pixel Lab · Gorna Oryahovitsa, Bulgaria',
    heroHtml: 'Small apps that do <em>one job</em> well.',
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
    madeIn: 'Made in Gorna Oryahovitsa, Bulgaria.',
  },
};
