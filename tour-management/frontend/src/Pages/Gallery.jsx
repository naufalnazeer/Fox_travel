import React from "react";
import { Container, Row, Col } from "reactstrap";

import CommonSection from "../Shared/CommonSection";
import MasonryImageGallery from "../Component/image-gallery/MasonryImageGallery";
import "../styles/contact.css";
import { useLanguage } from "../i18n/LanguageContext";

const Gallery = () => {
  const { t } = useLanguage();

  return (
    <>
      <CommonSection title={t.galleryPage.title} />
      <section>
        <Container>
          <Row>
            <Col lg="12" className="mb-4" data-aos="fade-up">
              <p className="fleet__note">{t.galleryPage.note}</p>
            </Col>
            <Col lg="12" data-aos="fade-up">
              <MasonryImageGallery />
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Gallery;
