import React from "react";
import "./EntityCard.css";

const placeholderClass = "entity-card__img--placeholder";

const EntityCard = ({ image, badge, title, meta, description, inclusions, regularRate, offerRate, rateUnit, ctaLabel, ctaHref }) => {
  return (
    <div className="entity-card">
      <div className={`entity-card__img ${image ? "" : placeholderClass}`}>
        {image ? <img src={image} alt={title} /> : <i className="ri-image-2-line"></i>}
        {badge && <span className="entity-card__badge">{badge}</span>}
      </div>

      <div className="entity-card__body">
        <h5 className="entity-card__title">{title}</h5>
        {meta && <div className="entity-card__meta">{meta}</div>}
        {description && <p className="entity-card__desc">{description}</p>}

        {inclusions && inclusions.length > 0 && (
          <ul className="entity-card__list">
            {inclusions.map((item, index) => (
              <li key={index}>
                <i className="ri-checkbox-circle-fill"></i> {item}
              </li>
            ))}
          </ul>
        )}

        <div className="entity-card__footer">
          <div className="entity-card__price">
            {offerRate && offerRate !== regularRate ? (
              <>
                <span className="entity-card__price-strike">₹{regularRate}</span>
                <span className="entity-card__price-main">₹{offerRate}</span>
              </>
            ) : (
              <span className="entity-card__price-main">₹{regularRate}</span>
            )}
            {rateUnit && <span className="entity-card__price-unit">{rateUnit}</span>}
          </div>
          {ctaHref && (
            <a href={ctaHref} target="_blank" rel="noreferrer">
              <button className="booking__btn">
                <i className="ri-whatsapp-line"></i> {ctaLabel}
              </button>
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default EntityCard;
