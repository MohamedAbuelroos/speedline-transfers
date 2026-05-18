import i18n from "i18next";

import { initReactI18next } from "react-i18next";

import {en} from "./en";
import {ar} from "./ar";
import {ru} from "./ru";

export const translations = {
  en,
  ar,
  ru,
};

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: en,
    },

    ar: {
      translation: ar,
    },

    ru: {
      translation: ru,
    },
  },

  lng: "en",

  fallbackLng: "en",

  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
