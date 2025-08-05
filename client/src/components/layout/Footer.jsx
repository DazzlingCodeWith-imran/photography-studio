import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-blue-900 text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          <div>
            <h3 className="text-lg font-bold mb-4">Photo Studio</h3>
            <p className="text-gray-300">Capturing your moments with creativity and passion.</p>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="/" className="hover:text-yellow-500 transition duration-300">Home</a></li>
              <li><a href="/services" className="hover:text-yellow-500 transition duration-300">Services</a></li>
              <li><a href="/about" className="hover:text-yellow-500 transition duration-300">About</a></li>
              <li><a href="/contact" className="hover:text-yellow-500 transition duration-300">Contact</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Connect With Us</h3>
            <div className="flex justify-center md:justify-start space-x-4">
              <a href="#" className="text-2xl hover:text-yellow-500 transition duration-300"><FaFacebook /></a>
              <a href="#" className="text-2xl hover:text-yellow-500 transition duration-300"><FaInstagram /></a>
              <a href="#" className="text-2xl hover:text-yellow-500 transition duration-300"><FaTwitter /></a>
            </div>
          </div>
        </div>
        <div className="mt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Photo Studio. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;