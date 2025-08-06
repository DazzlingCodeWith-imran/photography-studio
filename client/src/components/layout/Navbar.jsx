import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaBars, FaTimes, FaCamera, FaSun, FaMoon } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsOpen(!isOpen);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle('dark');
    localStorage.setItem('theme', isDarkMode ? 'light' : 'dark');
  };

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      setIsDarkMode(true);
      document.documentElement.classList.add('dark');
    }

    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const navLinks = [
    { path: '/', name: 'Home' },
    { path: '/about', name: 'About' },
    { path: '/services', name: 'Services' },
    { path: '/portfolio', name: 'Portfolio' },
    { path: '/pricing', name: 'Pricing' },
    { path: '/blog', name: 'Blog' },
    { path: '/contact', name: 'Contact' },
  ];

  const mobileMenuVariants = {
    open: { 
      opacity: 1,
      height: 'auto',
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
    closed: { 
      opacity: 0,
      height: 0,
      transition: { staggerChildren: 0.1, staggerDirection: -1 },
    },
  };

  const linkVariants = {
    open: { 
      y: 0,
      opacity: 1,
      transition: { y: { stiffness: 1000, velocity: -100 } },
    },
    closed: { 
      y: 50,
      opacity: 0,
      transition: { y: { stiffness: 1000 } },
    },
  };

  return (
    <motion.nav 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white dark:bg-gray-800 shadow-lg py-2' : 'bg-transparent py-4'}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <motion.div 
            className="flex-shrink-0"
            whileHover={{ scale: 1.05 }}
            animate={{ scale: scrolled ? 0.9 : 1 }}
            transition={{ duration: 0.3 }}
          >
            <Link to="/" className="flex items-center">
              <img 
                src="/assets/images/logo.png" 
                alt="Photo Studio Logo" 
                className="h-10 w-auto"
                loading="lazy"
              />
              <span className={`ml-2 text-2xl font-bold ${scrolled ? 'text-gray-900 dark:text-white' : 'text-white'}`}>
                PhotoStudio
              </span>
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link 
                key={link.path}
                to={link.path}
                className={`relative text-lg font-medium transition-colors ${scrolled ? 'text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-yellow-400' : 'text-white hover:text-yellow-500'}`}
                style={{ scrollBehavior: 'smooth' }}
              >
                {link.name}
                {location.pathname === link.path && (
                  <motion.div 
                    className={`absolute bottom-0 left-0 w-full h-0.5 ${scrolled ? 'bg-blue-600 dark:bg-yellow-400' : 'bg-yellow-500'}`}
                    layoutId="navUnderline"
                    transition={{ type: 'spring', bounce: 0.25, duration: 0.5 }}
                  />
                )}
              </Link>
            ))}
            
            <motion.div whileHover={{ scale: 1.05 }}>
              <Link 
                to="/contact" 
                className={`px-6 py-2 rounded-full font-semibold transition-all ${scrolled ? 'bg-blue-600 text-white hover:bg-yellow-400 hover:text-gray-900' : 'bg-white text-blue-600 hover:bg-yellow-400 hover:text-gray-900'}`}
              >
                Book Now
              </Link>
            </motion.div>

            <motion.button
              onClick={toggleDarkMode}
              className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              aria-label="Toggle dark mode"
            >
              {isDarkMode ? <FaSun className="text-xl" /> : <FaMoon className="text-xl" />}
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <motion.button 
              onClick={toggleMenu}
              className={`p-2 rounded-md focus:outline-none ${scrolled ? 'text-gray-700 dark:text-gray-200' : 'text-white'}`}
              whileTap={{ scale: 0.9 }}
              aria-label={isOpen ? 'Close menu' : 'Open menu'}
            >
              {isOpen ? <FaTimes className="text-2xl" /> : <FaBars className="text-2xl" />}
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            className={`md:hidden overflow-hidden ${scrolled ? 'bg-white dark:bg-gray-800 shadow-lg' : 'bg-blue-900'}`}
            initial="closed"
            animate="open"
            exit="closed"
            variants={mobileMenuVariants}
          >
            <motion.div className="flex flex-col items-center space-y-4 py-8 px-6">
              {navLinks.map((link) => (
                <motion.div
                  key={link.path}
                  variants={linkVariants}
                >
                  <Link 
                    to={link.path} 
                    className={`text-lg font-medium ${scrolled ? 'text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-yellow-400' : 'text-white hover:text-yellow-500'}`}
                    style={{ scrollBehavior: 'smooth' }}
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
              <motion.div variants={linkVariants}>
                <Link 
                  to="/contact" 
                  className={`px-6 py-2 rounded-full font-semibold ${scrolled ? 'bg-blue-600 text-white hover:bg-yellow-400 hover:text-gray-900' : 'bg-white text-blue-600 hover:bg-yellow-400 hover:text-gray-900'}`}
                >
                  Book Now
                </Link>
              </motion.div>
              <motion.div variants={linkVariants}>
                <button
                  onClick={toggleDarkMode}
                  className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white"
                  aria-label="Toggle dark mode"
                >
                  {isDarkMode ? <FaSun className="text-xl" /> : <FaMoon className="text-xl" />}
                </button>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;