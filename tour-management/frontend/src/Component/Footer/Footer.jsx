import React from "react";
import "./Footer.css";

import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap";

import { Link } from "react-router-dom";
import siteConfig, { callLink, emailLink, whatsappLink } from "../../data/siteConfig";
import servicesData from "../../data/services";
import { useLanguage } from "../../i18n/LanguageContext";

const Footer = () => {
  const year = new Date().getFullYear();
  const { t, lang } = useLanguage();

  const quick__links = [
    { path: "/home", display: t.nav.home },
    { path: "/fleet-pricing", display: t.nav.fleet },
    { path: "/gallery", display: t.nav.gallery },
    { path: "/contact", display: t.nav.contact },
  ];

  return (
    <>
      <div className="kerala-divider"></div>
      <footer className="footer">
      <Container>
        <Row>
          <Col lg="4" md="6">
            <div className="footer__brand">
              <h3 className="footer__logo-text">
                <i className="ri-bus-2-fill"></i> {siteConfig.businessName}
              </h3>
              <p>{t.footer.description}</p>

              <div className="social__links d-flex align-items-center gap-4">
                <span>
                  <a href={siteConfig.social.facebook} target="_blank" rel="noreferrer">
                    <i className="ri-facebook-fill"></i>
                  </a>
                </span>
                <span>
                  <a href={siteConfig.social.instagram} target="_blank" rel="noreferrer">
                    <i className="ri-instagram-fill"></i>
                  </a>
                </span>
                <span>
                  <a href={siteConfig.social.youtube} target="_blank" rel="noreferrer">
                    <i className="ri-youtube-line"></i>
                  </a>
                </span>
                <span>
                  <a href={whatsappLink(t.whatsapp.default)} target="_blank" rel="noreferrer">
                    <i className="ri-whatsapp-line"></i>
                  </a>
                </span>
              </div>
            </div>
          </Col>

          <Col lg="2" md="6">
            <h5 className="footer__link-title">{t.footer.quickLinks}</h5>

            <ListGroup className="footer__quick-links">
              {quick__links.map((item, index) => (
                <ListGroupItem key={index} className="ps-0 border-0">
                  <Link to={item.path}>{item.display}</Link>
                </ListGroupItem>
              ))}
            </ListGroup>
          </Col>

          <Col lg="3" md="6">
            <h5 className="footer__link-title">{t.footer.ourServices}</h5>

            <ListGroup className="footer__quick-links">
              {servicesData.map((item, index) => (
                <ListGroupItem key={index} className="ps-0 border-0">
                  {item.title[lang]}
                </ListGroupItem>
              ))}
            </ListGroup>
          </Col>

          <Col lg="3" md="6">
            <h5 className="footer__link-title">{t.footer.contact}</h5>

            <ListGroup className="footer__quick-links">
              <ListGroupItem className="ps-0 border-0 d-flex align-items-start gap-3">
                <span>
                  <i className="ri-map-pin-line"></i>
                </span>
                <p className="mb-0">
                  {siteConfig.address.line1}
                  <br />
                  {siteConfig.address.line2}
                </p>
              </ListGroupItem>
              <ListGroupItem className="ps-0 border-0 d-flex align-items-center gap-3">
                <span>
                  <i className="ri-mail-line"></i>
                </span>
                <a href={emailLink}>{siteConfig.email}</a>
              </ListGroupItem>
              <ListGroupItem className="ps-0 border-0 d-flex align-items-center gap-3">
                <span>
                  <i className="ri-phone-line"></i>
                </span>
                <a href={callLink}>{siteConfig.phoneDisplay}</a>
              </ListGroupItem>
            </ListGroup>
          </Col>

          <Col lg="12" className="text-center pt-5">
            <p className="copyright">
              © {year} {siteConfig.businessName}. {t.footer.rights}
            </p>
          </Col>
        </Row>
      </Container>
      </footer>
    </>
  );
};
export default Footer;
