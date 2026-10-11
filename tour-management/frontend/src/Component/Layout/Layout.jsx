import React, { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import AOS from "aos";

import Header from "../Header/Header";
import Roters from "../../router/Routers";
import Footer from "../Footer/Footer";
import FloatingWhatsApp from "../FloatingWhatsApp/FloatingWhatsApp";

const Layout = () => {
  const location = useLocation();
  const isFirstRender = useRef(true);

  useEffect(() => {
    if (isFirstRender.current) {
      // Skip on mount: App's own effect runs AOS.init() for the first render,
      // and effects fire child-before-parent, so calling refreshHard() here on
      // mount would run before that init() and leave elements stuck invisible.
      isFirstRender.current = false;
      return;
    }
    // New page content needs its scroll-reveal positions recalculated after each navigation.
    AOS.refreshHard();
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <>
      <Header />
      <Roters />
      <Footer />
      <FloatingWhatsApp />
    </>
  );
};

export default Layout;
