import { COMPANY, DOMAIN, STRINGS, SUPPORT_EMAIL } from './site.mjs';
import { MOCK_CSS, mock } from './mocks.mjs';

/**
 * Един шаблон за всички страници. Без JavaScript — текст, заглавия, връзки,
 * малко SVG за иконите. Визуалното е в `CSS` по-долу; цветовете и шрифтовете
 * са променливи най-отгоре, за да се сменят от едно място.
 *
 * Всяко приложение носи свой цвят (`color`) и икона (`icon` — пътища в
 * 24×24 SVG); шаблонът ги слага в `--c`, така че картите, глоуът и
 * бутоните да са в цвета на приложението.
 *
 * Шрифтове: Unbounded за заглавията (широк, геометричен, има кирилица),
 * Inter за текста. Идват от Google Fonts; при липса на мрежа падат към
 * системните.
 */

export const FONTS = 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Unbounded:wght@500;600;700&display=swap';

export const CSS = `
:root {
  --bg: #0c0c0e; --bg-2: #121216; --fg: #f4f2ec; --muted: #9a978f; --faint: #5e5c56;
  --line: rgba(255,255,255,.09); --line-2: rgba(255,255,255,.16); --card: #15151a;
  --accent: #8b7cff; --c: var(--accent);
  --max: 1080px; --read: 700px;
  --display: "Unbounded", "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
  --text: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  color-scheme: dark;
}
@media (prefers-color-scheme: light) {
  :root {
    --bg: #f6f4ef; --bg-2: #efece5; --fg: #17171a; --muted: #6a675f; --faint: #a19e95;
    --line: rgba(0,0,0,.09); --line-2: rgba(0,0,0,.18); --card: #fffdf9;
    color-scheme: light;
  }
}
* { box-sizing: border-box; }
html { scroll-behavior: smooth; }
body {
  margin: 0; background: var(--bg); color: var(--fg);
  font: 17px/1.65 var(--text); -webkit-font-smoothing: antialiased; text-rendering: optimizeLegibility;
  position: relative; min-height: 100vh; overflow-x: hidden;
}
body::before {
  content: ""; position: fixed; inset: 0; z-index: -1; pointer-events: none;
  background:
    radial-gradient(60% 40% at 15% 0%, color-mix(in srgb, var(--c) 22%, transparent), transparent 70%),
    radial-gradient(40% 35% at 90% 10%, color-mix(in srgb, var(--c) 10%, transparent), transparent 70%);
}
a { color: inherit; text-decoration: none; }
p { margin: 0 0 18px; }
h1, h2, h3, .display { font-family: var(--display); font-weight: 600; letter-spacing: -.02em; line-height: 1.1; margin: 0; }
h1 { font-size: clamp(32px, 4.8vw, 56px); }
h2 { font-size: clamp(22px, 2.6vw, 30px); }
.wrap { max-width: var(--max); margin: 0 auto; padding: 0 24px; }
.read { max-width: var(--read); }

/* ---- горе ---- */
.top { position: sticky; top: 0; z-index: 10; backdrop-filter: saturate(140%) blur(14px); -webkit-backdrop-filter: saturate(140%) blur(14px); background: color-mix(in srgb, var(--bg) 72%, transparent); border-bottom: 1px solid var(--line); }
.top .wrap { display: flex; align-items: center; justify-content: space-between; gap: 16px; height: 64px; }
.brand { display: inline-flex; align-items: center; gap: 11px; font-family: var(--display); font-weight: 600; font-size: 15px; letter-spacing: -.01em; }
.brand svg { width: 26px; height: 26px; flex: none; }
.brand .px { fill: var(--fg); }
.brand .px-c { fill: var(--accent); }
.top nav { display: flex; align-items: center; gap: 4px; }
.top nav a { padding: 8px 12px; border-radius: 999px; color: var(--muted); font-size: 15px; font-weight: 500; transition: color .15s, background .15s; }
.top nav a:hover { color: var(--fg); background: var(--line); }
.top nav a.lang { border: 1px solid var(--line-2); color: var(--fg); margin-left: 8px; font-size: 13px; padding: 6px 12px; }
.brand span { white-space: nowrap; }
@media (max-width: 600px) { .top nav a.apps-link { display: none; } .top nav a { padding: 8px 9px; font-size: 14px; } .brand { font-size: 14px; gap: 9px; } }

/* ---- начало ---- */
.hero { padding: clamp(48px, 7vw, 96px) 0 clamp(48px, 6vw, 80px); display: grid; grid-template-columns: minmax(0, 1.05fr) minmax(0, 1fr); gap: 40px; align-items: center; }
@media (max-width: 900px) { .hero { grid-template-columns: 1fr; gap: 40px; } }
.hero .ctas { display: flex; gap: 12px; flex-wrap: wrap; margin-top: 34px; }
.compo { position: relative; height: 560px; display: flex; justify-content: center; align-items: flex-end; perspective: 1400px; }
.compo .mockwrap { position: absolute; bottom: 0; transition: transform .4s ease; }
.compo .c1 { z-index: 3; transform: translateX(0); }
.compo .c2 { z-index: 2; transform: translateX(-190px) translateY(-24px) rotate(-7deg) scale(.86); opacity: .95; }
.compo .c3 { z-index: 1; transform: translateX(190px) translateY(-24px) rotate(7deg) scale(.86); opacity: .95; }
.compo::before { content: ""; position: absolute; inset: auto 0 -40px; height: 60%; background: radial-gradient(60% 60% at 50% 100%, color-mix(in srgb, var(--accent) 24%, transparent), transparent 70%); pointer-events: none; }
@media (max-width: 900px) { .compo { display: none; } }
.eyebrow { display: inline-flex; align-items: center; gap: 10px; color: var(--muted); font-size: 13px; font-weight: 600; letter-spacing: .12em; text-transform: uppercase; margin-bottom: 26px; }
.eyebrow::before { content: ""; width: 28px; height: 2px; background: var(--accent); border-radius: 2px; }
.hero h1 { max-width: 14ch; }
.hero h1 em { font-style: normal; color: var(--accent); }
.hero .lead { font-size: clamp(18px, 1.6vw, 21px); color: var(--muted); max-width: 52ch; margin: 28px 0 0; }

.apps-head { display: flex; align-items: baseline; justify-content: space-between; gap: 16px; margin: 0 0 22px; }
.apps-head .count { color: var(--faint); font-size: 14px; font-weight: 500; }
.apps { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 16px; margin: 0 0 clamp(64px, 8vw, 112px); }
@media (max-width: 720px) { .apps { grid-template-columns: 1fr; } }
.card {
  position: relative; display: flex; flex-direction: column; gap: 18px; padding: 26px 26px 24px;
  background: var(--card); border: 1px solid var(--line); border-radius: 22px; overflow: hidden;
  transition: transform .22s ease, border-color .22s ease, box-shadow .22s ease;
}
.card::after {
  content: ""; position: absolute; inset: auto -20% -60% auto; width: 70%; aspect-ratio: 1; border-radius: 50%; pointer-events: none;
  background: radial-gradient(closest-side, color-mix(in srgb, var(--c) 28%, transparent), transparent);
  opacity: 0; transition: opacity .3s ease;
}
.card:hover { transform: translateY(-3px); border-color: color-mix(in srgb, var(--c) 55%, var(--line-2)); box-shadow: 0 24px 60px -30px color-mix(in srgb, var(--c) 60%, transparent); }
.card:hover::after { opacity: 1; }
.card .row { display: flex; align-items: center; justify-content: space-between; gap: 12px; }
.tile { display: grid; place-items: center; width: 56px; height: 56px; border-radius: 16px; background: var(--c); color: #fff; box-shadow: 0 10px 30px -12px color-mix(in srgb, var(--c) 80%, transparent); flex: none; }
.tile svg { width: 28px; height: 28px; }
.tile.big { width: 96px; height: 96px; border-radius: 26px; box-shadow: 0 30px 70px -24px color-mix(in srgb, var(--c) 90%, transparent); }
.tile.big svg { width: 48px; height: 48px; }
.pill { display: inline-flex; align-items: center; gap: 7px; font-size: 12px; font-weight: 600; letter-spacing: .06em; text-transform: uppercase; color: var(--muted); padding: 6px 11px; border-radius: 999px; border: 1px solid var(--line-2); white-space: nowrap; }
.pill::before { content: ""; width: 6px; height: 6px; border-radius: 50%; background: var(--c); box-shadow: 0 0 0 3px color-mix(in srgb, var(--c) 25%, transparent); }
.pill.store { color: var(--fg); }
.card h3 { font-size: 22px; margin: 0 0 6px; }
.card .tag { color: var(--muted); font-size: 16px; margin: 0; }
.card .go { margin-top: auto; display: flex; align-items: center; justify-content: space-between; color: var(--faint); font-size: 14px; font-weight: 500; padding-top: 6px; }
.card .go svg { width: 22px; height: 22px; color: var(--fg); transition: transform .22s ease; }
.card:hover .go svg { transform: translateX(4px); }

.principles { display: grid; grid-template-columns: repeat(3, 1fr); gap: 16px; padding: 0 0 clamp(56px, 7vw, 96px); }
@media (max-width: 720px) { .principles { grid-template-columns: 1fr; } }
.principle { padding: 6px 0 0; border-top: 1px solid var(--line-2); }
.principle b { display: block; font-family: var(--display); font-weight: 600; font-size: 15px; letter-spacing: -.01em; margin: 18px 0 8px; }
.principle p { color: var(--muted); font-size: 15px; margin: 0; }

/* ---- showcase секции на началото ---- */
.show { display: grid; grid-template-columns: minmax(0, 1fr) minmax(0, 1fr); gap: clamp(32px, 5vw, 72px); align-items: center; padding: clamp(40px, 5vw, 72px) 0; border-top: 1px solid var(--line); }
.show.flip .visual { order: 2; }
@media (max-width: 860px) { .show { grid-template-columns: 1fr; gap: 32px; } .show.flip .visual { order: 0; } }
.show .visual { display: flex; justify-content: center; align-items: center; min-height: 420px; position: relative; }
@media (max-width: 860px) { .show .visual { min-height: 0; } }
.show .visual::before { content: ""; position: absolute; inset: 10% 0; border-radius: 40px; background: radial-gradient(60% 60% at 50% 50%, color-mix(in srgb, var(--c) 18%, transparent), transparent 75%); pointer-events: none; }
.show .visual .mockwrap { position: relative; }
.show .head { display: flex; align-items: center; gap: 14px; margin-bottom: 22px; }
.show .head b { font-family: var(--display); font-weight: 600; font-size: 15px; }
.show h2 { font-size: clamp(26px, 3vw, 38px); max-width: 16ch; margin-bottom: 18px; }
.show p { color: color-mix(in srgb, var(--fg) 80%, var(--muted)); max-width: 52ch; font-size: 17px; }
.chips { display: flex; flex-wrap: wrap; gap: 8px; margin: 22px 0 26px; }
.chip { display: inline-flex; align-items: center; gap: 8px; padding: 7px 12px 7px 9px; border-radius: 999px; border: 1px solid var(--line-2); font-size: 13px; font-weight: 500; color: var(--fg); background: color-mix(in srgb, var(--card) 70%, transparent); }
.chip::before { content: ""; width: 14px; height: 14px; border-radius: 50%; background: color-mix(in srgb, var(--c) 22%, transparent); box-shadow: inset 0 0 0 4px color-mix(in srgb, var(--c) 22%, transparent), 0 0 0 0 transparent; position: relative; }
.chip::before { background: radial-gradient(circle at center, var(--c) 0 3px, color-mix(in srgb, var(--c) 22%, transparent) 3.5px); }
.show .more { display: inline-flex; align-items: center; gap: 8px; font-weight: 600; color: var(--fg); }
.show .more svg { width: 18px; height: 18px; transition: transform .2s ease; color: var(--c); }
.show .more:hover svg { transform: translateX(4px); }
.show .actions { display: flex; gap: 12px 24px; align-items: center; flex-wrap: wrap; }

/* ---- страница на приложение ---- */
.app-hero { padding: clamp(48px, 7vw, 96px) 0 clamp(28px, 4vw, 48px); display: grid; grid-template-columns: minmax(0, 1.1fr) minmax(0, .9fr); gap: 40px; align-items: center; }
.app-hero .visual { display: flex; justify-content: center; position: relative; }
.app-hero .visual::before { content: ""; position: absolute; inset: 5% 0; border-radius: 40px; background: radial-gradient(60% 60% at 50% 50%, color-mix(in srgb, var(--c) 20%, transparent), transparent 75%); pointer-events: none; }
.app-hero .visual .mockwrap { position: relative; }
.app-hero .tile.big { margin-bottom: 26px; }
@media (max-width: 860px) { .app-hero { grid-template-columns: 1fr; gap: 36px; } }
.app-hero .name { display: flex; align-items: center; gap: 14px; flex-wrap: wrap; font-family: var(--display); font-weight: 600; font-size: 15px; color: var(--muted); margin-bottom: 14px; }
.app-hero .name span:first-child { color: var(--fg); }
.app-hero h1 { max-width: 18ch; font-size: clamp(30px, 4.4vw, 52px); }
.prose { font-size: 18px; }
.prose p { max-width: 62ch; }
.prose p + p { margin-top: -2px; }
.stores { display: flex; gap: 12px; flex-wrap: wrap; margin: 30px 0 8px; }
.btn { display: inline-flex; align-items: center; gap: 10px; padding: 13px 20px; border-radius: 999px; font-weight: 600; font-size: 15px; border: 1px solid var(--line-2); transition: transform .15s ease, background .15s ease, border-color .15s ease; }
.btn:hover { transform: translateY(-1px); border-color: var(--fg); }
.btn.primary { background: var(--fg); color: var(--bg); border-color: var(--fg); }
.btn.primary:hover { background: color-mix(in srgb, var(--fg) 88%, var(--c)); }
.btn svg { width: 18px; height: 18px; }
.links { display: flex; gap: 8px 22px; flex-wrap: wrap; margin: 36px 0 0; padding-top: 22px; border-top: 1px solid var(--line); font-size: 15px; }
.links a { color: var(--muted); font-weight: 500; text-decoration: underline; text-decoration-color: var(--line-2); text-underline-offset: 4px; }
.links a:hover { color: var(--fg); text-decoration-color: var(--c); }
.section { padding-bottom: clamp(56px, 7vw, 96px); }

/* ---- правни текстове ---- */
.doc-head { padding: clamp(48px, 7vw, 88px) 0 8px; }
.crumbs { display: flex; align-items: center; gap: 10px; color: var(--muted); font-size: 14px; margin-bottom: 22px; }
.crumbs a { color: var(--fg); font-weight: 500; }
.crumbs .dot { width: 4px; height: 4px; border-radius: 50%; background: var(--faint); }
.doc-head h1 { font-size: clamp(28px, 4vw, 44px); }
.doc-head .lead { font-size: 19px; color: var(--muted); margin: 22px 0 0; }
.doc { display: grid; grid-template-columns: 220px minmax(0, var(--read)); gap: 48px; padding: 32px 0 clamp(56px, 7vw, 96px); }
@media (max-width: 900px) { .doc { grid-template-columns: 1fr; gap: 12px; } .toc { position: static; } }
.toc { position: sticky; top: 88px; align-self: start; font-size: 14px; }
.toc b { display: block; color: var(--faint); font-size: 12px; font-weight: 600; letter-spacing: .1em; text-transform: uppercase; margin: 8px 0 12px; }
.toc ol { list-style: none; margin: 0; padding: 0; display: grid; gap: 2px; }
.toc a { display: block; padding: 6px 10px; border-radius: 8px; color: var(--muted); border-left: 2px solid var(--line); }
.toc a:hover { color: var(--fg); border-left-color: var(--c); }
.doc article h2 { font-size: 20px; margin: 34px 0 10px; padding-top: 8px; display: flex; gap: 14px; align-items: baseline; }
.doc article h2 small { font-family: var(--text); font-size: 13px; font-weight: 600; color: var(--c); letter-spacing: .04em; }
.doc article p { color: color-mix(in srgb, var(--fg) 86%, var(--muted)); }
.doc article > p:first-of-type { margin-top: 8px; }

/* ---- поддръжка ---- */
.mail { display: inline-flex; align-items: center; gap: 14px; margin: 26px 0 6px; padding: 16px 22px 16px 18px; border-radius: 18px; background: var(--card); border: 1px solid var(--line-2); font-family: var(--display); font-weight: 600; font-size: clamp(16px, 2vw, 20px); letter-spacing: -.01em; transition: border-color .15s, transform .15s; }
.mail:hover { border-color: var(--accent); transform: translateY(-1px); }
.mail .tile { width: 40px; height: 40px; border-radius: 12px; background: var(--accent); }
.mail .tile svg { width: 20px; height: 20px; }
.list { list-style: none; margin: 0; padding: 0; display: grid; gap: 10px; }
.list li { display: flex; align-items: center; gap: 14px; flex-wrap: wrap; padding: 14px 0; border-top: 1px solid var(--line); }
.list li:last-child { border-bottom: 1px solid var(--line); }
.list .tile { width: 36px; height: 36px; border-radius: 10px; }
.list .tile svg { width: 18px; height: 18px; }
.list .n { font-family: var(--display); font-weight: 600; font-size: 15px; min-width: 120px; }
.list .l { display: flex; gap: 16px; flex-wrap: wrap; color: var(--muted); font-size: 14px; margin-left: auto; }
.list .l a:hover { color: var(--fg); }

/* ---- долу ---- */
footer { border-top: 1px solid var(--line); padding: 44px 0 48px; color: var(--muted); font-size: 14px; line-height: 1.7; background: var(--bg-2); }
footer .cols { display: grid; grid-template-columns: 1.4fr 1fr 1fr; gap: 32px; }
@media (max-width: 720px) { footer .cols { grid-template-columns: 1fr; } }
footer .brand { color: var(--fg); margin-bottom: 12px; }
footer b { display: block; color: var(--faint); font-size: 12px; font-weight: 600; letter-spacing: .1em; text-transform: uppercase; margin-bottom: 10px; }
footer a:hover { color: var(--fg); }
footer .fine { margin-top: 36px; padding-top: 18px; border-top: 1px solid var(--line); color: var(--faint); font-size: 13px; display: flex; justify-content: space-between; gap: 12px; flex-wrap: wrap; }
`;

const esc = s => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

/** Пътищата: BG е в корена, EN под /en/. */
export const href = (lang, path = '') => (lang === 'bg' ? '/' : '/en/') + path;

/** Логото: четири пиксела, единият в цвета на фирмата. */
const LOGO = `<svg viewBox="0 0 26 26" aria-hidden="true"><rect class="px" x="1" y="1" width="11" height="11" rx="3"/><rect class="px-c" x="14" y="1" width="11" height="11" rx="3"/><rect class="px" x="1" y="14" width="11" height="11" rx="3"/><rect class="px" x="14" y="14" width="11" height="11" rx="3"/></svg>`;
/** Favicon: същото лого, на тъмен фон. */
export const FAVICON = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><rect width="32" height="32" rx="7" fill="#0c0c0e"/><rect x="5" y="5" width="10" height="10" rx="2.5" fill="#f4f2ec"/><rect x="17" y="5" width="10" height="10" rx="2.5" fill="#8b7cff"/><rect x="5" y="17" width="10" height="10" rx="2.5" fill="#f4f2ec"/><rect x="17" y="17" width="10" height="10" rx="2.5" fill="#f4f2ec"/></svg>
`;
const ARROW = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12h14M13 5l7 7-7 7"/></svg>`;
const MAIL = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="3" y="5" width="18" height="14" rx="3"/><path d="m3 8 9 6 9-6"/></svg>`;
const FALLBACK_ICON = `<rect x="4" y="4" width="16" height="16" rx="4"/>`;

/** Иконата на приложение върху цветната плочка. */
export function tile(app, cls = '') {
  return `<span class="tile ${cls}" style="--c:${app.color ?? 'var(--accent)'}"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${app.icon ?? FALLBACK_ICON}</svg></span>`;
}

function pill(lang, app) {
  const t = STRINGS[lang];
  const label = app.status === 'store' ? t.statusStore : app.status === 'testing' ? t.statusTesting : t.statusSoon;
  return `<span class="pill${app.status === 'store' ? ' store' : ''}">${esc(label)}</span>`;
}

export function page({ lang, title, description, path, body, alt, color }) {
  const t = STRINGS[lang];
  const co = COMPANY[lang];
  const other = lang === 'bg' ? 'en' : 'bg';
  const canonical = `https://${DOMAIN}${href(lang, path)}`;
  const altUrl = `https://${DOMAIN}${href(other, alt ?? path)}`;
  return `<!doctype html>
<html lang="${lang}"${color ? ` style="--c:${color}"` : ''}>
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${esc(title)}</title>
<meta name="description" content="${esc(description)}">
<meta name="theme-color" content="#0c0c0e">
<link rel="canonical" href="${canonical}">
<link rel="alternate" hreflang="${lang}" href="${canonical}">
<link rel="alternate" hreflang="${other}" href="${altUrl}">
<meta property="og:title" content="${esc(title)}">
<meta property="og:description" content="${esc(description)}">
<meta property="og:url" content="${canonical}">
<meta property="og:site_name" content="${esc(t.siteName)}">
<link rel="icon" href="/favicon.svg" type="image/svg+xml">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="stylesheet" href="${FONTS}">
<style>${CSS}${MOCK_CSS}</style>
</head>
<body>
<div class="top"><div class="wrap">
  <a class="brand" href="${href(lang)}">${LOGO}<span>${esc(t.siteName)}</span></a>
  <nav>
    <a class="apps-link" href="${href(lang)}#apps">${esc(t.apps)}</a>
    <a href="${href(lang, 'support/')}">${esc(t.support)}</a>
    <a class="lang" href="${href(other, alt ?? path)}" lang="${other}" hreflang="${other}">${esc(t.otherLang)}</a>
  </nav>
</div></div>
<main class="wrap">
${body}
</main>
<footer><div class="wrap">
  <div class="cols">
    <div>
      <a class="brand" href="${href(lang)}">${LOGO}<span>${esc(t.siteName)}</span></a>
      <div>${esc(t.tagline)}</div>
    </div>
    <div>
      <b>${esc(co.name)}</b>
      ${esc(co.eik)}<br>${esc(co.address)}
    </div>
    <div>
      <b>${esc(t.support)}</b>
      <a href="mailto:${SUPPORT_EMAIL}">${SUPPORT_EMAIL}</a><br>
      <a href="${href(lang, 'support/')}">${esc(t.supportPage)}</a>
    </div>
  </div>
  <div class="fine"><span>© ${new Date().getFullYear()} ${esc(co.name)}. ${esc(t.footerRights)}</span><span>${esc(t.madeIn)}</span></div>
</div></footer>
</body>
</html>
`;
}

export function legalBody({ lang, app, kind, doc }) {
  const t = STRINGS[lang];
  const title = kind === 'privacy' ? t.privacy : kind === 'deletion' ? t.deletion : t.terms;
  const id = i => `s${i + 1}`;
  const toc = doc.sections.map(([h], i) => `<li><a href="#${id(i)}">${esc(h)}</a></li>`).join('\n');
  const sections = doc.sections.map(([h, p], i) => `<h2 id="${id(i)}"><small>${String(i + 1).padStart(2, '0')}</small>${esc(h)}</h2>\n<p>${esc(p)}</p>`).join('\n');
  return `<div class="doc-head read">
  <div class="crumbs">${tile(app)}<a href="${href(lang, app.slug + '/')}">${esc(app.name)}</a><span class="dot"></span><span>${esc(t.updated)}: ${esc(doc.updated)}</span></div>
  <h1>${esc(title)}</h1>
  <p class="lead">${esc(doc.intro)}</p>
</div>
<div class="doc">
  <nav class="toc"><b>${esc(t.contents)}</b><ol>
${toc}
  </ol></nav>
  <article>
${sections}
    <div class="links">
      ${legalLinks(lang, app).join('\n      ')}
    </div>
  </article>
</div>`;
}

/**
 * Адресът на всеки правен текст. „deletion" е с говорящ адрес, защото
 * Google Play го иска като отделна връзка в магазина и хората го четат
 * от там — /konspekt/delete-account/ казва какво е, преди да се отвори.
 */
export const LEGAL_PATH = { privacy: 'privacy', terms: 'terms', deletion: 'delete-account' };

/** Къде са правните текстове на приложението: тук или на собствения му сайт. */
export function legalLinks(lang, app) {
  const t = STRINGS[lang];
  const links = [];
  if (app.legal) {
    links.push(`<a href="${href(lang, app.slug + '/privacy/')}">${esc(t.privacy)}</a>`);
    links.push(`<a href="${href(lang, app.slug + '/terms/')}">${esc(t.terms)}</a>`);
    if (app.legal.deletion) {
      links.push(`<a href="${href(lang, app.slug + '/' + LEGAL_PATH.deletion + '/')}">${esc(t.deletion)}</a>`);
    }
  } else if (app.external?.privacy) {
    links.push(`<a href="${app.external.privacy}">${esc(t.privacy)}</a>`);
    if (app.external.terms) links.push(`<a href="${app.external.terms}">${esc(t.terms)}</a>`);
  }
  links.push(`<a href="${href(lang, 'support/')}">${esc(t.support)}</a>`);
  return links;
}

export function appBody({ lang, app }) {
  const t = STRINGS[lang];
  const stores = [
    app.appStore ? `<a class="btn primary" href="${app.appStore}">${esc(t.appStore)}${ARROW}</a>` : '',
    app.playStore ? `<a class="btn primary" href="${app.playStore}">${esc(t.playStore)}${ARROW}</a>` : '',
    app.external?.download ? `<a class="btn primary" href="${app.external.download}">${esc(t.download)}${ARROW}</a>` : '',
    app.external?.site && !app.external?.download ? `<a class="btn" href="${app.external.site}">${esc(t.website)}${ARROW}</a>` : '',
  ].filter(Boolean).join('\n');
  const m = mock(app, lang);
  return `<section class="app-hero">
  <div>
    ${tile(app, 'big')}
    <div class="name"><span>${esc(app.name)}</span>${pill(lang, app)}</div>
    <h1>${esc(app.tagline[lang])}</h1>
    ${app.features ? `<div class="chips">${app.features[lang].map(f => `<span class="chip">${esc(f)}</span>`).join('')}</div>` : ''}
  </div>
  ${m ? `<div class="visual">${m}</div>` : ''}
</section>
<section class="section read prose">
${app.description[lang].map(p => `<p>${esc(p)}</p>`).join('\n')}
${stores ? `<div class="stores">${stores}</div>` : ''}
<div class="links">
  ${legalLinks(lang, app).join('\n  ')}
</div>
</section>`;
}

export function homeBody({ lang, apps }) {
  const t = STRINGS[lang];
  const compo = ['konspekt', 'glagoli', 'sroko']
    .map((slug, i) => { const a = apps.find(x => x.slug === slug); return a ? mock(a, lang).replace('class="mockwrap"', `class="mockwrap c${i + 1}"`) : ''; })
    .join('\n');
  const shows = apps.map((app, i) => {
    const m = mock(app, lang);
    const chips = app.features ? `<div class="chips">${app.features[lang].map(f => `<span class="chip">${esc(f)}</span>`).join('')}</div>` : '';
    const store = app.appStore ? `<a class="btn primary" href="${app.appStore}">${esc(t.appStore)}</a>` : app.external?.download ? `<a class="btn primary" href="${app.external.download}">${esc(t.download)}</a>` : '';
    return `<section class="show${i % 2 ? ' flip' : ''}" id="${app.slug}" style="--c:${app.color ?? 'var(--accent)'}">
  <div class="visual">${m}</div>
  <div>
    <div class="head">${tile(app)}<b>${esc(app.name)}</b>${pill(lang, app)}</div>
    <h2>${esc(app.tagline[lang])}</h2>
    <p>${esc(app.description[lang][0])}</p>
    ${chips}
    <div class="actions">${store}<a class="more" href="${href(lang, app.slug + '/')}">${esc(t.more)}${ARROW}</a></div>
  </div>
</section>`;
  }).join('\n');
  const principles = t.principles.map(([h, p]) => `<div class="principle"><b>${esc(h)}</b><p>${esc(p)}</p></div>`).join('\n');
  return `<section class="hero">
  <div>
    <div class="eyebrow">${esc(t.eyebrow)}</div>
    <h1>${t.heroHtml}</h1>
    <p class="lead">${esc(t.homeLead)}</p>
    <div class="ctas"><a class="btn primary" href="#apps">${esc(t.apps)}${ARROW}</a><a class="btn" href="${href(lang, 'support/')}">${esc(t.support)}</a></div>
  </div>
  <div class="compo" aria-hidden="true">
${compo}
  </div>
</section>
<div class="apps-head"><h2 id="apps">${esc(t.apps)}</h2><span class="count">${apps.length}</span></div>
${shows}
<section class="principles" style="padding-top:clamp(40px,5vw,72px)">
${principles}
</section>`;
}

export function supportBody({ lang, apps }) {
  const t = STRINGS[lang];
  const items = apps.map(app => {
    const legal = legalLinks(lang, app).slice(0, -1); // без „Поддръжка" — това е самата страница
    return `<li>${tile(app)}<a class="n" href="${href(lang, app.slug + '/')}">${esc(app.name)}</a><span class="l">${legal.join('\n')}</span></li>`;
  }).join('\n');
  return `<div class="doc-head read">
  <div class="eyebrow">${esc(t.support)}</div>
  <h1>${esc(t.supportTitle)}</h1>
  <p class="lead">${esc(t.supportLead)}</p>
  <a class="mail" href="mailto:${SUPPORT_EMAIL}"><span class="tile">${MAIL}</span>${SUPPORT_EMAIL}</a>
</div>
<section class="section read">
  <h2 style="font-size:20px;margin:40px 0 16px">${esc(t.apps)}</h2>
  <ul class="list">
${items}
  </ul>
</section>`;
}
