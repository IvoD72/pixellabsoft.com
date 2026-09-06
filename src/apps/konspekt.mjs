/**
 * Konspekt — записва среща, връща резюме, решения и задачи.
 *
 * ⚑ Правните текстове описват това, което кодът НАИСТИНА прави (6.09.2026):
 * вход с Apple / Google / имейл+парола; записът минава през нашия сървър
 * и се трие; транскрипция при Google (Gemini); плащания през App Store с
 * RevenueCat като обработващ; при нас остават самоличност, план и минути.
 * Смени ли се кодът — сменя се и това. Същите текстове стоят и в
 * приложението (05 Kod/app/legal) — да се държат еднакви.
 *
 * ⚑ ЗА ПУБЛИКУВАНЕ ТРЯБВА ЮРИСТ за формалната част (основание по GDPR,
 * приложимо право, спорове). Фактите тук са верни.
 */

const UPDATED = { bg: '6 септември 2026', en: '6 September 2026' };

export default {
  slug: 'konspekt',
  color: '#f0432f',
  icon: '<path d="M4 10v4M8 7v10M12 4v16M16 8v8M20 11v2"/>',
  name: 'Konspekt',
  status: 'testing', // 'testing' | 'store' | 'soon'
  appStore: null,     // линкът идва след одобрението
  playStore: null,
  features: {
    bg: ['Запис при заключен екран', 'Кой какво е казал', 'Цитат към всяка задача', 'Български и английски'],
    en: ['Records with the screen locked', 'Who said what', 'A quote behind every task', 'Bulgarian and English'],
  },
  tagline: {
    bg: 'Протоколът от срещата, без да пишеш.',
    en: 'The meeting minutes, without taking notes.',
  },
  description: {
    bg: [
      'Konspekt записва деловата среща на телефона ти, превръща я в текст на български и английски, разделя кой какво е казал и след срещата изготвя резюме, взетите решения и задачите — всяка с дословен цитат, за да провериш.',
      'Записът работи и със заключен екран. Срещите стоят на телефона ти, не при нас; звукът се трие сам след срок, който ти избираш.',
      'Първите два часа са безплатни. После — план по часове на месец: Основен (10 ч), Работен (26 ч), Активен (45 ч), плюс пакети за месеците с повече срещи.',
    ],
    en: [
      'Konspekt records your business meeting on your phone, turns it into text in Bulgarian and English, separates who said what, and after the meeting prepares a summary, the decisions taken and the tasks — each with a verbatim quote so you can check.',
      'Recording works with the screen locked. Meetings live on your phone, not with us; audio deletes itself after a period you choose.',
      'The first two hours are free. Then a plan by hours per month: Basic (10 h), Business (26 h), Active (45 h), plus hour packs for busier months.',
    ],
  },
  legal: {
    privacy: {
      bg: {
        updated: UPDATED.bg,
        intro:
          'Konspekt записва срещи, значи работи с чужди разговори. Затова този текст е кратък и казва точно какво става, а не какво звучи добре.',
        sections: [
          ['Кой обработва данните',
            'Пиксел Лаб ЕООД, България. Приложението се казва Konspekt. За въпроси и за упражняване на правата ти пиши на support@pixellabsoft.com.'],
          ['Какво пазим за теб',
            'Самоличност: постоянен номер от Apple или Google, който те разпознава при вход, и имейлът ти, ако си го споделил; при вход с имейл и парола — имейлът и защитен отпечатък на паролата (самата парола не се пази и не може да се възстанови от него). Освен това — кой план имаш и до кога, и колко минути запис си използвал през текущия месец. Това е всичко.'],
          ['Какво НЕ пазим',
            'Записите от срещите не остават при нас. Всеки запис се приема във временен файл, изпраща се за транскрипция и се изтрива веднага след това — и когато обработката успее, и когато се провали. Транскрипцията, резюмето и задачите не минават през нашата база; те се връщат на телефона ти и живеят там.'],
          ['Кой друг вижда записа',
            'Транскрипцията и резюмето се правят от Google (Gemini API). Записът отива при тях за времето на обработката и не се ползва за обучение на модели по условията на Google за платен достъп. Ако ползваш собствен Google ключ, записът тръгва от телефона ти направо към Google и изобщо не минава през нас.'],
          ['Плащания',
            'Абонаментите и пакетите часове се купуват през App Store (и Google Play, когато е наличен). Разписките се проверяват от RevenueCat, Inc. (САЩ), който ни казва само какъв план имаш и до кога — без данни за карти. Картата ти и фактурата са при Apple или Google; ние не ги виждаме.'],
          ['Къде стоят данните',
            'Сървърът е в Google Cloud, регион europe-west1 (Белгия) — в Европейския съюз. Срещите, транскрипциите и звукът стоят на твоя телефон, в защитеното хранилище на приложението.'],
          ['Колко дълго',
            'Звукът на телефона се трие сам след срока, който си избрал в Настройки — 30, 60 или 90 дни, или никога, ако си избрал ръчно изтриване. Текстът на срещата остава, докато ти не я изтриеш. При нас профилът ти стои, докато не поискаш да бъде изтрит; месечните минути се нулират всеки месец.'],
          ['Записване на други хора',
            'Ти решаваш кого записваш и ти отговаряш за това. Приложението има екран за съгласие и запазва часа, в който присъстващите са се съгласили. Ползвай го — в България записването на разговор без знанието на участниците може да е нарушение.'],
          ['Твоите права',
            'Можеш да поискаш какво пазим за теб, да го поправиш или да поискаш изтриване на профила — на support@pixellabsoft.com, отговаряме до 30 дни. Срещите на телефона трием ти сам — от списъка или от Настройки → Изтрий всички записи. Имаш право и на жалба до Комисията за защита на личните данни (cpdp.bg).'],
          ['Деца',
            'Konspekt е за делова употреба и не е предназначен за лица под 16 години. Не събираме съзнателно данни за деца.'],
          ['Промени',
            'Ако променим тази политика така, че да има значение за теб, ще ти кажем в приложението, преди промяната да влезе в сила. Датата горе показва последната версия.'],
        ],
      },
      en: {
        updated: UPDATED.en,
        intro:
          'Konspekt records meetings, which means it handles other people’s conversations. So this text is short and says exactly what happens, not what sounds nice.',
        sections: [
          ['Who processes the data',
            'Pixel Lab EOOD, Bulgaria. The app is called Konspekt. For questions and to exercise your rights, write to support@pixellabsoft.com.'],
          ['What we keep about you',
            'Identity: a permanent identifier from Apple or Google that recognises you at sign-in, and your email if you chose to share it; with email-and-password sign-in — your email and a secure hash of the password (the password itself is not stored and cannot be recovered from it). Besides that — which plan you have and until when, and how many minutes of recording you have used in the current month. That is all.'],
          ['What we do NOT keep',
            'Meeting recordings do not stay with us. Each recording is received into a temporary file, sent for transcription and deleted immediately afterwards — whether processing succeeds or fails. The transcript, summary and tasks do not pass through our database; they are returned to your phone and live there.'],
          ['Who else sees the recording',
            'Transcription and summary are produced by Google (Gemini API). The recording goes to them for the duration of processing and is not used to train models under Google’s paid-access terms. If you use your own Google key, the recording goes from your phone straight to Google and never passes through us.'],
          ['Payments',
            'Subscriptions and hour packs are bought through the App Store (and Google Play, where available). Receipts are verified by RevenueCat, Inc. (USA), which tells us only which plan you have and until when — no card data. Your card and invoice are with Apple or Google; we never see them.'],
          ['Where the data lives',
            'The server runs in Google Cloud, region europe-west1 (Belgium) — inside the European Union. Meetings, transcripts and audio stay on your phone, in the app’s protected storage.'],
          ['For how long',
            'Audio on the phone deletes itself after the period you chose in Settings — 30, 60 or 90 days, or never if you chose manual deletion. The meeting text stays until you delete it. Your profile with us stays until you ask for it to be deleted; monthly minutes reset every month.'],
          ['Recording other people',
            'You decide whom you record and you are responsible for it. The app has a consent screen and saves the time at which those present agreed. Use it — in Bulgaria, recording a conversation without the participants’ knowledge may be unlawful.'],
          ['Your rights',
            'You may ask what we keep about you, correct it, or ask for your profile to be deleted — at support@pixellabsoft.com; we answer within 30 days. Meetings on the phone you delete yourself — from the list or via Settings → Delete all recordings. You also have the right to lodge a complaint with the Bulgarian Commission for Personal Data Protection (cpdp.bg).'],
          ['Children',
            'Konspekt is for business use and is not intended for anyone under 16. We do not knowingly collect data about children.'],
          ['Changes',
            'If we change this policy in a way that matters to you, we will tell you in the app before the change takes effect. The date above shows the latest version.'],
        ],
      },
    },
    terms: {
      bg: {
        updated: UPDATED.bg,
        intro:
          'Кратко и на човешки език. Ако нещо тук ти се струва неясно, питай — по-добре да го напишем по-разбираемо, отколкото да го оставим така.',
        sections: [
          ['Какво получаваш',
            'Приложение, което записва среща, превръща я в текст, разделя говорителите и прави резюме със задачи. Работи на телефона ти; обработката минава през наш сървър или, ако си избрал собствен ключ, направо през Google.'],
          ['Какво не обещаваме',
            'Транскрипцията се прави от машина и греши — с имена, с числа, с припокрити реплики. Резюмето и задачите също. Всяка задача носи дословен цитат от разговора точно затова: за да можеш да провериш. Протоколът от Konspekt не е стенограма и не е доказателство.'],
          ['Ти отговаряш за записа',
            'Твоя е отговорността да имаш право да записваш разговора и да уведомиш присъстващите. Приложението ти дава екран за съгласие и запазва часа му, но не проверява дали си го ползвал.'],
          ['Пробен период и планове',
            'Всеки нов акаунт получава 2 часа запис безплатно, без карта и без срок. След това е нужен план: Основен (10 часа на месец), Работен (26 часа) или Активен (45 часа). Часовете се броят по истинската дължина на обработения звук и се нулират в началото на всеки календарен месец. Неизползваните часове не се прехвърлят.'],
          ['Абонаменти',
            'Плановете са месечни или годишни абонаменти през App Store (и Google Play, когато е наличен). Абонаментът се подновява автоматично в края на всеки период, докато не бъде спрян поне 24 часа преди това — от настройките на твоя App Store / Google акаунт. При отказ часовете остават до края на платения период. Цената, която виждаш в приложението, е крайна, с включен ДДС; фактурата е от Apple или Google.'],
          ['Пакети часове',
            'Пакетите +10 и +30 часа са еднократни покупки и добавят часове само за календарния месец, в който са купени. Неизползваната част се губи в края на месеца.'],
          ['Връщане на пари',
            'Плащанията се управляват от Apple и Google според техните правила; връщане на пари се иска от тях, не от нас. Ние не можем да върнем плащане, направено през магазина.'],
          ['Спиране на достъпа',
            'Може да спрем достъп при явна злоупотреба — например при опит да се заобиколи месечният лимит. Записите и текстовете ти на телефона остават твои и не се пипат.'],
          ['Промени',
            'Ако променим условията така, че да имат значение за теб, ще ти кажем в приложението, преди промяната да влезе в сила.'],
          ['Кой стои зад това',
            'Пиксел Лаб ЕООД, ЕИК 205472124, ул. Славянска 24, 5100 Горна Оряховица, България. Приложимо е българското право. Въпроси: support@pixellabsoft.com.'],
        ],
      },
      en: {
        updated: UPDATED.en,
        intro:
          'Short and in plain language. If anything here seems unclear, ask — we would rather rewrite it more clearly than leave it as it is.',
        sections: [
          ['What you get',
            'An app that records a meeting, turns it into text, separates the speakers and produces a summary with tasks. It runs on your phone; processing goes through our server or, if you chose your own key, straight through Google.'],
          ['What we do not promise',
            'Transcription is done by a machine and makes mistakes — with names, numbers, overlapping speech. So do the summary and the tasks. Every task carries a verbatim quote from the conversation for exactly that reason: so you can check. Konspekt’s minutes are not a stenographic record and not evidence.'],
          ['You are responsible for the recording',
            'It is your responsibility to have the right to record the conversation and to inform those present. The app gives you a consent screen and saves its time, but does not check whether you used it.'],
          ['Free trial and plans',
            'Every new account gets 2 hours of recording free, with no card and no deadline. After that a plan is needed: Basic (10 hours a month), Business (26 hours) or Active (45 hours). Hours are counted by the real length of the processed audio and reset at the start of each calendar month. Unused hours do not roll over.'],
          ['Subscriptions',
            'Plans are monthly or yearly subscriptions through the App Store (and Google Play, where available). A subscription renews automatically at the end of each period unless cancelled at least 24 hours before, from the settings of your App Store / Google account. After cancellation the hours remain until the end of the paid period. The price you see in the app is final, VAT included; the invoice comes from Apple or Google.'],
          ['Hour packs',
            'The +10 and +30 hour packs are one-off purchases and add hours only for the calendar month in which they are bought. Any unused part is lost at the end of the month.'],
          ['Refunds',
            'Payments are handled by Apple and Google under their rules; refunds are requested from them, not from us. We cannot refund a payment made through the store.'],
          ['Suspending access',
            'We may suspend access in case of clear abuse — for example an attempt to circumvent the monthly limit. Your recordings and texts on the phone remain yours and are not touched.'],
          ['Changes',
            'If we change these terms in a way that matters to you, we will tell you in the app before the change takes effect.'],
          ['Who is behind this',
            'Pixel Lab EOOD, company ID 205472124, 24 Slavyanska St., 5100 Gorna Oryahovitsa, Bulgaria. Bulgarian law applies. Questions: support@pixellabsoft.com.'],
        ],
      },
    },
    deletion: {
      bg: {
        updated: UPDATED.bg,
        intro:
          'Google Play иска всяко приложение с акаунти да казва ясно как се изтрива акаунт. Ето как — от телефона или с едно писмо.',
        sections: [
          ['От приложението',
            'Konspekt → Настройки → Изтрий акаунта. Пита два пъти и след второто потвърждение изтрива веднага. Това е най-бързият път и не чака никого.'],
          ['С писмо',
            'Ако вече си махнал приложението, пиши на support@pixellabsoft.com от имейла, с който си влизал, със заглавие „Изтриване на акаунт". Отговаряме и изтриваме до 30 дни, обикновено до два работни дни.'],
          ['Какво се изтрива',
            'Целият ти профил при нас: номерът, с който Apple или Google те разпознава, имейлът, ако си го споделил, отпечатъкът на паролата при вход с имейл, кой план имаш и до кога, и колко минути си изкарал този месец. Не остава нищо, което да те посочва.'],
          ['Какво се изтрива на телефона',
            'Ако триеш акаунта от приложението, заедно с него се трият всички срещи на този телефон — звукът, транскрипциите и резюметата. Те и без това никога не са били при нас.'],
          ['Какво остава и защо',
            'Само номерата на транзакциите от App Store и Google Play — без име, без имейл, без сума. Те пазят една покупка да не се начисли два пъти и не могат да бъдат свързани с теб след изтриването. Ако Пиксел Лаб ЕООД има счетоводно задължение за документ, той стои при Apple или Google, не при нас.'],
          ['Абонаментът не се спира оттук',
            'Изтриването на акаунта не отменя абонамента. Него го спираш от App Store (Настройки → твоето име → Абонаменти) или от Google Play (Профил → Плащания и абонаменти). Ако не го спреш, плащането продължава, макар акаунтът да е изтрит.'],
          ['Няма връщане назад',
            'Изтритият акаунт не се възстановява. Ако влезеш пак с Apple или Google, се създава нов, празен акаунт — без план и без история.'],
        ],
      },
      en: {
        updated: UPDATED.en,
        intro:
          'Google Play asks every app with accounts to say plainly how an account is deleted. Here is how — from the phone, or with one email.',
        sections: [
          ['From the app',
            'Konspekt → Settings → Delete account. It asks twice and deletes immediately after the second confirmation. This is the fastest way and it waits for nobody.'],
          ['By email',
            'If you have already removed the app, write to support@pixellabsoft.com from the address you signed in with, subject “Delete account”. We answer and delete within 30 days, usually within two working days.'],
          ['What is deleted',
            'Your whole account with us: the identifier Apple or Google recognises you by, your email if you shared it, the password hash if you signed in with email, which plan you have and until when, and how many minutes you have used this month. Nothing that points to you is left.'],
          ['What is deleted on the phone',
            'If you delete the account from inside the app, every meeting on that phone goes with it — audio, transcripts and summaries. They were never with us in the first place.'],
          ['What stays, and why',
            'Only the transaction ids from the App Store and Google Play — no name, no email, no amount. They keep one purchase from being counted twice and cannot be linked to you after deletion. Where Pixel Lab EOOD has an accounting obligation for a document, that document sits with Apple or Google, not with us.'],
          ['A subscription is not cancelled here',
            'Deleting the account does not cancel a subscription. You cancel it in the App Store (Settings → your name → Subscriptions) or in Google Play (Profile → Payments and subscriptions). If you do not, billing continues even though the account is gone.'],
          ['There is no way back',
            'A deleted account is not restored. Signing in again with Apple or Google creates a new, empty account — no plan and no history.'],
        ],
      },
    },
  },
};
