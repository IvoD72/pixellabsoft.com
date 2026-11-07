/**
 * PhotoPick — малка безплатна програма за Windows: сваля от iPhone-а само избраните снимки.
 * Код: `C:\Pixel Lab Claude\20 Snimki ot iPhone` (WPF, .NET 10, MediaDevices).
 *
 * ⚑ Текстовете описват това, което кодът НАИСТИНА прави (1.1.0, 7.11.2026): чете телефона през
 * Windows (MTP), отваря само избрания период, голям преглед с ← →, завъртане (записва се в
 * сваления файл), папки: една / по месец / по място и дата — мястото е от GPS-а в самата снимка и
 * от списък с градове вътре в програмата (GeoNames, CC BY 4.0), без интернет. Помни свалените в
 * %APPDATA%\PhotoPick\settings.json и ги показва по-тъмни. Български и английски (бутон БГ/EN).
 * Няма мрежов код — нищо не излиза от компютъра. Нищо не трие от телефона. Пробвана на Windows 11 —
 * за Windows 10 не пишем, докато не е пробвана на живо.
 * Инсталаторът е в GitHub release `photopick` на това repo (същият адрес при нова версия).
 */

const UPDATED = { bg: '7 ноември 2026', en: '7 November 2026' };

export const DOWNLOAD = 'https://github.com/IvoD72/pixellabsoft.com/releases/download/photopick/PhotoPick-Setup.exe';

export default {
  slug: 'photopick',
  color: '#0ea5e9',
  iconImg: '/assets/icon-photopick.png',
  icon: '<rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 17 5-6 4 4 3-3 6 5"/><circle cx="16" cy="9" r="1.5"/>',
  name: 'PhotoPick',
  status: 'windows',
  external: { download: DOWNLOAD },
  features: {
    bg: ['Само избраните снимки', 'Голям преглед и завъртане', 'Папки по място и дата', 'Безплатна, без акаунт'],
    en: ['Only the photos you pick', 'Big view and rotating', 'Folders by place and date', 'Free, no account'],
  },
  short: { bg: 'Сваля от iPhone-а само снимките, които избереш.', en: 'Copies only the iPhone photos you pick to your PC.' },
  note: { bg: 'само избраните', en: 'just the ones you pick' },
  seo: {
    title: {
      bg: 'PhotoPick — свали снимки от iPhone на компютъра (Windows, безплатно)',
      en: 'PhotoPick — copy photos from iPhone to a Windows PC (free)',
    },
    description: {
      bg: 'Безплатна програма за Windows: включи iPhone-а с кабел, избери период и свали само снимките, които искаш — подредени в папки по място и дата.',
      en: 'A free Windows program: plug in your iPhone, pick a period and copy only the photos you want — sorted into folders by place and date.',
    },
  },
  tagline: {
    bg: 'Снимките от iPhone-а. Само тези, които искаш.',
    en: 'Your iPhone photos. Only the ones you want.',
  },
  description: {
    bg: [
      'PhotoPick е малка безплатна програма за Windows. Включваш iPhone-а с кабел, избираш период — днес, последните 3 или 7 дни, този месец или точни дати — и виждаш само снимките и видеата от него, с прегледи. Цъкаш тези, които искаш, и натискаш „Свали“.',
      'Не чака да се заредят всички снимки на телефона, както вграденото импортиране в Windows — отваря само избрания период. Цъкнеш ли снимка, тя се отваря голяма; със стрелките минаваш на следващата, а с ⟲ ⟳ я завърташ — завъртането се записва в сваления файл. Снимките излизат изправени, включително селфитата.',
      'Подрежда свалените както искаш: в една папка, в папки по месец или в папки по място и дата — например „Горна Оряховица 07.11.2026“. Мястото се взима от самата снимка и от списък с градове вътре в програмата, без интернет. Помни кои снимки вече са свалени — те остават в прегледа, по-тъмни, — и не сваля два пъти един и същ файл. Shift + клик избира цяла поредица.',
      'Без акаунт и без реклами. Не праща нищо в интернет и не трие нищо от телефона. На български и на английски. Пробвана на Windows 11 (64-bit). Ако Windows не вижда iPhone-а, инсталирай Apple Devices от Microsoft Store, отключи телефона и натисни „Доверявам се“. Имената на местата са от GeoNames (CC BY 4.0).',
    ],
    en: [
      'PhotoPick is a small free program for Windows. Plug in your iPhone with a cable, pick a period — today, the last 3 or 7 days, this month or exact dates — and you see only the photos and videos from it, with previews. Click the ones you want and press “Download”.',
      'It does not wait for every photo on the phone to load, like the import built into Windows — it opens only the period you picked. Click a photo and it opens big; the arrow keys take you to the next one, and ⟲ ⟳ rotate it — the turn is saved into the downloaded file. Photos come out upright, selfies included.',
      'It sorts what you save the way you want: into one folder, into folders by month, or into folders by place and date — for example “Paris 07.11.2026”. The place comes from the photo itself and a list of towns built into the program, with no internet. It remembers which photos are already saved — they stay in the grid, a little darker — and never copies the same file twice. Shift + click selects a whole run.',
      'No account and no ads. It sends nothing to the internet and deletes nothing from the phone. In English and Bulgarian. Tested on Windows 11 (64-bit). If Windows does not see the iPhone, install Apple Devices from the Microsoft Store, unlock the phone and tap “Trust”. Place names come from GeoNames (CC BY 4.0).',
    ],
  },
  legal: {
    privacy: {
      bg: {
        updated: UPDATED.bg,
        intro: 'Кратко, защото няма какво много да се каже: PhotoPick работи само на твоя компютър.',
        sections: [
          ['Кой стои зад програмата',
            'Пиксел Лаб ЕООД, България. За въпроси пиши на support@pixellabsoft.com.'],
          ['Какво прави със снимките',
            'Чете снимките и видеата от iPhone-а, свързан с кабел, през Windows и копира избраните в папката, която си посочил. Нищо не трие и не променя на телефона. Ако завъртиш снимка, се променя само копието на компютъра.'],
          ['Мястото на снимките',
            'Ако снимката носи координати (iPhone ги записва, когато е разрешено), PhotoPick ги чете от самата снимка и намира най-близкия град в списък, който е вътре в програмата. Така показва мястото и, ако искаш, кръщава папките. Координатите не излизат от компютъра.'],
          ['Какво праща в интернет',
            'Нищо. PhotoPick не се свързва с интернет — нито с нас, нито с някой друг. Нямаме акаунти, статистика или реклами. Линковете най-долу в програмата отварят сайта или пощата ти само ако ги цъкнеш.'],
          ['Какво пази на компютъра',
            'Един файл с настройки в профила ти в Windows (%APPDATA%\\PhotoPick\\settings.json): папката за сваляне, избраните отметки, езика и списък с вече свалените снимки (името и размера им), за да не ги сваля пак. Не излиза от компютъра.'],
          ['Как се маха',
            'От „Приложения“ в настройките на Windows. Ако искаш да махнеш и настройките — изтрий папката %APPDATA%\\PhotoPick. Свалените снимки остават твои, в папката, която си избрал.'],
          ['Промени',
            'Ако някога PhotoPick започне да ползва интернет, ще го напишем тук, преди да излезе такава версия. Датата горе показва последната версия.'],
        ],
      },
      en: {
        updated: UPDATED.en,
        intro: 'Short, because there is not much to say: PhotoPick works only on your computer.',
        sections: [
          ['Who is behind the program',
            'Pixel Lab EOOD, Bulgaria. For questions, write to support@pixellabsoft.com.'],
          ['What it does with your photos',
            'It reads the photos and videos of the iPhone connected by cable, through Windows, and copies the ones you pick into the folder you chose. It deletes and changes nothing on the phone. If you rotate a photo, only the copy on the computer changes.'],
          ['Where the photos were taken',
            'If a photo carries coordinates (the iPhone writes them when allowed), PhotoPick reads them from the photo itself and finds the nearest town in a list built into the program. That is how it shows the place and, if you want, names the folders. The coordinates never leave the computer.'],
          ['What it sends to the internet',
            'Nothing. PhotoPick does not connect to the internet — not to us, not to anyone. There are no accounts, statistics or ads. The links at the bottom of the program open the website or your mail only when you click them.'],
          ['What it keeps on the computer',
            'One settings file in your Windows profile (%APPDATA%\\PhotoPick\\settings.json): the download folder, your choices, the language and a list of the photos already saved (their name and size), so it does not copy them again. It never leaves the computer.'],
          ['How to remove it',
            'From Apps in Windows Settings. To remove the settings too, delete the %APPDATA%\\PhotoPick folder. The photos you saved stay yours, in the folder you chose.'],
          ['Changes',
            'If PhotoPick ever starts using the internet, we will say so here before such a version comes out. The date above shows the latest version.'],
        ],
      },
    },
  },
};
