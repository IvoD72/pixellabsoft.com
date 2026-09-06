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
    appStore: 'App Store',
    playStore: 'Google Play',
    download: 'Download for Windows',
    website: 'App website',
    legalNote: 'These texts describe what the app actually does, in plain language.',
    footerRights: 'All rights reserved.',
    madeIn: 'Made in Gorna Oryahovitsa, Bulgaria.',
  },
};
