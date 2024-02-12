import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";
<<<<<<< HEAD
import arabic from "./language/ar.json";
import english from "./language/en.json";

const resources = {
  en: {
    translation: english,
  },
  ar: {
    translation: arabic,
=======

// import arabic from "./languages/ar.json";
// import english from "./languages/en.json";

const resources = {

  en: {
    translation: {
      title: 'The Green Yard',
    },
  },
  ar: {
    translation: {
      title: 'الفناء الأخضر',
    },
>>>>>>> b7eba8af2b5dd4e7ac7b9022adcde0526f3ec4ee
  },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
<<<<<<< HEAD
=======
    fallbackLng: "en",
    supportedLngs:['en','ar'],
    debug: false,
>>>>>>> b7eba8af2b5dd4e7ac7b9022adcde0526f3ec4ee
    resources,
    detection: {
      order: ["localStorage", "htmlTag"],
      caches: ["localStorage"],
    },

    interpolation: {
      escapeValue: false, // react already safes from xss
    },

    react: {
      useSuspense: false,
    },
  });

export default i18n;
