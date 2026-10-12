import { cp, mkdir, rm, writeFile } from 'node:fs/promises';
import { join } from 'node:path';
import { APPS } from './src/apps/index.mjs';
import { DOMAIN, LANGS, STRINGS } from './src/site.mjs';
import { FAVICON, LEGAL_PATH, appBody, homeBody, legalBody, page, supportBody } from './src/template.mjs';

/**
 * Генерира сайта в docs/ (GitHub Pages сервира тази папка).
 *
 *   cd "C:\Pixel Lab Claude\7 Pixel Lab Soft\sajt"
 *   node build.mjs
 *
 * Всяка страница е /път/index.html, за да има чисти адреси без .html.
 */

const OUT = 'docs';
const apps = APPS.filter(a => !a.draft);

async function emit(lang, path, html) {
  const dir = join(OUT, lang === 'bg' ? '' : 'en', path);
  await mkdir(dir, { recursive: true });
  await writeFile(join(dir, 'index.html'), html);
}

await rm(OUT, { recursive: true, force: true });
await mkdir(OUT, { recursive: true });
await writeFile(join(OUT, 'CNAME'), DOMAIN + '\n');
await writeFile(join(OUT, '.nojekyll'), '');
await writeFile(join(OUT, 'favicon.svg'), FAVICON);
// Снимки на приложенията (истински екрани) — влизат в сайта както са.
await cp(join('src', 'assets'), join(OUT, 'assets'), { recursive: true });
await writeFile(join(OUT, 'robots.txt'), `User-agent: *\nAllow: /\nSitemap: https://${DOMAIN}/sitemap.xml\n`);

const urls = [];
for (const lang of LANGS) {
  const t = STRINGS[lang];
  const add = p => urls.push(`https://${DOMAIN}${lang === 'bg' ? '/' : '/en/'}${p}`);

  await emit(lang, '', page({ lang, path: '', title: `${t.siteName} — ${t.tagline}`, description: t.homeLead, body: homeBody({ lang, apps }) }));
  add('');
  await emit(lang, 'support', page({ lang, path: 'support/', title: `${t.support} — ${t.siteName}`, description: t.supportLead, body: supportBody({ lang, apps }) }));
  add('support/');

  for (const app of apps) {
    await emit(lang, app.slug, page({
      lang, path: `${app.slug}/`, title: `${app.name} — ${app.tagline[lang]}`,
      description: app.description[lang][0], body: appBody({ lang, app }), color: app.color,
    }));
    add(`${app.slug}/`);
    if (!app.legal) continue;
    for (const kind of ['privacy', 'terms', 'deletion']) {
      if (!app.legal[kind]) continue;
      const doc = app.legal[kind][lang];
      const label = kind === 'privacy' ? t.privacy : kind === 'deletion' ? t.deletion : t.terms;
      const path = `${app.slug}/${LEGAL_PATH[kind]}`;
      await emit(lang, path, page({
        lang, path: `${path}/`, title: `${label} — ${app.name}`, description: doc.intro,
        body: legalBody({ lang, app, kind, doc }), color: app.color,
      }));
      add(`${path}/`);
    }
  }
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
