/**
 * Sortis — Windows приложение: чете фактури и касови бележки с AI, експорт CSV/Excel.
 *
 * ⚑ Фактите са от `1 Sortis/PixelLab/Sortis-Istina.md` (каноничният файл).
 * Забранени формулировки: „локална обработка", „не се качва в облак" — не са
 * верни. Вярно: документите не се съхраняват и не се ползват за обучение.
 * Sortis има свой сайт и свои правни страници — тук само се сочат.
 */
export default {
  slug: 'sortis',
  name: 'Sortis',
  status: 'store',
  external: {
    site: 'https://sortis.pro',
    privacy: 'https://sortis.pro/privacy.html',
    terms: 'https://sortis.pro/terms.html',
    download: 'https://sortis.pro',
  },
  tagline: {
    bg: 'Фактурите, въведени за секунди.',
    en: 'Invoices entered in seconds.',
  },
  description: {
    bg: [
      'Sortis е програма за Windows, която чете фактури и касови бележки — снимка, скан или PDF — и ги превръща в подредена таблица: доставчик, номер, дата, суми, ДДС. Изнасяш в CSV или Excel и ги даваш на счетоводителя.',
      'Разчита над 90% от документите сам; останалите ти показва за проверка. Документите не се съхраняват и не се ползват за обучение на модели.',
      'Помощен инструмент за фирми и счетоводители — не заменя счетоводния софтуер, спестява въвеждането на ръка.',
    ],
    en: [
      'Sortis is a Windows program that reads invoices and receipts — photo, scan or PDF — and turns them into a tidy table: supplier, number, date, amounts, VAT. Export to CSV or Excel and hand it to your accountant.',
      'It reads over 90% of documents on its own; the rest it shows you to check. Documents are not stored and are not used to train models.',
      'A helper tool for businesses and accountants — it does not replace accounting software, it saves the manual typing.',
    ],
  },
};
