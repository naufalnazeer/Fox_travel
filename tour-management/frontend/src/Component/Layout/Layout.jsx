import React from "react";

import Header from "../Header/Header";
import Roters from "../../router/Routers";
import Footer from "../Footer/Footer";
import FloatingWhatsApp from "../FloatingWhatsApp/FloatingWhatsApp";

const Layout = () => {
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
