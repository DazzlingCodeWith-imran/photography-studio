import React from 'react';
import { Routes, Route } from 'react-router-dom';
import LandingPage from '../pages/LandingPage';
import Services from '../pages/Services';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/services" element={<Services />} />
      <Route path="/about" element={<div className="text-center text-2xl pt-10">About Page (Coming Soon)</div>} />
      <Route path="/contact" element={<div className="text-center text-2xl pt-10">Contact Page (Coming Soon)</div>} />
    </Routes>
  );
};

export default AppRoutes;