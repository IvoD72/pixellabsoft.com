/**
 * Lingbolt — превод във всяка програма на Windows: Ctrl два пъти или ⚡ до
 * маркирания текст. Код: `15 Lingbolt` (сървър на Cloud Run + клиент .NET).
 *
 * ⚑ Правните текстове описват това, което кодът НАИСТИНА прави (19.10.2026):
 * текстът отива през нашия сървър (Google Cloud, Белгия) към Gemini API и
 * обратно; не се пази и не се логва. Пазим: случаен номер на устройството,
 * брой преводи на ден за него и за мрежата (IP-то само като еднопосочен код),
 * дневния разход; всичко изтича след 90 дни (Firestore TTL). Про лиценз —
 * ключ. Про се плаща през Stripe (20.10.2026): 6,99 €/мес или 59,99 €/год с ДДС;
 * пазим имейла, ключа, номера на абонамента и устройството, от което е платено.
 * Смени ли се кодът — сменя се и този текст.
 */

const UPDATED = { bg: '24 октомври 2026', en: '24 October 2026' };

// Инсталаторът — подписан от Pixel Lab EOOD, качен като release в репото на сайта.
const DOWNLOAD = 'https://github.com/IvoD72/pixellabsoft.com/releases/download/lingbolt-0.7.0/LingboltSetup.exe';

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
  short: { bg: 'Пишеш на твоя език — те четат на техния. Чете и превежда 40 езика.', en: 'You write in yours — they read in theirs. Reads and translates 40 languages.' },
  note: { bg: 'превод с една мълния', en: 'translation in a flash' },
  tagline: {
    bg: 'Пишеш на твоя език. Те четат на техния.',
    en: 'Write in your language. They read in theirs.',
  },
  description: {
    bg: [
      'Чете и превежда 40 езика — от български, английски, немски и испански до гръцки, турски, арабски, хинди, японски и китайски. Сам познава на какъв език е текстът, а самата програма също говори на твоя език.',
      'Lingbolt превежда навсякъде в Windows — в чата, в имейла, в браузъра, във Viber и WhatsApp. Пишеш на български, натискаш Ctrl два пъти и текстът в полето става на английски (или на езика, който си избрал), готов за изпращане. Ctrl+Z връща твоя.',
      'Получиш ли съобщение на чужд език, маркираш го и до него излиза ⚡. Едно цъкане — и преводът е на картичка до мишката, с бутон „Копирай“. С Про можеш да го чуеш и на естествен глас. Текст в снимка, PDF или игра? Ctrl+Shift+R, ограждаш го с мишката — и го четеш на твоя език. Lingbolt помни на какъв език говори всеки чат и се обновява сам.',
      'Безплатно: 300 думи превод на ден. Lingbolt Про: до 15 000 думи на ден — на практика без чакане, естествен глас и 10 четения от екрана на ден — 6,99 € на месец или 59,99 € на година, с ДДС. Купува се от менюто на програмата. За Windows 10 и 11, 64-битов.',
    ],
    en: [
      'Reads and translates 40 languages — from English, German and Spanish to Greek, Turkish, Arabic, Hindi, Japanese and Chinese. It recognises the language of the text by itself, and the program itself speaks your language too.',
      'Lingbolt translates anywhere in Windows — in chat, e-mail, the browser, Viber and WhatsApp. Type in your language, press Ctrl twice and the text in the field becomes English (or the language you picked), ready to send. Ctrl+Z brings yours back.',
      'Got a message in another language? Select it and a ⚡ appears next to it. One click and the translation shows on a card by the mouse, with a Copy button. With Pro you can also hear it in a natural voice. Text in a picture, a PDF or a game? Press Ctrl+Shift+R, draw a box around it — and read it in your language. Lingbolt remembers which language each chat speaks and updates itself.',
      'Free: 300 words translated a day. Lingbolt Pro: up to 15,000 words a day — practically no waiting, the natural voice and 10 screen reads a day — €6.99 a month or €59.99 a year, VAT included. You buy it from the program’s menu. For Windows 10 and 11, 64-bit.',
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
            'Само когато ти поискаш превод (Ctrl два пъти или ⚡), маркираният текст — или текстът в полето, в което пишеш — се праща криптиран към нашия сървър в Google Cloud (Белгия, ЕС), а той — към Google Gemini API, който го превежда. Преводът се връща при теб. Когато натиснеш „Чуй“, преведеният текст отива по същия път и се връща като звук. При превод от екрана се праща само ограденото от теб парче като картинка — пак по същия път и пак без да се пази.'],
          ['Какво НЕ пазим',
            'Текстовете ти и преводите не се записват — нито в база данни, нито в логове. Google обработва текста по условията на платения Gemini API: не го използва за обучение на модели и може да го държи за кратко само за предотвратяване на злоупотреби.'],
          ['Какво пазим',
            'Случаен номер на устройството, създаден при инсталирането (не е свързан с името ти); колко превода и колко секунди глас са ползвани за деня или месеца; същият брой за мрежата, от която идва заявката — IP адресът се пази само като еднопосочен код, от който адресът не може да се възстанови; общия разход за деня. Това ни трябва за безплатния лимит и за да спрем злоупотреби. Тези записи се изтриват автоматично след 90 дни. Отделно Google Cloud пази технически запис на всяка заявка (час, IP адрес, адрес на услугата — без текста) до 30 дни, за сигурност и откриване на грешки. Ако имаш Про, пазим и ключа на лиценза ти.'],
          ['Плащане за Про',
            'Плащането става на страницата на Stripe (Stripe Payments Europe, Ирландия) — данните на картата ти отиват само при Stripe, ние не ги виждаме. От покупката пазим: имейла ти, ключа на лиценза, номера на абонамента в Stripe, до кога е платено и случайния номер на устройството, от което е платено (за да е Про веднага, без да въвеждаш ключ). Имейлът се ползва само за ключа и за въпроси по абонамента. Счетоводните записи за плащането се пазят колкото изисква законът.'],
          ['Клавиатура, мишка и клипборд',
            'Lingbolt следи само за две бързи натискания на Ctrl и за маркиране с мишката — не записва и не праща какво пишеш. Пита Windows дали има маркиран текст, за да покаже ⚡; текстът се взима едва когато цъкнеш. За да вземе и постави текста, ползва за миг клипборда и после връща това, което си имал в него.'],
          ['На твоя компютър',
            'Настройките (езиците, номерът на устройството, ключът за Про, кой език говори всеки чат — записан само като необратим код на прозореца, без имена) и дневник само с грешки — без текстовете ти — стоят в папките на Lingbolt в профила ти в Windows. Махат се, когато деинсталираш програмата и изтриеш папката %APPDATA%\\Lingbolt.'],
          ['Разговор (Про)', [
            'В режим „Разговор“ Lingbolt праща звука от микрофона ти, докато е включен (бутонът „Говори“), криптиран към нашия сървър в Google Cloud (Белгия, ЕС), а той — към модела за превод на живо Qwen на Alibaba Cloud (регион Сингапур). Връща се преводът като текст и като изкуствен глас, който Lingbolt пуска във виртуалния си микрофон Lingbolt Microphone, а програмата за срещи го праща на другите. Ако пуснеш и превод на това, което чуваш, обработва се и гласът на другите в срещата — кажи им, че ползваш превод.',
            'Ние не записваме и не пазим нито звука, нито текста — нито в база, нито в логове; пазим само колко секунди превод са ползвани (за месечния лимит) и колко е струвало. Alibaba Cloud обработва данните като наш обработващ по техния договор за обработка на данни със стандартните договорни клаузи на ЕС; според правилата им заявките и отговорите се пазят до 30 дни и не се използват за обучение на модели без отделно съгласие.',
            'Гласът, който чуват другите, е генериран от изкуствен интелект (машинен превод). Lingbolt Microphone работи само на твоя компютър и не праща нищо навън. Драйверът му (usbip-win2, с отворен код) Lingbolt сваля от официалната му страница в GitHub само веднъж и само ако поискаш.']],
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
            'Only when you ask for a translation (Ctrl twice or ⚡), the selected text — or the text in the field you are typing in — is sent encrypted to our server on Google Cloud (Belgium, EU), which passes it to the Google Gemini API for translation. The translation comes back to you. When you press “Listen”, the translated text goes the same way and comes back as audio. When you translate from the screen, only the part you boxed is sent, as a picture — the same way, and again not kept.'],
          ['What we do NOT keep',
            'Your texts and translations are not recorded — not in a database, not in logs. Google processes the text under the paid Gemini API terms: it does not use it to train models and may hold it briefly only to prevent abuse.'],
          ['What we keep',
            'A random device number created at installation (not linked to your name); how many translations and seconds of voice were used that day or month; the same count for the network the request comes from — the IP address is kept only as a one-way code from which the address cannot be recovered; the total cost for the day. We need this for the free limit and to stop abuse. These records are deleted automatically after 90 days. Separately, Google Cloud keeps a technical record of each request (time, IP address, service address — without the text) for up to 30 days, for security and troubleshooting. If you have Pro, we also keep your licence key.'],
          ['Paying for Pro',
            'You pay on Stripe’s page (Stripe Payments Europe, Ireland) — your card details go only to Stripe; we never see them. From the purchase we keep: your email, the licence key, the Stripe subscription number, until when it is paid, and the random number of the device you paid from (so Pro is on at once, without typing the key). The email is used only for the key and questions about the subscription. Accounting records of the payment are kept as long as the law requires.'],
          ['Keyboard, mouse and clipboard',
            'Lingbolt only watches for two quick presses of Ctrl and for selecting with the mouse — it does not record or send what you type. It asks Windows whether text is selected in order to show ⚡; the text is taken only when you click. To take and paste the text it uses the clipboard for a moment and then puts back what you had there.'],
          ['On your computer',
            'Settings (languages, the device number, the Pro key, which language each chat speaks — kept only as a one-way code of the window, with no names) and a log of errors only — without your texts — are kept in Lingbolt’s folders in your Windows profile. They go away when you uninstall the program and delete the %APPDATA%\\Lingbolt folder.'],
          ['Conversation (Pro)', [
            'In Conversation mode, while it is on (the Talk button), Lingbolt sends the sound of your microphone, encrypted, to our server on Google Cloud (Belgium, EU), which passes it to Alibaba Cloud\'s Qwen live translation model (Singapore region). The translation comes back as text and as a synthetic voice, which Lingbolt plays into its own virtual microphone, Lingbolt Microphone; your meeting app sends it to the others. If you also translate what you hear, the voices of the other people in the meeting are processed too — tell them you are using a translator.',
            'We do not record or keep the sound or the text — not in a database, not in logs; we keep only how many seconds of translation were used (for the monthly limit) and what it cost. Alibaba Cloud processes the data as our processor under its data processing agreement with the EU standard contractual clauses; under its rules requests and responses are kept for up to 30 days and are not used to train models without separate consent.',
            'The voice the others hear is generated by AI (machine translation). Lingbolt Microphone works only on your computer and sends nothing out. Its driver (usbip-win2, open source) is downloaded by Lingbolt from its official GitHub page once, and only if you ask.']],
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
            'Преводът се брои на думи, за да е честно: кратко съобщение харчи малко, дълъг имейл — повече. Безплатната версия дава 300 думи превод и 3 четения от екрана на ден. Lingbolt Про дава до 15 000 думи превод и 10 четения от екрана на ден, естествен глас до 45 минути на месец и до 120 минути „Разговор“ (превод на глас на живо) на месец. Броят се думите на текста, който превеждаш; всяка заявка е поне една дума. При китайски и японски една дума е 2 знака, при тайландски — 4. Лимитите се нулират всеки ден в полунощ UTC.'],
          ['Цена и абонамент',
            'Про струва 6,99 € на месец или 59,99 € на година, с включен ДДС. Плаща се с карта през Stripe и се подновява автоматично в края на всеки период, докато не го спреш. Спираш от линка в имейла с ключа (страницата за абонамента на Stripe) — Про остава до края на платения период, после програмата минава на безплатната версия. Ключът е за един човек; може да го ползваш на своите компютри.'],
          ['14 дни за отказ',
            'Ако Про не ти хареса, в рамките на 14 дни от първото плащане пиши на support@pixellabsoft.com и ще върнем цялата сума.'],
          ['Честно ползване',
            'Lingbolt е за лично и служебно писане. Не е позволено да се заобикалят лимитите (например с много инсталации), да се ползва автоматично или за масово превеждане, или за незаконно съдържание. При злоупотреба можем да спрем достъпа.'],
          ['Преводите',
            'Преводите се правят от изкуствен интелект и може да съдържат грешки. Преди да изпратиш нещо важно — договор, медицинско, правно или финансово съобщение — провери смисъла. Не отговаряме за последици от неточен превод.'],
          ['Разговор',
            '„Разговор“ (в Про) превежда на живо това, което казваш, и го изговаря с изкуствен глас в програмата ти за срещи. Минутите се броят по изговорения превод. Гласът е генериран от изкуствен интелект и може да греши — при важни разговори проверявай разбирането. Ти отговаряш да кажеш на другите участници, че ползваш машинен превод, и да имаш съгласието им, когато законът го изисква (например ако се превежда и тяхната реч). Виртуалният микрофон Lingbolt Microphone е част от Lingbolt и е направен върху програмите с отворен код Virtual Cables и usbip-win2 (лиценз BSD); лицензите им са в папката licenses на програмата. Драйвера на usbip-win2 Lingbolt сваля и инсталира само ако поискаш, като Windows пита за разрешение веднъж.'],
          ['Наличност',
            'Стараем се услугата да работи винаги, но може да има прекъсвания — при поддръжка, при проблем при доставчиците ни или когато дневният ни таван на разходите е достигнат.'],
          ['Програмата',
            'Lingbolt се инсталира за твоя потребител в Windows и може да се маха по всяко време от „Приложения“ в настройките. Веднъж на 12 часа пита нашия сървър за нова версия; ако има, ти я предлага и я инсталира едва след като провери, че е подписана от Пиксел Лаб ЕООД.'],
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
            'Translation is counted in words, to be fair: a short message uses little, a long e-mail more. The free version gives 300 words of translation and 3 screen reads a day. Lingbolt Pro gives up to 15,000 words of translation and 10 screen reads a day, the natural voice for up to 45 minutes a month and up to 120 minutes of Conversation (live speech translation) a month. The words of the text you translate are counted; every request is at least one word. In Chinese and Japanese a word is 2 characters, in Thai 4. Limits reset every day at midnight UTC.'],
          ['Price and subscription',
            'Pro costs €6.99 a month or €59.99 a year, VAT included. You pay by card through Stripe and it renews automatically at the end of each period until you stop it. You stop it from the link in the email with your key (Stripe’s subscription page) — Pro stays on until the end of the paid period, then the program goes back to the free version. The key is for one person; you may use it on your own computers.'],
          ['14 days to change your mind',
            'If Pro is not for you, write to support@pixellabsoft.com within 14 days of the first payment and we will refund the full amount.'],
          ['Fair use',
            'Lingbolt is for personal and work writing. You may not get around the limits (for example with many installations), use it automatically or for bulk translation, or for unlawful content. In case of abuse we may stop access.'],
          ['Translations',
            'Translations are made by artificial intelligence and may contain mistakes. Before sending something important — a contract, a medical, legal or financial message — check the meaning. We are not liable for the consequences of an inaccurate translation.'],
          ['Conversation',
            'Conversation (in Pro) translates what you say live and speaks it with a synthetic voice into your meeting app. Minutes are counted by the translated speech. The voice is generated by AI and may make mistakes — in important conversations check that you were understood. You are responsible for telling the other participants that you use machine translation, and for having their consent where the law requires it (for example if their speech is translated too). The Lingbolt Microphone virtual microphone is part of Lingbolt and is built on the open-source programs Virtual Cables and usbip-win2 (BSD licence); their licences are in the program\'s licenses folder. Lingbolt downloads and installs the usbip-win2 driver only if you ask, and Windows asks for permission once.'],
          ['Availability',
            'We aim to keep the service running at all times, but there may be interruptions — for maintenance, a problem at our providers, or when our daily cost cap is reached.'],
          ['The program',
            'Lingbolt installs for your Windows user and can be removed at any time from Apps in Settings. Every 12 hours it asks our server whether there is a new version; if so, it offers it and installs it only after checking that it is signed by Pixel Lab EOOD.'],
          ['Changes',
            'If we change the terms, the date above will show it. If you keep using Lingbolt, you accept the new terms.'],
        ],
      },
    },
  },
};
