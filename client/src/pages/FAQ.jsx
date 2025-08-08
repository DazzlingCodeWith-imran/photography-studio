import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaQuestionCircle } from 'react-icons/fa';
import { Helmet } from 'react-helmet';

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: 'What types of photography services do you offer?',
      answer:
        'We offer a wide range of services including portrait photography, wedding photography, commercial shoots, and video production. Check our Services page for more details.',
    },
    {
      question: 'How can I book a session with PhotoStudio?',
      answer:
        'You can book a session directly through our Booking page. Select your preferred date, time, and service, and we’ll confirm your appointment via email.',
    },
    {
      question: 'What is the pricing for your services?',
      answer:
        'Our pricing varies based on the type of service and package. Visit our Pricing page for detailed information or contact us for a custom quote.',
    },
    {
      question: 'Do you offer refunds or cancellations?',
      answer:
        'Yes, we have a flexible cancellation policy. You can cancel or reschedule up to 48 hours before your session. Refunds are processed within 5-7 business days.',
    },
    {
      question: 'Can I view my photos before purchasing?',
      answer:
        'Yes, we provide a proofing gallery where you can view watermarked previews of your photos before making a final selection.',
    },
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

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
        <title>PhotoStudio - FAQs</title>
        <meta
          name="description"
          content="Find answers to frequently asked questions about PhotoStudio's photography and videography services."
        />
        <meta name="keywords" content="FAQ, photostudio, photography, videography, Mumbai" />
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
            aria-label="FAQ hero section"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              <span className="text-amber-400 dark:text-yellow-400">Frequently Asked</span> Questions
            </h1>
            <p className="text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
              Got questions? We’ve got answers. Explore our FAQs to learn more about our services.
            </p>
          </motion.div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="max-w-4xl mx-auto px-4 py-12 -mt-16 z-10 relative">
        <motion.div
          className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          role="region"
          aria-label="FAQ section"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-gray-200 mb-6 text-center">
            Your Questions, Answered
          </h2>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                className="border-b border-gray-200 dark:border-gray-600"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex items-center justify-between py-4 text-left text-gray-900 dark:text-gray-200 font-medium"
                  aria-expanded={activeIndex === index}
                  aria-controls={`faq-${index}`}
                >
                  <span className="flex items-center">
                    <FaQuestionCircle className="mr-2 text-blue-600 dark:text-yellow-400" />
                    {faq.question}
                  </span>
                  <span className="text-xl">{activeIndex === index ? '−' : '+'}</span>
                </button>
                {activeIndex === index && (
                  <motion.div
                    id={`faq-${index}`}
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="pb-4 text-gray-600 dark:text-gray-300"
                  >
                    {faq.answer}
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default FAQ;