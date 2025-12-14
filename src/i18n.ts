import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { getCookie } from "@tanstack/react-start/server";
import { createIsomorphicFn } from "@tanstack/react-start";
import LanguageDetector from "i18next-browser-languagedetector";

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

export const i18nCookieName = "i18nextLng";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
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
    supportedLngs: ["en", "es"],
    detection: {
      order: ["cookie", "path"],
      lookupCookie: i18nCookieName,
      caches: ["cookie"],
      cookieMinutes: 60 * 24 * 365, // 1 year
    },
    interpolation: {
      escapeValue: false,
    },
  });

export const setSSRLanguage = createIsomorphicFn().server(async () => {
  const language = getCookie(i18nCookieName);
  await i18n.changeLanguage(language || fallbackLng);
});

export default i18n;
