import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Services from '../pages/Services';


const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/services" element={<Services />} />
    </Routes>
  );
};

export default AppRoutes;