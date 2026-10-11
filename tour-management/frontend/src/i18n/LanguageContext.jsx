import React, { createContext, useContext, useEffect, useState } from "react";
import translations from "./translations";

const STORAGE_KEY = "travelsolutions_lang";
const LanguageContext = createContext(null);

const getInitialLang = () => {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved === "en" || saved === "ml") return saved;
  } catch (e) {
    // localStorage unavailable (private mode, etc.) — fall back to default.
  }
  return "ml";
};

export const LanguageProvider = ({ children }) => {
  const [lang, setLang] = useState(getInitialLang);

  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.setAttribute("data-lang", lang);
    try {
      localStorage.setItem(STORAGE_KEY, lang);
    } catch (e) {
      // ignore write failures
    }
  }, [lang]);

  const value = {
    lang,
    setLang,
    t: translations[lang],
  };

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
};

export const useLanguage = () => useContext(LanguageContext);
