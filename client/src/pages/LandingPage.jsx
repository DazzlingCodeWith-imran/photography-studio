import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaArrowRight, FaCamera, FaVideo, FaCalendarAlt } from 'react-icons/fa';
import { Helmet } from 'react-helmet';

const LandingPage = () => {
  const services = [
    {
      icon: <FaCamera className="text-4xl" />,
      title: 'Portrait Photography',
      description: 'Stunning individual and group portraits in studio or outdoor settings',
    },
    {
      icon: <FaVideo className="text-4xl" />,
      title: 'Video Production',
      description: 'Professional video services for events, commercials, and more',
    },
    {
      icon: <FaCalendarAlt className="text-4xl" />,
      title: 'Event Coverage',
      description: 'Complete documentation of weddings, corporate events, and parties',
    },
  ];

  const scrollToServices = () => {
    document.getElementById('services').scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    // Parallax effect
    const handleScroll = () => {
      const hero = document.querySelector('.hero-bg');
      if (hero) {
        const scrollPosition = window.scrollY;
        hero.style.transform = `translateY(${scrollPosition * 0.4}px)`;
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-800 dark:to-gray-900">
      {/* SEO Meta Tags */}
      <Helmet>
        <title>PhotoStudio - Professional Photography & Videography</title>
        <meta
          name="description"
          content="Capture your perfect moments with PhotoStudio's professional photography and videography services. Book now for portraits, events, and more!"
        />
        <meta name="keywords" content="photography, videography, portraits, weddings, events, Mumbai" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative h-screen max-h-[900px] overflow-hidden" aria-label="Hero section">
        <img
          src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1740&q=80"
          alt="Hero background"
          className="absolute inset-0 w-full h-full object-cover hero-bg"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-purple-900/70 dark:from-gray-900/80 dark:to-gray-800/70"></div>

        <motion.div
          className="relative z-10 h-full flex flex-col justify-center px-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <div className="max-w-6xl mx-auto text-center text-white">
            <motion.h1
              className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
            >
              Capture Your <span className="text-amber-400 dark:text-yellow-400">Perfect Moments</span>
            </motion.h1>

            <motion.p
              className="text-xl md:text-2xl mb-10 max-w-3xl mx-auto leading-relaxed"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Professional photography and videography services tailored to bring your vision to life with artistic excellence.
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Link
                to="/services"
                className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-600 dark:bg-yellow-500 dark:hover:bg-yellow-600 text-gray-900 dark:text-gray-900 px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                aria-label="Explore our services"
                style={{ scrollBehavior: 'smooth' }}
              >
                Explore Our Services <FaArrowRight />
              </Link>
            </motion.div>
          </div>
        </motion.div>

        <div className="absolute bottom-10 left-0 right-0 flex justify-center z-10">
          <motion.button
            onClick={scrollToServices}
            className="animate-bounce"
            animate={{ y: [0, 20, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            aria-label="Scroll to services"
          >
            <svg className="h-10 w-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </motion.button>
        </div>
      </section>

      {/* Services Preview */}
      <section id="services" className="py-20 px-4 max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-200 mb-4">
            Our <span className="text-blue-600 dark:text-yellow-400">Premium</span> Services
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            We offer a range of professional photography and videography services to meet all your needs.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="p-8 text-center">
                <div className="bg-blue-100 dark:bg-gray-700 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 text-blue-600 dark:text-yellow-400">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-gray-200 mb-3">{service.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6">{service.description}</p>
                <Link
                  to="/services"
                  className="inline-flex items-center text-blue-600 dark:text-yellow-400 font-medium hover:text-blue-800 dark:hover:text-yellow-500 transition-colors"
                  aria-label={`Learn more about ${service.title}`}
                  style={{ scrollBehavior: 'smooth' }}
                >
                  Learn more <FaArrowRight className="ml-2" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-blue-600 to-blue-800 dark:from-gray-700 dark:to-gray-800 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Ready to Capture Your Special Moments?
          </motion.h2>
          <motion.p
            className="text-xl mb-8 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Contact us today to discuss your photography needs and book your session.
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-white dark:bg-gray-200 text-blue-800 dark:text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-300 px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
              aria-label="Get in touch with us"
              style={{ scrollBehavior: 'smooth' }}
            >
              Get in Touch <FaArrowRight />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;