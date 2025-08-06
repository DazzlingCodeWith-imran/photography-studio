import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Contact from '../pages/Contact';
import LandingPage from '../pages/LandingPage';
import Services from '../pages/Services';
import About from '../pages/AboutUs';
import Portfolio from '../pages/Portfolio';
import Pricing from '../pages/Pricing';
import Blog from '../pages/Blog';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage/>} />
      <Route path="/services" element={<Services />} />
      <Route path="/about" element={<About/>} />
      <Route path="/contact" element={<Contact />} />
      <Route path='/portfolio' element={<Portfolio/>}/>
      <Route  path='/pricing' element={<Pricing/>} />
      <Route path='/blog' element={<Blog/>}/>
    </Routes>
  );
};

export default AppRoutes;