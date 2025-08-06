import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';
import { FiCheckCircle, FiStar, FiAward } from 'react-icons/fi';
import { Helmet } from 'react-helmet';

const Pricing = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  useEffect(() => {
    if (inView) controls.start('visible');
  }, [controls, inView]);

  useEffect(() => {
    // Parallax effect for CTA section
    const handleScroll = () => {
      const ctaSection = document.querySelector('.cta-section');
      if (ctaSection) {
        const scrollPosition = window.scrollY;
        ctaSection.style.transform = `translateY(${scrollPosition * 0.1}px)`;
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const pricingPlans = [
    {
      id: 1,
      name: 'Essentials',
      price: '₹15,000',
      description: 'Perfect for personal portraits and small sessions',
      features: [
        '1-Hour Professional Session',
        '15 High-Res Edited Photos',
        'Online Digital Gallery',
        '24-Hour Delivery',
        'Personal Usage Rights',
      ],
      popular: false,
    },
    {
      id: 2,
      name: 'Professional',
      price: '₹40,000',
      description: 'Ideal for weddings and special events',
      features: [
        '4-Hour Coverage',
        '75+ High-Res Edited Photos',
        'Online Digital Gallery',
        '2-Minute Highlight Video',
        'Premium Photo Editing',
        '48-Hour Delivery',
        'Commercial Usage Rights',
      ],
      popular: true,
    },
    {
      id: 3,
      name: 'Premium',
      price: '₹70,000',
      description: 'Comprehensive coverage for large events',
      features: [
        '8-Hour Full-Day Coverage',
        '150+ High-Res Edited Photos',
        'Online Digital Gallery',
        '5-Minute Cinematic Video',
        'Advanced Photo Editing',
        'Drone Coverage (Optional)',
        '24-Hour Delivery',
        'Unlimited Usage Rights',
        '1-Year Cloud Storage',
      ],
      popular: false,
    },
  ];

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

  const cardVariants = {
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

  const featureVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: (i) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
      },
    }),
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 py-24 px-4 sm:px-6 lg:px-8">
      {/* SEO Meta Tags */}
      <Helmet>
        <title>PhotoStudio - Pricing Plans for Photography & Videography</title>
        <meta
          name="description"
          content="Explore PhotoStudio's transparent pricing plans for professional photography and videography, tailored for portraits, weddings, and events."
        />
        <meta name="keywords" content="photography, videography, pricing, portraits, weddings, events, Mumbai" />
      </Helmet>

      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          aria-label="Pricing section"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-gray-200 mb-4">
            Simple, Transparent{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-yellow-400 dark:to-yellow-500">
              Pricing
            </span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Choose the perfect package for your needs. All plans include premium editing and fast delivery.
          </p>
        </motion.div>

        <motion.div ref={ref} className="grid grid-cols-1 md:grid-cols-3 gap-8" variants={containerVariants} initial="hidden" animate={controls}>
          {pricingPlans.map((plan) => (
            <motion.div
              key={plan.id}
              className={`relative rounded-xl overflow-hidden ${plan.popular ? 'border-2 border-indigo-500 dark:border-yellow-400' : 'border border-gray-200 dark:border-gray-600'}`}
              variants={cardVariants}
              whileHover="hover"
            >
              <div className={`h-full flex flex-col ${plan.popular ? 'bg-white dark:bg-gray-800 shadow-2xl' : 'bg-white dark:bg-gray-800 shadow-lg'}`}>
                {plan.popular && (
                  <div className="absolute top-0 right-0 bg-indigo-600 dark:bg-yellow-400 text-white dark:text-gray-900 px-4 py-1 text-sm font-semibold rounded-bl-lg flex items-center">
                    <FiStar className="mr-1" /> MOST POPULAR
                  </div>
                )}

                <div className="p-8 text-center border-b border-gray-100 dark:border-gray-700">
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-200 mb-2">{plan.name}</h2>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">{plan.description}</p>
                  <div className="flex justify-center items-baseline my-6">
                    <span className="text-5xl font-extrabold text-gray-900 dark:text-gray-200">{plan.price}</span>
                    {plan.id === 3 && <span className="ml-2 text-sm font-medium text-gray-500 dark:text-gray-400">Starting from</span>}
                  </div>
                </div>

                <div className="flex-grow p-8">
                  <ul className="space-y-4">
                    {plan.features.map((feature, i) => (
                      <motion.li
                        key={i}
                        className="flex items-start"
                        custom={i}
                        variants={featureVariants}
                      >
                        <FiCheckCircle className="flex-shrink-0 h-5 w-5 text-green-500 mt-1 mr-3" />
                        <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>

                <div className="p-8 pt-0">
                  <Link
                    to="/contact"
                    className={`w-full block text-center px-6 py-4 rounded-lg font-semibold text-lg transition-all duration-300 ${
                      plan.popular
                        ? 'bg-gradient-to-r from-indigo-600 to-blue-600 dark:from-yellow-400 dark:to-yellow-500 text-white dark:text-gray-900 hover:shadow-lg hover:from-indigo-700 hover:to-blue-700 dark:hover:from-yellow-500 dark:hover:to-yellow-600'
                        : 'bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-600 hover:text-gray-900 dark:hover:text-gray-100'
                    }`}
                    aria-label={`Choose ${plan.name} plan`}
                    style={{ scrollBehavior: 'smooth' }}
                  >
                    {plan.popular ? 'Get Started' : 'Choose Plan'}
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="mt-16 bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 max-w-4xl mx-auto cta-section"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-6">
            <div className="inline-flex items-center justify-center bg-blue-100 dark:bg-gray-700 text-blue-800 dark:text-yellow-400 rounded-full p-3 mb-4">
              <FiAward className="h-6 w-6" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-200 mb-2">Custom Solutions Available</h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Need something tailored to your specific requirements? Contact us for a custom quote.
            </p>
          </div>
          <div className="text-center">
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-4 border border-transparent text-lg font-semibold rounded-lg shadow-sm text-white dark:text-gray-900 bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-yellow-400 dark:to-yellow-500 hover:from-blue-700 hover:to-indigo-700 dark:hover:from-yellow-500 dark:hover:to-yellow-600 transition-colors duration-300"
              aria-label="Request a custom quote"
              style={{ scrollBehavior: 'smooth' }}
            >
              Request Custom Quote
              <svg
                className="ml-2 -mr-1 w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Pricing;