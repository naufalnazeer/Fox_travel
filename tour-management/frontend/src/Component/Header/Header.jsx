import React, { useEffect, useRef } from "react";
import { Container, Row, Button } from "reactstrap";
import { NavLink, Link, useLocation } from "react-router-dom";
import "./Header.css";
import siteConfig, { callLink } from "../../data/siteConfig";
import { useLanguage } from "../../i18n/LanguageContext";
import LanguageSwitcher from "../LanguageSwitcher/LanguageSwitcher";

const Header = () => {
  const headerRef = useRef(null);
  const menuRef = useRef(null);
  const { t } = useLanguage();
  const location = useLocation();

  // Safety net: always close the mobile drawer on route change, even if a click
  // somehow didn't bubble up to toggleMenu (e.g. browser back/forward navigation).
  useEffect(() => {
    menuRef.current?.classList.remove("show__menu");
  }, [location.pathname]);

  const nav__links = [
    { path: "/home", display: t.nav.home },
    { path: "/fleet-pricing", display: t.nav.fleet },
    { path: "/gallery", display: t.nav.gallery },
    { path: "/contact", display: t.nav.contact },
  ];

  const stickyHeaderFunc = () => {
    window.addEventListener("scroll", () => {
      if (
        document.body.scrollTop > 80 ||
        document.documentElement.scrollTop > 80
      ) {
        headerRef.current.classList.add("sticky__header");
      } else {
        headerRef.current.classList.remove("sticky__header");
      }
    });
  };

  useEffect(() => {
    stickyHeaderFunc();

    return window.removeEventListener("scroll", stickyHeaderFunc);
  });

  const toggleMenu = () => menuRef.current.classList.toggle("show__menu");

  return (
    <header className="header" ref={headerRef}>
      <Container>
        <Row>
          <div className="nav__wrapper d-flex align-items-center justify-content-between">
            <Link to="/home" className="logo d-flex align-items-center gap-2">
              <i className="ri-bus-2-fill"></i>
              <span className="logo__text">{siteConfig.businessName}</span>
            </Link>

            <div className="navigation" ref={menuRef} onClick={toggleMenu}>
              <ul className="menu d-flex align-items-center gap-4">
                <li className="menu__lang">
                  <LanguageSwitcher />
                </li>
                {nav__links.map((item, index) => (
                  <li className="nav__item" key={index}>
                    <NavLink
                      to={item.path}
                      className={(navClass) =>
                        navClass.isActive ? "active__link" : ""
                      }
                    >
                      {item.display}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>

            <div className="nav__right d-flex align-items-center gap-3">
              <LanguageSwitcher />
              <div className="nav__btns d-flex align-items-center gap-2">
                <Button className="btn primary__btn">
                  <a href={callLink}>
                    <i className="ri-phone-line"></i> <span className="btn__label">{t.nav.callNow}</span>
                  </a>
                </Button>
              </div>

              <span className="mobile__menu" onClick={toggleMenu}>
                <i className="ri-menu-line"></i>
              </span>
            </div>
          </div>
        </Row>
      </Container>
    </header>
  );
};

export default Header;
