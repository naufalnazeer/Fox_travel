import React from "react";
import "./FloatingWhatsApp.css";
import { whatsappLink } from "../../data/siteConfig";
import { useLanguage } from "../../i18n/LanguageContext";

const FloatingWhatsApp = () => {
  const { t } = useLanguage();
  return (
    <a
      href={whatsappLink(t.whatsapp.default)}
      className="floating__whatsapp"
      target="_blank"
      rel="noreferrer"
      aria-label="Chat on WhatsApp"
    >
      <i className="ri-whatsapp-line"></i>
    </a>
  );
};

export default FloatingWhatsApp;
