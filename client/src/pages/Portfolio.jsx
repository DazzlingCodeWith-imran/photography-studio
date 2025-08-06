import React, { useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

const Portfolio = () => {
  const [filter, setFilter] = useState('All');
  const [hoveredItem, setHoveredItem] = useState(null);
  const [activeItem, setActiveItem] = useState(null);
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  useEffect(() => {
    if (inView) controls.start('visible');
  }, [controls, inView]);

  useEffect(() => {
    // Parallax effect for portfolio images
    const handleScroll = () => {
      document.querySelectorAll('.portfolio-img').forEach((img) => {
        const scrollPosition = window.scrollY;
        img.style.transform = `translateY(${scrollPosition * 0.1}px)`;
      });
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const portfolioItems = [
    {
      id: 1,
      title: 'Portrait Session',
      image: 'https://images.unsplash.com/photo-1554080353-a576cf803bda?ixlib=rb-4.0.3&auto=format&fit=crop&w=1080&q=80',
      category: 'Photography',
      alt: 'Professional portrait photography session at PhotoStudio',
      description: 'Capturing the essence of personality through carefully composed portraits with professional lighting setups.',
    },
    {
      id: 2,
      title: 'Wedding Moments',
      image: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1080&q=80',
      category: 'Photography',
      alt: 'Candid wedding photography moments at PhotoStudio',
      description: 'Documenting the raw emotions and beautiful moments of your special day with a photojournalistic approach.',
    },
    {
      id: 3,
      title: 'Corporate Event',
      video: 'https://www.youtube.com/embed/dQw4w9WgXcQ', // Example YouTube video
      thumbnail: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?ixlib=rb-4.0.3&auto=format&fit=crop&w=1080&q=80',
      category: 'Videography',
      alt: 'Professional corporate event videography at PhotoStudio',
      description: 'Cinematic coverage of corporate events with multi-camera setups and professional audio capture.',
    },
    {
      id: 4,
      title: 'Family Shoot',
      image: 'https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?ixlib=rb-4.0.3&auto=format&fit=crop&w=1080&q=80',
      category: 'Photography',
      alt: 'Family photography session at PhotoStudio',
      description: 'Creating timeless family portraits in natural settings that capture your family\'s unique dynamics.',
    },
    {
      id: 5,
      title: 'Product Showcase',
      image: 'https://images.unsplash.com/photo-1602143407151-7111542de6e8?ixlib=rb-4.0.3&auto=format&fit=crop&w=1080&q=80',
      category: 'Photography',
      alt: 'Product photography at PhotoStudio',
      description: 'Professional product photography with studio lighting to highlight features and textures.',
    },
    {
      id: 6,
      title: 'Travel Documentary',
      video: 'https://www.youtube.com/embed/Scxs7L0vhZ0', // Example YouTube video
      thumbnail: 'https://images.unsplash.com/photo-1467269204594-9661b134dd2b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1080&q=80',
      category: 'Videography',
      alt: 'Travel videography at PhotoStudio',
      description: 'Cinematic travel documentaries that transport viewers to breathtaking locations around the world.',
    },
  ];

  const filteredItems = filter === 'All' ? portfolioItems : portfolioItems.filter((item) => item.category === filter);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        when: 'beforeChildren',
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 60 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1],
      },
    },
    hover: {
      y: -10,
      transition: {
        duration: 0.3,
        ease: 'easeOut',
      },
    },
  };

  const overlayVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.3,
        ease: 'easeOut',
      },
    },
  };

  const textVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: 'easeOut',
      },
    },
  };

  const modalVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
    exit: { opacity: 0, y: 50 },
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 pt-24 pb-20 px-4 sm:px-6 lg:px-8">
      {/* SEO Meta Tags */}
      <Helmet>
        <title>PhotoStudio - Portfolio of Photography & Videography</title>
        <meta
          name="description"
          content="Explore PhotoStudio's creative portfolio showcasing professional photography and videography, including portraits, weddings, and corporate events."
        />
        <meta name="keywords" content="photography, videography, portfolio, portraits, weddings, events, Mumbai" />
      </Helmet>

      <motion.div
        className="max-w-8xl mx-auto"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        aria-label="Portfolio section"
      >
        <div className="text-center mb-16">
          <motion.h1
            className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-gray-200 mb-4"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Our{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-yellow-400 dark:to-yellow-500">
              Creative
            </span>{' '}
            Portfolio
          </motion.h1>
          <motion.p
            className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Explore our collection of premium photography and videography work that showcases our passion and expertise.
          </motion.p>
        </div>

        <div className="flex justify-center flex-wrap gap-3 mb-16">
          {['All', 'Photography', 'Videography'].map((category) => (
            <motion.button
              key={category}
              onClick={() => setFilter(category)}
              className={`px-6 py-3 rounded-xl font-medium text-lg transition-all duration-300 ${
                filter === category
                  ? 'bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-yellow-400 dark:to-yellow-500 text-white shadow-lg shadow-blue-500/20'
                  : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 shadow-md hover:shadow-lg border border-gray-200 dark:border-gray-600'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              aria-label={`Filter portfolio by ${category}`}
            >
              {category}
            </motion.button>
          ))}
        </div>

        <motion.div ref={ref} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8" variants={containerVariants} initial="hidden" animate={controls}>
          {filteredItems.map((item) => (
            <motion.div
              key={item.id}
              className="relative group"
              variants={itemVariants}
              whileHover="hover"
              onHoverStart={() => setHoveredItem(item.id)}
              onHoverEnd={() => setHoveredItem(null)}
            >
              <div className="relative bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden transition-all duration-300 h-full flex flex-col border border-gray-200 dark:border-gray-600 group-hover:shadow-2xl group-hover:border-transparent">
                {item.video ? (
                  <div className="relative pt-[56.25%] overflow-hidden">
                    <iframe
                      src={item.video}
                      title={item.title}
                      className="absolute inset-0 w-full h-full portfolio-img"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      aria-label={`Video: ${item.title}`}
                    ></iframe>
                  </div>
                ) : (
                  <div className="relative pt-[75%] overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.alt}
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 portfolio-img"
                      loading="lazy"
                    />
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex items-end p-6"
                      variants={overlayVariants}
                      initial="hidden"
                      animate={hoveredItem === item.id ? 'visible' : 'hidden'}
                    >
                      <motion.div variants={textVariants}>
                        <p className="text-white text-sm font-medium">{item.description}</p>
                      </motion.div>
                    </motion.div>
                  </div>
                )}
                <div className="p-6 flex-1 flex flex-col">
                  <div className="flex justify-between items-start mb-2">
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-200">{item.title}</h2>
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 dark:bg-gray-700 text-blue-800 dark:text-yellow-400">
                      {item.category}
                    </span>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-2">{item.description}</p>
                  <div className="mt-auto">
                    <button
                      onClick={() => setActiveItem(item)}
                      className="text-blue-600 dark:text-yellow-400 hover:text-blue-800 dark:hover:text-yellow-500 font-medium flex items-center transition-colors"
                      aria-label={`View details of ${item.title}`}
                    >
                      View project
                      <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Project Modal */}
        {activeItem && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveItem(null)}
            aria-label={`Details for ${activeItem.title}`}
          >
            <motion.div
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto"
              variants={modalVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative">
                {activeItem.video ? (
                  <iframe
                    src={activeItem.video}
                    title={activeItem.title}
                    className="w-full h-64"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                ) : (
                  <img src={activeItem.image} alt={activeItem.alt} className="w-full h-64 object-cover" />
                )}
                <button
                  className="absolute top-4 right-4 bg-white dark:bg-gray-200 rounded-full p-2 shadow-md hover:bg-gray-100 dark:hover:bg-gray-300"
                  onClick={() => setActiveItem(null)}
                  aria-label="Close project modal"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              <div className="p-8">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-200 mb-4">{activeItem.title}</h2>
                <p className="text-gray-600 dark:text-gray-300 mb-6">{activeItem.description}</p>
                <p className="text-blue-600 dark:text-yellow-400 font-medium mb-6">{activeItem.category}</p>
                <Link
                  to="/contact"
                  className="w-full bg-blue-600 hover:bg-blue-700 dark:bg-yellow-500 dark:hover:bg-yellow-600 text-white dark:text-gray-900 py-3 px-6 rounded-lg font-semibold transition-colors duration-300"
                  aria-label={`Book a session for ${activeItem.title}`}
                  style={{ scrollBehavior: 'smooth' }}
                >
                  Book This Service
                </Link>
              </div>
            </motion.div>
          </motion.div>
        )}

        <motion.div
          className="text-center mt-20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <Link
            to="/contact"
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-yellow-400 dark:to-yellow-500 text-white dark:text-gray-900 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:from-blue-700 hover:to-indigo-700 dark:hover:from-yellow-500 dark:hover:to-yellow-600"
            aria-label="Book a photography or videography session"
            style={{ scrollBehavior: 'smooth' }}
          >
            Book Your Session
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Portfolio;