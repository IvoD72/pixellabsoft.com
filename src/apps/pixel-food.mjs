/**
 * Pixel Food — едно приложение за поръчки от местни заведения: QR кодът (или списъкът) отваря менюто на заведението,
 * поръчката отива в кухнята му, кухнята дава час, клиентът потвърждава, взима и плаща на място.
 *
 * ⚑ Правните текстове описват това, което кодът НАИСТИНА прави (18 Urban GO, клон pixel-food, 27.11.2026):
 * вход само с Google/Apple (Firebase Auth); поръчка = име, телефон, ястия, час, статус, push токен; защита от фалшиви
 * поръчки (по една на 2 мин от профил и номер, блокиране по заведение); база Firestore eur3, функция europe-west1;
 * известия iPhone през Expo (САЩ) + APNs, Android през FCM; „Изтрий акаунта“ трие профила за вход, а поръчките
 * остават в отчета на заведението с името и телефона от поръчката. Написано от Gemini по фактите, проверено от Claude.
 *
 * ⚑ ЗА ПУБЛИКУВАНЕ ТРЯБВА ЮРИСТ за: срокове на пазене, роли администратор/обработващ със заведенията (споразумение
 * по чл. 28), предаване към САЩ (Google, Apple, Expo). Фактите тук са верни.
 */

const UPDATED = { bg: '27 ноември 2026', en: '27 November 2026' };
const CONTROLLER = {
  bg: 'Пиксел Лаб ЕООД, ЕИК 205472124, ул. „Славянска“ 24, 5100 Горна Оряховица, България. Имейл: support@pixellabsoft.com.',
  en: 'Pixel Lab EOOD (Пиксел Лаб ЕООД), company ID 205472124, 24 Slavyanska Str., 5100 Gorna Oryahovitsa, Bulgaria. Email: support@pixellabsoft.com.',
};

export default {
  slug: 'pixel-food',
  color: '#1f5bff',
  iconImg: '/assets/icon-pixel-food.png',
  icon: '<path d="M7 4h7a5 5 0 0 1 0 10h-4v6H7z"/><path d="M3 3h2v2H3zM5 6h2v2H5z"/>',
  name: 'Pixel Food',
  status: 'testing', // 'testing' | 'store' | 'soon'
  appStore: null,     // линкът идва след одобрението
  playStore: null,
  features: {
    bg: ['QR кодът отваря менюто', 'Кухнята казва часа', 'Известие, когато е готово', 'Плащаш на място'],
    en: ['The QR code opens the menu', 'The kitchen gives the time', 'A notification when it is ready', 'Pay at the venue'],
  },
  // Един ред за картата на началото и ръкописната бележка до екрана.
  short: { bg: 'Поръчай предварително от местни заведения и вземи готовата храна.', en: 'Order ahead from local restaurants and pick up your food ready.' },
  note: { bg: 'поръчай, вземи готово', en: 'order, pick up ready' },
  tagline: {
    bg: 'Храна за вземане от твоите заведения.',
    en: 'Pick-up food from your local places.',
  },
  description: {
    bg: [
      'С Pixel Food поръчваш храна предварително от местните заведения в твоя град и я взимаш готова направо от място.',
      'Сканираш QR кода от витрината или флаера на заведението или го избираш от списъка с градове. Отваря се менюто му с ястия, снимки и цени. Кухнята получава поръчката веднага, казва ти точен час, ти го потвърждаваш и получаваш известие, когато е готово. Плащаш на място.',
      'Ако имаш заведение и искаш да приемаш поръчки през Pixel Food, пиши ни на support@pixellabsoft.com.',
    ],
    en: [
      'With Pixel Food you order ahead from the local restaurants in your town and pick your food up ready.',
      'Scan the QR code on the restaurant\'s window or flyer, or pick it from the list of towns. Its menu opens with dishes, photos and prices. The kitchen gets your order at once, gives you an exact time, you confirm it and get a notification when it is ready. You pay at the venue.',
      'If you run a restaurant and want to take orders through Pixel Food, write to support@pixellabsoft.com.',
    ],
  },
  legal: {
    privacy: {
      bg: {
        updated: UPDATED.bg,
        intro: 'В Pixel Food няма реклами, няма проследяване и не продаваме данните ти. В приложението не се плаща: плащаш на място в заведението. Ето какво точно става с данните ти.',
        sections: [
          ['Кой обработва данните',
            `За профила ти и за работата на приложението отговаряме ние: ${CONTROLLER.bg} За данните в поръчката (име, телефон и избраната храна) администратор е заведението, от което поръчваш, за да може да я приготви; в тази част ние сме обработващ от негово име.`],
          ['Какво пазим',
            'При вход: влизаш само с профила си в Google или Apple (Firebase Authentication). Пазим постоянния номер на профила и името и имейла ти, ако Google или Apple ни ги дадат (при Apple можеш да скриеш имейла си). При поръчка: името и телефона, които въвеждаш, какво поръчваш, часа и статуса, отговора на кухнята (час за вземане или причина за отказ) и кода на телефона ти за известия. Срещу фалшиви поръчки: часа на последната поръчка от профила и от телефонния номер (не повече от една на 2 минути), а ако заведение блокира фалшива поръчка, профила или номера като блокиран за това заведение.'],
          ['Защо и на какво основание',
            'За да ти дадем услугата (изпълнение на договор, чл. 6, ал. 1, б. „б“ от GDPR): профилът, предаването на поръчката на кухнята и известията за нея. Срещу фалшиви поръчки (законен интерес, чл. 6, ал. 1, б. „е“ от GDPR): заведенията да не губят време и продукти за поръчки, които никой няма да вземе.'],
          ['Кой вижда поръчката ти',
            'Само кухнята на заведението, от което си поръчал; всяко заведение вижда само своите поръчки. Ние имаме достъп до системата, за да я поддържаме.'],
          ['Къде стоят данните',
            'Базата е в Google Firebase / Cloud Firestore, на сървъри в Европейския съюз (регион eur3). Функцията за известията работи в Google Cloud в Белгия (europe-west1).'],
          ['Известия и предаване извън ЕС',
            'На Android известията минават през Firebase Cloud Messaging (Google), а на iPhone през Expo (650 Industries, САЩ) и Apple Push Notification service. Така кодът за известия и текстът на известието излизат извън ЕС. Входът с Google или Apple също минава през тях. Предаването към САЩ е защитено със стандартните договорни клаузи на Европейската комисия или с рамката за защита на данните между ЕС и САЩ (чл. 45 и 46 от GDPR).'],
          ['Какво стои само на телефона ти',
            'Любимите ястия, поръчките, които си скрил, и последното отворено заведение. Те не стигат до нас.'],
          ['Колко дълго',
            'Профилът ти: докато не го изтриеш. Поръчките: остават в отчета на заведението за неговото счетоводство. Часът на последната поръчка се презаписва с всяка следваща. Блокиране заради фалшива поръчка се пази, докато заведението или ние не го махнем.'],
          ['Изтриване на профила',
            'В приложението, в „Поръчки“, има „Изтрий акаунта“: изтрива профила ти за вход веднага. Поръчките, които вече си направил, остават в отчета на заведението с името и телефона, които си въвел в тях, но вече не са свързани с профил. За друго изтриване пиши на support@pixellabsoft.com; отговаряме до 30 дни.'],
          ['Твоите права',
            'Имаш право на достъп до данните си, да ги поправиш, да поискаш изтриването им, да ограничиш обработването им, да възразиш срещу обработването на основание законен интерес и да ги получиш в преносим вид. Пиши на support@pixellabsoft.com. Имаш право и на жалба до Комисията за защита на личните данни (cpdp.bg).'],
          ['Деца',
            'Pixel Food не е предназначено за лица под 16 години. Не събираме съзнателно данни за деца.'],
          ['Промени',
            'Ако променим начина, по който приложението работи с данните, ще обновим този текст и датата му. Актуалната версия е винаги тук и в приложението.'],
        ],
      },
      en: {
        updated: UPDATED.en,
        intro: 'Pixel Food has no ads, no tracking, and we never sell your data. There are no payments in the app: you pay at the venue. Here is exactly what happens with your data.',
        sections: [
          ['Who processes your data',
            `We are responsible for your account and for running the app: ${CONTROLLER.en} For the data in an order (name, phone number and the food) the venue you order from is the controller, so it can prepare it; for that part we process the data on its behalf.`],
          ['What we store',
            'When you sign in: only with your Google or Apple account (Firebase Authentication). We store the account\'s permanent ID, and your name and email if Google or Apple give them to us (Apple lets you hide your email). When you order: the name and phone number you enter, what you order, the time and status, the kitchen\'s answer (pickup time or reason for declining) and your phone\'s notification token. Against fake orders: the time of the last order from your account and your phone number (no more than one every 2 minutes), and, if a venue blocks a fake order, the account or number as blocked for that venue.'],
          ['Why and on what legal basis',
            'To provide the service (performance of a contract, Art. 6(1)(b) GDPR): your account, passing your order to the kitchen and the notifications about it. Against fake orders (legitimate interest, Art. 6(1)(f) GDPR): so venues do not waste time and food on orders nobody collects.'],
          ['Who sees your order',
            'Only the kitchen of the venue you ordered from; each venue sees only its own orders. We have access to the system to maintain it.'],
          ['Where data is stored',
            'The database is Google Firebase / Cloud Firestore on servers in the European Union (region eur3). The notification function runs on Google Cloud in Belgium (europe-west1).'],
          ['Notifications and transfers outside the EU',
            'On Android notifications go through Firebase Cloud Messaging (Google); on iPhone through Expo (650 Industries, USA) and the Apple Push Notification service. So the notification token and the notification text leave the EU. Signing in with Google or Apple also goes through them. Transfers to the USA are covered by the European Commission\'s Standard Contractual Clauses or the EU-US Data Privacy Framework (Art. 45 and 46 GDPR).'],
          ['What stays only on your phone',
            'Your favourite dishes, the orders you hid and the last venue you opened. They never reach us.'],
          ['How long',
            'Your account: until you delete it. Orders: they stay in the venue\'s records for its accounting. The time of your last order is overwritten by the next one. A block for a fake order stays until the venue or we remove it.'],
          ['Deleting your account',
            'In the app, under "Orders", there is "Delete account": it deletes your sign-in account at once. The orders you already placed stay in the venue\'s records with the name and phone number you entered in them, no longer linked to an account. For any other deletion write to support@pixellabsoft.com; we answer within 30 days.'],
          ['Your rights',
            'You can access your data, correct it, ask for it to be deleted, restrict its processing, object to processing based on legitimate interest and receive it in a portable form. Write to support@pixellabsoft.com. You can also complain to the Bulgarian Commission for Personal Data Protection (cpdp.bg).'],
          ['Children',
            'Pixel Food is not meant for anyone under 16. We do not knowingly collect children\'s data.'],
          ['Changes',
            'If we change how the app handles data, we will update this text and its date. The current version is always here and in the app.'],
        ],
      },
    },
    deletion: {
      bg: {
        updated: UPDATED.bg,
        intro: 'Ето как се изтрива акаунт в Pixel Food и какво става след това.',
        sections: [
          ['От приложението', 'Pixel Food → „Поръчки“ → „Изтрий акаунта“. Пита още веднъж и след потвърждението изтрива профила ти за вход веднага.'],
          ['С писмо', 'Пиши на support@pixellabsoft.com от имейла на профила си със заглавие „Изтриване на акаунт“. Изтриваме до 30 дни, обикновено до два работни дни.'],
          ['Какво се изтрива', 'Профилът ти за вход (номерът от Google или Apple, името и имейлът).'],
          ['Какво остава и защо', 'Поръчките, които вече си направил, остават в отчета на заведението, за неговото счетоводство, с името и телефона, които си въвел в тях. Вече не са свързани с профил. Ако искаш да бъдат изтрити и те, пиши ни.'],
          ['Няма връщане назад', 'Изтритият профил не се възстановява. Ако влезеш пак, започваш с нов профил, без история на поръчките.'],
        ],
      },
      en: {
        updated: UPDATED.en,
        intro: 'This is how you delete a Pixel Food account and what happens afterwards.',
        sections: [
          ['From the app', 'Pixel Food → "Orders" → "Delete account". It asks once more and, after you confirm, deletes your sign-in account at once.'],
          ['By email', 'Write to support@pixellabsoft.com from your account\'s email with the subject "Delete account". We delete within 30 days, usually within two working days.'],
          ['What is deleted', 'Your sign-in account (the Google or Apple ID, your name and email).'],
          ['What stays and why', 'The orders you already placed stay in the venue\'s records for its accounting, with the name and phone number you entered in them. They are no longer linked to an account. If you want them deleted too, write to us.'],
          ['No way back', 'A deleted account cannot be restored. If you sign in again, you start with a new account and no order history.'],
        ],
      },
    },
  },
};
