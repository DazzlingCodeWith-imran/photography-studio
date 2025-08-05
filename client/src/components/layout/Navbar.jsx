import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="fixed top-0 left-0 w-full bg-blue-900 text-white shadow-lg z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <Link to="/" className="text-2xl font-bold tracking-tight">Photo Studio</Link>
          </div>
          <div className="hidden md:flex space-x-8">
            <Link to="/" className="text-lg hover:text-yellow-500 transition duration-300">Home</Link>
            <Link to="/services" className="text-lg hover:text-yellow-500 transition duration-300">Services</Link>
            <Link to="/about" className="text-lg hover:text-yellow-500 transition duration-300">About</Link>
            <Link to="/contact" className="text-lg hover:text-yellow-500 transition duration-300">Contact</Link>
          </div>
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-white focus:outline-none">
              {isOpen ? <FaTimes className="text-2xl" /> : <FaBars className="text-2xl" />}
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden bg-blue-900">
          <div className="flex flex-col items-center space-y-4 py-4">
            <Link to="/" className="text-lg text-white hover:text-yellow-500 transition duration-300" onClick={toggleMenu}>Home</Link>
            <Link to="/services" className="text-lg text-white hover:text-yellow-500 transition duration-300" onClick={toggleMenu}>Services</Link>
            <Link to="/about" className="text-lg text-white hover:text-yellow-500 transition duration-300" onClick={toggleMenu}>About</Link>
            <Link to="/contact" className="text-lg text-white hover:text-yellow-500 transition duration-300" onClick={toggleMenu}>Contact</Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;