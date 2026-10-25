// The English words of the Lingbolt page, flat, for tools/translate_lingbolt.py:  node tools/lingbolt_source.mjs
import lingbolt from '../src/apps/lingbolt.mjs';
import { SHOTS } from '../src/mocks.mjs';
import { EXTRA_EN, PAGE_KEYS } from '../src/i18n/langs.mjs';
import { STRINGS } from '../src/site.mjs';

const out = {};
for (const k of PAGE_KEYS) out[`site.${k}`] = STRINGS.en[k];
for (const [k, v] of Object.entries(EXTRA_EN)) out[`site.${k}`] = v;
out.tagline = lingbolt.tagline.en;
lingbolt.features.en.forEach((f, i) => { out[`feature.${i}`] = f; });
lingbolt.description.en.forEach((p, i) => { out[`description.${i}`] = p; });
out.alt = SHOTS.lingbolt.alt.en;
process.stdout.write(JSON.stringify(out, null, 1));
