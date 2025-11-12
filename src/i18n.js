import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Importamos todos los archivos JSON
//import translationAR from './locales/ar.json';
//import translationAZ from './locales/az.json';
//import translationBG from './locales/bg.json';
//import translationBN from './locales/bn.json';
//import translationCA from './locales/ca.json';
//import translationCS from './locales/cs.json';
//import translationDA from './locales/da.json';
//import translationDE from './locales/de.json';
//import translationEL from './locales/el.json';
import translationEN from './locales/en.json';
//import translationEO from './locales/eo.json';
//import translationET from './locales/et.json';
//import translationEU from './locales/eu.json';
//import translationFA from './locales/fa.json';
//import translationFI from './locales/fi.json';
//import translationFR from './locales/fr.json';
//import translationGA from './locales/ga.json';
//import translationGL from './locales/gl.json';
//import translationHE from './locales/he.json';
//import translationHI from './locales/hi.json';
//import translationHU from './locales/hu.json';
//import translationID from './locales/id.json';
//import translationIT from './locales/it.json';
//import translationJA from './locales/ja.json';
//import translationKO from './locales/ko.json';
//import translationKY from './locales/ky.json';
//import translationLT from './locales/lt.json';
//import translationLV from './locales/lv.json';
//import translationMS from './locales/ms.json';
//import translationNB from './locales/nb.json';
//import translationNL from './locales/nl.json';
//import translationPT_BR from './locales/pt_BR.json';
//import translationPL from './locales/pl.json';
//import translationPT from './locales/pt.json';
//import translationRO from './locales/ro.json';
//import translationRU from './locales/ru.json';
//import translationSK from './locales/sk.json';
//import translationSL from './locales/sl.json';
//import translationSQ from './locales/sq.json';
//import translationSV from './locales/sv.json';
//import translationTH from './locales/th.json';
//import translationTL from './locales/tl.json';
//import translationTR from './locales/tr.json';
//import translationUK from './locales/uk.json';
//import translationUR from './locales/ur.json';
//import translationZH_HANS from './locales/zh_Hans.json';
//import translationZH_HANT from './locales/zh_Hant.json';
import translationES from './locales/es.json';

const resources = {
    //    ar: { translation: translationAR },
    //    az: { translation: translationAZ },
    //    bg: { translation: translationBG },
    //    bn: { translation: translationBN },
    //    ca: { translation: translationCA },
    //    cs: { translation: translationCS },
    //    da: { translation: translationDA },
    //    de: { translation: translationDE },
    //    el: { translation: translationEL },
        en: { translation: translationEN },
    //    eo: { translation: translationEO },
    //    et: { translation: translationET },
    //    eu: { translation: translationEU },
    //    fa: { translation: translationFA },
    //    fi: { translation: translationFI },
    //    fr: { translation: translationFR },
    //    ga: { translation: translationGA },
    //    gl: { translation: translationGL },
    //    he: { translation: translationHE },
    //    hi: { translation: translationHI },
    //    hu: { translation: translationHU },
    //    id: { translation: translationID },
    //    it: { translation: translationIT },
    //    ja: { translation: translationJA },
    //    ko: { translation: translationKO },
    //    ky: { translation: translationKY },
    //    lt: { translation: translationLT },
    //    lv: { translation: translationLV },
    //    ms: { translation: translationMS },
    //    nb: { translation: translationNB },
    //    nl: { translation: translationNL },
    //  'pt-BR': { translation: translationPT_BR },
    //    pl: { translation: translationPL },
    //    pt: { translation: translationPT },
    //    ro: { translation: translationRO },
    //    ru: { translation: translationRU },
    //    sk: { translation: translationSK },
    //    sl: { translation: translationSL },
    //    sq: { translation: translationSQ },
    //    sv: { translation: translationSV },
    //    th: { translation: translationTH },
    //    tl: { translation: translationTL },
    //    tr: { translation: translationTR },
    //    uk: { translation: translationUK },
    //    ur: { translation: translationUR },
    //   'zh-Hans': { translation: translationZH_HANS },
    // 'zh-Hant': { translation: translationZH_HANT },
    es: { translation: translationES },
};

i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        resources,
        fallbackLng: 'es',
        interpolation: {
            escapeValue: false
        }
    });

export default i18n;