import React from "react";
import { Container, Row, Col } from "reactstrap";

import CommonSection from "../Shared/CommonSection";
import FleetCard from "../Component/Fleet/FleetCard";
import fleetData from "../data/fleet";
import { whatsappLink } from "../data/siteConfig";
import "../styles/contact.css";
import { useLanguage } from "../i18n/LanguageContext";

const Fleet = () => {
  const { t } = useLanguage();

  return (
    <>
      <CommonSection title={t.fleetPage.title} />
      <section>
        <Container>
          <Row>
            <Col lg="12" className="mb-4">
              <p className="fleet__note">{t.fleetPage.note}</p>
            </Col>
            {fleetData.map((vehicle) => (
              <Col lg="4" md="6" sm="12" className="mb-4" key={vehicle.id}>
                <FleetCard vehicle={vehicle} />
              </Col>
            ))}
          </Row>

          <Row className="mt-4">
            <Col lg="12" className="text-center">
              <h4>{t.fleetPage.notSureTitle}</h4>
              <p>{t.fleetPage.notSureDesc}</p>
              <a href={whatsappLink(t.whatsapp.default)} target="_blank" rel="noreferrer">
                <button className="btn primary__btn">
                  <i className="ri-whatsapp-line"></i> {t.fleetPage.askWhatsapp}
                </button>
              </a>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Fleet;
