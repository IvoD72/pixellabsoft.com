import { COMPANY, DOMAIN, STRINGS, SUPPORT_EMAIL } from './site.mjs';
import { MOCK_CSS, mock } from './mocks.mjs';
import { APPS } from './apps/index.mjs';
import { LINGBOLT_LANGS, RTL } from './i18n/langs.mjs';

/**
 * Един шаблон за всички страници. Без JavaScript — текст, заглавия, връзки,
 * малко SVG за иконите. Визуалното е в `CSS` по-долу; цветовете и шрифтът
 * са променливи най-отгоре, за да се сменят от едно място.
 *
 * Дизайн от 12.10.2026: светъл, в цветовете на новото лого (синьо → циан),
 * с ИСТИНСКИ екрани на приложенията и бутони за двата магазина. Логото е в
 * `7 Pixel Lab Soft\Logo\`; знакът и favicon-ите се правят от `tools/assets.py`.
 *
 * Всяко приложение носи свой цвят (`color`) и икона (`icon` — пътища в
 * 24×24 SVG); шаблонът ги слага в `--c`.
 *
 * Шрифт: Onest — рисуван с кирилицата, не догонен към нея. Идва от Google
 * Fonts; без мрежа пада към системния.
 */

export const FONTS = 'https://fonts.googleapis.com/css2?family=Onest:wght@400;500;600;700;800&family=Caveat:wght@500&display=swap';

export const CSS = `
:root {
  --bg: #faf9f6; --bg-2: #f2f1ec; --fg: #0b1430; --muted: #556079; --faint: #8a93a8;
  --line: rgba(11,20,48,.08); --line-2: rgba(11,20,48,.15); --card: #f6f8fc;
  --blue: #2152ff; --cyan: #18c3f0; --accent: var(--blue); --c: var(--accent);
  --grad: linear-gradient(115deg, #3a3dff 0%, #2163ff 35%, #1a9bff 70%, #18c8f0 100%);
  --max: 1160px; --read: 720px;
  --font: "Onest", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  color-scheme: light;
}
* { box-sizing: border-box; }
html { scroll-behavior: smooth; }
body { margin: 0; background: var(--bg); color: var(--fg); font: 17px/1.65 var(--font); -webkit-font-smoothing: antialiased; overflow-x: hidden; }
a { color: inherit; text-decoration: none; }
p { margin: 0 0 18px; }
img { max-width: 100%; }
h1, h2, h3 { font-weight: 700; letter-spacing: -.03em; line-height: 1.08; margin: 0; }
h1 { font-size: clamp(36px, 5vw, 62px); }
h2 { font-size: clamp(28px, 3.4vw, 44px); }
.wrap { max-width: var(--max); margin: 0 auto; padding: 0 24px; }
.read { max-width: var(--read); }
.grad { background: var(--grad); -webkit-background-clip: text; background-clip: text; color: transparent; }

/* ---- горе ---- */
.top { position: sticky; top: 0; z-index: 10; backdrop-filter: saturate(160%) blur(16px); -webkit-backdrop-filter: saturate(160%) blur(16px); background: rgba(250,249,246,.82); border-bottom: 1px solid var(--line); }
.top .wrap { display: flex; align-items: center; justify-content: space-between; gap: 16px; height: 68px; }
.brand { display: inline-flex; align-items: center; gap: 10px; font-weight: 800; font-size: 19px; letter-spacing: -.03em; white-space: nowrap; }
.brand img { width: 34px; height: 34px; }
.brand .lab { background: var(--grad); -webkit-background-clip: text; background-clip: text; color: transparent; }
.brand small { font-weight: 500; font-size: 13px; color: var(--muted); letter-spacing: 0; margin-left: 2px; }
.top nav { display: flex; align-items: center; gap: 2px; }
.top nav a { padding: 8px 14px; border-radius: 999px; color: var(--muted); font-size: 15px; font-weight: 500; transition: color .15s, background .15s; }
.top nav a:hover { color: var(--fg); background: var(--bg-2); }
.top nav a.lang { border: 1px solid var(--line-2); color: var(--fg); margin-left: 8px; font-size: 13px; padding: 6px 13px; }
.langs { position: relative; margin-inline-start: 8px; }
.langs summary { list-style: none; cursor: pointer; border: 1px solid var(--line-2); border-radius: 999px; color: var(--fg); font-size: 13px; font-weight: 500; padding: 6px 13px; white-space: nowrap; }
.langs summary::-webkit-details-marker { display: none; }
.langs .list { position: absolute; inset-inline-end: 0; top: calc(100% + 8px); z-index: 20; width: min(440px, calc(100vw - 32px)); max-height: 70vh; overflow: auto; display: grid; grid-template-columns: repeat(auto-fill, minmax(130px, 1fr)); gap: 2px; padding: 10px; background: var(--bg); border: 1px solid var(--line-2); border-radius: 14px; box-shadow: 0 18px 50px rgba(20,24,40,.16); }
.top nav .langs .list a { padding: 7px 10px; border-radius: 8px; font-size: 14px; color: var(--fg); }
.top nav .langs .list a[aria-current] { background: var(--bg-2); font-weight: 600; }
.legal-lang { color: var(--muted); font-size: 14px; }
@media (max-width: 600px) { .top nav a.apps-link, .brand small { display: none; } .top nav a { padding: 8px 10px; font-size: 14px; } }

/* ---- фонът на началото: мекото синьо от логото и пиксели ---- */
.glow { position: relative; isolation: isolate; }
.glow::before { content: ""; position: absolute; z-index: -1; inset: -68px calc(50% - 50vw) 0; pointer-events: none;
  background:
    radial-gradient(42% 55% at 82% 30%, rgba(24,195,240,.20), transparent 70%),
    radial-gradient(40% 50% at 62% 70%, rgba(33,82,255,.16), transparent 70%),
    radial-gradient(30% 40% at 8% 10%, rgba(58,61,255,.08), transparent 70%); }
.glow::after { content: ""; position: absolute; z-index: -1; inset: -68px calc(50% - 50vw) auto; height: 1100px; pointer-events: none; opacity: .5;
  background-image: linear-gradient(var(--line) 1px, transparent 1px), linear-gradient(90deg, var(--line) 1px, transparent 1px);
  background-size: 48px 48px; -webkit-mask-image: radial-gradient(60% 70% at 70% 35%, #000, transparent 75%); mask-image: radial-gradient(60% 70% at 70% 35%, #000, transparent 75%); }

/* ---- начало ---- */
.hero { padding: clamp(40px, 6vw, 88px) 0 clamp(40px, 5vw, 72px); display: grid; grid-template-columns: minmax(0, 1fr) minmax(0, 1fr); gap: 32px; align-items: center; }
@media (max-width: 920px) { .hero { grid-template-columns: 1fr; } }
.eyebrow { display: inline-flex; align-items: center; gap: 10px; padding: 6px 14px 6px 8px; border-radius: 999px; background: #fff; border: 1px solid var(--line-2); color: var(--muted); font-size: 14px; font-weight: 500; margin-bottom: 26px; box-shadow: 0 6px 20px -12px rgba(13,25,70,.3); }
.eyebrow img { width: 22px; height: 22px; }
.hero h1 { max-width: 14ch; }
.hero .lead { font-size: clamp(18px, 1.7vw, 21px); color: var(--muted); max-width: 46ch; margin: 26px 0 0; }
.ctas { display: flex; gap: 12px; flex-wrap: wrap; margin-top: 34px; }
.compo { position: relative; height: 580px; display: flex; justify-content: center; align-items: center; }
.compo .mockwrap { position: absolute; transition: transform .4s ease; }
.compo .c1 { z-index: 3; }
.compo .c2 { z-index: 2; transform: translateX(-175px) translateY(30px) rotate(-8deg) scale(.84); }
.compo .c3 { z-index: 1; transform: translateX(175px) translateY(30px) rotate(8deg) scale(.84); }
@media (max-width: 920px) { .compo { height: 520px; } }
@media (max-width: 560px) { .compo { height: 440px; } .compo .mockwrap { scale: .82; } .compo .c2 { transform: translateX(-110px) translateY(30px) rotate(-8deg) scale(.8); } .compo .c3 { transform: translateX(110px) translateY(30px) rotate(8deg) scale(.8); } }

/* лентата с приложенията под заглавието */
.strip { display: flex; gap: 10px; flex-wrap: wrap; padding: 0 0 clamp(48px, 6vw, 80px); }
.strip a { display: inline-flex; align-items: center; gap: 10px; padding: 8px 16px 8px 8px; border-radius: 16px; background: #fff; border: 1px solid var(--line); font-weight: 600; font-size: 15px; transition: transform .15s, border-color .15s, box-shadow .15s; }
.strip a:hover { transform: translateY(-2px); border-color: var(--line-2); box-shadow: 0 14px 30px -20px rgba(13,25,70,.35); }
.strip .tile { width: 36px; height: 36px; border-radius: 11px; }
.strip .tile svg { width: 19px; height: 19px; }

/* ---- приложенията на началото ---- */
.apps-head { text-align: center; margin: 0 auto 36px; max-width: 640px; }
.apps-head p { color: var(--muted); font-size: 18px; margin: 14px 0 0; }
.show { position: relative; display: grid; grid-template-columns: minmax(0, 1fr) minmax(0, 1fr); gap: clamp(28px, 5vw, 64px); align-items: center;
  padding: clamp(32px, 5vw, 64px); margin: 0 0 24px; border-radius: 36px; overflow: hidden;
  background: linear-gradient(160deg, color-mix(in srgb, var(--c) 9%, #fff), color-mix(in srgb, var(--c) 3%, #fff) 60%); border: 1px solid color-mix(in srgb, var(--c) 14%, transparent); }
.show.flip .visual { order: 2; }
@media (max-width: 860px) { .show { grid-template-columns: 1fr; } .show.flip .visual { order: 0; } }
.show .visual { display: flex; justify-content: center; align-items: center; min-height: 360px; }
@media (max-width: 860px) { .show .visual { min-height: 0; } }
.tile.bigicon { width: 180px; height: 180px; border-radius: 48px; }
.tile.bigicon svg { width: 90px; height: 90px; }
.show .head { display: flex; align-items: center; gap: 12px; margin-bottom: 20px; flex-wrap: wrap; }
.show .head b { font-weight: 700; font-size: 18px; }
.show h2 { font-size: clamp(26px, 3vw, 40px); max-width: 17ch; margin-bottom: 16px; }
.show p { color: var(--muted); max-width: 50ch; }
.chips { display: flex; flex-wrap: wrap; gap: 8px; margin: 20px 0 26px; }
.chip { display: inline-flex; align-items: center; gap: 8px; padding: 7px 13px 7px 10px; border-radius: 999px; background: rgba(255,255,255,.85); border: 1px solid var(--line); font-size: 14px; font-weight: 500; }
.chip::before { content: ""; width: 7px; height: 7px; border-radius: 2px; background: var(--c); }
.actions { display: flex; gap: 12px; align-items: center; flex-wrap: wrap; }
.more { display: inline-flex; align-items: center; gap: 8px; font-weight: 600; padding: 12px 6px; }
.more svg { width: 18px; height: 18px; color: var(--c); transition: transform .2s ease; }
.more:hover svg { transform: translateX(4px); }

.tile { display: grid; place-items: center; width: 52px; height: 52px; border-radius: 15px; background: var(--c); color: #fff; flex: none;
  box-shadow: 0 12px 28px -14px color-mix(in srgb, var(--c) 90%, transparent); }
.tile svg { width: 26px; height: 26px; }
.tile.img { background: none; overflow: hidden; box-shadow: 0 12px 26px -14px rgba(11,20,48,.45), 0 0 0 1px rgba(11,20,48,.06); }
.tile.img img { width: 100%; height: 100%; display: block; }
.tile.big { width: 88px; height: 88px; border-radius: 24px; }
.tile.big svg { width: 44px; height: 44px; }
.pill { display: inline-flex; align-items: center; gap: 7px; font-size: 12px; font-weight: 600; letter-spacing: .04em; text-transform: uppercase; color: var(--muted); padding: 5px 11px; border-radius: 999px; background: rgba(255,255,255,.9); border: 1px solid var(--line-2); white-space: nowrap; }
.pill::before { content: ""; width: 6px; height: 6px; border-radius: 50%; background: #f2a33a; }
.pill.store { color: #0d7a4f; }
.pill.store::before { background: #19b26b; box-shadow: 0 0 0 3px rgba(25,178,107,.2); }

/* ---- бутони и значките на магазините ---- */
.btn { display: inline-flex; align-items: center; gap: 10px; padding: 14px 22px; border-radius: 14px; font-weight: 600; font-size: 16px; border: 1px solid var(--line-2); background: #fff; transition: transform .15s ease, box-shadow .15s ease, border-color .15s; }
.btn:hover { transform: translateY(-1px); border-color: var(--fg); }
.btn.primary { background: var(--grad); color: #fff; border-color: transparent; box-shadow: 0 16px 34px -16px rgba(33,82,255,.7); }
.btn.primary:hover { box-shadow: 0 20px 40px -16px rgba(33,82,255,.85); }
.btn svg { width: 18px; height: 18px; }
.store-btn { display: inline-flex; align-items: center; gap: 11px; padding: 9px 18px 9px 14px; border-radius: 13px; background: #0b1430; color: #fff; transition: transform .15s ease, box-shadow .15s ease; min-width: 172px; }
.store-btn:hover { transform: translateY(-2px); box-shadow: 0 16px 30px -16px rgba(11,20,48,.7); }
.store-btn svg { width: 26px; height: 26px; flex: none; }
.store-btn span { display: flex; flex-direction: column; line-height: 1.15; font-size: 11px; opacity: .85; }
.store-btn b { font-size: 17px; font-weight: 600; opacity: 1; letter-spacing: -.01em; }
.stores { display: flex; gap: 12px; flex-wrap: wrap; margin: 28px 0 8px; }

/* ---- принципи ---- */
.principles { display: grid; grid-template-columns: repeat(3, 1fr); gap: 16px; padding: clamp(40px, 5vw, 72px) 0 clamp(56px, 7vw, 96px); }
@media (max-width: 760px) { .principles { grid-template-columns: 1fr; } }
.principle { padding: 26px; border-radius: 24px; background: var(--card); border: 1px solid var(--line); }
.principle i { display: grid; place-items: center; width: 40px; height: 40px; border-radius: 12px; background: var(--grad); color: #fff; font-style: normal; font-weight: 700; margin-bottom: 18px; }
.principle b { display: block; font-weight: 700; font-size: 18px; letter-spacing: -.01em; margin: 0 0 8px; }
.principle p { color: var(--muted); font-size: 15.5px; margin: 0; }

/* ---- страница на приложение ---- */
.app-hero { padding: clamp(40px, 6vw, 88px) 0 clamp(28px, 4vw, 48px); display: grid; grid-template-columns: minmax(0, 1.1fr) minmax(0, .9fr); gap: 40px; align-items: center; }
.app-hero .visual { display: flex; justify-content: center; }
.app-hero .tile.big { margin-bottom: 24px; }
.app-hero .wordmark { display: block; width: clamp(180px, 22vw, 240px); height: auto; margin-bottom: 18px; }
@media (max-width: 860px) { .app-hero { grid-template-columns: 1fr; gap: 36px; } }
.app-hero .name { display: flex; align-items: center; gap: 12px; flex-wrap: wrap; font-weight: 700; font-size: 18px; margin-bottom: 14px; }
.app-hero h1 { max-width: 16ch; font-size: clamp(32px, 4.6vw, 56px); }
.prose { font-size: 18px; color: #2b3550; }
.prose p { max-width: 64ch; }
.links { display: flex; gap: 8px 22px; flex-wrap: wrap; margin: 36px 0 0; padding-top: 22px; border-top: 1px solid var(--line); font-size: 15px; }
.links a { color: var(--muted); font-weight: 500; text-decoration: underline; text-decoration-color: var(--line-2); text-underline-offset: 4px; }
.links a:hover { color: var(--fg); text-decoration-color: var(--c); }
.section { padding-bottom: clamp(56px, 7vw, 96px); }

/* ---- правни текстове ---- */
.doc-head { padding: clamp(40px, 6vw, 80px) 0 8px; }
/* Назад и нагоре (Иво, 12.10.2026: „няма как да се върнеш една стъпка“). */
.back { display: inline-flex; align-items: center; gap: 8px; margin: 22px 0 -6px; padding: 8px 16px 8px 10px; border-radius: 999px; background: #fff; border: 1px solid var(--line-2); color: var(--muted); font-size: 14.5px; font-weight: 600; box-shadow: 0 6px 18px -12px rgba(13,25,70,.35); transition: color .15s, transform .15s, border-color .15s; }
.back svg { width: 18px; height: 18px; transition: transform .15s; }
.back:hover { color: var(--fg); border-color: var(--fg); }
.back:hover svg { transform: translateX(-3px); }
.totop { position: fixed; right: max(16px, env(safe-area-inset-right)); bottom: max(18px, env(safe-area-inset-bottom)); z-index: 20; width: 52px; height: 52px; border-radius: 50%; border: 0; cursor: pointer; display: grid; place-items: center;
  color: #fff; background: var(--grad); box-shadow: 0 16px 34px -14px rgba(33,82,255,.75), 0 0 0 4px rgba(255,255,255,.7);
  opacity: 0; transform: translateY(16px) scale(.9); pointer-events: none; transition: opacity .25s, transform .25s; }
.totop.on { opacity: 1; transform: none; pointer-events: auto; }
.totop:hover { transform: translateY(-3px); }
.totop svg { width: 22px; height: 22px; }
.totop .ring { position: absolute; inset: -4px; width: 60px; height: 60px; transform: rotate(-90deg); pointer-events: none; }
.totop .ring circle { fill: none; stroke: #0b1430; stroke-width: 3; stroke-linecap: round; stroke-dasharray: 176; stroke-dashoffset: 176; opacity: .55; }
@media (prefers-reduced-motion: reduce) { .totop, .back, .back svg { transition: none; } }
@media (max-width: 640px) { footer .fine { padding-right: 64px; } }
.crumbs { display: flex; align-items: center; gap: 10px; color: var(--muted); font-size: 14px; margin-bottom: 22px; }
.crumbs .tile { width: 32px; height: 32px; border-radius: 10px; } .crumbs .tile svg { width: 17px; height: 17px; }
.crumbs a { color: var(--fg); font-weight: 600; }
.crumbs .dot { width: 4px; height: 4px; border-radius: 50%; background: var(--faint); }
.doc-head h1 { font-size: clamp(30px, 4vw, 46px); }
.doc-head .lead { font-size: 19px; color: var(--muted); margin: 22px 0 0; }
.doc { display: grid; grid-template-columns: 230px minmax(0, var(--read)); gap: 48px; padding: 32px 0 clamp(56px, 7vw, 96px); }
@media (max-width: 900px) { .doc { grid-template-columns: 1fr; gap: 12px; } }
.toc { position: sticky; top: 92px; align-self: start; font-size: 14px; }
.toc b { display: block; color: var(--faint); font-size: 12px; font-weight: 600; letter-spacing: .1em; text-transform: uppercase; margin: 8px 0 12px; }
.toc ol { list-style: none; margin: 0; padding: 0; display: grid; gap: 2px; }
.toc a { display: block; padding: 6px 10px; border-radius: 8px; color: var(--muted); border-left: 2px solid var(--line); }
.toc a:hover { color: var(--fg); border-left-color: var(--c); background: var(--bg-2); }
@media (max-width: 900px) {
  .toc { position: static; margin-bottom: 8px; }
  .toc ol { display: flex; flex-wrap: wrap; gap: 8px; }
  .toc a { padding: 6px 12px; border: 1px solid var(--line); border-radius: 999px; font-size: 13px; }
}
.doc article h2 { font-size: 21px; margin: 34px 0 10px; padding-top: 8px; display: flex; gap: 14px; align-items: baseline; letter-spacing: -.02em; }
.doc article h2 small { font-size: 13px; font-weight: 700; color: var(--c); }
.doc article p { color: #2b3550; }

/* ---- поддръжка ---- */
.mail { display: inline-flex; align-items: center; gap: 14px; margin: 26px 0 6px; padding: 14px 22px 14px 14px; border-radius: 18px; background: #fff; border: 1px solid var(--line-2); font-weight: 700; font-size: clamp(16px, 2vw, 20px); transition: border-color .15s, transform .15s, box-shadow .15s; }
.mail:hover { border-color: var(--blue); transform: translateY(-1px); box-shadow: 0 16px 34px -20px rgba(33,82,255,.6); }
.mail .tile { width: 42px; height: 42px; border-radius: 12px; background: var(--grad); }
.mail .tile svg { width: 21px; height: 21px; }
.list { list-style: none; margin: 0; padding: 0; display: grid; }
.list li { display: flex; align-items: center; gap: 14px; flex-wrap: wrap; padding: 14px 0; border-top: 1px solid var(--line); }
.list li:last-child { border-bottom: 1px solid var(--line); }
.list .tile { width: 36px; height: 36px; border-radius: 10px; }
.list .tile svg { width: 18px; height: 18px; }
.list .n { font-weight: 700; font-size: 16px; min-width: 120px; }
.list .l { display: flex; gap: 16px; flex-wrap: wrap; color: var(--muted); font-size: 14px; margin-left: auto; }
.list .l a:hover { color: var(--fg); }

/* ---- долу ---- */
footer { padding: 52px 0 44px; color: #9aa3bf; font-size: 14.5px; line-height: 1.7; background: #070b17; }
footer .cols { display: grid; grid-template-columns: 1.4fr 1fr 1fr 1fr; gap: 32px; }
@media (max-width: 860px) { footer .cols { grid-template-columns: 1fr 1fr; } }
@media (max-width: 520px) { footer .cols { grid-template-columns: 1fr; } }
footer .logo { width: 150px; height: auto; margin-bottom: 10px; }
footer b { display: block; color: #fff; font-size: 13px; font-weight: 700; margin-bottom: 10px; }
footer a { display: block; }
footer a:hover { color: #fff; }
footer .fine { margin-top: 36px; padding-top: 18px; border-top: 1px solid rgba(255,255,255,.08); color: #6b7390; font-size: 13px; }

/* ==== началото, 12.10.2026: решетка, водещо, ръкописни бележки, тъмна лента ==== */
.kicker { font-size: 13px; font-weight: 700; letter-spacing: .14em; text-transform: uppercase; color: var(--muted); margin-bottom: 18px; }
.btn.dark { background: #0b1430; color: #fff; border-color: #0b1430; }
.btn.dark:hover { box-shadow: 0 16px 30px -16px rgba(11,20,48,.7); }
.top .cta { background: #0b1430; color: #fff !important; padding: 8px 16px !important; margin-left: 8px; }
.top .cta:hover { background: #1b2550 !important; }
@media (max-width: 760px) { .top .cta { display: none; } }

.hero2 { display: grid; grid-template-columns: minmax(0, .95fr) minmax(0, 1.05fr); gap: 24px; align-items: center; padding: clamp(36px, 5vw, 72px) 0 clamp(24px, 3vw, 40px); }
@media (max-width: 920px) { .hero2 { grid-template-columns: 1fr; } }
.hero2 h1 { font-size: clamp(40px, 5.4vw, 70px); line-height: 1.02; letter-spacing: -.04em; }
.hero2 .lead { font-size: clamp(17px, 1.5vw, 20px); color: var(--muted); max-width: 44ch; margin: 24px 0 0; }
.compo2 { position: relative; height: 560px; }
.compo2 .mockwrap { position: absolute; top: 50%; left: 50%; }
.compo2 .device.phone { width: 230px; }
.compo2 .c1 { transform: translate(-128%, -46%) rotate(-7deg) scale(.88); z-index: 1; }
.compo2 .c2 { transform: translate(-50%, -54%); z-index: 3; }
.compo2 .c3 { transform: translate(28%, -46%) rotate(7deg) scale(.88); z-index: 2; }
.note { position: absolute; z-index: 4; font-family: "Caveat", cursive; font-size: 25px; line-height: 1; color: #2b3550; white-space: nowrap; pointer-events: none; }
.note .sq { position: absolute; width: 46px; height: 32px; color: #8a93a8; }
.compo2 .n1 { left: -2%; bottom: 3%; } .compo2 .n1 .sq { left: 70px; top: -34px; transform: scaleY(-1) rotate(10deg); }
.compo2 .n2 { left: 40%; top: -2%; } .compo2 .n2 .sq { left: -42px; top: 6px; transform: scaleX(-1) rotate(-30deg); }
.compo2 .n3 { right: 0; bottom: 2%; } .compo2 .n3 .sq { left: -40px; top: -30px; transform: scale(-1, -1); }
@media (max-width: 920px) { .compo2 { height: 500px; } .hero2 { overflow-x: clip; } }
@media (max-width: 560px) { .compo2 { height: 420px; } .compo2 .device.phone { width: 180px; } .note { font-size: 20px; } .compo2 .n2 { display: none; } }

.grid-head { display: flex; align-items: end; justify-content: space-between; gap: 24px; padding: clamp(40px, 5vw, 64px) 0 22px; }
.grid-head h2 { font-size: clamp(28px, 3.2vw, 42px); }
.grid-head p { color: var(--muted); margin: 10px 0 0; max-width: 60ch; }

.bento { display: grid; grid-template-columns: repeat(5, minmax(0, 1fr)); gap: 14px; }
@media (max-width: 1080px) { .bento { grid-template-columns: repeat(3, minmax(0, 1fr)); } }
@media (max-width: 720px) { .bento { grid-template-columns: repeat(2, minmax(0, 1fr)); } }
@media (max-width: 460px) { .bento { grid-template-columns: 1fr; } }
.bcard { position: relative; display: flex; flex-direction: column; gap: 8px; padding: 18px 18px 16px; height: 400px; border-radius: 24px; overflow: hidden;
  background: linear-gradient(170deg, color-mix(in srgb, var(--c) 12%, #fff), color-mix(in srgb, var(--c) 4%, #fff) 55%); border: 1px solid color-mix(in srgb, var(--c) 16%, transparent);
  transition: transform .2s ease, box-shadow .2s ease; }
.bcard:hover { transform: translateY(-4px); box-shadow: 0 26px 50px -30px color-mix(in srgb, var(--c) 70%, transparent); }
.bcard .row { display: flex; align-items: center; justify-content: space-between; gap: 8px; }
.bcard .tile { width: 40px; height: 40px; border-radius: 12px; }
.bcard .pill { font-size: 10px; padding: 4px 8px; letter-spacing: .03em; }
.bcard b { font-size: 19px; font-weight: 700; letter-spacing: -.02em; margin-top: 6px; }
.bcard p { color: var(--muted); font-size: 14.5px; line-height: 1.45; margin: 0; }
.bcard .peek { position: absolute; left: 50%; bottom: -150px; transform: translateX(-50%); transition: bottom .3s ease; }
.bcard:hover .peek { bottom: -130px; }
.bcard .peek .device.phone { width: 170px; padding: 6px; border-radius: 30px; }
.bcard .peek .device.phone .screen { border-radius: 25px; }
.bcard .peek .mockwrap:has(.window) { width: 340px; margin-bottom: 60px; transform: translateX(22%); }
.bcard .peek .device.window { width: 340px; }
.bcard .peek .mockwrap:has(.narrow) { width: 200px; margin-bottom: 195px; transform: none; }
.bcard .peek .device.window.narrow { width: 200px; }
.bcard .peek .tile.bigicon { width: 110px; height: 110px; border-radius: 30px; margin-bottom: 210px; }
.bcard .go { position: absolute; left: 18px; bottom: 14px; z-index: 2; display: inline-flex; align-items: center; gap: 6px; padding: 7px 12px; border-radius: 999px; background: rgba(255,255,255,.92); font-size: 13.5px; font-weight: 600; box-shadow: 0 6px 18px -10px rgba(11,20,48,.4); }
.bcard .go svg { width: 15px; height: 15px; color: var(--c); }

.num { font-size: 14px; font-weight: 700; color: var(--faint); margin-right: 4px; }
.feat { display: grid; grid-template-columns: minmax(0, 1fr) minmax(0, 1fr); gap: clamp(28px, 4vw, 56px); align-items: center; margin: clamp(48px, 6vw, 80px) 0 18px; padding: clamp(28px, 4vw, 56px);
  border-radius: 36px; background: radial-gradient(70% 90% at 85% 50%, color-mix(in srgb, var(--c) 22%, #fff), #fff 70%); border: 1px solid var(--line); position: relative; }
@media (max-width: 860px) { .feat { grid-template-columns: 1fr; } }
.feat .head, .mid .head, .small .head { display: flex; align-items: center; gap: 10px; flex-wrap: wrap; margin-bottom: 18px; }
.feat .head b, .mid .head b, .small .head b { font-size: 18px; font-weight: 700; }
.feat h2 { font-size: clamp(28px, 3.4vw, 46px); max-width: 15ch; margin-bottom: 16px; }
.feat p { color: var(--muted); max-width: 52ch; }
.checks { list-style: none; padding: 0; margin: 4px 0 26px; display: grid; gap: 10px; }
.checks li { display: flex; align-items: center; gap: 10px; font-weight: 500; }
.checks svg { width: 20px; height: 20px; color: var(--c); flex: none; }
.feat .visual { position: relative; display: flex; justify-content: center; }
.feat .nf { right: 0; top: -34px; } .feat .nf .sq { left: -46px; top: 18px; transform: scaleX(-1) rotate(-10deg); }

.mids { display: grid; grid-template-columns: 1fr 1fr; gap: 18px; }
@media (max-width: 960px) { .mids { grid-template-columns: 1fr; } }
.mid { display: grid; grid-template-columns: minmax(0, 1fr) auto; gap: 20px; align-items: end; padding: 30px 30px 0; border-radius: 32px; overflow: hidden;
  background: linear-gradient(160deg, color-mix(in srgb, var(--c) 13%, #fff), color-mix(in srgb, var(--c) 4%, #fff)); border: 1px solid color-mix(in srgb, var(--c) 16%, transparent); }
.mid .txt { padding-bottom: 30px; align-self: center; }
.mid h3 { font-size: clamp(22px, 2.2vw, 28px); letter-spacing: -.03em; line-height: 1.12; margin-bottom: 12px; }
.mid p { color: var(--muted); font-size: 16px; }
.mid .actions { gap: 10px; }
.mid .store-btn { min-width: 0; padding: 8px 14px 8px 12px; }
.mid .visual { height: 340px; overflow: hidden; align-self: end; }
.mid .device.phone { width: 200px; }
.mid:has(.window) { grid-template-columns: 1fr; }
.mid:has(.window) .txt { padding-bottom: 6px; }
.mid:has(.window) .visual { height: 230px; }
.mid .mockwrap:has(.window) { width: 100%; }
.mid .device.window { width: 100%; }
@media (max-width: 1100px) { .mid { grid-template-columns: 1fr; } .mid .visual { justify-self: center; } }

.also-head { padding: clamp(48px, 6vw, 80px) 0 20px; }
.also-head h2 { font-size: clamp(26px, 3vw, 38px); }
.also-head p { color: var(--muted); margin: 8px 0 0; }
.alsos { display: grid; grid-template-columns: 1fr 1fr; gap: 18px; padding-bottom: clamp(56px, 7vw, 96px); }
@media (max-width: 860px) { .alsos { grid-template-columns: 1fr; } }
.small { display: grid; grid-template-columns: minmax(0, 1fr) auto; gap: 18px; align-items: center; padding: 26px 26px 0; height: 270px; overflow: hidden; border-radius: 28px;
  background: linear-gradient(160deg, color-mix(in srgb, var(--c) 11%, #fff), #fff); border: 1px solid color-mix(in srgb, var(--c) 14%, transparent); transition: transform .2s ease; }
.small:hover { transform: translateY(-3px); }
.small > div { align-self: center; padding-bottom: 26px; }
.small h3 { font-size: 21px; letter-spacing: -.02em; margin-bottom: 8px; }
.small p { color: var(--muted); font-size: 15px; margin: 0 0 12px; }
.small .go { display: inline-flex; align-items: center; gap: 6px; font-weight: 600; font-size: 14px; }
.small .go svg { width: 15px; height: 15px; color: var(--c); }
.small .peek { align-self: start; padding-top: 10px; }
.small .device.phone { width: 160px; }
.small .tile.bigicon { width: 120px; height: 120px; border-radius: 32px; }

.about { background: #0b1020; color: #e8ecf6; padding: clamp(48px, 6vw, 80px) 0; }
.about .wrap { display: grid; grid-template-columns: 1.1fr 1fr; gap: 28px 56px; align-items: start; }
.about .a3 { grid-column: 1 / -1; margin-top: 18px; }
@media (max-width: 960px) { .about .wrap { grid-template-columns: 1fr; } }
.about .kicker { color: #8a93b8; }
.about h2 { font-size: clamp(26px, 2.8vw, 36px); color: #fff; }
.about .a2 { color: #b9c1d8; font-size: 16.5px; }
.about .a3 { display: grid; grid-template-columns: repeat(3, 1fr); gap: 28px; padding-top: 28px; border-top: 1px solid rgba(255,255,255,.08); }
@media (max-width: 560px) { .about .a3 { grid-template-columns: 1fr; } }
.about .a3 i { display: grid; place-items: center; width: 34px; height: 34px; border-radius: 10px; border: 1px solid rgba(255,255,255,.18); font-style: normal; color: #6fd3ff; font-size: 13px; margin-bottom: 12px; }
.about .a3 b { display: block; color: #fff; font-size: 15px; margin-bottom: 6px; }
.about .a3 p { color: #9aa3bf; font-size: 13.5px; line-height: 1.5; margin: 0; }
`;

export const esc = s => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

/** Името на приложението на езика на страницата (Сроко → Sroko на английски). */
export const imeto = (app, lang) => (lang !== 'bg' && app.nameEn) || app.name;

/** Страниците, които имат и другите езици на Lingbolt (/de/lingbolt/…); останалото им е на английски. */
export const LOCAL_PATHS = new Set(['lingbolt/']);

/** Пътищата: BG е в корена, EN под /en/, другите езици — под /<код>/ само за LOCAL_PATHS. */
export const href = (lang, path = '') =>
  lang === 'bg' ? '/' + path : lang === 'en' || !LOCAL_PATHS.has(path) ? '/en/' + path : `/${lang}/` + path;

/** Логото: знакът от новото лого + „Pixel Lab Soft“. */
const BRAND = `<img src="/assets/logo-mark.png" alt="" width="34" height="34"><span>Pixel <span class="lab">Lab</span></span><small>Soft</small>`;
const ARROW = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12h14M13 5l7 7-7 7"/></svg>`;
const MAIL = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="3" y="5" width="18" height="14" rx="3"/><path d="m3 8 9 6 9-6"/></svg>`;
const APPLE = `<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M16.37 12.6c-.02-2.2 1.8-3.26 1.88-3.31-1.02-1.5-2.62-1.7-3.19-1.72-1.36-.14-2.65.8-3.34.8-.69 0-1.75-.78-2.88-.76-1.48.02-2.85.86-3.61 2.19-1.54 2.67-.39 6.62 1.11 8.79.73 1.06 1.6 2.25 2.75 2.2 1.1-.04 1.52-.71 2.85-.71 1.33 0 1.71.71 2.88.69 1.19-.02 1.94-1.08 2.66-2.14.84-1.23 1.19-2.42 1.21-2.48-.03-.01-2.32-.89-2.32-3.55zM14.18 6.13c.61-.74 1.02-1.76.91-2.78-.88.04-1.94.58-2.57 1.32-.56.65-1.06 1.69-.93 2.69.98.08 1.98-.5 2.59-1.23z"/></svg>`;
const PLAY = `<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="#34d17a" d="M3.6 2.3c-.3.3-.5.8-.5 1.4v16.6c0 .6.2 1.1.5 1.4l9.3-9.7z"/><path fill="#ffd23f" d="m16 15.1-3.1-3.1L16 8.9l3.7 2.1c1.1.6 1.1 1.6 0 2.2z"/><path fill="#ff4d5e" d="M16 15.1 12.9 12l-9.3 9.7c.4.4 1 .4 1.7 0z"/><path fill="#3aa0ff" d="M16 8.9 5.3 2.3c-.7-.4-1.3-.4-1.7 0l9.3 9.7z"/></svg>`;
const WINDOWS = `<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M3 5.5 10 4.5v7H3zM11 4.4 21 3v8.5H11zM3 12.5h7v7L3 18.5zM11 12.5h10V21l-10-1.4z"/></svg>`;
const FALLBACK_ICON = `<rect x="4" y="4" width="16" height="16" rx="4"/>`;

/** Иконата на приложение върху цветната плочка. */
export function tile(app, cls = '') {
  if (app.iconImg) return `<span class="tile img ${cls}"><img src="${app.iconImg}" alt="" width="128" height="128"></span>`;
  return `<span class="tile ${cls}" style="--c:${app.color ?? 'var(--accent)'}"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${app.icon ?? FALLBACK_ICON}</svg></span>`;
}

function pill(lang, app, short = false) {
  const t = STRINGS[lang];
  const label = { store: t.statusStore, windows: short ? 'Windows' : t.statusWindows, testing: t.statusTesting }[app.status] ?? t.statusSoon;
  const ok = app.status === 'store' || app.status === 'windows';
  return `<span class="pill${ok ? ' store' : ''}">${esc(label)}</span>`;
}

/** Бутоните към магазините и сваляне — едни и същи на началото и на страницата на приложението. */
function storeButtons(lang, app) {
  const t = STRINGS[lang];
  const b = (url, icon, small, big) => `<a class="store-btn" href="${url}">${icon}<span>${esc(small)}<b>${esc(big)}</b></span></a>`;
  return [
    app.appStore ? b(app.appStore, APPLE, t.getOn, t.appStore) : '',
    app.playStore ? b(app.playStore, PLAY, t.getOnPlay, t.playStore) : '',
    app.external?.download ? b(app.external.download, WINDOWS, t.downloadFor, 'Windows') : '',
  ].filter(Boolean).join('\n');
}

/**
 * Една стъпка назад, горе на всяка вътрешна страница: от приложение и
 * поддръжка — към всички приложения; от условия/поверителност — към приложението.
 */
const ARROW_BACK = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M19 12H5M11 6l-6 6 6 6"/></svg>`;
function backLink(lang, path) {
  const t = STRINGS[lang];
  const parts = (path || '').split('/').filter(Boolean);
  if (!parts.length) return '';
  const [to, label] = parts.length === 1 ? [href(lang) + '#apps', t.allApps] : [href(lang, parts[0] + '/'), t.back];
  return `<a class="back" href="${to}">${ARROW_BACK}${esc(label)}</a>\n`;
}

/** Менюто с езиците на страница, която ги има всичките (Lingbolt). */
function langMenu(lang, path) {
  const here = LINGBOLT_LANGS.find(l => l.code === lang);
  const links = LINGBOLT_LANGS.map(l =>
    `<a href="${href(l.code, path)}" lang="${l.code}" hreflang="${l.code}"${l.code === lang ? ' aria-current="page"' : ''}>${esc(l.native)}</a>`);
  return `<details class="langs"><summary aria-label="${esc(STRINGS[lang].languages ?? 'Language')}">${esc(here.native)}</summary><div class="list">${links.join('')}</div></details>`;
}

/** hreflang: на страница с всичките езици — всичките (и x-default към английския), иначе BG и EN. */
function alternates(lang, path, other, altUrl, canonical) {
  if (!LOCAL_PATHS.has(path)) {
    return `<link rel="alternate" hreflang="${lang}" href="${canonical}">\n<link rel="alternate" hreflang="${other}" href="${altUrl}">`;
  }
  return [...LINGBOLT_LANGS.map(l => [l.code, href(l.code, path)]), ['x-default', href('en', path)]]
    .map(([code, url]) => `<link rel="alternate" hreflang="${code}" href="https://${DOMAIN}${url}">`).join('\n');
}

export function page({ lang, title, description, path, body, alt, color, glow, after = '', image = '', jsonld = null }) {
  const t = STRINGS[lang];
  const co = COMPANY[lang] ?? COMPANY.en;
  const other = lang === 'bg' ? 'en' : 'bg';
  const canonical = `https://${DOMAIN}${href(lang, path)}`;
  const altUrl = `https://${DOMAIN}${href(other, alt ?? path)}`;
  return `<!doctype html>
<html lang="${lang}"${RTL.has(lang) ? ' dir="rtl"' : ''}${color ? ` style="--c:${color}"` : ''}>
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${esc(title)}</title>
<meta name="description" content="${esc(description)}">
<meta name="theme-color" content="#ffffff">
<link rel="canonical" href="${canonical}">
${alternates(lang, path, other, altUrl, canonical)}
<meta property="og:title" content="${esc(title)}">
<meta property="og:description" content="${esc(description)}">
<meta property="og:url" content="${canonical}">
<meta property="og:site_name" content="${esc(t.siteName)}">
<meta property="og:image" content="https://${DOMAIN}${image || `/assets/og/home-${lang}.png`}">
<meta property="og:image:width" content="1200">
<meta property="og:image:height" content="630">
<meta property="og:type" content="website">
<meta property="og:locale" content="${LINGBOLT_LANGS.find(l => l.code === lang)?.locale ?? 'en_US'}">
<meta name="twitter:card" content="summary_large_image">
<link rel="icon" href="/assets/favicon-32.png" type="image/png" sizes="32x32">
<link rel="apple-touch-icon" href="/assets/favicon-180.png">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="stylesheet" href="${FONTS}">
<style>${CSS}${MOCK_CSS}</style>
${jsonld ? `<script type="application/ld+json">${JSON.stringify(jsonld).replace(/</g, '\\u003c')}</script>\n` : ''}</head>
<body>
<div class="top"><div class="wrap">
  <a class="brand" href="${href(lang)}" aria-label="${esc(t.siteName)}">${BRAND}</a>
  <nav>
    <a class="apps-link" href="${href(lang)}#apps">${esc(t.apps)}</a>
    <a href="${href(lang, 'support/')}">${esc(t.support)}</a>
    ${LOCAL_PATHS.has(path) ? langMenu(lang, path) : `<a class="lang" href="${href(other, alt ?? path)}" lang="${other}" hreflang="${other}">${esc(t.otherLang)}</a>`}
    <a class="cta" href="${href(lang)}#apps">${esc(t.seeApps)}</a>
  </nav>
</div></div>
<main class="wrap${glow ? ' glow' : ''}">
${backLink(lang, path)}${body}
</main>
${after}<footer><div class="wrap">
  <div class="cols">
    <div>
      <img class="logo" src="/assets/logo-dark.webp" alt="Pixel Lab" width="150" height="131">
      <div>${esc(t.tagline)}</div>
    </div>
    <div>
      <b>${esc(t.apps)}</b>
      ${APPS.filter(a => !a.draft).map(a => `<a href="${href(lang, a.slug + '/')}">${esc(imeto(a, lang))}</a>`).join('\n      ')}
    </div>
    <div>
      <b>${esc(t.support)}</b>
      <a href="mailto:${SUPPORT_EMAIL}">${SUPPORT_EMAIL}</a>
      <a href="${href(lang, 'support/')}">${esc(t.supportPage)}</a>
    </div>
    <div>
      <b>${esc(co.name)}</b>
      ${esc(co.eik)}<br>${esc(co.address)}
    </div>
  </div>
  <div class="fine">© ${new Date().getFullYear()} ${esc(co.name)}. ${esc(t.footerRights)}</div>
</div></footer>
<button class="totop" type="button" aria-label="${esc(t.toTop)}" title="${esc(t.toTop)}"><svg class="ring" viewBox="0 0 60 60" aria-hidden="true"><circle cx="30" cy="30" r="28"/></svg><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 19V5M5 12l7-7 7 7"/></svg></button>
<script>
(() => {
  // Назад: ако идваш от нашия сайт — истинска стъпка назад (пази и докъде си бил);
  // иначе — обикновената връзка.
  const b = document.querySelector('.back');
  if (b) b.addEventListener('click', e => {
    try {
      if (document.referrer && new URL(document.referrer).origin === location.origin && history.length > 1) {
        e.preventDefault(); history.back();
      }
    } catch (err) { console.warn('back', err); }
  });
  // Нагоре: появява се след първия екран; пръстенът показва докъде си стигнал.
  const t = document.querySelector('.totop'), c = t && t.querySelector('circle');
  if (!t) return;
  const smooth = !matchMedia('(prefers-reduced-motion: reduce)').matches;
  const upd = () => {
    const max = document.documentElement.scrollHeight - innerHeight;
    t.classList.toggle('on', scrollY > innerHeight * 0.8);
    if (c && max > 0) c.style.strokeDashoffset = 176 * (1 - Math.min(1, scrollY / max));
  };
  addEventListener('scroll', upd, { passive: true });
  addEventListener('resize', upd);
  upd();
  t.addEventListener('click', () => scrollTo({ top: 0, behavior: smooth ? 'smooth' : 'auto' }));
})();
</script>
</body>
</html>
`;
}

export function legalBody({ lang, app, kind, doc }) {
  const t = STRINGS[lang];
  const title = kind === 'privacy' ? t.privacy : kind === 'deletion' ? t.deletion : t.terms;
  const id = i => `s${i + 1}`;
  const toc = doc.sections.map(([h], i) => `<li><a href="#${id(i)}">${esc(h)}</a></li>`).join('\n');
  const sections = doc.sections.map(([h, p], i) => `<h2 id="${id(i)}"><small>${String(i + 1).padStart(2, '0')}</small>${esc(h)}</h2>\n${[p].flat().map(x => `<p>${esc(x)}</p>`).join('\n')}`).join('\n');
  return `<div class="doc-head read">
  <div class="crumbs">${tile(app)}<a href="${href(lang, app.slug + '/')}">${esc(imeto(app, lang))}</a><span class="dot"></span><span>${esc(t.updated)}: ${esc(doc.updated)}</span></div>
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
    // Връзка към условията само ако приложението има такива (Сроко засега няма).
    if (app.legal.terms) links.push(`<a href="${href(lang, app.slug + '/terms/')}">${esc(t.terms)}</a>`);
    if (app.legal.deletion) {
      links.push(`<a href="${href(lang, app.slug + '/' + LEGAL_PATH.deletion + '/')}">${esc(t.deletion)}</a>`);
    }
  } else if (app.external?.privacy) {
    const ext = app.external;
    const p = typeof ext.privacy === 'object' ? ext.privacy[lang] : ext.privacy;
    links.push(`<a href="${p}">${esc(t.privacy)}</a>`);
    if (ext.terms) links.push(`<a href="${typeof ext.terms === 'object' ? ext.terms[lang] : ext.terms}">${esc(t.terms)}</a>`);
  }
  // Lingbolt за фирми: своя страница, само на български и английски.
  if (app.external?.teams?.[lang]) links.unshift(`<a href="${href(lang, app.slug + '/teams/')}">${esc(app.external.teams[lang])}</a>`);
  if (app.external?.site) links.push(`<a href="${app.external.site}">${esc(t.website)}</a>`);
  links.push(`<a href="${href(lang, 'support/')}">${esc(t.support)}</a>`);
  return links;
}

function visual(app, lang) {
  return mock(app, lang) || tile(app, 'bigicon');
}

export function appBody({ lang, app }) {
  const stores = storeButtons(lang, app);
  const m = mock(app, lang);
  return `<section class="app-hero">
  <div>
    ${app.wordmark ? `<img class="wordmark" src="${app.wordmark}" alt="${esc(imeto(app, lang))}" width="260" height="84">` : m ? tile(app, 'big') : ''}
    <div class="name">${app.wordmark ? '' : `<span>${esc(imeto(app, lang))}</span>`}${pill(lang, app)}</div>
    <h1>${esc(app.tagline[lang])}</h1>
    ${app.features ? `<div class="chips">${app.features[lang].map(f => `<span class="chip">${esc(f)}</span>`).join('')}</div>` : ''}
    ${stores ? `<div class="stores">${stores}</div>` : ''}
  </div>
  <div class="visual" style="--c:${app.color}">${m || tile(app, 'bigicon')}</div>
</section>
<section class="section read prose">
${app.description[lang].map(p => `<p>${esc(p)}</p>`).join('\n')}
${STRINGS[lang].legalInEnglish ? `<p class="legal-lang">${esc(STRINGS[lang].legalInEnglish)}</p>\n` : ''}<div class="links">
  ${legalLinks(lang, app).join('\n  ')}
</div>
</section>`;
}

/** Ръкописна стрелка до бележката (SVG, без картинка). */
const SQUIGGLE = `<svg class="sq" viewBox="0 0 60 40" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" aria-hidden="true"><path d="M4 6c14 2 30 10 38 26"/><path d="M34 30l8 3 1-9"/></svg>`;
const CHECK = `<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="11" fill="currentColor"/><path d="m7 12.5 3.2 3 6.8-7" fill="none" stroke="#fff" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/></svg>`;

/**
 * Началото (12.10.2026, по картинката на Иво): заглавие с три телефона и
 * ръкописни бележки → решетка с всички приложения → водещото на голямо →
 * двете следващи → „още в лабораторията“ → тъмна лента „за нас“.
 * Само истински екрани, икони и статуси.
 */
const FEATURED = 'sroko';
const MEDIUM = ['glagoli', 'sortis'];

export function homeBody({ lang, apps }) {
  const t = STRINGS[lang];
  const by = slug => apps.find(a => a.slug === slug);
  const note = (a, cls) => a.note ? `<span class="note ${cls}">${esc(a.note[lang])}${SQUIGGLE}</span>` : '';

  const heroApps = ['konspekt', 'glagoli', 'sroko'].map(by).filter(Boolean);
  const compo = heroApps.map((a, i) =>
    mock(a, lang).replace('class="mockwrap"', `class="mockwrap c${i + 1}"`) + note(a, `n${i + 1}`)).join('\n');

  const card = a => `<a class="bcard" href="${href(lang, a.slug + '/')}" style="--c:${a.color}">
  <div class="row">${tile(a)}${pill(lang, a, true)}</div>
  <b>${esc(imeto(a, lang))}</b>
  <p>${esc(a.short?.[lang] ?? a.tagline[lang])}</p>
  <span class="peek">${mock(a, lang, true)}</span>
  <span class="go">${esc(t.more)}${ARROW}</span>
</a>`;

  const f = by(FEATURED);
  const featured = f ? `<section class="feat" id="${f.slug}" style="--c:${f.color}">
  <div class="txt">
    <div class="head"><span class="num">01</span>${tile(f)}<b>${esc(imeto(f, lang))}</b>${pill(lang, f)}</div>
    <h2>${esc(f.tagline[lang])}</h2>
    <p>${esc(f.description[lang][0])}</p>
    <ul class="checks">${(f.features?.[lang] ?? []).map(x => `<li>${CHECK}${esc(x)}</li>`).join('')}</ul>
    <div class="actions">${storeButtons(lang, f)}<a class="more" href="${href(lang, f.slug + '/')}">${esc(t.more)}${ARROW}</a></div>
  </div>
  <div class="visual">${mock(f, lang)}${note(f, 'nf')}</div>
</section>` : '';

  const medium = MEDIUM.map(by).filter(Boolean).map((a, i) => `<section class="mid" id="${a.slug}" style="--c:${a.color}">
  <div class="txt">
    <div class="head"><span class="num">0${i + 2}</span>${tile(a)}<b>${esc(imeto(a, lang))}</b>${pill(lang, a)}</div>
    <h3>${esc(a.tagline[lang])}</h3>
    <p>${esc(a.short?.[lang] ?? '')}</p>
    <div class="actions">${storeButtons(lang, a)}<a class="more" href="${href(lang, a.slug + '/')}">${esc(t.more)}${ARROW}</a></div>
  </div>
  <div class="visual">${mock(a, lang)}</div>
</section>`).join('\n');

  const also = apps.filter(a => a.slug !== FEATURED && !MEDIUM.includes(a.slug)).map(a => `<a class="small" id="${a.slug}" href="${href(lang, a.slug + '/')}" style="--c:${a.color}">
  <div>
    <div class="head">${tile(a)}<b>${esc(imeto(a, lang))}</b>${pill(lang, a)}</div>
    <h3>${esc(a.tagline[lang])}</h3>
    <p>${esc(a.short?.[lang] ?? '')}</p>
    <span class="go">${esc(t.more)}${ARROW}</span>
  </div>
  <span class="peek">${mock(a, lang, true) || tile(a, 'bigicon')}</span>
</a>`).join('\n');

  const principles = t.principles.map(([h, p], i) => `<div><i>${['◆', '●', '■'][i] ?? '•'}</i><b>${esc(h)}</b><p>${esc(p)}</p></div>`).join('\n');

  return `<section class="hero2">
  <div>
    <div class="kicker">${esc(t.studio)}</div>
    <h1>${t.heroLines.map((l, i) => `<span${i === 1 ? ' class="grad"' : ''}>${esc(l)}</span>`).join('<br>')}</h1>
    <p class="lead">${esc(t.homeLead)}</p>
    <div class="ctas"><a class="btn dark" href="#apps">${esc(t.seeApps)}${ARROW}</a><a class="btn" href="${href(lang, 'support/')}">${esc(t.contact)}</a></div>
  </div>
  <div class="compo2" aria-hidden="true">
${compo}
  </div>
</section>
<section class="grid-head" id="apps"><div><h2>${esc(t.gridTitle)}</h2><p>${esc(t.gridLead)}</p></div></section>
<div class="bento">
${apps.map(card).join('\n')}
</div>
${featured}
<div class="mids">
${medium}
</div>
<section class="also-head"><h2>${esc(t.alsoTitle)}</h2><p>${esc(t.alsoLead)}</p></section>
<div class="alsos">
${also}
</div>`;
}

/** Тъмната лента „за нас“ — извън <main>, на цялата ширина, точно над долната част. */
export function aboutBand(lang) {
  const t = STRINGS[lang];
  const principles = t.principles.map(([h, p], i) => `<div><i>${['◆', '●', '■'][i] ?? '•'}</i><b>${esc(h)}</b><p>${esc(p)}</p></div>`).join('\n');
  return `<section class="about"><div class="wrap">
  <div class="a1"><div class="kicker">${esc(t.aboutEyebrow)}</div><h2>${esc(t.aboutTitle)}</h2></div>
  <p class="a2">${esc(t.aboutText)}</p>
  <div class="a3">${principles}</div>
</div></section>`;
}

export function supportBody({ lang, apps }) {
  const t = STRINGS[lang];
  const items = apps.map(app => {
    const legal = legalLinks(lang, app).slice(0, -1); // без „Поддръжка" — това е самата страница
    return `<li>${tile(app)}<a class="n" href="${href(lang, app.slug + '/')}">${esc(imeto(app, lang))}</a><span class="l">${legal.join('\n')}</span></li>`;
  }).join('\n');
  return `<div class="doc-head read">
  <h1>${esc(t.supportTitle)}</h1>
  <p class="lead">${esc(t.supportLead)}</p>
  <a class="mail" href="mailto:${SUPPORT_EMAIL}"><span class="tile">${MAIL}</span>${SUPPORT_EMAIL}</a>
</div>
<section class="section read">
  <h2 style="font-size:22px;margin:40px 0 16px">${esc(t.apps)}</h2>
  <ul class="list">
${items}
  </ul>
</section>`;
}
