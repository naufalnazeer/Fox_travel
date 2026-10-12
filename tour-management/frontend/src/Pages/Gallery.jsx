import React from "react";
import { Container, Row, Col } from "reactstrap";

import CommonSection from "../Shared/CommonSection";
import ImageCarousel from "../Component/image-gallery/ImageCarousel";
import ComingSoon from "../Component/shared/ComingSoon";
import usePublishedWithMedia from "../hooks/usePublishedWithMedia";
import "../styles/contact.css";
import { useLanguage } from "../i18n/LanguageContext";

const Gallery = () => {
  const { t } = useLanguage();
  const { rows, loading } = usePublishedWithMedia("gallery_items", "gallery");
  const images = rows.flatMap((row) => row.images);

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
              {!loading && images.length === 0 ? (
                <ComingSoon title={t.galleryPage.empty} />
              ) : (
                <ImageCarousel images={images} />
              )}
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Gallery;
