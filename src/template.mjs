import { COMPANY, DOMAIN, STRINGS, SUPPORT_EMAIL } from './site.mjs';

/**
 * Един шаблон за всички страници. Без рамки, без JavaScript — текст,
 * заглавия, връзки. Визуалното е на Иво: всичко е в `CSS` по-долу,
 * с променливи най-отгоре, за да се сменя от едно място.
 */

export const CSS = `
:root {
  --bg: #fbfaf7; --fg: #1d1d1b; --muted: #6b6a66; --line: #e6e3dc;
  --accent: #2b5cff; --card: #ffffff; --max: 720px;
  --font: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, sans-serif;
}
@media (prefers-color-scheme: dark) {
  :root { --bg: #131313; --fg: #f1efe9; --muted: #a09e97; --line: #2a2a2a; --accent: #7a9bff; --card: #1c1c1c; }
}
* { box-sizing: border-box; }
html { color-scheme: light dark; }
body { margin: 0; background: var(--bg); color: var(--fg); font: 17px/1.6 var(--font); -webkit-font-smoothing: antialiased; }
a { color: var(--accent); text-decoration: none; }
a:hover { text-decoration: underline; }
header, main, footer { max-width: var(--max); margin: 0 auto; padding: 0 20px; }
header { display: flex; align-items: center; justify-content: space-between; gap: 16px; padding-top: 28px; padding-bottom: 8px; }
header .brand { font-weight: 700; letter-spacing: .01em; color: var(--fg); }
header nav a { margin-left: 18px; color: var(--muted); font-size: 15px; }
header nav a:hover { color: var(--fg); }
main { padding-top: 32px; padding-bottom: 64px; }
h1 { font-size: 34px; line-height: 1.15; margin: 0 0 8px; letter-spacing: -.01em; }
h2 { font-size: 20px; margin: 36px 0 8px; }
p { margin: 0 0 16px; }
.lead { font-size: 20px; color: var(--muted); margin-bottom: 32px; }
.meta { color: var(--muted); font-size: 14px; margin-bottom: 28px; }
.apps { display: grid; gap: 14px; margin-top: 8px; }
.app { display: block; padding: 20px; border: 1px solid var(--line); border-radius: 14px; background: var(--card); color: var(--fg); }
.app:hover { text-decoration: none; border-color: var(--accent); }
.app strong { font-size: 19px; }
.app span { display: block; color: var(--muted); margin-top: 4px; }
.badge { display: inline-block; font-size: 12px; font-weight: 600; letter-spacing: .04em; text-transform: uppercase; padding: 3px 9px; border-radius: 999px; border: 1px solid var(--line); color: var(--muted); margin-left: 10px; vertical-align: middle; }
.stores { display: flex; gap: 12px; flex-wrap: wrap; margin: 24px 0; }
.stores a, .button { display: inline-block; padding: 12px 18px; border-radius: 10px; background: var(--fg); color: var(--bg); font-weight: 600; }
.stores a:hover, .button:hover { text-decoration: none; opacity: .9; }
.legal-links { margin-top: 36px; padding-top: 20px; border-top: 1px solid var(--line); font-size: 15px; }
.legal-links a { margin-right: 18px; }
footer { border-top: 1px solid var(--line); padding-top: 24px; padding-bottom: 40px; color: var(--muted); font-size: 14px; line-height: 1.7; }
footer a { color: var(--muted); }
`;

const esc = s => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

/** Пътищата: BG е в корена, EN под /en/. */
export const href = (lang, path = '') => (lang === 'bg' ? '/' : '/en/') + path;

export function page({ lang, title, description, path, body, alt }) {
  const t = STRINGS[lang];
  const co = COMPANY[lang];
  const other = lang === 'bg' ? 'en' : 'bg';
  const canonical = `https://${DOMAIN}${href(lang, path)}`;
  const altUrl = `https://${DOMAIN}${href(other, alt ?? path)}`;
  return `<!doctype html>
<html lang="${lang}">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${esc(title)}</title>
<meta name="description" content="${esc(description)}">
<link rel="canonical" href="${canonical}">
<link rel="alternate" hreflang="${lang}" href="${canonical}">
<link rel="alternate" hreflang="${other}" href="${altUrl}">
<meta property="og:title" content="${esc(title)}">
<meta property="og:description" content="${esc(description)}">
<meta property="og:url" content="${canonical}">
<meta property="og:site_name" content="${esc(t.siteName)}">
<style>${CSS}</style>
</head>
<body>
<header>
  <a class="brand" href="${href(lang)}">${esc(t.siteName)}</a>
  <nav>
    <a href="${href(lang)}#apps">${esc(t.apps)}</a>
    <a href="${href(lang, 'support/')}">${esc(t.support)}</a>
    <a href="${href(other, alt ?? path)}" lang="${other}">${esc(t.otherLang)}</a>
  </nav>
</header>
<main>
${body}
</main>
<footer>
  <div>${esc(co.name)} · ${esc(co.eik)}<br>${esc(co.address)}<br><a href="mailto:${SUPPORT_EMAIL}">${SUPPORT_EMAIL}</a></div>
  <div style="margin-top:12px">© ${new Date().getFullYear()} ${esc(co.name)}. ${esc(t.footerRights)} ${esc(t.madeIn)}</div>
</footer>
</body>
</html>
`;
}

export function legalBody({ lang, app, kind, doc }) {
  const t = STRINGS[lang];
  const title = kind === 'privacy' ? t.privacy : t.terms;
  const sections = doc.sections.map(([h, p]) => `<h2>${esc(h)}</h2>\n<p>${esc(p)}</p>`).join('\n');
  return `<p class="meta"><a href="${href(lang, app.slug + '/')}">${esc(app.name)}</a> · ${esc(t.updated)}: ${esc(doc.updated)}</p>
<h1>${esc(title)}</h1>
<p class="lead">${esc(doc.intro)}</p>
${sections}
<div class="legal-links">
  <a href="${href(lang, app.slug + '/privacy/')}">${esc(t.privacy)}</a>
  <a href="${href(lang, app.slug + '/terms/')}">${esc(t.terms)}</a>
  <a href="${href(lang, 'support/')}">${esc(t.support)}</a>
</div>`;
}

export function appBody({ lang, app }) {
  const t = STRINGS[lang];
  const badge = app.status === 'store' ? '' : `<span class="badge">${esc(app.status === 'testing' ? t.statusTesting : t.statusSoon)}</span>`;
  const stores = [
    app.appStore ? `<a href="${app.appStore}">${esc(t.appStore)}</a>` : '',
    app.playStore ? `<a href="${app.playStore}">${esc(t.playStore)}</a>` : '',
  ].filter(Boolean).join('\n');
  return `<h1>${esc(app.name)}${badge}</h1>
<p class="lead">${esc(app.tagline[lang])}</p>
${app.description[lang].map(p => `<p>${esc(p)}</p>`).join('\n')}
${stores ? `<div class="stores">${stores}</div>` : ''}
<div class="legal-links">
  <a href="${href(lang, app.slug + '/privacy/')}">${esc(t.privacy)}</a>
  <a href="${href(lang, app.slug + '/terms/')}">${esc(t.terms)}</a>
  <a href="${href(lang, 'support/')}">${esc(t.support)}</a>
</div>`;
}

export function homeBody({ lang, apps }) {
  const t = STRINGS[lang];
  const cards = apps.map(app => {
    const badge = app.status === 'store' ? '' : `<span class="badge">${esc(app.status === 'testing' ? t.statusTesting : t.statusSoon)}</span>`;
    return `<a class="app" href="${href(lang, app.slug + '/')}"><strong>${esc(app.name)}</strong>${badge}<span>${esc(app.tagline[lang])}</span></a>`;
  }).join('\n');
  return `<h1>${esc(t.siteName)}</h1>
<p class="lead">${esc(t.tagline)}</p>
<p>${esc(t.homeLead)}</p>
<h2 id="apps">${esc(t.apps)}</h2>
<div class="apps">
${cards}
</div>`;
}

export function supportBody({ lang, apps }) {
  const t = STRINGS[lang];
  const links = apps.map(app =>
    `<li><a href="${href(lang, app.slug + '/')}">${esc(app.name)}</a> — <a href="${href(lang, app.slug + '/privacy/')}">${esc(t.privacy)}</a>, <a href="${href(lang, app.slug + '/terms/')}">${esc(t.terms)}</a></li>`,
  ).join('\n');
  return `<h1>${esc(t.support)}</h1>
<p class="lead">${esc(t.supportLead)}</p>
<p><strong>${esc(t.supportEmailLabel)}:</strong> <a href="mailto:${SUPPORT_EMAIL}">${SUPPORT_EMAIL}</a></p>
<h2>${esc(t.apps)}</h2>
<ul>
${links}
</ul>`;
}
