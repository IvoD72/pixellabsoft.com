/**
 * Списъкът с приложенията, в реда, в който се показват на началната страница.
 *
 * Приложение без `legal` (правни текстове тук) сочи към собствения си сайт
 * през `external` — Sortis има sortis.pro. Приложение със статус „soon" няма
 * правни страници, докато не влезе в магазините.
 */
import konspekt from './konspekt.mjs';
import sortis from './sortis.mjs';
import glagoli from './glagoli.mjs';
import sroko from './sroko.mjs';

export const APPS = [konspekt, sortis, glagoli, sroko];
