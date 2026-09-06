/**
 * Генерира правните екрани на приложението Konspekt от текстовете на сайта,
 * на двата езика. Пуска се от папката на сайта:
 *
 *   cd "C:\Pixel Lab Claude\7 Pixel Lab Soft\sajt"
 *   node tools/gen-app-legal.mjs
 *
 * Пише в ..\..\6 Konspekt\05 Kod\app\legal\{privacy,terms}.tsx (CRLF).
 * Един източник: src/apps/konspekt.mjs → и сайтът, и приложението.
 */
import { writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import konspekt from '../src/apps/konspekt.mjs';

const here = dirname(fileURLToPath(import.meta.url));
const OUT = join(here, '..', '..', '..', '6 Konspekt', '05 Kod', 'app', 'legal');

const q = s => "'" + String(s).replace(/\\/g, '\\\\').replace(/'/g, "\\'") + "'";

function doc(kind, screen, titleKey, note) {
  const L = konspekt.legal[kind];
  const lang = l => `  ${l}: {
    updated: ${q(L[l].updated)},
    intro:
      ${q(L[l].intro)},
    sections: [
${L[l].sections.map(([h, b]) => `      {
        heading: ${q(h)},
        body:
          ${q(b)},
      },`).join('\n')}
    ],
  },`;
  return `import React from 'react';
import { LegalPage, type Section } from '../../src/components/LegalPage';
import { useLanguage } from '../../src/lib/language';

/**
${note}
 *
 * ⚑ ЕДИН ИЗТОЧНИК: същият текст стои на pixellabsoft.com/konspekt/${kind}/
 * (репо IvoD72/pixellabsoft.com, src/apps/konspekt.mjs, и двата езика).
 * Промяна се прави ТАМ и се пренася тук — файлът е генериран, не се пипа на ръка.
 *
 * ⚑ ЗА ПУБЛИКУВАНЕ ТРЯБВА ЮРИСТ за формалната част. Фактите са верни днес.
 */

type Doc = { updated: string; intro: string; sections: Section[] };

const DOC: Record<'bg' | 'en', Doc> = {
${lang('bg')}
${lang('en')}
};

export default function ${screen}() {
  const { t, language } = useLanguage();
  const d = DOC[language];
  return (
    <LegalPage
      title={t.legal.${titleKey}}
      updated={d.updated}
      intro={d.intro}
      sections={d.sections}
    />
  );
}
`.replace(/\n/g, '\r\n');
}

writeFileSync(join(OUT, 'privacy.tsx'), doc('privacy', 'PrivacyScreen', 'privacyTitle', ' * Политиката за поверителност — на езика на интерфейса.'));
writeFileSync(join(OUT, 'terms.tsx'), doc('terms', 'TermsScreen', 'termsTitle', ' * Условията за ползване — на езика на интерфейса.'));
console.log('privacy.tsx и terms.tsx са генерирани в', OUT);
