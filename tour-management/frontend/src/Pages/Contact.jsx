import React from "react";
import { Container, Row, Col } from "reactstrap";

import CommonSection from "../Shared/CommonSection";
import "../styles/contact.css";
import siteConfig, { callLink, emailLink, whatsappLink } from "../data/siteConfig";
import { useLanguage } from "../i18n/LanguageContext";

const Contact = () => {
  const { t } = useLanguage();
  const mapQuery = encodeURIComponent(
    `${siteConfig.address.line1}, ${siteConfig.address.line2}`
  );

  return (
    <>
      <CommonSection title={t.contactPage.title} />
      <section>
        <Container>
          <Row>
            <Col lg="5" md="6" className="mb-4" data-aos="fade-right">
              <h4>{t.contactPage.getInTouch}</h4>
              <p className="fleet__note">{t.contactPage.description}</p>

              <ul className="contact__info">
                <li>
                  <i className="ri-map-pin-line"></i>
                  <span>
                    {siteConfig.address.line1}
                    <br />
                    {siteConfig.address.line2}
                  </span>
                </li>
                <li>
                  <i className="ri-phone-line"></i>
                  <a href={callLink}>{siteConfig.phoneDisplay}</a>
                </li>
                <li>
                  <i className="ri-mail-line"></i>
                  <a href={emailLink}>{siteConfig.email}</a>
                </li>
              </ul>

              <div className="contact__btns d-flex align-items-center flex-wrap gap-3 mt-4">
                <a href={whatsappLink(t.whatsapp.default)} target="_blank" rel="noreferrer">
                  <button className="btn primary__btn">
                    <i className="ri-whatsapp-line"></i> {t.contactPage.whatsapp}
                  </button>
                </a>
                <a href={callLink}>
                  <button className="btn secondary__btn">
                    <i className="ri-phone-line"></i> {t.contactPage.callNow}
                  </button>
                </a>
              </div>

              <div className="social__links d-flex align-items-center gap-4 mt-4">
                <a href={siteConfig.social.facebook} target="_blank" rel="noreferrer">
                  <i className="ri-facebook-fill"></i>
                </a>
                <a href={siteConfig.social.instagram} target="_blank" rel="noreferrer">
                  <i className="ri-instagram-fill"></i>
                </a>
                <a href={siteConfig.social.youtube} target="_blank" rel="noreferrer">
                  <i className="ri-youtube-line"></i>
                </a>
              </div>
            </Col>

            <Col lg="7" md="6" data-aos="fade-left">
              <div className="contact__map">
                <iframe
                  title="TravelSolutions location"
                  src={`https://maps.google.com/maps?q=${mapQuery}&output=embed`}
                  width="100%"
                  height="420"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                ></iframe>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Contact;
