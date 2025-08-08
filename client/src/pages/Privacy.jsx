import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaShieldAlt } from 'react-icons/fa';
import { Helmet } from 'react-helmet';

const Privacy = () => {
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
        <title>PhotoStudio - Privacy Policy</title>
        <meta
          name="description"
          content="Read PhotoStudio's Privacy Policy to understand how we collect, use, and protect your personal information."
        />
        <meta name="keywords" content="privacy policy, photostudio, photography, data protection, Mumbai" />
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
            aria-label="Privacy policy hero section"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              <span className="text-amber-400 dark:text-yellow-400">Privacy</span> Policy
            </h1>
            <p className="text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
              We value your privacy. Learn how we collect, use, and protect your personal information.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Privacy Policy Section */}
      <div className="max-w-4xl mx-auto px-4 py-12 -mt-16 z-10 relative">
        <motion.div
          className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          role="region"
          aria-label="Privacy policy section"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-gray-200 mb-6 text-center">
            Our Commitment to Your Privacy
          </h2>
          <div className="space-y-6 text-gray-600 dark:text-gray-300">
            <section>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-200 mb-2 flex items-center">
                <FaShieldAlt className="mr-2 text-blue-600 dark:text-yellow-400" />
                Introduction
              </h3>
              <p>
                At PhotoStudio, we are committed to protecting your privacy. This Privacy Policy explains how we
                collect, use, disclose, and safeguard your information when you visit our website or use our
                services.
              </p>
            </section>
            <section>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-200 mb-2 flex items-center">
                <FaShieldAlt className="mr-2 text-blue-600 dark:text-yellow-400" />
                Information We Collect
              </h3>
              <p>
                We may collect personal information such as your name, email address, phone number, and payment
                details when you book a session, contact us, or register for an account. We also collect
                non-personal information like browser type and IP address for analytics purposes.
              </p>
            </section>
            <section>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-200 mb-2 flex items-center">
                <FaShieldAlt className="mr-2 text-blue-600 dark:text-yellow-400" />
                How We Use Your Information
              </h3>
              <p>
                Your information is used to process bookings, communicate with you, improve our services, and
                send promotional offers (if you opt-in). We do not sell or share your personal information with
                third parties except as required by law or for service fulfillment (e.g., payment processing).
              </p>
            </section>
            <section>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-200 mb-2 flex items-center">
                <FaShieldAlt className="mr-2 text-blue-600 dark:text-yellow-400" />
                Data Security
              </h3>
              <p>
                We use industry-standard security measures to protect your data. However, no method of
                transmission over the internet is 100% secure, and we cannot guarantee absolute security.
              </p>
            </section>
            <section>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-200 mb-2 flex items-center">
                <FaShieldAlt className="mr-2 text-blue-600 dark:text-yellow-400" />
                Your Rights
              </h3>
              <p>
                You have the right to access, update, or delete your personal information. Contact us at
                hello@photostudio.com to exercise these rights or for any privacy-related inquiries.
              </p>
            </section>
            <section>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-200 mb-2 flex items-center">
                <FaShieldAlt className="mr-2 text-blue-600 dark:text-yellow-400" />
                Cookies
              </h3>
              <p>
                We use cookies to enhance your browsing experience and analyze site traffic. You can manage
                cookie preferences through your browser settings. See our <a href="/cookies" className="text-blue-600 dark:text-yellow-400 hover:underline">Cookie Policy</a> for details.
              </p>
            </section>
            <section>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-200 mb-2 flex items-center">
                <FaShieldAlt className="mr-2 text-blue-600 dark:text-yellow-400" />
                Changes to This Policy
              </h3>
              <p>
                We may update this Privacy Policy from time to time. Changes will be posted on this page with
                an updated effective date.
              </p>
            </section>
            <section>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-200 mb-2 flex items-center">
                <FaShieldAlt className="mr-2 text-blue-600 dark:text-yellow-400" />
                Contact Us
              </h3>
              <p>
                If you have any questions about this Privacy Policy, please contact us at{' '}
                <a href="mailto:hello@photostudio.com" className="text-blue-600 dark:text-yellow-400 hover:underline">
                  hello@photostudio.com
                </a>{' '}
                or call us at +91 12345 67890.
              </p>
            </section>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Privacy;