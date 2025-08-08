import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Contact from '../pages/Contact';
import LandingPage from '../pages/LandingPage';
import Services from '../pages/Services';
import About from '../pages/AboutUs';
import Portfolio from '../pages/Portfolio';
import Pricing from '../pages/Pricing';
import Blog from '../pages/Blog';
import Booking from '../pages/Booking';
import Login from '../pages/Login';
import Register from '../pages/Register';
import FAQ from '../pages/FAQ'
import Privacy from "../pages/Privacy"
import Cookies from '../pages/Cookies'

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage/>} />
      <Route path="/services" element={<Services />} />
      <Route path="/about" element={<About/>} />
      <Route path='/portfolio' element={<Portfolio/>}/>
      <Route  path='/pricing' element={<Pricing/>} />
      <Route path='/blog' element={<Blog/>}/>
      <Route path='/booking' element={<Booking/>}/>
      <Route path="/contact" element={<Contact />} />
      <Route path='/login' element={<Login/>}/>
      <Route path='/register' element={<Register/>}/>
      <Route path='/faq' element={<FAQ/>}/>
      <Route path='/privacy' element={<Privacy/>} />
      <Route path='/cookies' element={<Cookies/>}/>


    </Routes>
  );
};

export default AppRoutes;