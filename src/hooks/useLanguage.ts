"use client";

import { useEffect, useState } from "react";
import i18n from "../i18n";

type Lang = "en" | "ar" | "ru";

function useLanguage() {
  const [lang, setLang] = useState<Lang>("en");

  useEffect(() => {
    const updateLang = () => {
      const savedLang = localStorage.getItem("lang") as Lang;
      if (savedLang) {
        setLang(savedLang);
        i18n.changeLanguage(savedLang);
      }
    };

    updateLang();

    window.addEventListener("languageChange", updateLang);
    window.addEventListener("storage", updateLang);

    return () => {
      window.removeEventListener("languageChange", updateLang);
      window.removeEventListener("storage", updateLang);
    };
  }, []);

  return lang;
}

export default useLanguage;
