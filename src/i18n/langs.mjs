/**
 * Езиците, на които има страница на Lingbolt — същите 40, на които говори
 * самата програма (15 Lingbolt/app/Lingbolt/Core/Languages.cs). BG и EN са
 * целият сайт; останалите имат само страницата на Lingbolt, а правните текстове
 * им сочат английските. Преводите: src/i18n/lingbolt.json (tools/translate_lingbolt.py).
 *
 * [код в адреса и hreflang, име на английски (за превода), име на своя език, og:locale]
 */
export const LINGBOLT_LANGS = [
  ['bg', 'Bulgarian', 'Български', 'bg_BG'],
  ['en', 'English', 'English', 'en_US'],
  ['ar', 'Arabic', 'العربية', 'ar_AR'],
  ['zh-hans', 'Chinese (Simplified)', '简体中文', 'zh_CN'],
  ['zh-hant', 'Chinese (Traditional)', '繁體中文', 'zh_TW'],
  ['hr', 'Croatian', 'Hrvatski', 'hr_HR'],
  ['cs', 'Czech', 'Čeština', 'cs_CZ'],
  ['da', 'Danish', 'Dansk', 'da_DK'],
  ['nl', 'Dutch', 'Nederlands', 'nl_NL'],
  ['et', 'Estonian', 'Eesti', 'et_EE'],
  ['fi', 'Finnish', 'Suomi', 'fi_FI'],
  ['fr', 'French', 'Français', 'fr_FR'],
  ['de', 'German', 'Deutsch', 'de_DE'],
  ['el', 'Greek', 'Ελληνικά', 'el_GR'],
  ['he', 'Hebrew', 'עברית', 'he_IL'],
  ['hi', 'Hindi', 'हिन्दी', 'hi_IN'],
  ['hu', 'Hungarian', 'Magyar', 'hu_HU'],
  ['id', 'Indonesian', 'Bahasa Indonesia', 'id_ID'],
  ['it', 'Italian', 'Italiano', 'it_IT'],
  ['ja', 'Japanese', '日本語', 'ja_JP'],
  ['ko', 'Korean', '한국어', 'ko_KR'],
  ['lv', 'Latvian', 'Latviešu', 'lv_LV'],
  ['lt', 'Lithuanian', 'Lietuvių', 'lt_LT'],
  ['mk', 'Macedonian', 'Македонски', 'mk_MK'],
  ['nb', 'Norwegian', 'Norsk', 'nb_NO'],
  ['fa', 'Persian', 'فارسی', 'fa_IR'],
  ['pl', 'Polish', 'Polski', 'pl_PL'],
  ['pt', 'Portuguese', 'Português', 'pt_PT'],
  ['pt-br', 'Portuguese (Brazil)', 'Português (Brasil)', 'pt_BR'],
  ['ro', 'Romanian', 'Română', 'ro_RO'],
  ['ru', 'Russian', 'Русский', 'ru_RU'],
  ['sr', 'Serbian', 'Српски', 'sr_RS'],
  ['sk', 'Slovak', 'Slovenčina', 'sk_SK'],
  ['sl', 'Slovenian', 'Slovenščina', 'sl_SI'],
  ['es', 'Spanish', 'Español', 'es_ES'],
  ['sv', 'Swedish', 'Svenska', 'sv_SE'],
  ['th', 'Thai', 'ไทย', 'th_TH'],
  ['tr', 'Turkish', 'Türkçe', 'tr_TR'],
  ['uk', 'Ukrainian', 'Українська', 'uk_UA'],
  ['vi', 'Vietnamese', 'Tiếng Việt', 'vi_VN'],
].map(([code, english, native, locale]) => ({ code, english, native, locale }));

/** Езиците, които пишат отдясно наляво. */
export const RTL = new Set(['ar', 'he', 'fa']);

/**
 * Надписите на сайта, които страницата на Lingbolt ползва — английските от
 * STRINGS.en се превеждат, плюс тези два, които ги има само тук.
 */
export const PAGE_KEYS = ['tagline', 'apps', 'support', 'privacy', 'terms', 'allApps', 'toTop', 'statusWindows',
  'downloadFor', 'supportPage', 'footerRights', 'seeApps', 'contact'];
export const EXTRA_EN = {
  languages: 'Language',
  legalInEnglish: 'The privacy policy and the terms of use are in English.',
};
