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

const UPDATED = { bg: '25 октомври 2026', en: '25 October 2026' };

// Инсталаторът — подписан от Pixel Lab EOOD, качен като release в репото на сайта.
const DOWNLOAD = 'https://github.com/IvoD72/pixellabsoft.com/releases/download/lingbolt-0.8.0/LingboltSetup.exe';

export default {
  slug: 'lingbolt',
  color: '#2F54FF',
  iconImg: '/assets/icon-lingbolt.png',
  icon: '<path d="M13 2 4 14h7l-2 8 9-12h-7z"/>',
  name: 'Lingbolt',
  status: 'windows',
  external: { download: DOWNLOAD, teams: { bg: 'Lingbolt за фирми', en: 'Lingbolt for teams' } },
  features: {
    bg: ['Във всяка програма', 'Превод на глас в срещите', 'Запис и конспект', 'Текстовете не се пазят'],
    en: ['In any program', 'Voice translation in meetings', 'Recording and minutes', 'Your texts are not stored'],
  },
  short: { bg: 'Превежда текста навсякъде, гласа ти в срещите и пише конспекта им. 40 езика.', en: 'Translates text anywhere, your voice in meetings, and writes their minutes. 40 languages.' },
  note: { bg: 'превод с една мълния', en: 'translation in a flash' },
  tagline: {
    bg: 'Пишеш и говориш на твоя език. Те те разбират на техния.',
    en: 'Write and speak in your language. They understand you in theirs.',
  },
  description: {
    bg: [
      'Чете и превежда 40 езика — от български, английски, немски и испански до гръцки, турски, арабски, хинди, японски и китайски. Сам познава на какъв език е текстът, а самата програма също говори на твоя език.',
      'Lingbolt превежда навсякъде в Windows — в чата, в имейла, в браузъра, във Viber и WhatsApp. Пишеш на български, натискаш Ctrl два пъти и текстът в полето става на английски (или на езика, който си избрал), готов за изпращане. Ctrl+Z връща твоя.',
      'Получиш ли съобщение на чужд език, маркираш го и до него излиза ⚡. Едно цъкане — и преводът е на картичка до мишката, с бутон „Копирай“. С Про можеш да го чуеш и на естествен глас. Текст в снимка, PDF или игра? Ctrl+Shift+R, ограждаш го с мишката — и го четеш на твоя език. Lingbolt помни на какъв език говори всеки чат и се обновява сам.',
      'В Zoom, Teams, Google Meet и всяка друга програма за срещи Lingbolt е един панел с три бутона. „Говори“: говориш на твоя език, а другите чуват превода ти на живо, с естествен глас. „Слушай“: чуваш другите на твоя език, със субтитри. „Запис + конспект“: записва срещата и после ти дава протокол по говорители, резюме и задачи.',
      'Безплатно: 300 думи превод на ден. Lingbolt Про — 6,99 € на месец или 59,99 € на година, с ДДС: до 15 000 думи превод на ден, 10 четения от екрана на ден, 45 минути естествен глас, 30 минути Разговор и 3 часа запис на срещи на месец. Ако за срещите ти трябва повече — кредити на пакети от 9,99 €, без абонамент. Купува се от менюто на програмата. За Windows 10 и 11, 64-битов.',
    ],
    en: [
      'Reads and translates 40 languages — from English, German and Spanish to Greek, Turkish, Arabic, Hindi, Japanese and Chinese. It recognises the language of the text by itself, and the program itself speaks your language too.',
      'Lingbolt translates anywhere in Windows — in chat, e-mail, the browser, Viber and WhatsApp. Type in your language, press Ctrl twice and the text in the field becomes English (or the language you picked), ready to send. Ctrl+Z brings yours back.',
      'Got a message in another language? Select it and a ⚡ appears next to it. One click and the translation shows on a card by the mouse, with a Copy button. With Pro you can also hear it in a natural voice. Text in a picture, a PDF or a game? Press Ctrl+Shift+R, draw a box around it — and read it in your language. Lingbolt remembers which language each chat speaks and updates itself.',
      'In Zoom, Teams, Google Meet and any other meeting app, Lingbolt is one bar with three buttons. Talk: you speak in your language and the others hear your translation live, in a natural voice. Listen: you hear the others in your language, with subtitles. Record + summary: it records the meeting and then gives you the minutes by speaker, a summary and the tasks.',
      'Free: 300 words translated a day. Lingbolt Pro — €6.99 a month or €59.99 a year, VAT included: up to 15,000 words translated a day, 10 screen reads a day, 45 minutes of natural voice, 30 minutes of Talk and 3 hours of meeting recording a month. Need more for meetings? Credits in packs from €9.99, no subscription. You buy it from the program’s menu. For Windows 10 and 11, 64-bit.',
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
          ['Lingbolt за фирми',
            'Когато Lingbolt работи с фирмен ключ, пазим към ключа: кои компютри са заели място (случайния номер на устройството), името на компютъра, името на потребителя в Windows, версията на Lingbolt, кога компютърът е заел мястото и кога е видян за последно, и колко минути Разговор и запис е ползвал всеки компютър за месеца. Това вижда администраторът на фирмата на своята страница, за да управлява местата; текстове, преводи, звук и протоколи на срещи там няма и у нас не се пазят. От покупката пазим името на фирмата и имейла на купувача (той е и адресът за „Пиши на администратора“ в програмата). Тези записи се пазят, докато фирмата има абонамент, и се изтриват, когато администраторът освободи мястото или фирмата поиска; броячите на минутите изтичат сами след 90 дни. За данните на служителите фирмата е администратор, а ние — обработващ от нейно име.'],
          ['Клавиатура, мишка и клипборд',
            'Lingbolt следи само за две бързи натискания на Ctrl и за маркиране с мишката — не записва и не праща какво пишеш. Пита Windows дали има маркиран текст, за да покаже ⚡; текстът се взима едва когато цъкнеш. За да вземе и постави текста, ползва за миг клипборда и после връща това, което си имал в него.'],
          ['На твоя компютър',
            'Настройките (езиците, номерът на устройството, ключът за Про, кой език говори всеки чат — записан само като необратим код на прозореца, без имена) и дневник само с грешки — без текстовете ти — стоят в папките на Lingbolt в профила ти в Windows. Махат се, когато деинсталираш програмата и изтриеш папката %APPDATA%\\Lingbolt.'],
          ['Разговор (Про)', [
            'В режим „Разговор“ Lingbolt праща звука от микрофона ти, докато е включен (бутонът „Говори“), криптиран към нашия сървър в Google Cloud (Белгия, ЕС), а той — към модела за превод на живо Qwen на Alibaba Cloud (регион Сингапур). Връща се преводът като текст и като изкуствен глас, който Lingbolt пуска във виртуалния си микрофон Lingbolt Microphone, а програмата за срещи го праща на другите. Ако пуснеш и превод на това, което чуваш, обработва се и гласът на другите в срещата — кажи им, че ползваш превод.',
            'Ние не записваме и не пазим нито звука, нито текста — нито в база, нито в логове; пазим само колко секунди превод са ползвани (за месечния лимит) и колко е струвало. Alibaba Cloud обработва данните като наш обработващ по техния договор за обработка на данни със стандартните договорни клаузи на ЕС; според правилата им заявките и отговорите се пазят до 30 дни и не се използват за обучение на модели без отделно съгласие.',
            'Гласът, който чуват другите, е генериран от изкуствен интелект (машинен превод). Lingbolt Microphone работи само на твоя компютър и не праща нищо навън. Драйверът му (usbip-win2, с отворен код) Lingbolt сваля от официалната му страница в GitHub само веднъж и само ако поискаш.']],
          ['Срещи (Про)', [
            'Когато записваш среща, Lingbolt записва микрофона ти и звука на компютъра (това, което чуваш от програмата за срещи — значи и гласовете на другите). Записът се реже на парчета по 5 минути, които стоят в папката Documents\\Lingbolt\\Meetings на твоя компютър. Всяко парче се праща криптирано към нашия сървър в Google Cloud (Белгия, ЕС), а той — към Google Gemini API, който го превръща в текст по говорители; после текстът на цялата среща отива по същия път за резюмето и задачите.',
            'Звукът се изтрива при Google веднага след превода в текст, а на твоя компютър — веднага щом текстът е запазен (освен ако включиш „Пази звука на срещите“). Ние не пазим нито звука, нито текста — нито в база, нито в логове; пазим само колко секунди са обработени (за месечния лимит) и колко е струвало. Протоколите стоят само на твоя компютър, докато ти не ги изтриеш или изпратиш.',
            'Записът на чужд глас иска съгласие: кажи на другите, че записваш (Lingbolt предлага готов ред за чата).']],
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
          ['Lingbolt for teams',
            'When Lingbolt runs with a company key, we keep with that key: which computers hold a seat (the random device number), the computer’s name, the Windows user name, the Lingbolt version, when the computer took the seat and when it was last seen, and how many minutes of Conversation and recording each computer used that month. The company’s admin sees this on the admin page in order to manage the seats; there are no texts, translations, sound or meeting minutes there, and we do not keep them. From the purchase we keep the company’s name and the buyer’s email (which is also the address behind “Write to your admin” in the program). These records are kept while the company has a subscription, and deleted when the admin frees the seat or the company asks; the minute counters expire by themselves after 90 days. For its employees’ data the company is the controller and we process it on its behalf.'],
          ['Keyboard, mouse and clipboard',
            'Lingbolt only watches for two quick presses of Ctrl and for selecting with the mouse — it does not record or send what you type. It asks Windows whether text is selected in order to show ⚡; the text is taken only when you click. To take and paste the text it uses the clipboard for a moment and then puts back what you had there.'],
          ['On your computer',
            'Settings (languages, the device number, the Pro key, which language each chat speaks — kept only as a one-way code of the window, with no names) and a log of errors only — without your texts — are kept in Lingbolt’s folders in your Windows profile. They go away when you uninstall the program and delete the %APPDATA%\\Lingbolt folder.'],
          ['Conversation (Pro)', [
            'In Conversation mode, while it is on (the Talk button), Lingbolt sends the sound of your microphone, encrypted, to our server on Google Cloud (Belgium, EU), which passes it to Alibaba Cloud\'s Qwen live translation model (Singapore region). The translation comes back as text and as a synthetic voice, which Lingbolt plays into its own virtual microphone, Lingbolt Microphone; your meeting app sends it to the others. If you also translate what you hear, the voices of the other people in the meeting are processed too — tell them you are using a translator.',
            'We do not record or keep the sound or the text — not in a database, not in logs; we keep only how many seconds of translation were used (for the monthly limit) and what it cost. Alibaba Cloud processes the data as our processor under its data processing agreement with the EU standard contractual clauses; under its rules requests and responses are kept for up to 30 days and are not used to train models without separate consent.',
            'The voice the others hear is generated by AI (machine translation). Lingbolt Microphone works only on your computer and sends nothing out. Its driver (usbip-win2, open source) is downloaded by Lingbolt from its official GitHub page once, and only if you ask.']],
          ['Meetings (Pro)', [
            'When you record a meeting, Lingbolt records your microphone and the computer’s sound (what you hear from the meeting app — so the other people’s voices too). The recording is cut into 5-minute pieces kept in the Documents\\Lingbolt\\Meetings folder on your computer. Each piece is sent, encrypted, to our server on Google Cloud (Belgium, EU), which passes it to the Google Gemini API to turn it into text by speaker; then the text of the whole meeting goes the same way for the summary and the tasks.',
            'The sound is deleted at Google right after it has become text, and on your computer as soon as the text is saved (unless you turn on “Keep the meetings’ audio”). We do not keep the sound or the text — not in a database, not in logs; we keep only how many seconds were processed (for the monthly limit) and what it cost. The minutes stay only on your computer until you delete or send them.',
            'Recording other people needs their consent: tell them you are recording (Lingbolt offers a ready line for the chat).']],
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
            'Преводът се брои на думи, за да е честно: кратко съобщение харчи малко, дълъг имейл — повече. Безплатната версия дава 300 думи превод и 3 четения от екрана на ден. Lingbolt Про дава до 15 000 думи превод и 10 четения от екрана на ден, естествен глас до 45 минути на месец, до 30 минути „Разговор“ (превод на глас на живо) и до 3 часа „Срещи“ (запис, резюме и задачи) на месец. Броят се думите на текста, който превеждаш; всяка заявка е поне една дума. При китайски и японски една дума е 2 знака, при тайландски — 4. Лимитите се нулират всеки ден в полунощ UTC.'],
          ['Цена и абонамент',
            'Про струва 6,99 € на месец или 59,99 € на година, с включен ДДС. Плаща се с карта през Stripe и се подновява автоматично в края на всеки период, докато не го спреш. Спираш от линка в имейла с ключа (страницата за абонамента на Stripe) — Про остава до края на платения период, после програмата минава на безплатната версия. Ключът е за един човек; може да го ползваш на своите компютри.'],
          ['14 дни за отказ',
            'Ако Про не ти хареса, в рамките на 14 дни от първото плащане пиши на support@pixellabsoft.com и ще върнем цялата сума.'],
          ['Кредити',
            'Кредитите са добавка към Про за Разговор, слушане и запис на срещи, когато включените в Про минути не стигат. Купуват се на пакети — 100 кредита за 9,99 €, 500 за 39,99 € и 2 000 за 139,99 €, с включен ДДС — с еднократно плащане с карта през Stripe. 1 кредит е 1 минута Разговор, 4 минути слушане или 6 минути запис на среща. Първо се харчат минутите от Про, после най-старият пакет. Пакетът важи 12 месеца от покупката; неизползваното след това изгаря. Кредитите се ползват само с активен Про и не се прехвърлят на друг ключ. Започнат Разговор или запис на среща не спира, ако кредитите свършат по средата: може да продължи до 10 минути Разговор или до 60 минути запис над тях, а тази част се приспада първо от минутите на Про за следващия месец, после от следващия пакет; докато има такава част, нов Разговор или запис не започва. Неизползваните кредити от пакет се връщат, ако пишеш на support@pixellabsoft.com до 14 дни от покупката.'],
          ['Lingbolt за фирми',
            'Фирма купува места: 9,99 € на място на месец или 99,99 € на място на година, без ДДС, от 3 до 100 места, с абонамент с карта през Stripe; фактурата за всеки период идва по имейл на името на фирмата. Едно място е един компютър (един потребител на Windows): първите компютри, пуснали Lingbolt с фирмения ключ, заемат местата, а следващият работи като безплатния Lingbolt, докато администраторът не добави място или не освободи друго от страницата си. Всяко място има всичко от Про; минутите за Разговор и запис на срещи на всички места са общи за фирмата, както и кредитите ѝ. Добавено или махнато място Stripe смята пропорционално до края на периода. Абонаментът се спира от страницата на администратора; до края на платения период местата остават. Линкът към страницата на администратора е единственият му вход — пазете го като парола. Фирмата отговаря служителите ѝ да знаят, че ползват Lingbolt, и да имат съгласие на другите, когато записват срещи. Правото на отказ в 14 дни е за потребители и не важи за покупка от фирма.'],
          ['Честно ползване',
            'Lingbolt е за лично и служебно писане. Не е позволено да се заобикалят лимитите (например с много инсталации), да се ползва автоматично или за масово превеждане, или за незаконно съдържание. При злоупотреба можем да спрем достъпа.'],
          ['Преводите',
            'Преводите се правят от изкуствен интелект и може да съдържат грешки. Преди да изпратиш нещо важно — договор, медицинско, правно или финансово съобщение — провери смисъла. Не отговаряме за последици от неточен превод.'],
          ['Разговор',
            '„Разговор“ (в Про) превежда на живо това, което казваш, и го изговаря с изкуствен глас в програмата ти за срещи. Минутите се броят по изговорения превод. Гласът е генериран от изкуствен интелект и може да греши — при важни разговори проверявай разбирането. Ти отговаряш да кажеш на другите участници, че ползваш машинен превод, и да имаш съгласието им, когато законът го изисква (например ако се превежда и тяхната реч). Виртуалният микрофон Lingbolt Microphone е част от Lingbolt и е направен върху програмите с отворен код Virtual Cables и usbip-win2 (лиценз BSD); лицензите им са в папката licenses на програмата. Драйвера на usbip-win2 Lingbolt сваля и инсталира само ако поискаш, като Windows пита за разрешение веднъж.'],
          ['Срещи',
            '„Срещи“ (в Про) записва срещата и прави резюме, взетите решения и задачите. Времето се брои по реално чутия звук. Резюмето и задачите се правят от изкуствен интелект и може да грешат или да пропуснат нещо — отговорникът и срокът се пишат само ако са казани. Ти отговаряш да кажеш на другите участници, че записваш, и да имаш съгласието им, когато законът го изисква.'],
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
            'Translation is counted in words, to be fair: a short message uses little, a long e-mail more. The free version gives 300 words of translation and 3 screen reads a day. Lingbolt Pro gives up to 15,000 words of translation and 10 screen reads a day, the natural voice for up to 45 minutes a month, up to 30 minutes of Conversation (live speech translation) and up to 3 hours of Meetings (recording, summary and tasks) a month. The words of the text you translate are counted; every request is at least one word. In Chinese and Japanese a word is 2 characters, in Thai 4. Limits reset every day at midnight UTC.'],
          ['Price and subscription',
            'Pro costs €6.99 a month or €59.99 a year, VAT included. You pay by card through Stripe and it renews automatically at the end of each period until you stop it. You stop it from the link in the email with your key (Stripe’s subscription page) — Pro stays on until the end of the paid period, then the program goes back to the free version. The key is for one person; you may use it on your own computers.'],
          ['14 days to change your mind',
            'If Pro is not for you, write to support@pixellabsoft.com within 14 days of the first payment and we will refund the full amount.'],
          ['Credits',
            'Credits come on top of Pro, for Conversation, listening and recording meetings when the minutes in Pro are not enough. They are bought in packs — 100 credits for €9.99, 500 for €39.99 and 2,000 for €139.99, VAT included — with a one-off card payment through Stripe. 1 credit is 1 minute of Conversation, 4 minutes of listening or 6 minutes of meeting recording. The Pro minutes are used first, then the oldest pack. A pack lasts 12 months from purchase; what is left after that is gone. Credits work only with an active Pro and do not move to another key. A Conversation or meeting recording that has started does not stop if the credits run out halfway: it may go on for up to 10 minutes of Conversation or 60 minutes of recording beyond them, and that part is taken first from next month’s Pro minutes, then from the next pack; while it is outstanding, no new Conversation or recording starts. Unused credits from a pack are refunded if you write to support@pixellabsoft.com within 14 days of purchase.'],
          ['Lingbolt for teams',
            'A company buys seats: €9.99 per seat a month or €99.99 per seat a year, VAT excluded, from 3 to 100 seats, as a card subscription through Stripe; the invoice of every period comes by email in the company’s name. A seat is one computer (one Windows user): the first computers that start Lingbolt with the company key take the seats, and the next one works as free Lingbolt until the admin adds a seat or frees another one on the admin page. Every seat has all of Pro; the Conversation and meeting-recording minutes of all seats are shared by the company, and so are its credits. A seat added or removed is billed by Stripe pro rata to the end of the period. The subscription is stopped from the admin page; the seats stay until the end of the paid period. The link to the admin page is the admin’s only sign-in — keep it like a password. The company is responsible for its employees knowing that they use Lingbolt, and for the consent of the other people when meetings are recorded. The 14-day right of withdrawal is for consumers and does not apply to a purchase by a company.'],
          ['Fair use',
            'Lingbolt is for personal and work writing. You may not get around the limits (for example with many installations), use it automatically or for bulk translation, or for unlawful content. In case of abuse we may stop access.'],
          ['Translations',
            'Translations are made by artificial intelligence and may contain mistakes. Before sending something important — a contract, a medical, legal or financial message — check the meaning. We are not liable for the consequences of an inaccurate translation.'],
          ['Conversation',
            'Conversation (in Pro) translates what you say live and speaks it with a synthetic voice into your meeting app. Minutes are counted by the translated speech. The voice is generated by AI and may make mistakes — in important conversations check that you were understood. You are responsible for telling the other participants that you use machine translation, and for having their consent where the law requires it (for example if their speech is translated too). The Lingbolt Microphone virtual microphone is part of Lingbolt and is built on the open-source programs Virtual Cables and usbip-win2 (BSD licence); their licences are in the program\'s licenses folder. Lingbolt downloads and installs the usbip-win2 driver only if you ask, and Windows asks for permission once.'],
          ['Meetings',
            'Meetings (in Pro) records the meeting and makes a summary, the decisions taken and the tasks. Time is counted by the sound actually heard. The summary and the tasks are made by AI and may be wrong or miss something — an owner or a deadline is written only if it was said. You are responsible for telling the other participants that you are recording, and for having their consent where the law requires it.'],
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
