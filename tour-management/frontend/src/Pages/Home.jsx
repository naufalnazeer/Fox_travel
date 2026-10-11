import React from "react";

import "../styles/home.css";

import { Container, Row, Col } from "reactstrap";
import keralaKsrtcBus from "../assest/images/travelfox/kerala-ksrtc-bus.jpg";
import alleppeyHouseboat from "../assest/images/travelfox/alleppey-houseboat.jpg";
import kathakaliDancer from "../assest/images/travelfox/kathakali-dancer.jpg";
import elephantProcession from "../assest/images/travelfox/elephant-procession.jpg";
import Subtitle from "../Shared/Subtitle";
import ServiceList from "../services/ServiceList";
import ImageCarousel from "../Component/image-gallery/ImageCarousel";
import FleetCard from "../Component/Fleet/FleetCard";
import fleetData from "../data/fleet";
import destinationsData from "../data/destinations";
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
  const { t, lang } = useLanguage();

  return (
    <>
      <section>
        <Container>
          <Row>
            <Col lg="6">
              <div className="hero_content" data-aos="fade-right">
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
              <div className="hero__img-box" data-aos="fade-left" data-aos-delay="150">
                <img src={keralaKsrtcBus} alt="Kerala tourist bus on a hill road" />
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section>
        <Container>
          <Row>
            <Col lg="12" className="mb-4" data-aos="fade-up">
              <h5 className="services__subtitle">{t.services.kicker}</h5>
              <h1 className="services__title">{t.services.title}</h1>
            </Col>
          </Row>
          <Row>
            <ServiceList />
          </Row>
        </Container>
      </section>

      <section>
        <Container>
          <Row>
            <Col lg="12" className="mb-5" data-aos="fade-up">
              <Subtitle Subtitle={t.fleetSection.kicker} />
              <h2 className="featured_tour-title">{t.fleetSection.title}</h2>
            </Col>
            {fleetData.map((vehicle, index) => (
              <Col
                lg="4"
                md="6"
                sm="12"
                className="mb-4"
                key={vehicle.id}
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
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
            <Col lg="12" className="mb-5" data-aos="fade-up">
              <Subtitle Subtitle={t.destinations.kicker} />
              <h2 className="featured_tour-title">{t.destinations.title}</h2>
            </Col>
            {destinationsData.map((destination, index) => (
              <Col
                lg="6"
                md="6"
                sm="12"
                className="mb-4"
                key={destination.id}
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="destination__card">
                  <div className="destination__img">
                    <img src={destination.img} alt={destination.name.en} />
                  </div>
                  <div className="destination__body">
                    <h4>{destination.name[lang]}</h4>
                    <p>{destination.desc[lang]}</p>
                    <a
                      href={whatsappLink(t.whatsapp.destination(destination.name[lang]))}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <button className="booking__btn">
                        <i className="ri-whatsapp-line"></i> {t.destinations.enquire}
                      </button>
                    </a>
                  </div>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      <div className="kerala-divider"></div>

      <section className="culture__section">
        <div
          className="culture__bg bg1"
          style={{ backgroundImage: `url(${kathakaliDancer})` }}
        ></div>
        <div
          className="culture__bg bg2"
          style={{ backgroundImage: `url(${elephantProcession})` }}
        ></div>
        <div className="culture__overlay"></div>
        <Container>
          <Row>
            <Col lg="8" className="mx-auto culture__content" data-aos="zoom-in">
              <Subtitle Subtitle={t.culture.kicker} />
              <h2>{t.culture.title}</h2>
              <p>{t.culture.description}</p>
              <a href={whatsappLink(t.whatsapp.culture)} target="_blank" rel="noreferrer">
                <button className="btn primary__btn">
                  <i className="ri-whatsapp-line"></i> {t.culture.cta}
                </button>
              </a>
            </Col>
          </Row>
        </Container>
      </section>

      <div className="kerala-divider"></div>

      <section>
        <Container>
          <Row>
            <Col lg="6" data-aos="fade-right">
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
            <Col lg="6" data-aos="fade-left" data-aos-delay="150">
              <div className="experience__img">
                <img src={alleppeyHouseboat} alt="Houseboat in Alappuzha backwaters" />
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section>
        <Container>
          <Row>
            <Col lg="12" data-aos="fade-up">
              <Subtitle Subtitle={t.gallerySection.kicker} />
              <h2 className="gallery__title">{t.gallerySection.title}</h2>
            </Col>
            <Col lg="12">
              <ImageCarousel />
            </Col>
          </Row>
        </Container>
      </section>

      <section className="cta__band">
        <Container>
          <Row>
            <Col lg="8" className="mx-auto text-center" data-aos="zoom-in">
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
