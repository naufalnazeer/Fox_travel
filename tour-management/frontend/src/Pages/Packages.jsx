import React from "react";
import { Container, Row, Col } from "reactstrap";

import CommonSection from "../Shared/CommonSection";
import EntityCard from "../Component/shared/EntityCard";
import ComingSoon from "../Component/shared/ComingSoon";
import usePublishedWithMedia from "../hooks/usePublishedWithMedia";
import { getTripStatus } from "../utils/tripStatus";
import { whatsappLink } from "../data/siteConfig";
import "../styles/contact.css";
import { useLanguage } from "../i18n/LanguageContext";

const Packages = () => {
  const { t, lang } = useLanguage();
  const { rows, loading } = usePublishedWithMedia("packages", "package");

  return (
    <>
      <CommonSection title={t.packagesPage.title} />
      <section>
        <Container>
          <Row>
            <Col lg="12" className="mb-4" data-aos="fade-up">
              <p className="fleet__note">{t.packagesPage.note}</p>
            </Col>

            {!loading && rows.length === 0 && (
              <Col lg="12">
                <ComingSoon title={t.packagesPage.empty} />
              </Col>
            )}

            {rows.map((pkg, index) => (
              <Col
                lg="4"
                md="6"
                sm="12"
                className="mb-4"
                key={pkg.id}
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <EntityCard
                  images={pkg.images}
                  badge={pkg.offer_rate ? "Offer" : null}
                  status={getTripStatus(pkg)}
                  title={lang === "ml" ? pkg.title_ml : pkg.title_en}
                  meta={`${pkg.days} ${t.packagesPage.days}${
                    pkg.bus_label ? ` · ${t.packagesPage.busLabel}: ${pkg.bus_label}` : ""
                  } · ${pkg.available_seats} ${t.packagesPage.seatsLeft}`}
                  description={lang === "ml" ? pkg.description_ml : pkg.description_en}
                  inclusions={lang === "ml" ? pkg.inclusions_ml : pkg.inclusions_en}
                  regularRate={pkg.regular_rate}
                  offerRate={pkg.offer_rate}
                  rateUnit={t.packagesPage.perPerson}
                  ctaLabel={t.packagesPage.enquire}
                  ctaHref={whatsappLink(t.whatsapp.package(lang === "ml" ? pkg.title_ml : pkg.title_en))}
                />
              </Col>
            ))}
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Packages;
