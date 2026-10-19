/**
 * Lingbolt — превод във всяка програма на Windows: Ctrl два пъти или ⚡ до
 * маркирания текст. Код: `15 Lingbolt` (сървър на Cloud Run + клиент .NET).
 *
 * ⚑ Правните текстове описват това, което кодът НАИСТИНА прави (19.10.2026):
 * текстът отива през нашия сървър (Google Cloud, Белгия) към Gemini API и
 * обратно; не се пази и не се логва. Пазим: случаен номер на устройството,
 * брой преводи на ден за него и за мрежата (IP-то само като еднопосочен код),
 * дневния разход; всичко изтича след 90 дни (Firestore TTL). Про лиценз —
 * ключ. Плащането (Paddle) още го няма — затова Про е „скоро“.
 * Смени ли се кодът — сменя се и този текст.
 */

const UPDATED = { bg: '19 октомври 2026', en: '19 October 2026' };

// Инсталаторът — подписан от Pixel Lab EOOD, качен като release в репото на сайта.
const DOWNLOAD = 'https://github.com/IvoD72/pixellabsoft.com/releases/download/lingbolt-0.1.0/LingboltSetup.exe';

export default {
  slug: 'lingbolt',
  color: '#2F54FF',
  iconImg: '/assets/icon-lingbolt.png',
  icon: '<path d="M13 2 4 14h7l-2 8 9-12h-7z"/>',
  name: 'Lingbolt',
  status: 'windows',
  external: { download: DOWNLOAD },
  features: {
    bg: ['Във всяка програма', 'Ctrl два пъти или ⚡', '40 езика', 'Текстовете не се пазят'],
    en: ['In any program', 'Ctrl twice or ⚡', '40 languages', 'Your texts are not stored'],
  },
  short: { bg: 'Пишеш на твоя език — те четат на техния.', en: 'You write in yours — they read in theirs.' },
  note: { bg: 'превод с една мълния', en: 'translation in a flash' },
  tagline: {
    bg: 'Пишеш на твоя език. Те четат на техния.',
    en: 'Write in your language. They read in theirs.',
  },
  description: {
    bg: [
      'Lingbolt превежда навсякъде в Windows — в чата, в имейла, в браузъра, във Viber и WhatsApp. Пишеш на български, натискаш Ctrl два пъти и текстът в полето става на английски (или на езика, който си избрал), готов за изпращане. Ctrl+Z връща твоя.',
      'Получиш ли съобщение на чужд език, маркираш го и до него излиза ⚡. Едно цъкане — и преводът е на картичка до мишката, с бутон „Копирай“. С Про можеш да го чуеш и на естествен глас.',
      'Безплатно: 10 превода на ден. Lingbolt Про (до 200 на ден и естествен глас) идва скоро. За Windows 10 и 11, 64-битов.',
    ],
    en: [
      'Lingbolt translates anywhere in Windows — in chat, e-mail, the browser, Viber and WhatsApp. Type in your language, press Ctrl twice and the text in the field becomes English (or the language you picked), ready to send. Ctrl+Z brings yours back.',
      'Got a message in another language? Select it and a ⚡ appears next to it. One click and the translation shows on a card by the mouse, with a Copy button. With Pro you can also hear it in a natural voice.',
      'Free: 10 translations a day. Lingbolt Pro (up to 200 a day and the natural voice) is coming soon. For Windows 10 and 11, 64-bit.',
    ],
  },
  legal: {
    privacy: {
      bg: {
        updated: UPDATED.bg,
        intro:
          'Lingbolt праща текста, който искаш да преведеш, за да го преведе — и нищо друго. Не го пазим и не го записваме. Тук е точно какво става.',
        sections: [
          ['Кой обработва данните',
            'Пиксел Лаб ЕООД, България. Програмата се казва Lingbolt. За въпроси пиши на support@pixellabsoft.com.'],
          ['Какво се праща и къде',
            'Само когато ти поискаш превод (Ctrl два пъти или ⚡), маркираният текст — или текстът в полето, в което пишеш — се праща криптиран към нашия сървър в Google Cloud (Белгия, ЕС), а той — към Google Gemini API, който го превежда. Преводът се връща при теб. Когато натиснеш „Чуй“, преведеният текст отива по същия път и се връща като звук.'],
          ['Какво НЕ пазим',
            'Текстовете ти и преводите не се записват — нито в база данни, нито в логове. Google обработва текста по условията на платения Gemini API: не го използва за обучение на модели и може да го държи за кратко само за предотвратяване на злоупотреби.'],
          ['Какво пазим',
            'Случаен номер на устройството, създаден при инсталирането (не е свързан с името ти); колко превода и колко секунди глас са ползвани за деня или месеца; същият брой за мрежата, от която идва заявката — IP адресът се пази само като еднопосочен код, от който адресът не може да се възстанови; общия разход за деня. Това ни трябва за безплатния лимит и за да спрем злоупотреби. Тези записи се изтриват автоматично след 90 дни. Отделно Google Cloud пази технически запис на всяка заявка (час, IP адрес, адрес на услугата — без текста) до 30 дни, за сигурност и откриване на грешки. Ако имаш Про, пазим и ключа на лиценза ти.'],
          ['Клавиатура, мишка и клипборд',
            'Lingbolt следи само за две бързи натискания на Ctrl и за маркиране с мишката — не записва и не праща какво пишеш. Пита Windows дали има маркиран текст, за да покаже ⚡; текстът се взима едва когато цъкнеш. За да вземе и постави текста, ползва за миг клипборда и после връща това, което си имал в него.'],
          ['На твоя компютър',
            'Настройките (езиците, номерът на устройството, ключът за Про) и дневник само с грешки — без текстовете ти — стоят в папките на Lingbolt в профила ти в Windows. Махат се, когато деинсталираш програмата и изтриеш папката %APPDATA%\\Lingbolt.'],
          ['Реклами и анализ',
            'Няма реклами, няма проследяване, няма статистика за поведението ти.'],
          ['Твоите права',
            'Можеш да поискаш достъп до данните, свързани с номера на устройството ти, или изтриването им — пиши на support@pixellabsoft.com. Имаш право и на жалба до Комисията за защита на личните данни (cpdp.bg).'],
          ['Промени',
            'Ако променим тази политика, датата горе ще го покаже, а актуалната версия винаги ще е на този адрес.'],
        ],
      },
      en: {
        updated: UPDATED.en,
        intro:
          'Lingbolt sends the text you want translated in order to translate it — and nothing else. We do not keep it or record it. Here is exactly what happens.',
        sections: [
          ['Who processes the data',
            'Pixel Lab EOOD, Bulgaria. The program is called Lingbolt. For questions write to support@pixellabsoft.com.'],
          ['What is sent and where',
            'Only when you ask for a translation (Ctrl twice or ⚡), the selected text — or the text in the field you are typing in — is sent encrypted to our server on Google Cloud (Belgium, EU), which passes it to the Google Gemini API for translation. The translation comes back to you. When you press “Listen”, the translated text goes the same way and comes back as audio.'],
          ['What we do NOT keep',
            'Your texts and translations are not recorded — not in a database, not in logs. Google processes the text under the paid Gemini API terms: it does not use it to train models and may hold it briefly only to prevent abuse.'],
          ['What we keep',
            'A random device number created at installation (not linked to your name); how many translations and seconds of voice were used that day or month; the same count for the network the request comes from — the IP address is kept only as a one-way code from which the address cannot be recovered; the total cost for the day. We need this for the free limit and to stop abuse. These records are deleted automatically after 90 days. Separately, Google Cloud keeps a technical record of each request (time, IP address, service address — without the text) for up to 30 days, for security and troubleshooting. If you have Pro, we also keep your licence key.'],
          ['Keyboard, mouse and clipboard',
            'Lingbolt only watches for two quick presses of Ctrl and for selecting with the mouse — it does not record or send what you type. It asks Windows whether text is selected in order to show ⚡; the text is taken only when you click. To take and paste the text it uses the clipboard for a moment and then puts back what you had there.'],
          ['On your computer',
            'Settings (languages, the device number, the Pro key) and a log of errors only — without your texts — are kept in Lingbolt’s folders in your Windows profile. They go away when you uninstall the program and delete the %APPDATA%\\Lingbolt folder.'],
          ['Ads and analytics',
            'No ads, no tracking, no statistics about your behaviour.'],
          ['Your rights',
            'You can ask for access to the data linked to your device number, or for its deletion — write to support@pixellabsoft.com. You also have the right to complain to your data protection authority (in Bulgaria: cpdp.bg).'],
          ['Changes',
            'If we change this policy, the date above will show it, and the current version will always be at this address.'],
        ],
      },
    },
    terms: {
      bg: {
        updated: UPDATED.bg,
        intro: 'Кратко и ясно: какво получаваш с Lingbolt и за какво отговаряш ти.',
        sections: [
          ['Кой предлага Lingbolt',
            'Пиксел Лаб ЕООД, ЕИК 205472124, България. Контакт: support@pixellabsoft.com.'],
          ['Безплатно и Про',
            'Безплатната версия дава 10 превода на ден. Lingbolt Про ще дава до 200 превода на ден и естествен глас (до 45 минути на месец); условията за плащане ще бъдат тук, преди Про да започне да се продава. Лимитите се нулират всеки ден в полунощ UTC.'],
          ['Честно ползване',
            'Lingbolt е за лично и служебно писане. Не е позволено да се заобикалят лимитите (например с много инсталации), да се ползва автоматично или за масово превеждане, или за незаконно съдържание. При злоупотреба можем да спрем достъпа.'],
          ['Преводите',
            'Преводите се правят от изкуствен интелект и може да съдържат грешки. Преди да изпратиш нещо важно — договор, медицинско, правно или финансово съобщение — провери смисъла. Не отговаряме за последици от неточен превод.'],
          ['Наличност',
            'Стараем се услугата да работи винаги, но може да има прекъсвания — при поддръжка, при проблем при доставчиците ни или когато дневният ни таван на разходите е достигнат.'],
          ['Програмата',
            'Lingbolt се инсталира за твоя потребител в Windows и може да се маха по всяко време от „Приложения“ в настройките. Обновленията ще идват от този сайт.'],
          ['Промени',
            'Ако променим условията, датата горе ще го покаже. Продължиш ли да ползваш Lingbolt, приемаш новите условия.'],
        ],
      },
      en: {
        updated: UPDATED.en,
        intro: 'Short and clear: what you get with Lingbolt and what you are responsible for.',
        sections: [
          ['Who offers Lingbolt',
            'Pixel Lab EOOD, company no. 205472124, Bulgaria. Contact: support@pixellabsoft.com.'],
          ['Free and Pro',
            'The free version gives 10 translations a day. Lingbolt Pro will give up to 200 translations a day and the natural voice (up to 45 minutes a month); the payment terms will be published here before Pro goes on sale. Limits reset every day at midnight UTC.'],
          ['Fair use',
            'Lingbolt is for personal and work writing. You may not get around the limits (for example with many installations), use it automatically or for bulk translation, or for unlawful content. In case of abuse we may stop access.'],
          ['Translations',
            'Translations are made by artificial intelligence and may contain mistakes. Before sending something important — a contract, a medical, legal or financial message — check the meaning. We are not liable for the consequences of an inaccurate translation.'],
          ['Availability',
            'We aim to keep the service running at all times, but there may be interruptions — for maintenance, a problem at our providers, or when our daily cost cap is reached.'],
          ['The program',
            'Lingbolt installs for your Windows user and can be removed at any time from Apps in Settings. Updates will come from this site.'],
          ['Changes',
            'If we change the terms, the date above will show it. If you keep using Lingbolt, you accept the new terms.'],
        ],
      },
    },
  },
};
