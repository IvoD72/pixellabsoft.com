/**
 * Глаголи (преди Гласика) — твоите книги, прочетени на глас.
 *
 * ⚑ Фактите са от обявите за магазините (`3 Glasika/01 Dokumenti/magazini-obyavi.md`,
 * сверени с кода): книгата се чете на езика, на който е написана (български
 * или английски) — каченото НЕ се превежда. До 12.10.2026 тук пишеше, че
 * превежда — грешно.
 * В Google Play от октомври 2026 (bg.glagoli.app); в App Store още чака
 * одобрение — добави `appStore`, щом излезе. Правните текстове са на glagoli.app.
 */
export default {
  slug: 'glagoli',
  color: '#8b6cf6',
  iconImg: '/assets/icon-glagoli.png',
  icon: '<path d="M12 6.5C10 5 7 5 4 6.5v13c3-1.5 6-1.5 8 0 2-1.5 5-1.5 8 0v-13c-3-1.5-6-1.5-8 0z"/><path d="M12 6.5v13"/>',
  name: 'Глаголи',
  nameEn: 'Glagoli', // на английските страници
  status: 'store',
  appStore: null,
  playStore: 'https://play.google.com/store/apps/details?id=bg.glagoli.app',
  external: {
    site: 'https://glagoli.app',
    privacy: { bg: 'https://glagoli.app/poveritelnost.html', en: 'https://glagoli.app/privacy.html' },
    terms: { bg: 'https://glagoli.app/usloviya.html', en: 'https://glagoli.app/terms.html' },
  },
  features: {
    bg: ['EPUB, PDF, Word или снимка', 'Български и английски', 'Спри и питай — без спойлери', 'Пакети часове, без абонамент'],
    en: ['EPUB, PDF, Word or a photo', 'Bulgarian and English', 'Pause and ask — no spoilers', 'Hour packs, no subscription'],
  },
  // Един ред за картата на началото и ръкописната бележка до екрана.
  short: { bg: 'Качваш книга и я слушаш. Спираш и питаш.', en: 'Upload a book and listen. Pause and ask.' },
  note: { bg: 'книгата ти — на глас', en: 'your book, read aloud' },
  tagline: {
    bg: 'Твоите книги, прочетени на глас.',
    en: 'Your books, read aloud.',
  },
  description: {
    bg: [
      'Качваш своя книга — EPUB, PDF, Word или снимки на страниците — и Глаголи ти я чете на глас, на езика, на който е написана: български или английски.',
      'Спираш и питаш нещо за прочетеното. Отговорът е само по това, което вече си чул, и не издава какво следва. После продължаваш точно оттам.',
      'Плаща се с пакети часове слушане, без абонамент. Първата минута е безплатна.',
    ],
    en: [
      'Upload your own book — EPUB, PDF, Word or photos of the pages — and Glagoli reads it to you aloud, in the language it was written in: Bulgarian or English.',
      'Pause and ask something about what you have heard. The answer covers only what you have already listened to and never gives away what comes next. Then carry on right where you were.',
      'You pay for packs of listening hours, with no subscription. The first minute is free.',
    ],
  },
};
