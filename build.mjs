import { cp, mkdir, readFile, rm, writeFile } from 'node:fs/promises';
import { join } from 'node:path';
import { APPS } from './src/apps/index.mjs';
import { LINGBOLT_LANGS } from './src/i18n/langs.mjs';
import { SHOTS } from './src/mocks.mjs';
import { COMPANY, DOMAIN, LANGS, STRINGS, SUPPORT_EMAIL } from './src/site.mjs';
import { LEGAL_PATH, href, imeto, aboutBand, appBody, homeBody, legalBody, page, supportBody } from './src/template.mjs';

/**
 * Генерира сайта в docs/ (GitHub Pages сервира тази папка).
 *
 *   cd "C:\Pixel Lab Claude\7 Pixel Lab Soft\sajt"
 *   node build.mjs
 *
 * Всяка страница е /път/index.html, за да има чисти адреси без .html.
 */

const OUT = 'docs';

// ---- за търсачките: кой сме и какви са приложенията (JSON-LD, schema.org) ----
const ORG = lang => ({
  '@type': 'Organization', name: (COMPANY[lang] ?? COMPANY.en).name, alternateName: 'Pixel Lab Soft',
  url: `https://${DOMAIN}/`, logo: `https://${DOMAIN}/assets/favicon-512.png`, email: SUPPORT_EMAIL,
  sameAs: ['https://sortis.pro', 'https://glagoli.app'],
});
const KATEGORIA = { sroko: 'UtilitiesApplication', glagoli: 'BookApplication', sortis: 'BusinessApplication', lingbolt: 'UtilitiesApplication',
  konspekt: 'BusinessApplication', calvio: 'BusinessApplication' };
const appLd = (app, lang) => {
  const os = app.external?.download ? ['Windows'] : [app.appStore && 'iOS', app.playStore && 'Android'].filter(Boolean);
  const ld = {
    '@context': 'https://schema.org', '@type': app.external?.download ? 'SoftwareApplication' : 'MobileApplication',
    name: imeto(app, lang), description: app.description[lang][0], url: `https://${DOMAIN}${href(lang, app.slug + '/')}`,
    applicationCategory: KATEGORIA[app.slug] ?? 'UtilitiesApplication', publisher: ORG(lang), inLanguage: lang,
    image: `https://${DOMAIN}/assets/og/${app.slug}-${lang === 'bg' ? 'bg' : 'en'}.png`,
  };
  if (os.length) ld.operatingSystem = os.join(', ');
  const dl = [app.appStore, app.playStore, app.external?.download].filter(Boolean);
  if (dl.length) ld.downloadUrl = dl.length === 1 ? dl[0] : dl;
  return ld;
};
const apps = APPS.filter(a => !a.draft);

// ---- Lingbolt на другите си езици (src/i18n/lingbolt.json от tools/translate_lingbolt.py) ----
// Надписите на сайта, които липсват в превода, остават английски.
const lingbolt = APPS.find(a => a.slug === 'lingbolt');
const translated = JSON.parse(await readFile(join('src', 'i18n', 'lingbolt.json'), 'utf-8'));
const MORE = LINGBOLT_LANGS.map(l => l.code).filter(code => code !== 'bg' && code !== 'en');
for (const code of MORE) {
  const t = translated[code];
  if (!t) throw new Error(`src/i18n/lingbolt.json has no ${code}: run tools/translate_lingbolt.py`);
  const pick = prefix => Object.keys(t).filter(k => k.startsWith(prefix)).sort().map(k => t[k]);
  STRINGS[code] = { ...STRINGS.en, ...Object.fromEntries(Object.entries(t).filter(([k]) => k.startsWith('site.')).map(([k, v]) => [k.slice(5), v])) };
  lingbolt.tagline[code] = t.tagline;
  lingbolt.features[code] = pick('feature.');
  lingbolt.description[code] = pick('description.');
  SHOTS.lingbolt.alt[code] = t.alt;
}

async function emit(lang, path, html) {
  const dir = join(OUT, lang === 'bg' ? '' : lang, path);
  await mkdir(dir, { recursive: true });
  await writeFile(join(dir, 'index.html'), html);
}

await rm(OUT, { recursive: true, force: true });
await mkdir(OUT, { recursive: true });
await writeFile(join(OUT, 'CNAME'), DOMAIN + '\n');
await writeFile(join(OUT, '.nojekyll'), '');
// Снимки на приложенията (истински екрани) — влизат в сайта както са.
await cp(join('src', 'assets'), join(OUT, 'assets'), { recursive: true });
// IndexNow (Bing, Yandex…): ключът е публичен по замисъл — файлът доказва, че сайтът е наш.
// Пинг след качване: python tools/indexnow.py
export const INDEXNOW_KEY = 'ce9627f068b626b12c972aaa0735b430';
await writeFile(join(OUT, `${INDEXNOW_KEY}.txt`), INDEXNOW_KEY);
await writeFile(join(OUT, 'robots.txt'), `User-agent: *\nAllow: /\nSitemap: https://${DOMAIN}/sitemap.xml\n`);

const urls = [];
for (const lang of LANGS) {
  const t = STRINGS[lang];
  const add = p => urls.push(`https://${DOMAIN}${lang === 'bg' ? '/' : '/en/'}${p}`);

  await emit(lang, '', page({ lang, path: '', title: `${t.siteName} — ${t.tagline}`, description: t.homeLead, body: homeBody({ lang, apps }), after: aboutBand(lang),
    jsonld: { '@context': 'https://schema.org', '@graph': [ORG(lang), { '@type': 'WebSite', name: t.siteName, url: `https://${DOMAIN}${lang === 'bg' ? '/' : '/en/'}`, inLanguage: lang }] } }));
  add('');
  await emit(lang, 'support', page({ lang, path: 'support/', title: `${t.support} — ${t.siteName}`, description: t.supportLead, body: supportBody({ lang, apps }) }));
  add('support/');

  for (const app of apps) {
    await emit(lang, app.slug, page({
      lang, path: `${app.slug}/`, title: `${imeto(app, lang)} — ${app.tagline[lang]}`,
      description: app.description[lang][0], body: appBody({ lang, app }), color: app.color,
      image: `/assets/og/${app.slug}-${lang}.png`, jsonld: appLd(app, lang),
    }));
    add(`${app.slug}/`);
    if (!app.legal) continue;
    for (const kind of ['privacy', 'terms', 'deletion']) {
      if (!app.legal[kind]) continue;
      const doc = app.legal[kind][lang];
      const label = kind === 'privacy' ? t.privacy : kind === 'deletion' ? t.deletion : t.terms;
      const path = `${app.slug}/${LEGAL_PATH[kind]}`;
      await emit(lang, path, page({
        lang, path: `${path}/`, title: `${label} — ${imeto(app, lang)}`, description: doc.intro,
        body: legalBody({ lang, app, kind, doc }), color: app.color, image: `/assets/og/${app.slug}-${lang}.png`,
      }));
      add(`${path}/`);
    }
  }
}

for (const lang of MORE) {
  await emit(lang, lingbolt.slug, page({
    lang, path: `${lingbolt.slug}/`, title: `${lingbolt.name} — ${lingbolt.tagline[lang]}`,
    description: lingbolt.description[lang][0], body: appBody({ lang, app: lingbolt }), color: lingbolt.color,
    image: `/assets/og/${lingbolt.slug}-en.png`, jsonld: appLd(lingbolt, lang),
  }));
  urls.push(`https://${DOMAIN}${href(lang, lingbolt.slug + '/')}`);
}

// /sroko/get/ — линкът от платената реклама във Facebook: към магазина според
// устройството, веднага. Не е в sitemap-а и е noindex; без бисквитки и проследяване.
// Линковете са тези от src/apps/sroko.mjs — на едно място.
const sroko = APPS.find(a => a.slug === 'sroko');
await mkdir(join(OUT, 'sroko', 'get'), { recursive: true });
await writeFile(join(OUT, 'sroko', 'get', 'index.html'), `<!doctype html>
<html lang="bg"><head><meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<meta name="robots" content="noindex,nofollow">
<title>Сроко</title>
<script>(function () {
  var ua = navigator.userAgent || '';
  // iPadOS 13+ в Safari се представя като Mac — познава се по тъча.
  var ios = /iPhone|iPad|iPod/i.test(ua) || (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);
  location.replace(ios ? ${JSON.stringify(sroko.appStore)}
    : /Android/i.test(ua) ? ${JSON.stringify(sroko.playStore)}
    : ${JSON.stringify(`https://${DOMAIN}/sroko/`)});
})();</script>
<style>body{font-family:system-ui,sans-serif;text-align:center;padding:48px 16px;background:#fff;color:#1a1d24}
a{display:inline-block;margin:8px;padding:12px 20px;border-radius:10px;background:#2756FF;color:#fff;text-decoration:none;font-weight:600}</style>
</head><body>
<noscript>
<h1>Сроко</h1>
<p><a href="${sroko.appStore}">App Store</a><a href="${sroko.playStore}">Google Play</a></p>
<p><a href="https://${DOMAIN}/sroko/" style="background:none;color:#2756FF">pixellabsoft.com/sroko</a></p>
</noscript>
</body></html>
`);

await writeFile(join(OUT, 'sitemap.xml'),
  `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n` +
  urls.map(u => `  <url><loc>${u}</loc></url>`).join('\n') + '\n</urlset>\n');

await writeFile(join(OUT, '404.html'), page({
  lang: 'bg', path: '', title: 'Няма такава страница — Пиксел Лаб Софт', description: '',
  body: `<h1>Няма такава страница</h1><p class="lead">Адресът е грешен или страницата е преместена.</p><p><a href="/">Към началото</a> · <a href="/en/">English</a></p>`,
}));

console.log(`${urls.length} страници в ${OUT}/ за ${apps.length} приложения.`);
