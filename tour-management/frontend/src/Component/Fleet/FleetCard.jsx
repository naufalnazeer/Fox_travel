import React from "react";
import { Card, CardBody } from "reactstrap";
import CardImageCarousel from "../shared/CardImageCarousel";
import "./Fleet-card.css";
import { whatsappLink } from "../../data/siteConfig";
import { useLanguage } from "../../i18n/LanguageContext";

const FleetCard = ({ vehicle }) => {
  const { name, seats, images, startingPrice, priceUnit, minimumNote, features, popular } = vehicle;
  const { lang, t } = useLanguage();

  return (
    <div className="fleet__card">
      <Card>
        <div className="fleet__img">
          <CardImageCarousel images={images} alt={name[lang]} placeholderIcon="ri-bus-2-line" />
          {popular && <span>{t.fleetSection.popular}</span>}
        </div>
        <div className="card-accent-bar" />

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
            <div>
              <h5 className="mb-0">
                {startingPrice} <span>{priceUnit[lang]}</span>
              </h5>
              {minimumNote && <div className="fleet__minimum-note">{minimumNote[lang]}</div>}
            </div>

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
