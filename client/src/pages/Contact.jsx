import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FiSend, FiMessageSquare, FiUser, FiMail, FiMapPin, FiPhone } from 'react-icons/fi';
import { Helmet } from 'react-helmet';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });
  const [feedbackData, setFeedbackData] = useState({ name: '', feedback: '' });
  const [errors, setErrors] = useState({});
  const [feedbackErrors, setFeedbackErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isFeedbackSubmitting, setIsFeedbackSubmitting] = useState(false);
  const [activeTab, setActiveTab] = useState('contact');
  const [showSuccess, setShowSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: '' });
  };

  const handleFeedbackChange = (e) => {
    setFeedbackData({ ...feedbackData, [e.target.name]: e.target.value });
    setFeedbackErrors({ ...feedbackErrors, [e.target.name]: '' });
  };

  const validate = () => {
    let tempErrors = {};
    if (!formData.name.trim()) tempErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      tempErrors.email = 'Email is required';
    } else if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(formData.email)) {
      tempErrors.email = 'Email is invalid';
    }
    if (!formData.phone.trim()) {
      tempErrors.phone = 'Phone number is required';
    } else if (!/^\+91[6-9]\d{9}$/.test(formData.phone)) {
      tempErrors.phone = 'Enter a valid Indian phone number (e.g., +919876543210)';
    }
    if (!formData.message.trim()) tempErrors.message = 'Message is required';
    return tempErrors;
  };

  const validateFeedback = () => {
    let tempErrors = {};
    if (!feedbackData.name.trim()) tempErrors.name = 'Name is required';
    if (!feedbackData.feedback.trim()) tempErrors.feedback = 'Feedback is required';
    return tempErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const tempErrors = validate();
    setErrors(tempErrors);
    if (Object.keys(tempErrors).length === 0) {
      setIsSubmitting(true);
      // Simulate API call
      setTimeout(() => {
        setShowSuccess(true);
        setFormData({ name: '', email: '', phone: '', message: '' });
        setIsSubmitting(false);
      }, 1000);
    }
  };

  const handleFeedbackSubmit = (e) => {
    e.preventDefault();
    const tempErrors = validateFeedback();
    setFeedbackErrors(tempErrors);
    if (Object.keys(tempErrors).length === 0) {
      setIsFeedbackSubmitting(true);
      setTimeout(() => {
        const existingFeedback = JSON.parse(localStorage.getItem('feedback') || '[]');
        localStorage.setItem('feedback', JSON.stringify([...existingFeedback, feedbackData]));
        setShowSuccess(true);
        setFeedbackData({ name: '', feedback: '' });
        setIsFeedbackSubmitting(false);
      }, 1000);
    }
  };

  useEffect(() => {
    // Parallax effect for hero background
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
        <title>PhotoStudio - Contact Us</title>
        <meta
          name="description"
          content="Contact PhotoStudio for photography and videography services in Mumbai. Reach out via form, email, or phone, or share your feedback."
        />
        <meta name="keywords" content="contact, photography, videography, feedback, Mumbai" />
      </Helmet>

      {/* Hero Section */}
      <div
        className="relative h-[50vh] bg-cover bg-center hero-bg"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1516035069371-29a1b244cc32?ixlib=rb-4.0.3&auto=format&fit=crop&w=1630&q=80)',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-purple-900/80 dark:from-gray-900/80 dark:to-gray-800/80 flex items-center justify-center">
          <motion.div
            className="text-center text-white px-4"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            aria-label="Contact hero section"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Let's <span className="text-amber-400 dark:text-yellow-400">Connect</span>
            </h1>
            <p className="text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
              We'd love to hear from you! Whether you have questions or feedback, our team is ready to help.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-12 -mt-16 z-10 relative">
        {/* Tab Navigation */}
        <div className="flex justify-center mb-8">
          <div className="bg-white dark:bg-gray-800 rounded-full shadow-lg p-1 inline-flex">
            <button
              onClick={() => setActiveTab('contact')}
              className={`px-6 py-2 rounded-full font-medium transition-all ${
                activeTab === 'contact'
                  ? 'bg-blue-600 dark:bg-yellow-400 text-white dark:text-gray-900'
                  : 'text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-yellow-400'
              }`}
              aria-label="Switch to Contact Us form"
            >
              Contact Us
            </button>
            <button
              onClick={() => setActiveTab('feedback')}
              className={`px-6 py-2 rounded-full font-medium transition-all ${
                activeTab === 'feedback'
                  ? 'bg-blue-600 dark:bg-yellow-400 text-white dark:text-gray-900'
                  : 'text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-yellow-400'
              }`}
              aria-label="Switch to Share Feedback form"
            >
              Share Feedback
            </button>
          </div>
        </div>

        {/* Contact Form Section */}
        {activeTab === 'contact' && (
          <motion.div
            className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            role="form"
            aria-label="Contact Us form"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2">
              {/* Contact Information */}
              <div className="bg-gradient-to-br from-blue-600 to-blue-800 dark:from-yellow-500 dark:to-yellow-600 p-8 text-white">
                <h2 className="text-2xl md:text-3xl font-bold mb-6">Get in Touch</h2>
                <p className="text-blue-100 dark:text-gray-900 mb-8">
                  Have questions about our services? Fill out the form and we'll get back to you within 24 hours.
                </p>

                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="bg-blue-500/20 dark:bg-gray-900/20 p-3 rounded-full mr-4">
                      <FiMail className="text-xl" />
                    </div>
                    <div>
                      <h3 className="font-semibold">Email Us</h3>
                      <p className="text-blue-100 dark:text-gray-900">contact@photostudio.com</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-blue-500/20 dark:bg-gray-900/20 p-3 rounded-full mr-4">
                      <FiPhone className="text-xl" />
                    </div>
                    <div>
                      <h3 className="font-semibold">Call Us</h3>
                      <p className="text-blue-100 dark:text-gray-900">+91 123-456-7890</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-blue-500/20 dark:bg-gray-900/20 p-3 rounded-full mr-4">
                      <FiMapPin className="text-xl" />
                    </div>
                    <div>
                      <h3 className="font-semibold">Visit Us</h3>
                      <p className="text-blue-100 dark:text-gray-900">123 Studio Lane, Mumbai, India</p>
                    </div>
                  </div>
                </div>

                <div className="mt-12">
                  <h3 className="font-semibold mb-4">Business Hours</h3>
                  <p className="text-blue-100 dark:text-gray-900">Monday - Friday: 9am - 6pm</p>
                  <p className="text-blue-100 dark:text-gray-900">Saturday: 10am - 4pm</p>
                  <p className="text-blue-100 dark:text-gray-900">Sunday: Closed</p>
                </div>
              </div>

              {/* Contact Form */}
              <div className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Full Name
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <FiUser className="text-gray-400" />
                      </div>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="John Doe"
                        className={`pl-10 w-full p-3 rounded-lg border ${
                          errors.name ? 'border-red-500 bg-red-50' : 'border-gray-300 dark:border-gray-600'
                        } focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-yellow-400 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-200`}
                        aria-required="true"
                      />
                    </div>
                    {errors.name && <p className="mt-1 text-sm text-red-600">{errors.name}</p>}
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Email Address
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <FiMail className="text-gray-400" />
                      </div>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="your@email.com"
                        className={`pl-10 w-full p-3 rounded-lg border ${
                          errors.email ? 'border-red-500 bg-red-50' : 'border-gray-300 dark:border-gray-600'
                        } focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-yellow-400 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-200`}
                        aria-required="true"
                      />
                    </div>
                    {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email}</p>}
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Phone Number
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <FiPhone className="text-gray-400" />
                      </div>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+919876543210"
                        className={`pl-10 w-full p-3 rounded-lg border ${
                          errors.phone ? 'border-red-500 bg-red-50' : 'border-gray-300 dark:border-gray-600'
                        } focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-yellow-400 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-200`}
                        aria-required="true"
                      />
                    </div>
                    {errors.phone && <p className="mt-1 text-sm text-red-600">{errors.phone}</p>}
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Your Message
                    </label>
                    <div className="relative">
                      <div className="absolute top-3 left-3">
                        <FiMessageSquare className="text-gray-400" />
                      </div>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="How can we help you?"
                        rows="5"
                        className={`pl-10 w-full p-3 rounded-lg border ${
                          errors.message ? 'border-red-500 bg-red-50' : 'border-gray-300 dark:border-gray-600'
                        } focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-yellow-400 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-200`}
                        aria-required="true"
                      ></textarea>
                    </div>
                    {errors.message && <p className="mt-1 text-sm text-red-600">{errors.message}</p>}
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full flex items-center justify-center gap-2 bg-blue-600 dark:bg-yellow-400 hover:bg-blue-700 dark:hover:bg-yellow-500 text-white dark:text-gray-900 px-6 py-3 rounded-lg font-medium transition-colors ${
                      isSubmitting ? 'opacity-70 cursor-not-allowed' : ''
                    }`}
                    aria-label="Submit contact form"
                  >
                    {isSubmitting ? (
                      <>
                        <svg
                          className="animate-spin -ml-1 mr-2 h-5 w-5 text-white dark:text-gray-900"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          ></path>
                        </svg>
                        Sending...
                      </>
                    ) : (
                      <>
                        <FiSend />
                        Send Message
                      </>
                    )}
                  </button>
                </form>
              </div>
            </div>
          </motion.div>
        )}

        {/* Feedback Section */}
        {activeTab === 'feedback' && (
          <motion.div
            className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            role="form"
            aria-label="Feedback form"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2">
              {/* Feedback Info */}
              <div className="bg-gradient-to-br from-purple-600 to-purple-800 dark:from-yellow-500 dark:to-yellow-600 p-8 text-white dark:text-gray-900">
                <h2 className="text-2xl md:text-3xl font-bold mb-6">We Value Your Feedback</h2>
                <p className="text-purple-100 dark:text-gray-900 mb-8">
                  Your opinion helps us improve. Share your experience with us and help us serve you better.
                </p>

                <div className="space-y-4">
                  <div className="flex items-center">
                    <div className="bg-purple-500/20 dark:bg-gray-900/20 p-2 rounded-full mr-3">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2h-1V9z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <p className="text-purple-100 dark:text-gray-900">All feedback is reviewed by our team</p>
                  </div>

                  <div className="flex items-center">
                    <div className="bg-purple-500/20 dark:bg-gray-900/20 p-2 rounded-full mr-3">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2h-1V9z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <p className="text-purple-100 dark:text-gray-900">We respond to all constructive feedback</p>
                  </div>

                  <div className="flex items-center">
                    <div className="bg-purple-500/20 dark:bg-gray-900/20 p-2 rounded-full mr-3">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2h-1V9z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <p className="text-purple-100 dark:text-gray-900">Your suggestions help shape our future</p>
                  </div>
                </div>

                <div className="mt-12">
                  <h3 className="font-semibold mb-4">What makes good feedback?</h3>
                  <ul className="text-purple-100 dark:text-gray-900 space-y-2">
                    <li className="flex items-start">
                      <span className="mr-2">•</span>
                      <span>Be specific about what you liked or didn't like</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2">•</span>
                      <span>Suggest improvements where possible</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2">•</span>
                      <span>Keep it constructive and respectful</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Feedback Form */}
              <div className="p-8">
                <form onSubmit={handleFeedbackSubmit} className="space-y-6">
                  <div>
                    <label
                      htmlFor="feedback-name"
                      className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                    >
                      Your Name
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <FiUser className="text-gray-400" />
                      </div>
                      <input
                        type="text"
                        id="feedback-name"
                        name="name"
                        value={feedbackData.name}
                        onChange={handleFeedbackChange}
                        placeholder="John Doe"
                        className={`pl-10 w-full p-3 rounded-lg border ${
                          feedbackErrors.name ? 'border-red-500 bg-red-50' : 'border-gray-300 dark:border-gray-600'
                        } focus:outline-none focus:ring-2 focus:ring-purple-500 dark:focus:ring-yellow-400 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-200`}
                        aria-required="true"
                      />
                    </div>
                    {feedbackErrors.name && <p className="mt-1 text-sm text-red-600">{feedbackErrors.name}</p>}
                  </div>

                  <div>
                    <label
                      htmlFor="feedback"
                      className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                    >
                      Your Feedback
                    </label>
                    <div className="relative">
                      <div className="absolute top-3 left-3">
                        <FiMessageSquare className="text-gray-400" />
                      </div>
                      <textarea
                        id="feedback"
                        name="feedback"
                        value={feedbackData.feedback}
                        onChange={handleFeedbackChange}
                        placeholder="Share your thoughts with us..."
                        rows="8"
                        className={`pl-10 w-full p-3 rounded-lg border ${
                          feedbackErrors.feedback ? 'border-red-500 bg-red-50' : 'border-gray-300 dark:border-gray-600'
                        } focus:outline-none focus:ring-2 focus:ring-purple-500 dark:focus:ring-yellow-400 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-200`}
                        aria-required="true"
                      ></textarea>
                    </div>
                    {feedbackErrors.feedback && <p className="mt-1 text-sm text-red-600">{feedbackErrors.feedback}</p>}
                  </div>

                  <button
                    type="submit"
                    disabled={isFeedbackSubmitting}
                    className={`w-full flex items-center justify-center gap-2 bg-purple-600 dark:bg-yellow-400 hover:bg-purple-700 dark:hover:bg-yellow-500 text-white dark:text-gray-900 px-6 py-3 rounded-lg font-medium transition-colors ${
                      isFeedbackSubmitting ? 'opacity-70 cursor-not-allowed' : ''
                    }`}
                    aria-label="Submit feedback form"
                  >
                    {isFeedbackSubmitting ? (
                      <>
                        <svg
                          className="animate-spin -ml-1 mr-2 h-5 w-5 text-white dark:text-gray-900"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          ></path>
                        </svg>
                        Submitting...
                      </>
                    ) : (
                      <>
                        <FiSend />
                        Submit Feedback
                      </>
                    )}
                  </button>
                </form>
              </div>
            </div>
          </motion.div>
        )}

        {/* Success Modal */}
        {showSuccess && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setShowSuccess(false)}
            aria-label="Form submission success modal"
          >
            <motion.div
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl max-w-md w-full p-8"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
            >
              <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-200 mb-4">
                {activeTab === 'contact' ? 'Message Sent!' : 'Feedback Submitted!'}
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                {activeTab === 'contact'
                  ? 'Thank you for reaching out! We’ll get back to you within 24 hours.'
                  : 'Thank you for your feedback! We appreciate your input and will review it soon.'}
              </p>
              <button
                onClick={() => setShowSuccess(false)}
                className="w-full bg-blue-600 dark:bg-yellow-400 hover:bg-blue-700 dark:hover:bg-yellow-500 text-white dark:text-gray-900 px-6 py-3 rounded-lg font-medium transition-colors"
                aria-label="Close success modal"
              >
                Close
              </button>
            </motion.div>
          </motion.div>
        )}

        {/* Map Section */}
        <div className="max-w-7xl mx-auto px-4 mb-12">
          <motion.div
            className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            role="region"
            aria-label="Studio location map"
          >
            <div className="h-96 w-full relative">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3770.9894568038034!2d72.83417357509223!3d19.06394498211376!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c9c676018b43%3A0x2b3c6752b0e3a4a8!2sMumbai%2C%20Maharashtra%2C%20India!5e0!3m2!1sen!2sus!4v1697051234567!5m2!1sen!2sus"
                className="absolute inset-0 w-full h-full"
                frameBorder="0"
                style={{ border: 0 }}
                allowFullScreen=""
                aria-hidden="false"
                tabIndex="0"
                title="PhotoStudio Location Map"
              ></iframe>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center p-6 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-lg shadow-lg">
                  <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200 mb-2">Our Studio Location</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">123 Studio Lane, Mumbai, India</p>
                  <a
                    href="https://www.google.com/maps/place/Mumbai,+Maharashtra,+India"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-blue-600 dark:bg-yellow-400 hover:bg-blue-700 dark:hover:bg-yellow-500 text-white dark:text-gray-900 px-4 py-2 rounded-lg font-medium transition-colors"
                    aria-label="Get directions to PhotoStudio"
                  >
                    Get Directions
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;