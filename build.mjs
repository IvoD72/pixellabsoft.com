import { mkdir, rm, writeFile } from 'node:fs/promises';
import { join } from 'node:path';
import { APPS } from './src/apps/index.mjs';
import { DOMAIN, LANGS, STRINGS } from './src/site.mjs';
import { appBody, homeBody, legalBody, page, supportBody } from './src/template.mjs';

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
      description: app.description[lang][0], body: appBody({ lang, app }),
    }));
    add(`${app.slug}/`);
    for (const kind of ['privacy', 'terms']) {
      const doc = app.legal[kind][lang];
      const title = `${kind === 'privacy' ? t.privacy : t.terms} — ${app.name}`;
      await emit(lang, `${app.slug}/${kind}`, page({
        lang, path: `${app.slug}/${kind}/`, title, description: doc.intro,
        body: legalBody({ lang, app, kind, doc }),
      }));
      add(`${app.slug}/${kind}/`);
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
