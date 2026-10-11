import React from "react";
import "./LanguageSwitcher.css";
import { useLanguage } from "../../i18n/LanguageContext";

const LanguageSwitcher = () => {
  const { lang, setLang } = useLanguage();

  return (
    <div className="lang__switcher" role="group" aria-label="Language">
      <button
        type="button"
        className={lang === "en" ? "active" : ""}
        onClick={() => setLang("en")}
      >
        EN
      </button>
      <button
        type="button"
        className={lang === "ml" ? "active" : ""}
        onClick={() => setLang("ml")}
      >
        മല
      </button>
    </div>
  );
};

export default LanguageSwitcher;
