import React from "react";
import { Card, CardBody } from "reactstrap";
import "./Fleet-card.css";
import { whatsappLink } from "../../data/siteConfig";
import { useLanguage } from "../../i18n/LanguageContext";

const FleetCard = ({ vehicle }) => {
  const { name, seats, img, startingPrice, priceUnit, features, popular } = vehicle;
  const { lang, t } = useLanguage();

  return (
    <div className="fleet__card">
      <Card>
        <div className={`fleet__img${img ? "" : " fleet__img--placeholder"}`}>
          {img ? <img src={img} alt={name[lang]} /> : <i className="ri-bus-2-line"></i>}
          {popular && <span>{t.fleetSection.popular}</span>}
        </div>

        <CardBody>
          <div className="d-flex align-items-center justify-content-between">
            <h5 className="fleet__name mb-0">{name[lang]}</h5>
            <span className="fleet__seats">{seats[lang]}</span>
          </div>

          <ul className="fleet__features">
            {features[lang].map((feature, index) => (
              <li key={index}>
                <i className="ri-checkbox-circle-fill"></i> {feature}
              </li>
            ))}
          </ul>

          <div className="fleet__bottom d-flex align-items-center justify-content-between mt-3">
            <h5>
              {startingPrice} <span>{priceUnit[lang]}</span>
            </h5>

            <a
              href={whatsappLink(t.whatsapp.vehicle(name[lang], seats[lang]))}
              target="_blank"
              rel="noreferrer"
            >
              <button className="booking__btn">{t.fleetSection.enquire}</button>
            </a>
          </div>
        </CardBody>
      </Card>
    </div>
  );
};

export default FleetCard;
