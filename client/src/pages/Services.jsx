import React, { useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaCameraRetro, FaHeart, FaVideo, FaQuoteLeft, FaStar } from 'react-icons/fa';
import { MdPhotoCamera, MdVideocam, MdEvent, MdPortrait } from 'react-icons/md';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

const Services = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });
  const [activeService, setActiveService] = useState(null);
  const [testimonials, setTestimonials] = useState([
    {
      id: 1,
      quote: 'The wedding photos were absolutely stunning! They captured every special moment perfectly.',
      author: 'Rahul & Neha',
      rating: 5,
    },
    {
      id: 2,
      quote: 'Professional, creative, and delivered beyond our expectations. The portrait session was amazing!',
      author: 'Priya Gupta',
      rating: 4,
    },
    {
      id: 3,
      quote: 'The event video was edited beautifully and delivered on time. Highly recommended!',
      author: 'Amit Sharma',
      rating: 5,
    },
  ]);

  useEffect(() => {
    const storedFeedback = JSON.parse(localStorage.getItem('feedback') || '[]');
    if (storedFeedback.length > 0) {
      setTestimonials((prev) => [
        ...prev,
        ...storedFeedback.map((fb, index) => ({
          id: prev.length + index + 1,
          quote: fb.feedback,
          author: fb.name,
          rating: 5,
        })),
      ]);
    }
  }, []);

  useEffect(() => {
    if (inView) controls.start('visible');
  }, [controls, inView]);

  useEffect(() => {
    // Parallax effect for service images
    const handleScroll = () => {
      document.querySelectorAll('.service-img').forEach((img) => {
        const scrollPosition = window.scrollY;
        img.style.transform = `translateY(${scrollPosition * 0.1}px)`;
      });
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const services = [
    {
      id: 'portrait',
      name: 'Portrait Photography',
      description: 'Professional portrait sessions that capture your personality and essence.',
      detailedDescription:
        'Our portrait sessions are designed to bring out your best features in natural or studio settings. We work with you to create images you\'ll cherish forever, using professional lighting and posing techniques.',
      price: '₹10,000',
      duration: '2 hours',
      deliverables: '25+ edited high-res digital images',
      icon: <MdPortrait className="text-5xl" />,
      image: 'https://images.unsplash.com/photo-1554080353-a576cf803bda?ixlib=rb-4.0.3&auto=format&fit=crop&w=1587&q=80',
      features: ['Professional lighting setup', 'Multiple outfit changes', 'Indoor/outdoor options', 'Basic retouching included'],
    },
    {
      id: 'wedding',
      name: 'Wedding Photography',
      description: 'Comprehensive coverage of your special day with artistic and documentary-style photography.',
      detailedDescription:
        'We capture the emotions, details, and moments that make your wedding unique. From getting ready to the reception, our team ensures no moment is missed while maintaining a discreet presence.',
      price: '₹50,000',
      duration: 'Full day coverage',
      deliverables: '500+ edited high-res digital images, online gallery',
      icon: <FaHeart className="text-5xl" />,
      image: 'https://images.unsplash.com/photo-1583939003579-730e8a45a45a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1587&q=80',
      features: ['Two photographers', 'Pre-wedding consultation', 'Engagement session included', 'Custom wedding album options'],
    },
    {
      id: 'video',
      name: 'Video Production',
      description: 'High-quality video services for weddings, events, commercials, and more.',
      detailedDescription:
        'Our cinematic approach to videography combines storytelling with technical expertise. We deliver polished videos with professional editing, color grading, and sound design.',
      price: '₹30,000',
      duration: 'Custom',
      deliverables: '5-10 minute highlight film, full ceremony/edit',
      icon: <MdVideocam className="text-5xl" />,
      image: 'https://images.unsplash.com/photo-1553787499-2a1591d0a8a5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1587&q=80',
      features: ['4K resolution', 'Professional audio recording', 'Color grading', 'Multiple camera angles'],
    },
    {
      id: 'commercial',
      name: 'Commercial Shoots',
      description: 'Professional photography for corporate events, product shoots, and branding.',
      detailedDescription:
        'We provide high-quality commercial photography tailored to your brand’s needs, including product photography, corporate headshots, and event coverage.',
      price: '₹20,000',
      duration: '4 hours',
      deliverables: '50+ edited high-res digital images',
      icon: <MdEvent className="text-5xl" />,
      image: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?ixlib=rb-4.0.3&auto=format&fit=crop&w=1740&q=80',
      features: ['Custom lighting setups', 'Brand-aligned editing', 'On-site previews', 'Fast delivery'],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
  };

  const modalVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
    exit: { opacity: 0, y: 50 },
  };

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 768, settings: { slidesToShow: 1 } },
      { breakpoint: 640, settings: { slidesToShow: 1, dots: false } },
    ],
    accessibility: true,
    arrows: true,
    focusOnSelect: true,
  };

  const renderStars = (rating) => {
    return Array(5)
      .fill(0)
      .map((_, i) => (
        <FaStar key={i} className={i < rating ? 'text-yellow-400' : 'text-gray-300 dark:text-gray-600'} />
      ));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-800 dark:to-gray-900 pt-20 pb-16 px-4">
      {/* SEO Meta Tags */}
      <Helmet>
        <title>PhotoStudio - Our Photography & Videography Services</title>
        <meta
          name="description"
          content="Explore PhotoStudio's premium photography and videography services, including portraits, weddings, commercial shoots, and event coverage."
        />
        <meta name="keywords" content="photography, videography, portraits, weddings, events, commercial, Mumbai" />
      </Helmet>

      {/* Hero Section */}
      <div className="max-w-7xl mx-auto text-center mb-16" aria-label="Services hero">
        <motion.h1
          className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-gray-200 mb-6"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Our <span className="text-blue-600 dark:text-yellow-400">Premium</span> Services
        </motion.h1>
        <motion.p
          className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Professional photography and videography services tailored to your needs. Capture your special moments with artistic excellence.
        </motion.p>
      </div>

      {/* Services Grid */}
      <motion.div ref={ref} className="max-w-7xl mx-auto" variants={containerVariants} initial="hidden" animate={controls}>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {services.map((service) => (
            <motion.div
              id={service.id}
              key={service.id}
              className="relative bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-2"
              variants={cardVariants}
              onClick={() => setActiveService(service)}
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={service.image}
                  alt={`${service.name} service at PhotoStudio`}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110 service-img"
                  loading="lazy"
                />
              </div>
              <div className="p-6">
                <div className="flex justify-center mb-4 text-blue-600 dark:text-yellow-400">{service.icon}</div>
                <h3 className="text-xl font-bold text-center text-gray-900 dark:text-gray-200 mb-2">{service.name}</h3>
                <p className="text-gray-600 dark:text-gray-300 text-center mb-4">{service.description}</p>
                <div className="text-center">
                  <span className="inline-block bg-blue-100 dark:bg-gray-700 text-blue-800 dark:text-yellow-400 px-3 py-1 rounded-full text-sm font-semibold">
                    {service.price}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Service Modal */}
        {activeService && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveService(null)}
            aria-label="Service details modal"
          >
            <motion.div
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
              variants={modalVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative">
                <img src={activeService.image} alt={`${activeService.name} service`} className="w-full h-64 object-cover" />
                <button
                  className="absolute top-4 right-4 bg-white dark:bg-gray-200 rounded-full p-2 shadow-md hover:bg-gray-100 dark:hover:bg-gray-300"
                  onClick={() => setActiveService(null)}
                  aria-label="Close service modal"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              <div className="p-8">
                <div className="flex justify-center mb-6 text-blue-600 dark:text-yellow-400">{activeService.icon}</div>
                <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-gray-200 mb-4">{activeService.name}</h2>
                <p className="text-gray-600 dark:text-gray-300 text-center mb-8">{activeService.detailedDescription}</p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-200 mb-4">Package Details</h3>
                    <div className="space-y-4">
                      <div className="flex justify-between border-b pb-2">
                        <span className="text-gray-600 dark:text-gray-300">Price:</span>
                        <span className="font-semibold">{activeService.price}</span>
                      </div>
                      <div className="flex justify-between border-b pb-2">
                        <span className="text-gray-600 dark:text-gray-300">Duration:</span>
                        <span className="font-semibold">{activeService.duration}</span>
                      </div>
                      <div className="flex justify-between border-b pb-2">
                        <span className="text-gray-600 dark:text-gray-300">Deliverables:</span>
                        <span className="font-semibold">{activeService.deliverables}</span>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-200 mb-4">Key Features</h3>
                    <ul className="space-y-2">
                      {activeService.features.map((feature, index) => (
                        <li key={index} className="flex items-start">
                          <svg
                            className="h-5 w-5 text-green-500 mr-2 mt-1"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <Link
                  to="/contact"
                  className="w-full bg-blue-600 hover:bg-blue-700 dark:bg-yellow-500 dark:hover:bg-yellow-600 text-white dark:text-gray-900 py-3 px-6 rounded-lg font-semibold transition-colors duration-300"
                  aria-label={`Book ${activeService.name} service`}
                  style={{ scrollBehavior: 'smooth' }}
                >
                  Book This Service
                </Link>
              </div>
            </motion.div>
          </motion.div>
        )}

        {/* Testimonials Section */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-800 dark:from-gray-700 dark:to-gray-800 rounded-2xl p-8 md:p-12 mb-16">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-white mb-12">
            Client <span className="text-yellow-300 dark:text-yellow-400">Testimonials</span>
          </h2>

          <Slider {...sliderSettings} className="max-w-5xl mx-auto" aria-label="Client testimonials carousel">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="px-2">
                <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 h-full">
                  <div className="flex justify-center mb-4">
                    <div className="flex">{renderStars(testimonial.rating)}</div>
                  </div>
                  <FaQuoteLeft className="text-3xl text-blue-600 dark:text-yellow-400 opacity-30 mb-4 mx-auto" />
                  <p className="text-gray-700 dark:text-gray-300 text-lg mb-6 text-center italic">"{testimonial.quote}"</p>
                  <p className="text-blue-900 dark:text-gray-200 font-semibold text-center">— {testimonial.author}</p>
                </div>
              </div>
            ))}
          </Slider>
        </div>

        {/* CTA Section */}
        <motion.div
          className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="p-8 md:p-12 bg-gradient-to-br from-blue-50 to-blue-100 dark:from-gray-700 dark:to-gray-800">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-gray-200 mb-4">
                Ready to capture your special moments?
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Contact us today to discuss your photography or videography needs. We'll create a custom package just for you.
              </p>
              <Link
                to="/contact"
                className="bg-blue-600 hover:bg-blue-700 dark:bg-yellow-500 dark:hover:bg-yellow-600 text-white dark:text-gray-900 px-6 py-3 rounded-lg font-semibold transition-colors duration-300"
                aria-label="Contact us to book a session"
                style={{ scrollBehavior: 'smooth' }}
              >
                Get in Touch
              </Link>
            </div>
            <div className="hidden md:block">
              <img
                src="https://images.unsplash.com/photo-1527525443983-6e60c75fff46?ixlib=rb-4.0.3&auto=format&fit=crop&w=1580&q=80"
                alt="Photographer working at PhotoStudio"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Services;