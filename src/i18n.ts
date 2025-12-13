import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import en from "./locales/en.json";
import es from "./locales/es.json";

const fallbackLng = "en";
const getInitialLanguage = () => {
  if (typeof window !== "undefined") {
    const path = window.location.pathname;
    const locale = path.split("/")[1];
    return locale;
  }
  return fallbackLng;
};

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: en,
    },
    es: {
      translation: es,
    },
  },
  lng: getInitialLanguage(), // Default language, will be overwritten by router
  fallbackLng,
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
