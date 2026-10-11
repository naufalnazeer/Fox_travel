import React from "react";
import "./Service-card.css";
import { useLanguage } from "../i18n/LanguageContext";

const ServiceCard = ({ item }) => {
  const { icon, title, desc } = item;
  const { lang } = useLanguage();
  return (
    <div className="service__item">
      <div className="service__icon">
        <i className={icon}></i>
      </div>
      <h5>{title[lang]}</h5>
      <p>{desc[lang]}</p>
    </div>
  );
};

export default ServiceCard;
