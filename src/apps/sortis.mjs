/**
 * Sortis — Windows програма за счетоводители: чете фактури с AI и прави файл
 * за счетоводната програма.
 *
 * ⚑ Фактите са от `1 Sortis/PixelLab/Sortis-Istina.md` и sortis.pro (1.5.21).
 * Забранени формулировки: „локална обработка", „не се качва в облак" — не са
 * верни. Вярно: документите не се съхраняват и не се ползват за обучение.
 * Програмите са само тези, при които файлът е проверен на живо (Делта, Алгос,
 * ЕДИС). Плюс Минус НЕ се пише, докато те не потвърдят (Иво, 12.10.2026).
 * Sortis има свой сайт и свои правни страници — тук само се сочат.
 */
export default {
  slug: 'sortis',
  color: '#0ea5e9',
  iconImg: '/assets/icon-sortis.png',
  icon: '<path d="M7 3h7l4 4v14H7z"/><path d="M14 3v4h4"/><path d="M10 12h5M10 15.5h5"/>',
  name: 'Sortis',
  status: 'windows', // не е в магазин — сваля се от sortis.pro
  external: {
    site: 'https://sortis.pro',
    privacy: 'https://sortis.pro/privacy.html',
    terms: 'https://sortis.pro/terms.html',
    download: 'https://sortis.pro',
  },
  features: {
    bg: ['PDF, скан или снимка', 'Файл за Делта, Алгос и ЕДИС', 'Подсметки по редове', 'Документите не се пазят'],
    en: ['PDF, scan or photo', 'Files for Delta, Algos and EDIS', 'Subaccounts per line', 'Documents are not stored'],
  },
  // Един ред за картата на началото и ръкописната бележка до екрана.
  short: { bg: 'Фактурите стават файл за Делта, Алгос или ЕДИС.', en: 'Invoices become a file for Delta, Algos or EDIS.' },
  note: { bg: 'фактури за секунди', en: 'invoices in seconds' },
  tagline: {
    bg: 'Фактурите, въведени за секунди.',
    en: 'Invoices entered in seconds.',
  },
  description: {
    bg: [
      'Sortis е програма за Windows за счетоводители. Чете фактури, известия и касови бележки — PDF, скан или снимка — и прави готов файл за Микроинвест Делта Про, Алгос АС2012 или ЕДИС-АСО. За всяка друга програма — Excel или CSV.',
      'Разчита над 90% от документите сам, а останалите ти показва за поглед. Подсметките по редовете на многоредовите фактури влизат в същия файл. Документите не се съхраняват и не се ползват за обучение на модели.',
      'Не заменя счетоводната програма — спестява въвеждането на ръка.',
    ],
    en: [
      'Sortis is a Windows program for accountants. It reads invoices, credit notes and receipts — PDF, scan or photo — and produces a ready file for Microinvest Delta Pro, Algos AS2012 or EDIS-ASO. For any other program — Excel or CSV.',
      'It reads over 90% of documents on its own and shows you the rest to check. Subaccounts for the lines of multi-line invoices go into the same file. Documents are not stored and are not used to train models.',
      'It does not replace your accounting software — it saves the manual typing.',
    ],
  },
};
