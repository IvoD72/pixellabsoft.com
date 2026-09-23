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

await writeFile(join(OUT, 'sitemap.xml'),
  `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n` +
  urls.map(u => `  <url><loc>${u}</loc></url>`).join('\n') + '\n</urlset>\n');

await writeFile(join(OUT, '404.html'), page({
  lang: 'bg', path: '', title: 'Няма такава страница — Пиксел Лаб Софт', description: '',
  body: `<h1>Няма такава страница</h1><p class="lead">Адресът е грешен или страницата е преместена.</p><p><a href="/">Към началото</a> · <a href="/en/">English</a></p>`,
}));

console.log(`${urls.length} страници в ${OUT}/ за ${apps.length} приложения.`);
