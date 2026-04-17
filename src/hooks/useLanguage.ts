"use client";

import { useEffect, useState } from "react";

type Lang = "en" | "ar" | "ru";

function useLanguage() {
  const [lang, setLang] = useState<Lang>("en");

  useEffect(() => {
    const updateLang = () => {
      const savedLang = localStorage.getItem("lang") as Lang;
      if (savedLang) setLang(savedLang);
    };

    updateLang();
    window.addEventListener("languageChange", updateLang);

    return () => window.removeEventListener("languageChange", updateLang);
  }, []);

  return lang;
}

export default useLanguage;
