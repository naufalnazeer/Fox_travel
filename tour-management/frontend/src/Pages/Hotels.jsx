import React from "react";
import { Container, Row, Col } from "reactstrap";

import CommonSection from "../Shared/CommonSection";
import EntityCard from "../Component/shared/EntityCard";
import ComingSoon from "../Component/shared/ComingSoon";
import usePublishedWithMedia from "../hooks/usePublishedWithMedia";
import { whatsappLink } from "../data/siteConfig";
import "../styles/contact.css";
import { useLanguage } from "../i18n/LanguageContext";

const Hotels = () => {
  const { t, lang } = useLanguage();
  const { rows, loading } = usePublishedWithMedia("hotel_rooms", "hotel");

  return (
    <>
      <CommonSection title={t.hotelsPage.title} />
      <section>
        <Container>
          <Row>
            <Col lg="12" className="mb-4" data-aos="fade-up">
              <p className="fleet__note">{t.hotelsPage.note}</p>
            </Col>

            {!loading && rows.length === 0 && (
              <Col lg="12">
                <ComingSoon title={t.hotelsPage.empty} />
              </Col>
            )}

            {rows.map((room, index) => (
              <Col
                lg="4"
                md="6"
                sm="12"
                className="mb-4"
                key={room.id}
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <EntityCard
                  images={room.images}
                  badge={room.offer_rate ? "Offer" : null}
                  title={`${room.hotel_name} — ${lang === "ml" ? room.room_title_ml : room.room_title_en}`}
                  meta={`${room.available_rooms} ${t.hotelsPage.roomsLeft}${
                    room.location ? ` · ${room.location}` : ""
                  }`}
                  description={lang === "ml" ? room.description_ml : room.description_en}
                  inclusions={lang === "ml" ? room.inclusions_ml : room.inclusions_en}
                  regularRate={room.regular_rate}
                  offerRate={room.offer_rate}
                  rateUnit={t.hotelsPage.perNight}
                  ctaLabel={t.hotelsPage.enquire}
                  ctaHref={whatsappLink(
                    t.whatsapp.hotel(room.hotel_name, lang === "ml" ? room.room_title_ml : room.room_title_en)
                  )}
                />
              </Col>
            ))}
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Hotels;
