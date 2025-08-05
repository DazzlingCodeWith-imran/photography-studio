import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Contact from '../pages/Contact';
import LandingPage from '../pages/LandingPage';
import Services from '../pages/Services';
import About from '../pages/AboutUs';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage/>} />
      <Route path="/services" element={<Services />} />
      <Route path="/about" element={<About/>} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
};

export default AppRoutes;