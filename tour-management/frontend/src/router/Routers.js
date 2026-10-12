import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import Home from "./../Pages/Home";
import Fleet from "./../Pages/Fleet";
import Packages from "./../Pages/Packages";
import Hotels from "./../Pages/Hotels";
import Gallery from "./../Pages/Gallery";
import Contact from "./../Pages/Contact";

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home" />} />
      <Route path="/home" element={<Home />} />
      <Route path="/fleet-pricing" element={<Fleet />} />
      <Route path="/packages" element={<Packages />} />
      <Route path="/hotels" element={<Hotels />} />
      <Route path="/gallery" element={<Gallery />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
};

export default Routers;
