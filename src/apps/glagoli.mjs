/**
 * Глаголи (преди Гласика) — всичко написано, прочетено на глас: книги, снимани
 * документи, писма (Иво, 12.10.2026: „не само книги — важно“).
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
  short: { bg: 'Снимаш документ или качваш книга — Глаголи ти го чете на глас.', en: 'Snap a document or upload a book — Glagoli reads it to you aloud.' },
  note: { bg: 'всичко написано — на глас', en: 'anything written, read aloud' },
  features: {
    bg: ['Книги, документи, писма', 'Снимка, PDF, Word, EPUB', 'Български и английски', 'Спри и питай'],
    en: ['Books, documents, letters', 'Photo, PDF, Word, EPUB', 'Bulgarian and English', 'Pause and ask'],
  },
  tagline: {
    bg: 'Всичко написано — прочетено на глас.',
    en: 'Anything written — read aloud.',
  },
  description: {
    bg: [
      'Глаголи чете на глас всичко написано: книга, договор, писмо, инструкция, документ от общината. Снимаш страниците с телефона или качваш файл — PDF, Word, EPUB или текст — и го слушаш на естествен глас, на езика, на който е написано: български или английски.',
      'Спираш и питаш нещо за прочетеното. При книга отговорът е само по това, което вече си чул, и не издава какво следва. После продължаваш точно оттам.',
      'Плаща се с пакети часове слушане, без абонамент. Първите 10 минути са безплатни.',
    ],
    en: [
      'Glagoli reads aloud anything written: a book, a contract, a letter, a manual, an official document. Snap the pages with your phone or upload a file — PDF, Word, EPUB or text — and listen in a natural voice, in the language it was written in: Bulgarian or English.',
      'Pause and ask something about what you have heard. With a book, the answer covers only what you have already listened to and never gives away what comes next. Then carry on right where you were.',
      'You pay for packs of listening hours, with no subscription. The first 10 minutes are free.',
    ],
  },
};
