import i18n from "i18next";
import { initReactI18next } from "react-i18next";

export const translations = {
  en: {
    Home: "Home",
    Fleet: "Fleet",
    Services: "Services",
    Packages: "Packages",
    About: "About",
  },
  ar: {
    Home: "الرئيسية",
    Fleet: "الأسطول",
    Services: "الخدمات",
    Packages: "الباقات",
    About: "حول",
  },
  ru: {
    Home: "Главная",
    Fleet: "Флот",
    Services: "Услуги",
    Packages: "Пакеты",
    About: "О нас",
  },
};

// initialize i18n using translations
i18n.use(initReactI18next).init({
  resources: {
    en: { translation: translations.en },
    ar: { translation: translations.ar },
    ru: { translation: translations.ru },
  },
  lng: "en",
  fallbackLng: "en",
  interpolation: { escapeValue: false },
});

export default i18n;
