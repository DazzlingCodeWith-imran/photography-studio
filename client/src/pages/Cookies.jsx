import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaCookieBite } from 'react-icons/fa';
import { Helmet } from 'react-helmet';

const Cookies = () => {
  useEffect(() => {
    const handleScroll = () => {
      const hero = document.querySelector('.hero-bg');
      if (hero) {
        const scrollPosition = window.scrollY;
        hero.style.backgroundPositionY = `${scrollPosition * 0.3}px`;
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-800 dark:to-gray-900 pt-20 pb-16 px-4">
      {/* SEO Meta Tags */}
      <Helmet>
        <title>PhotoStudio - Cookie Policy</title>
        <meta
          name="description"
          content="Learn about PhotoStudio's Cookie Policy and how we use cookies to enhance your browsing experience."
        />
        <meta name="keywords" content="cookie policy, photostudio, cookies, data protection, Mumbai" />
      </Helmet>

      {/* Hero Section */}
      <div
        className="relative h-[50vh] bg-cover bg-center hero-bg"
        style={{
          backgroundImage:
            'ur[](https://images.unsplash.com/photo-1516321165247-4aa89a48d5df?ixlib=rb-4.0.3&auto=format&fit=crop&w=1630&q=80)',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-purple-900/80 dark:from-gray-900/80 dark:to-gray-800/80 flex items-center justify-center">
          <motion.div
            className="text-center text-white px-4"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            aria-label="Cookie policy hero section"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              <span className="text-amber-400 dark:text-yellow-400">Cookie</span> Policy
            </h1>
            <p className="text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
              Understand how we use cookies to improve your experience on our website.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Cookie Policy Section */}
      <div className="max-w-4xl mx-auto px-4 py-12 -mt-16 z-10 relative">
        <motion.div
          className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          role="region"
          aria-label="Cookie policy section"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-gray-200 mb-6 text-center">
            Our Cookie Policy
          </h2>
          <div className="space-y-6 text-gray-600 dark:text-gray-300">
            <section>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-200 mb-2 flex items-center">
                <FaCookieBite className="mr-2 text-blue-600 dark:text-yellow-400" />
                What Are Cookies?
              </h3>
              <p>
                Cookies are small text files stored on your device when you visit our website. They help us
                enhance your browsing experience and provide personalized content.
              </p>
            </section>
            <section>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-200 mb-2 flex items-center">
                <FaCookieBite className="mr-2 text-blue-600 dark:text-yellow-400" />
                Types of Cookies We Use
              </h3>
              <p>
                We use essential cookies for website functionality, analytics cookies to track site usage, and
                marketing cookies to deliver personalized ads. You can opt-out of non-essential cookies.
              </p>
            </section>
            <section>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-200 mb-2 flex items-center">
                <FaCookieBite className="mr-2 text-blue-600 dark:text-yellow-400" />
                Managing Cookies
              </h3>
              <p>
                You can control cookies through your browser settings or by clicking the “Manage Cookies” button
                on our website (if available). Disabling cookies may affect your experience.
              </p>
            </section>
            <section>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-200 mb-2 flex items-center">
                <FaCookieBite className="mr-2 text-blue-600 dark:text-yellow-400" />
                Third-Party Cookies
              </h3>
              <p>
                Some third-party services (e.g., Google Analytics) may set cookies. These are governed by their
                respective privacy policies.
              </p>
            </section>
            <section>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-200 mb-2 flex items-center">
                <FaCookieBite className="mr-2 text-blue-600 dark:text-yellow-400" />
                Contact Us
              </h3>
              <p>
                For questions about our Cookie Policy, contact us at{' '}
                <a href="mailto:hello@photostudio.com" className="text-blue-600 dark:text-yellow-400 hover:underline">
                  hello@photostudio.com
                </a>{' '}
                or call +91 12345 67890.
              </p>
            </section>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Cookies;