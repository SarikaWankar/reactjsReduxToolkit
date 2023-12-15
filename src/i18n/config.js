import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import * as TRANSLATIONS_EN from "./locales/en.json";
import * as TRANSLATIONS_ES from "./locales/es.json";
import * as TRANSLATIONS_ML from "./locales/ml.json";
import * as TRANSLATIONS_THAI from "./locales/thai.json";

export const AVAILABLE_LANGUAGES = [
  { code: "en", label: "English" },
  { code: "es", label: "Spanish" },
  { code: "ml", label: "Malay" },
  { code: "thi", label: "Thai" },
];

const selectedLanguage = JSON.parse(
  localStorage.getItem("SelectedLanguage")
    ? localStorage.getItem("SelectedLanguage")
    : null
);
let currentLanguage = selectedLanguage
  ? selectedLanguage
  : "English - United States";


i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: "English",
    lng: currentLanguage,
    detection: {
      // order and from where user language should be detected
      order: ["querystring", "navigator"],
      // keys or params to lookup language from
      lookupQuerystring: "lng",
    },
    debug: false,
    resources: {
      English: {
        translations: {
          ...TRANSLATIONS_EN.default,
        },
      },
      Spanish: {
        translations: {
          ...TRANSLATIONS_ES.default,
        },
      },
      Malay: {
        translations: {
          ...TRANSLATIONS_ML.default,
        },
      },
      Thai: {
        translations: {
          ...TRANSLATIONS_THAI.default,
        },
      },
    },
    ns: ["translations"],
    defaultNS: "translations",
  });
i18n.languages = ["English", "Spanish", "Malay", "Thai"];

export default i18n;
