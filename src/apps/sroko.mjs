/**
 * Сроко — автомобилни срокове. Предстои (6.09.2026).
 *
 * ⚑ Правният текст описва това, което кодът НАИСТИНА прави (7.09.2026):
 * няма акаунти и няма наш сървър; всичко се пази в localStorage на
 * телефона; единствената външна заявка е публичната проверка на БГ Толл
 * (check.bgtoll.bg) с въведения рег. номер; известията се планират
 * локално от Capacitor LocalNotifications; няма реклами и няма анализ.
 * Смени ли се кодът — сменя се и този текст.
 * Изходникът: `8 Sroko/01 Dokumenti/privacy-policy.html`.
 */

const UPDATED = { bg: '7 септември 2026', en: '7 September 2026' };

export default {
  slug: 'sroko',
  color: '#4D64FA',
  // Същият знак като иконката на приложението: магистрала + зелена чавка (бели пълни форми, не контури).
  icon: '<g transform="translate(12 12) scale(1.22) translate(-12 -12)"><g fill="#fff" stroke="#fff" stroke-width=".7" stroke-linejoin="round"><path d="M8.8 4.6h2.05L10.5 9.2H7.2zM13.15 4.6h2.05L16.8 9.2H13.5z"/><path d="M3.6 10.3h16.8v1.1H3.6zM4.7 11.4h1.4l-.4 1.3H4.3zM17.9 11.4h1.4l.3 1.3h-1.4z"/><path d="M6.8 12.6h3.2l-.3 8H4.6zM14 12.6h3.2l2.2 8h-5.1z"/></g><circle cx="18.2" cy="6" r="3.4" fill="#2ED47A" stroke="none"/><path d="m16.5 6.15 1.15 1.25 2.3-2.5" stroke="#fff" stroke-width="1.05" fill="none"/></g>',
  name: 'Сроко',
  status: 'soon',
  features: {
    bg: ['Всички коли на едно място', 'Напомня преди да изтече', 'Без изненади на пътя'],
    en: ['All your cars in one place', 'Reminds you before it expires', 'No surprises on the road'],
  },
  tagline: {
    bg: 'Винетката — платена навреме, без изненади.',
    en: 'Your vignette — paid on time, no surprises.',
  },
  description: {
    bg: [
      'Сроко следи винетките на колите ти и ти напомня, преди да изтекат. Скоро.',
    ],
    en: [
      'Sroko keeps track of the road vignettes for your cars and reminds you before they expire. Coming soon.',
    ],
  },
  legal: {
    privacy: {
      bg: {
        updated: UPDATED.bg,
        intro:
          'Сроко няма акаунти и няма наш сървър. Рег. номерата и датите, които въвеждаш, стоят на твоя телефон и не идват при нас. Този текст казва точно това и нищо повече.',
        sections: [
          ['Кой обработва данните',
            'Пиксел Лаб ЕООД, България. Приложението се казва Сроко. За въпроси пиши на support@pixellabsoft.com.'],
          ['Какво пазим за теб',
            'Нищо. Няма регистрация, няма акаунт, няма наша база данни. Не събираме имена, имейли, телефони или местоположение.'],
          ['Къде стоят твоите данни',
            'Регистрационните номера, датите на сроковете (винетка, ГТП, гражданска, каско, книжка, сервиз), настройките за напомняния и езикът се пазят в хранилището на приложението на самия телефон. Не се качват никъде и ние нямаме достъп до тях. Ако изтриеш приложението или изчистиш данните му, изчезват заедно с него — затова няма и как да ти ги възстановим.'],
          ['Проверка на винетка',
            'За да покаже валидността на винетката, приложението изпраща въведения рег. номер към публичната проверка на Национално тол управление / БГ Толл (check.bgtoll.bg) — същата, която всеки може да ползва през браузър. Заявката тръгва директно от телефона ти и не минава през нас или през трета страна. Приложението не е свързано с и не е одобрено от БГ Толл, АПИ или Национално тол управление; данните за винетката се четат такива, каквито ги дава тяхната услуга.'],
          ['Кога питаме БГ Толл',
            'Само когато добавиш кола, когато винетката е изтекла и когато са минали повече от 30 дни от последната проверка — или когато натиснеш „Обнови“ сам. Не питаме на всяко отваряне.'],
          ['Известия',
            'Напомнянията се планират и показват локално от твоя телефон. Не минават през наши сървъри и никой освен теб не вижда кога и за какво звъни.'],
          ['Реклами и анализ',
            'Няма реклами. Няма проследяване, няма статистика за поведението, няма рекламен идентификатор.'],
          ['Плащания',
            'Платената версия („Pro“) се купува еднократно през магазина — Google Play или App Store. Картата и разписката са при тях; ние не ги виждаме и не ги пазим. Разписката се проверява от RevenueCat, Inc. (САЩ), който ни казва само дали покупката е валидна — без данни за карта и без име. Друго не се събира и няма абонамент.'],
          ['Твоите права',
            'Тъй като не държим твои данни, няма какво да ти предоставим, поправим или изтрием — всичко е на телефона ти и е под твой контрол. Ако все пак имаш въпрос, пиши на support@pixellabsoft.com. Имаш право и на жалба до Комисията за защита на личните данни (cpdp.bg).'],
          ['За какво не отговаряме',
            'Напомнянията са с информационна цел. Отговорността да платиш винетката и да спазиш сроковете си остава твоя — приложението помага, но не гарантира.'],
          ['Промени',
            'Ако променим тази политика, датата горе ще го покаже, а актуалната версия винаги ще е на този адрес.'],
        ],
      },
      en: {
        updated: UPDATED.en,
        intro:
          'Sroko has no accounts and no server of ours. The plate numbers and dates you enter stay on your phone and never reach us. This text says exactly that and nothing more.',
        sections: [
          ['Who processes the data',
            'Pixel Lab EOOD, Bulgaria. The app is called Sroko. For questions, write to support@pixellabsoft.com.'],
          ['What we keep about you',
            'Nothing. There is no registration, no account and no database of ours. We collect no names, emails, phone numbers or location.'],
          ['Where your data lives',
            'Plate numbers, deadline dates (vignette, roadworthiness, liability insurance, casco, driving licence, service), reminder settings and language are stored in the app’s storage on the phone itself. They are uploaded nowhere and we have no access to them. If you delete the app or clear its data, they go with it — which is also why we cannot restore them for you.'],
          ['Vignette check',
            'To show whether a vignette is valid, the app sends the plate number you entered to the public check of the Bulgarian National Toll Administration / BG Toll (check.bgtoll.bg) — the same one anyone can use in a browser. The request goes straight from your phone and passes neither through us nor through a third party. The app is not affiliated with, nor endorsed by, BG Toll or the Road Infrastructure Agency; vignette data is read exactly as their service returns it.'],
          ['When we ask BG Toll',
            'Only when you add a car, when the vignette has expired, and when more than 30 days have passed since the last check — or when you tap “Refresh” yourself. We do not ask on every launch.'],
          ['Notifications',
            'Reminders are scheduled and shown locally by your phone. They do not pass through any server of ours, and nobody but you sees when or about what they ring.'],
          ['Ads and analytics',
            'No ads. No tracking, no behavioural analytics, no advertising identifier.'],
          ['Payments',
            'The paid version (“Pro”) is bought once through the store — Google Play or the App Store. The card and the receipt stay with them; we never see or store them. The receipt is verified by RevenueCat, Inc. (USA), which tells us only whether the purchase is valid — no card data and no name. Nothing else is collected, and there is no subscription.'],
          ['Your rights',
            'Since we hold no data about you, there is nothing for us to provide, correct or erase — everything is on your phone and under your control. If you still have a question, write to support@pixellabsoft.com. You also have the right to lodge a complaint with the Bulgarian Commission for Personal Data Protection (cpdp.bg).'],
          ['What we do not answer for',
            'Reminders are informational. The responsibility to pay the vignette and meet your deadlines remains yours — the app helps, it does not guarantee.'],
          ['Changes',
            'If we change this policy, the date above will show it, and the current version will always be at this address.'],
        ],
      },
    },
  },
};
