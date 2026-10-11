import React from "react";

import "../styles/home.css";

import { Container, Row, Col } from "reactstrap";
import heroHighwayBus from "../assest/images/travelfox/hero-highway-bus.jpg";
import galleryScenicBridge from "../assest/images/travelfox/gallery-scenic-bridge.jpg";
import Subtitle from "../Shared/Subtitle";
import ServiceList from "../services/ServiceList";
import MasonryImageGallery from "../Component/image-gallery/MasonryImageGallery";
import FleetCard from "../Component/Fleet/FleetCard";
import fleetData from "../data/fleet";
import { callLink, whatsappLink } from "../data/siteConfig";
import { Link } from "react-router-dom";
import { useLanguage } from "../i18n/LanguageContext";

const whyUsIcons = [
  "ri-shield-check-line",
  "ri-time-line",
  "ri-sparkling-2-line",
  "ri-price-tag-3-line",
];

const Home = () => {
  const { t } = useLanguage();

  return (
    <>
      <section>
        <Container>
          <Row>
            <Col lg="6">
              <div className="hero_content">
                <div className="hero__subtitle d-flex align-items-center">
                  <Subtitle Subtitle={t.hero.badge} />
                </div>
                <h1>
                  {t.hero.headingPrefix}
                  <span className="highlight"> {t.hero.headingHighlight}</span>
                </h1>
                <p>
                  {t.hero.description}
                  <br />
                  <br />
                  {t.hero.description2}
                </p>
                <div className="hero__btns d-flex align-items-center gap-3">
                  <a href={whatsappLink(t.whatsapp.default)} target="_blank" rel="noreferrer">
                    <button className="btn primary__btn">
                      <i className="ri-whatsapp-line"></i> {t.hero.ctaQuote}
                    </button>
                  </a>
                  <a href={callLink}>
                    <button className="btn secondary__btn">
                      <i className="ri-phone-line"></i> {t.hero.ctaCall}
                    </button>
                  </a>
                </div>
              </div>
            </Col>

            <Col lg="6">
              <div className="hero__img-box">
                <img src={heroHighwayBus} alt="TravelSolutions tour bus on the highway" />
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section>
        <Container>
          <Row>
            <Col lg="3">
              <h5 className="services__subtitle">{t.services.kicker}</h5>
              <h1 className="services__title">{t.services.title}</h1>
            </Col>
            <ServiceList />
          </Row>
        </Container>
      </section>

      <section>
        <Container>
          <Row>
            <Col lg="12" className="mb-5">
              <Subtitle Subtitle={t.fleetSection.kicker} />
              <h2 className="featured_tour-title">{t.fleetSection.title}</h2>
            </Col>
            {fleetData.map((vehicle) => (
              <Col lg="4" md="6" sm="12" className="mb-4" key={vehicle.id}>
                <FleetCard vehicle={vehicle} />
              </Col>
            ))}
            <Col lg="12" className="text-center mt-3">
              <Link to="/fleet-pricing">
                <button className="btn primary__btn">{t.fleetSection.viewAll}</button>
              </Link>
            </Col>
          </Row>
        </Container>
      </section>

      <section>
        <Container>
          <Row>
            <Col lg="6">
              <div className="experience__content">
                <Subtitle Subtitle={t.whyUs.kicker} />
                <h2>{t.whyUs.title}</h2>
                <p>{t.whyUs.description}</p>
              </div>
              <div className="why__us-grid mt-4">
                {t.whyUs.items.map((item, index) => (
                  <div className="why__us-item d-flex align-items-center gap-3" key={index}>
                    <i className={whyUsIcons[index]}></i>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </Col>
            <Col lg="6">
              <div className="experience__img">
                <img src={galleryScenicBridge} alt="TravelSolutions bus on a scenic route" />
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section>
        <Container>
          <Row>
            <Col lg="12">
              <Subtitle Subtitle={t.gallerySection.kicker} />
              <h2 className="gallery__title">{t.gallerySection.title}</h2>
            </Col>
            <Col lg="12">
              <MasonryImageGallery />
            </Col>
          </Row>
        </Container>
      </section>

      <section className="cta__band">
        <Container>
          <Row>
            <Col lg="8" className="mx-auto text-center">
              <h2>{t.cta.title}</h2>
              <p>{t.cta.description}</p>
              <div className="d-flex align-items-center justify-content-center flex-wrap gap-3 mt-3">
                <a href={whatsappLink(t.whatsapp.default)} target="_blank" rel="noreferrer">
                  <button className="btn primary__btn">
                    <i className="ri-whatsapp-line"></i> {t.cta.whatsapp}
                  </button>
                </a>
                <a href={callLink}>
                  <button className="btn secondary__btn">
                    <i className="ri-phone-line"></i> {t.hero.ctaCall}
                  </button>
                </a>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Home;
