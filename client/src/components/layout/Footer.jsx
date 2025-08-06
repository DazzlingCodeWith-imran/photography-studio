import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin, FaYoutube, FaMapMarkerAlt, FaPhone, FaEnvelope, FaCamera, FaArrowUp } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const footerLinks = [
    {
      title: 'Services',
      links: [
        { name: 'Portrait Photography', url: '/services#portrait' },
        { name: 'Wedding Photography', url: '/services#wedding' },
        { name: 'Commercial Shoots', url: '/services#commercial' },
        { name: 'Video Production', url: '/services#video' },
      ],
    },
    {
      title: 'Company',
      links: [
        { name: 'About Us', url: '/about' },
        { name: 'Blog', url: '/blog' },
        { name: 'Pricing', url: '/pricing' },
        { name: 'Contact', url: '/contact' },
      ],
    },
    {
      title: 'Resources',
      links: [
        { name: 'Blog', url: '/blog' },
        { name: 'Pricing', url: '/pricing' },
        { name: 'FAQ', url: '/faq' },
        { name: 'Support', url: '/support' },
      ],
    },
  ];

  const socialLinks = [
    { icon: <FaFacebook />, url: 'https://facebook.com/photostudio', name: 'Facebook' },
    { icon: <FaInstagram />, url: 'https://instagram.com/photostudio', name: 'Instagram' },
    { icon: <FaTwitter />, url: 'https://twitter.com/photostudio', name: 'Twitter' },
    { icon: <FaLinkedin />, url: 'https://linkedin.com/company/photostudio', name: 'LinkedIn' },
    { icon: <FaYoutube />, url: 'https://youtube.com/photostudio', name: 'YouTube' },
  ];

  const contactInfo = [
    { icon: <FaMapMarkerAlt />, text: '123 Studio Lane, Mumbai, India' },
    { icon: <FaPhone />, text: '+91 12345 67890' },
    { icon: <FaEnvelope />, text: 'hello@photostudio.com' },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      className="bg-gradient-to-br from-blue-900 to-blue-800 dark:from-gray-800 dark:to-gray-700 text-white dark:text-gray-200 pt-16 pb-8"
      role="contentinfo"
      aria-label="Footer"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <Link to="/" className="flex items-center">
              <img
                src="/assets/images/logo.png"
                alt="Photo Studio Logo"
                className="h-10 w-auto"
                loading="lazy"
              />
              <span className="ml-2 text-2xl font-bold text-white dark:text-gray-200">PhotoStudio</span>
            </Link>
            <p className="text-blue-100 dark:text-gray-300 leading-relaxed">
              Capturing life's precious moments with artistic vision and technical excellence since 2010.
            </p>
            <div className="flex space-x-4 pt-2">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xl text-blue-100 dark:text-gray-300 hover:text-yellow-400 dark:hover:text-yellow-400 transition-colors"
                  whileHover={{ y: -3 }}
                  aria-label={`Follow us on ${social.name}`}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Footer Links */}
          {footerLinks.map((section, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <h3 className="text-lg font-bold text-white dark:text-gray-200">{section.title}</h3>
              <ul className="space-y-3">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <Link
                      to={link.url}
                      className="text-blue-100 dark:text-gray-300 hover:text-yellow-400 dark:hover:text-yellow-400 transition-colors flex items-start"
                      style={{ scrollBehavior: 'smooth' }}
                    >
                      <span className="mr-2">•</span>
                      <span>{link.name}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h3 className="text-lg font-bold text-white dark:text-gray-200">Contact Us</h3>
            <div className="space-y-3">
              {contactInfo.map((item, index) => (
                <div key={index} className="flex items-start">
                  <span className="text-yellow-400 mr-3 mt-1">{item.icon}</span>
                  <span className="text-blue-100 dark:text-gray-300">{item.text}</span>
                </div>
              ))}
            </div>
            <div className="pt-4">
              <Link to="/contact">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="bg-yellow-400 hover:bg-yellow-500 dark:bg-yellow-500 dark:hover:bg-yellow-600 text-blue-900 dark:text-gray-900 font-semibold px-6 py-2 rounded-full transition-colors"
                >
                  Book a Session
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className="border-t border-blue-700 dark:border-gray-600 mt-12 pt-8 text-center text-blue-200 dark:text-gray-300"
        >
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p>© {currentYear} PhotoStudio. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link to="/privacy" className="hover:text-yellow-400 dark:hover:text-yellow-400 transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="hover:text-yellow-400 dark:hover:text-yellow-400 transition-colors">
                Terms of Service
              </Link>
              <Link to="/cookies" className="hover:text-yellow-400 dark:hover:text-yellow-400 transition-colors">
                Cookie Policy
              </Link>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Back to Top Button */}
      {showBackToTop && (
        <motion.button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 bg-yellow-400 hover:bg-yellow-500 dark:bg-yellow-500 dark:hover:bg-yellow-600 text-blue-900 dark:text-gray-900 p-3 rounded-full shadow-lg"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3 }}
          aria-label="Back to top"
        >
          <FaArrowUp className="text-xl" />
        </motion.button>
      )}
    </footer>
  );
};

export default Footer;