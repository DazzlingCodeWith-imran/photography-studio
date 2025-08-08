import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FiCalendar, FiClock, FiCheckCircle, FiSend } from 'react-icons/fi';
import { Helmet } from 'react-helmet';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const Booking = () => {
  const [formData, setFormData] = useState({
    service: '',
    date: null,
    time: '',
    name: '',
    email: '',
    phone: '',
    notes: '',
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const services = [
    { id: 'portrait', name: 'Portrait Photography', price: '₹10,000' },
    { id: 'wedding', name: 'Wedding Photography', price: '₹50,000' },
    { id: 'video', name: 'Video Production', price: '₹30,000' },
    { id: 'commercial', name: 'Commercial Shoots', price: '₹20,000' },
  ];

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: '' });
  };

  const handleDateChange = (date) => {
    setFormData({ ...formData, date });
    setErrors({ ...errors, date: '' });
  };

  const validate = () => {
    let tempErrors = {};
    if (!formData.service) tempErrors.service = 'Please select a service';
    if (!formData.date) tempErrors.date = 'Please select a date';
    if (!formData.time) tempErrors.time = 'Please select a time';
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
        setFormData({
          service: '',
          date: null,
          time: '',
          name: '',
          email: '',
          phone: '',
          notes: '',
        });
        setIsSubmitting(false);
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
        <title>PhotoStudio - Book Your Session</title>
        <meta
          name="description"
          content="Book your photography or videography session with PhotoStudio in Mumbai. Select your service, date, and time easily."
        />
        <meta name="keywords" content="booking, photography, videography, session, Mumbai" />
      </Helmet>

      {/* Hero Section */}
      <div
        className="relative h-[50vh] bg-cover bg-center hero-bg"
        style={{
          backgroundImage: 'ur[](https://images.unsplash.com/photo-1516321165247-4aa89a48d5df?ixlib=rb-4.0.3&auto=format&fit=crop&w=1630&q=80)',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-purple-900/80 dark:from-gray-900/80 dark:to-gray-800/80 flex items-center justify-center">
          <motion.div
            className="text-center text-white px-4"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            aria-label="Booking hero section"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Book Your <span className="text-amber-400 dark:text-yellow-400">Session</span>
            </h1>
            <p className="text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
              Schedule your photography or videography session with ease. Select your service and preferred time slot.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Booking Form */}
      <div className="max-w-3xl mx-auto px-4 py-12 -mt-16 z-10 relative">
        <motion.div
          className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          role="form"
          aria-label="Booking form"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-gray-200 mb-6">Schedule Your Session</h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="service" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Select Service
              </label>
              <select
                id="service"
                name="service"
                value={formData.service}
                onChange={handleChange}
                className={`w-full p-3 rounded-lg border ${
                  errors.service ? 'border-red-500 bg-red-50' : 'border-gray-300 dark:border-gray-600'
                } focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-yellow-400 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-200`}
                aria-required="true"
              >
                <option value="">Choose a service</option>
                {services.map((service) => (
                  <option key={service.id} value={service.id}>
                    {service.name} ({service.price})
                  </option>
                ))}
              </select>
              {errors.service && <p className="mt-1 text-sm text-red-600">{errors.service}</p>}
            </div>

            <div>
              <label htmlFor="date" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Select Date
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FiCalendar className="text-gray-400" />
                </div>
                <DatePicker
                  selected={formData.date}
                  onChange={handleDateChange}
                  minDate={new Date()}
                  placeholderText="Select a date"
                  className={`pl-10 w-full p-3 rounded-lg border ${
                    errors.date ? 'border-red-500 bg-red-50' : 'border-gray-300 dark:border-gray-600'
                  } focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-yellow-400 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-200`}
                  aria-required="true"
                />
              </div>
              {errors.date && <p className="mt-1 text-sm text-red-600">{errors.date}</p>}
            </div>

            <div>
              <label htmlFor="time" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Select Time
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FiClock className="text-gray-400" />
                </div>
                <select
                  id="time"
                  name="time"
                  value={formData.time}
                  onChange={handleChange}
                  className={`pl-10 w-full p-3 rounded-lg border ${
                    errors.time ? 'border-red-500 bg-red-50' : 'border-gray-300 dark:border-gray-600'
                  } focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-yellow-400 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-200`}
                  aria-required="true"
                >
                  <option value="">Choose a time</option>
                  {['10:00 AM', '12:00 PM', '2:00 PM', '4:00 PM', '6:00 PM'].map((time) => (
                    <option key={time} value={time}>
                      {time}
                    </option>
                  ))}
                </select>
              </div>
              {errors.time && <p className="mt-1 text-sm text-red-600">{errors.time}</p>}
            </div>

            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Full Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="John Doe"
                className={`w-full p-3 rounded-lg border ${
                  errors.name ? 'border-red-500 bg-red-50' : 'border-gray-300 dark:border-gray-600'
                } focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-yellow-400 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-200`}
                aria-required="true"
              />
              {errors.name && <p className="mt-1 text-sm text-red-600">{errors.name}</p>}
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="your@email.com"
                className={`w-full p-3 rounded-lg border ${
                  errors.email ? 'border-red-500 bg-red-50' : 'border-gray-300 dark:border-gray-600'
                } focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-yellow-400 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-200`}
                aria-required="true"
              />
              {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email}</p>}
            </div>

            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="+919876543210"
                className={`w-full p-3 rounded-lg border ${
                  errors.phone ? 'border-red-500 bg-red-50' : 'border-gray-300 dark:border-gray-600'
                } focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-yellow-400 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-200`}
                aria-required="true"
              />
              {errors.phone && <p className="mt-1 text-sm text-red-600">{errors.phone}</p>}
            </div>

            <div>
              <label htmlFor="notes" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Additional Notes
              </label>
              <textarea
                id="notes"
                name="notes"
                value={formData.notes}
                onChange={handleChange}
                placeholder="Any specific requirements?"
                rows="4"
                className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-yellow-400 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-200"
              ></textarea>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full flex items-center justify-center gap-2 bg-blue-600 dark:bg-yellow-400 hover:bg-blue-700 dark:hover:bg-yellow-500 text-white dark:text-gray-900 px-6 py-3 rounded-lg font-medium transition-colors ${
                isSubmitting ? 'opacity-70 cursor-not-allowed' : ''
              }`}
              aria-label="Submit booking form"
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
                  Booking...
                </>
              ) : (
                <>
                  <FiSend />
                  Book Now
                </>
              )}
            </button>
          </form>
        </motion.div>

        {/* Success Modal */}
        {showSuccess && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setShowSuccess(false)}
            aria-label="Booking success modal"
          >
            <motion.div
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl max-w-md w-full p-8"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
            >
              <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-200 mb-4">Booking Confirmed!</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Thank you for booking with us! We’ll send you a confirmation email with all the details.
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
      </div>
    </div>
  );
};

export default Booking;