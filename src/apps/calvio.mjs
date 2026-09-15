/**
 * Calvio — AI телефонен асистент за малък бизнес. Предстои (15.09.2026).
 * Бивше работно име Nelo; кодът е в `2 Nelo`.
 *
 * ⚑ Правният текст описва това, което системата НАИСТИНА прави (15.09.2026):
 * има акаунти (Firebase Auth — телефон или имейл) и наш сървър (Google Cloud
 * Run + Firestore, регион europe-west1, Белгия). Обажданията минават през
 * Zadarma (номер) → Twilio (маршрут, VoIP към приложението, SMS покана) →
 * ElevenLabs (гласовият агент; там се обработва звукът и стои транскриптът).
 * Пазим: данни на бизнеса, настройки, записи за обажданията (номер, час,
 * продължителност, резюме/транскрипт), съобщения от живия асистент, пуш
 * токени. Плащане: Stripe, на сайта, месечен абонамент. Няма реклами.
 * Изтриване на акаунт: засега с писмо; бутонът в приложението предстои.
 * Смени ли се кодът — сменя се и този текст.
 */

const UPDATED = { bg: '15 септември 2026', en: '15 September 2026' };

export default {
  slug: 'calvio',
  color: '#0EA5B7',
  // Слушалка + звукова вълна — говорещ телефон.
  icon: '<path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.4 1.8.7 2.7a2 2 0 0 1-.5 2.1L8.1 9.8a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.7.7a2 2 0 0 1 1.8 2.1z"/><path d="M15 5a4 4 0 0 1 4 4M15 1.5a7.5 7.5 0 0 1 7.5 7.5"/>',
  name: 'Calvio',
  status: 'soon',
  appStore: null,
  playStore: null,
  features: {
    bg: ['Вдига вместо теб', 'Български глас', 'Жив асистент или ИИ', 'Съобщенията идват при теб'],
    en: ['Answers for you', 'Bulgarian voice', 'Live assistant or AI', 'Messages reach you'],
  },
  tagline: {
    bg: 'Телефонът на бизнеса ти вдига — дори когато ти не можеш.',
    en: 'Your business phone answers — even when you can’t.',
  },
  description: {
    bg: [
      'Calvio вдига телефона на бизнеса ти, когато ти си зает: с български гласов асистент или като звъни на жив човек от екипа ти. Записва кой е търсил и защо, и ти го праща. Скоро.',
    ],
    en: [
      'Calvio answers your business phone when you are busy: with a Bulgarian voice assistant, or by ringing a real person on your team. It notes who called and why, and sends it to you. Coming soon.',
    ],
  },
  legal: {
    privacy: {
      bg: {
        updated: UPDATED.bg,
        intro:
          'Calvio има акаунти и наш сървър, защото без тях няма как да вдигне телефона ти. Тук пише какво пазим, къде стои и кой друг го докосва по пътя на едно обаждане. Нищо не е скрито в дребен шрифт.',
        sections: [
          ['Кой обработва данните',
            'Пиксел Лаб ЕООД, ЕИК 205472124, ул. Славянска 24, 5100 Горна Оряховица, България. Приложението се казва Calvio. За въпроси пиши на support@pixellabsoft.com.'],
          ['Две роли — бизнесът и хората, които му звънят',
            'За данните на бизнеса (твоя акаунт, настройки, служители) ние сме администратор. За данните на хората, които звънят на твоя номер — техният номер и какво са казали — администратор си ти, защото те търсят теб, а ние обработваме от твое име. Затова ти решаваш колко дълго да пазиш записите и кой в екипа ти ги вижда.'],
          ['Какво пазим за бизнеса',
            'Име на фирмата и на собственика, телефонният номер на бизнеса, телефонът или имейлът за вход, телефонът на асистента, ако си добавил такъв, и настройките на асистентката — как се представя, работно време, професия, тон. Плюс техническия идентификатор на телефона за пуш известия. Ако си влязъл с имейл, паролата се пази само като отпечатък.'],
          ['Какво пазим от обажданията',
            'За всяко обаждане, поето от Calvio: номерът на обаждащия се, часът, продължителността и — когато е говорил гласовият асистент — резюме и текстов запис на разговора. Когато е вдигнал жив човек от екипа ти, пазим бележката, която той е написал. Тези записи са там, за да ги прочетеш ти; никой друг клиент не ги вижда.'],
          ['Гласовият асистент казва, че е автоматичен',
            'В началото на разговора асистентката се представя като автоматична. Това е задължение по Регламента на ЕС за изкуствения интелект и не може да се изключи от настройките. Тя не поема ангажименти от твое име, не казва цени и не дава съвети — записва и предава.'],
          ['Къде стоят данните',
            'Акаунтите, настройките и записите за обажданията стоят в Google Cloud (Firebase), регион Белгия, Европейски съюз. Достъп до тях има само Calvio от твое име и ти през приложението или таблото.'],
          ['Кой друг участва в едно обаждане',
            'Телефонният номер, който ти даваме, е от Zadarma (виртуални номера). Обаждането се пренасочва през Twilio (Twilio Inc., САЩ) — той го маршрутизира, звъни в приложението на асистента и изпраща SMS поканата с кода. Когато вдига гласовият асистент, звукът се обработва от ElevenLabs (ElevenLabs Inc., САЩ), който превръща речта в текст и обратно и пази текста на разговора при себе си, за да ти го покажем. Twilio и ElevenLabs са извън ЕС; работим с тях по договори за обработка на данни със стандартните договорни клаузи на Европейската комисия.'],
          ['Плащания',
            'Абонаментът се плаща на сайта през Stripe (Stripe Payments Europe, Ирландия). Картата е при Stripe; ние виждаме само кой план е активен и до кога. Не пазим номера на карти.'],
          ['Колко време пазим',
            'Докато акаунтът ти е активен. Записите за обажданията стоят, докато не ги изтриеш ти или не изтриеш акаунта си. Правилата за изтриване са на страницата „Изтриване на акаунт“.'],
          ['Реклами и проследяване',
            'Няма реклами и не продаваме данни. Не ползваме рекламни проследявачи.'],
          ['Твоите права',
            'Можеш да поискаш копие на данните си, да ги поправиш или да изтриеш акаунта си — от приложението или с писмо до support@pixellabsoft.com. Отговаряме до 30 дни, обикновено за два работни дни. Имаш право и на жалба до Комисията за защита на личните данни (cpdp.bg). Ако някой се е обаждал на твоя номер и пита за своите данни, ще ти помогнем да му отговориш.'],
          ['Промени',
            'Ако променим тази политика, датата горе ще го покаже, а актуалната версия винаги ще е на този адрес. При промяна, която те засяга, ще ти кажем и в приложението.'],
        ],
      },
      en: {
        updated: UPDATED.en,
        intro:
          'Calvio has accounts and a server of ours, because without them it could not answer your phone. This page says what we keep, where it lives, and who else touches it on the way of a call. Nothing is hidden in small print.',
        sections: [
          ['Who processes the data',
            'Pixel Lab EOOD, company ID 205472124, 24 Slavyanska St., 5100 Gorna Oryahovitsa, Bulgaria. The app is called Calvio. For questions, write to support@pixellabsoft.com.'],
          ['Two roles — the business, and the people who call it',
            'For the business’s data (your account, settings, staff) we are the controller. For the data of people who call your number — their number and what they said — you are the controller, because they are calling you, and we process on your behalf. That is why you decide how long records are kept and who on your team sees them.'],
          ['What we keep about the business',
            'Company and owner name, the business phone number, the phone or email used to sign in, the assistant’s phone if you added one, and the assistant’s settings — how she introduces herself, working hours, profession, tone. Plus the technical device identifier for push notifications. If you sign in with email, the password is stored only as a hash.'],
          ['What we keep from calls',
            'For every call handled by Calvio: the caller’s number, the time, the duration and — when the voice assistant spoke — a summary and a text transcript of the conversation. When a real person on your team answered, we keep the note they wrote. These records exist so that you can read them; no other customer sees them.'],
          ['The voice assistant says it is automated',
            'At the start of the call the assistant introduces herself as automated. This is an obligation under the EU Artificial Intelligence Act and cannot be switched off in the settings. She makes no commitments on your behalf, quotes no prices and gives no advice — she takes the message and passes it on.'],
          ['Where the data lives',
            'Accounts, settings and call records are stored in Google Cloud (Firebase), Belgium region, European Union. Only Calvio acting for you, and you through the app or the dashboard, have access.'],
          ['Who else takes part in a call',
            'The phone number we give you comes from Zadarma (virtual numbers). The call is routed through Twilio (Twilio Inc., USA), which connects it, rings the assistant’s app and sends the SMS invitation with the code. When the voice assistant answers, the audio is processed by ElevenLabs (ElevenLabs Inc., USA), which turns speech into text and back and keeps the text of the conversation so that we can show it to you. Twilio and ElevenLabs are outside the EU; we work with them under data processing agreements with the European Commission’s standard contractual clauses.'],
          ['Payments',
            'The subscription is paid on the website through Stripe (Stripe Payments Europe, Ireland). The card stays with Stripe; we see only which plan is active and until when. We do not store card numbers.'],
          ['How long we keep it',
            'For as long as your account is active. Call records stay until you delete them or delete your account. The deletion rules are on the “Delete account” page.'],
          ['Ads and tracking',
            'No ads, and we do not sell data. We use no advertising trackers.'],
          ['Your rights',
            'You can request a copy of your data, correct it, or delete your account — from the app or by writing to support@pixellabsoft.com. We answer within 30 days, usually within two working days. You also have the right to lodge a complaint with the Bulgarian Commission for Personal Data Protection (cpdp.bg). If someone who called your number asks about their data, we will help you answer them.'],
          ['Changes',
            'If we change this policy, the date above will show it, and the current version will always be at this address. For a change that affects you, we will also tell you in the app.'],
        ],
      },
    },
    terms: {
      bg: {
        updated: UPDATED.bg,
        intro:
          'Кратко и на човешки език. Calvio е услуга за бизнеси, не за лична употреба. Ако нещо тук е неясно, питай — по-добре да го напишем по-разбираемо, отколкото да се караме после.',
        sections: [
          ['Кои сме',
            'Пиксел Лаб ЕООД, ЕИК 205472124, ул. Славянска 24, 5100 Горна Оряховица, България. support@pixellabsoft.com.'],
          ['Какво е услугата',
            'Calvio дава на бизнеса ти телефонен номер, към който пренасочваш своя, и вдига обажданията, когато ти не можеш — с гласов асистент или като звъни на човек от екипа ти. Записва кой е търсил и защо и ти го предава. Пренасочването го включваш и спираш ти, от твоя телефон, по всяко време.'],
          ['Какво асистентката не прави',
            'Не поема ангажименти от твое име, не казва цени, срокове и условия, не дава правни, медицински или финансови съвети. Тя записва и предава; решенията остават при теб. Ти отговаряш за това, което ѝ казваш да съобщава на клиентите ти.'],
          ['Твоите задължения',
            'Да ползваш услугата законно и за собствения си бизнес. Да не я насочваш към чужд номер без съгласие. Да имаш право да обработваш данните на хората, които ти звънят — това са твои клиенти и ти си администратор на техните данни. Да не ползваш услугата за спам, измами или обаждания, които законът забранява.'],
          ['Плащане и отказ',
            'Абонаментът е месечен, плаща се на сайта през Stripe, с включени минути според плана. Можеш да го спреш по всяко време; спира от края на платения месец, без връщане за оставащите дни. Ако минутите свършат, ти казваме преди да се начисли нещо отгоре.'],
          ['Наличност',
            'Обаждането минава през телефонни оператори и доставчици, които не са наши. Правим всичко, за да работи, но не гарантираме, че всяко обаждане ще стигне и че записът ще е пълен. Ако нещо се счупи при нас, го оправяме възможно най-бързо и ти казваме.'],
          ['Отговорност',
            'Calvio помага да не изпуснеш клиент; не замества човек и не носи отговорност за сделки, срокове или загуби, породени от пропуснато или неточно предадено съобщение. Отговорността ни е ограничена до платеното за последния месец.'],
          ['Прекратяване',
            'Можеш да изтриеш акаунта си по всяко време. Ние можем да спрем услуга, която се ползва в нарушение на тези условия или на закона, след като те предупредим — освен при злоупотреба, където спираме веднага.'],
          ['Промени и право',
            'Ако променим условията, ще ти кажем в приложението преди да влязат в сила. Прилага се българското право; спорове се решават от компетентния съд в България, след опит да се разберем по имейл.'],
        ],
      },
      en: {
        updated: UPDATED.en,
        intro:
          'Short and in plain language. Calvio is a service for businesses, not for personal use. If anything here is unclear, ask — better to write it more clearly than to argue later.',
        sections: [
          ['Who we are',
            'Pixel Lab EOOD, company ID 205472124, 24 Slavyanska St., 5100 Gorna Oryahovitsa, Bulgaria. support@pixellabsoft.com.'],
          ['What the service is',
            'Calvio gives your business a phone number you forward your own to, and answers calls when you cannot — with a voice assistant, or by ringing a person on your team. It notes who called and why, and passes it on to you. You switch forwarding on and off yourself, from your phone, at any time.'],
          ['What the assistant does not do',
            'She makes no commitments on your behalf, quotes no prices, deadlines or terms, and gives no legal, medical or financial advice. She takes the message and passes it on; decisions stay with you. You are responsible for what you instruct her to tell your customers.'],
          ['Your obligations',
            'To use the service lawfully and for your own business. Not to point it at someone else’s number without consent. To have the right to process the data of people who call you — they are your customers, and you are the controller of their data. Not to use the service for spam, fraud or calls the law prohibits.'],
          ['Payment and cancellation',
            'The subscription is monthly, paid on the website through Stripe, with minutes included according to the plan. You can cancel at any time; it ends at the end of the paid month, with no refund for the remaining days. If the minutes run out, we tell you before anything extra is charged.'],
          ['Availability',
            'A call passes through telephone operators and providers that are not ours. We do everything to make it work, but do not guarantee that every call will get through or that every record will be complete. If something breaks on our side, we fix it as fast as we can and tell you.'],
          ['Liability',
            'Calvio helps you not to miss a customer; it does not replace a person and bears no liability for deals, deadlines or losses caused by a missed or inaccurately relayed message. Our liability is limited to the amount paid for the last month.'],
          ['Termination',
            'You can delete your account at any time. We may suspend a service used in breach of these terms or the law after warning you — except in cases of abuse, where we suspend immediately.'],
          ['Changes and law',
            'If we change these terms, we will tell you in the app before they take effect. Bulgarian law applies; disputes are settled by the competent court in Bulgaria, after an attempt to resolve them by email.'],
        ],
      },
    },
    deletion: {
      bg: {
        updated: UPDATED.bg,
        intro:
          'Google Play иска всяко приложение с акаунти да казва ясно как се изтрива акаунт. Ето как. Засега пътят е с писмо; бутонът в приложението идва с първата версия в магазините.',
        sections: [
          ['С писмо',
            'Пиши на support@pixellabsoft.com от имейла или телефона, с който си влизал, със заглавие „Изтриване на акаунт“. Потвърждаваме, че си ти, и изтриваме до 30 дни — обикновено до два работни дни.'],
          ['От приложението',
            'В първата версия за магазините: Calvio → Настройки → Изтрий акаунта. Пита два пъти и след второто потвърждение изтрива веднага.'],
          ['Какво се изтрива',
            'Целият профил на бизнеса: имена, телефони, имейл, настройките на асистентката, местата на служителите, всички записи за обажданията с техните резюмета и транскрипти, съобщенията от живия асистент и идентификаторите за пуш известия. Текстовете на разговорите при ElevenLabs също се заличават по наша заявка.'],
          ['Какво остава и защо',
            'Само номерата на плащанията от Stripe и фактурните данни, които законът ни задължава да пазим за счетоводството — без записи от обаждания и без данни на хората, които са ти звънели. Те не могат да бъдат свързани с изтрития акаунт.'],
          ['Абонаментът',
            'Изтриването на акаунта спира и абонамента — няма да има следващо плащане. Оставащите дни от текущия месец не се връщат.'],
          ['Телефонният номер',
            'Номерът, който сме ти дали, се освобождава и след време може да бъде даден на друг клиент. Спри пренасочването от своя телефон преди да изтриеш акаунта, иначе обажданията ти ще отиват на номер, който вече не е твой.'],
          ['Няма връщане назад',
            'Изтритият акаунт не се възстановява. Ако се регистрираш пак, започваш от нулата — без номер, без история, без настройки.'],
        ],
      },
      en: {
        updated: UPDATED.en,
        intro:
          'Google Play asks every app with accounts to say plainly how an account is deleted. Here is how. For now the way is by email; the button in the app comes with the first store release.',
        sections: [
          ['By email',
            'Write to support@pixellabsoft.com from the email or phone you signed in with, subject “Delete account”. We confirm it is you and delete within 30 days — usually within two working days.'],
          ['From the app',
            'In the first store release: Calvio → Settings → Delete account. It asks twice and deletes immediately after the second confirmation.'],
          ['What is deleted',
            'The whole business profile: names, phones, email, the assistant’s settings, staff seats, every call record with its summaries and transcripts, the notes from the live assistant, and the push notification identifiers. Conversation texts held at ElevenLabs are erased at our request as well.'],
          ['What stays, and why',
            'Only the payment references from Stripe and the invoicing details the law obliges us to keep for accounting — with no call records and no data of the people who called you. They cannot be linked to the deleted account.'],
          ['The subscription',
            'Deleting the account also ends the subscription — there will be no further charge. The remaining days of the current month are not refunded.'],
          ['The phone number',
            'The number we gave you is released and may, after a while, be assigned to another customer. Switch off forwarding on your own phone before deleting the account, or your calls will go to a number that is no longer yours.'],
          ['No way back',
            'A deleted account is not restored. If you register again, you start from zero — no number, no history, no settings.'],
        ],
      },
    },
  },
};
