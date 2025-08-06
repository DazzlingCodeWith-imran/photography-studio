import React, { useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';
import { FiCalendar, FiClock, FiArrowRight } from 'react-icons/fi';
import { Helmet } from 'react-helmet';

const Blog = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [activePost, setActivePost] = useState(null);

  useEffect(() => {
    if (inView) controls.start('visible');
  }, [controls, inView]);

  useEffect(() => {
    // Parallax effect for blog images
    const handleScroll = () => {
      document.querySelectorAll('.blog-img').forEach((img) => {
        const scrollPosition = window.scrollY;
        img.style.transform = `translateY(${scrollPosition * 0.1}px)`;
      });
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const blogPosts = [
    {
      id: 1,
      title: 'Top 5 Tips for Perfect Wedding Photos',
      excerpt: 'Learn professional techniques to ensure your wedding photos capture every magical moment beautifully.',
      content: 'In this article, we dive deep into the top five techniques for capturing stunning wedding photos, including tips on lighting, composition, and candid moments. Whether you’re a bride or a photographer, these tips will elevate your wedding photography game.',
      image: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1080&q=80',
      alt: 'Wedding couple photography at PhotoStudio',
      date: 'July 15, 2025',
      readTime: '8 min read',
      category: 'Photography',
    },
    {
      id: 2,
      title: 'Mastering Portrait Lighting Techniques',
      excerpt: 'Discover how professional lighting setups can transform your portrait photography from good to stunning.',
      content: 'Lighting is the key to exceptional portraits. This guide covers professional lighting setups, including three-point lighting, natural light techniques, and tips for creating dramatic effects.',
      image: 'https://images.unsplash.com/photo-1554080353-a576cf803bda?ixlib=rb-4.0.3&auto=format&fit=crop&w=1080&q=80',
      alt: 'Portrait lighting setup at PhotoStudio',
      date: 'July 22, 2025',
      readTime: '12 min read',
      category: 'Techniques',
    },
    {
      id: 3,
      title: 'The Power of Cinematic Event Videography',
      excerpt: 'Learn why professional videography is essential for preserving the emotion and energy of your special events.',
      content: 'Professional videography captures the essence of your event like nothing else. Learn about multi-camera setups, audio recording, and editing techniques that create cinematic masterpieces.',
      image: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?ixlib=rb-4.0.3&auto=format&fit=crop&w=1080&q=80',
      alt: 'Videographer filming event at PhotoStudio',
      date: 'July 28, 2025',
      readTime: '10 min read',
      category: 'Videography',
    },
    {
      id: 4,
      title: 'Essential Gear for Travel Photography',
      excerpt: 'Our curated list of must-have equipment for capturing stunning images while on the road.',
      content: 'Travel photography requires the right gear. This article lists essential cameras, lenses, tripods, and accessories to help you capture breathtaking landscapes and cultures.',
      image: 'https://images.unsplash.com/photo-1467269204594-9661b134dd2b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1080&q=80',
      alt: 'Camera gear for travel at PhotoStudio',
      date: 'August 1, 2025',
      readTime: '6 min read',
      category: 'Gear',
    },
    {
      id: 5,
      title: 'Posing Guide for Family Portraits',
      excerpt: 'Professional tips to make your family photos look natural, relaxed, and picture-perfect every time.',
      content: 'Posing can make or break a family portrait. This guide shares expert tips on natural posing, group composition, and creating a relaxed atmosphere for stunning photos.',
      image: 'https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?ixlib=rb-4.0.3&auto=format&fit=crop&w=1080&q=80',
      alt: 'Family posing for photos at PhotoStudio',
      date: 'August 3, 2025',
      readTime: '9 min read',
      category: 'Techniques',
    },
    {
      id: 6,
      title: 'Editing Workflow for Professional Results',
      excerpt: 'Step-by-step guide to our post-processing workflow that delivers magazine-quality images.',
      content: 'Post-processing is where photos come to life. Learn our step-by-step workflow for editing in Lightroom and Photoshop to achieve professional, magazine-quality results.',
      image: 'https://images.unsplash.com/photo-1555774698-0b77e0d5fac6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1080&q=80',
      alt: 'Photo editing on computer at PhotoStudio',
      date: 'August 5, 2025',
      readTime: '15 min read',
      category: 'Post-Production',
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

  const imageVariants = {
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.4,
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
    <div className="min-h-screen bg-white dark:bg-gray-800 py-24 px-4 sm:px-6 lg:px-8">
      {/* SEO Meta Tags */}
      <Helmet>
        <title>PhotoStudio - Photography & Videography Blog</title>
        <meta
          name="description"
          content="Explore PhotoStudio's blog for expert tips, tutorials, and inspiration on photography, videography, and post-production techniques."
        />
        <meta name="keywords" content="photography, videography, blog, tutorials, tips, Mumbai" />
      </Helmet>

      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          aria-label="Blog section"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-gray-200 mb-4">
            Photography{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-yellow-400 dark:to-yellow-500">
              Insights
            </span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Expert tips, tutorials, and inspiration from our professional photographers and videographers.
          </p>
        </motion.div>

        <motion.div ref={ref} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" variants={containerVariants} initial="hidden" animate={controls}>
          {blogPosts.map((post) => (
            <motion.div
              key={post.id}
              className="group"
              variants={cardVariants}
              whileHover="hover"
            >
              <div
                onClick={() => setActivePost(post)}
                className="h-full flex flex-col cursor-pointer"
                aria-label={`Read blog post: ${post.title}`}
              >
                <div className="relative overflow-hidden rounded-xl aspect-[4/3] mb-4">
                  <motion.img
                    src={post.image}
                    alt={post.alt}
                    className="w-full h-full object-cover blog-img"
                    loading="lazy"
                    variants={imageVariants}
                    whileHover="hover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                    <span className="inline-block px-3 py-1 bg-white dark:bg-gray-700 text-blue-600 dark:text-yellow-400 rounded-full text-sm font-medium">
                      {post.category}
                    </span>
                  </div>
                </div>

                <div className="flex-grow">
                  <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-3">
                    <div className="flex items-center mr-4">
                      <FiCalendar className="mr-1" />
                      {post.date}
                    </div>
                    <div className="flex items-center">
                      <FiClock className="mr-1" />
                      {post.readTime}
                    </div>
                  </div>

                  <h2 className="text-xl font-bold text-gray-900 dark:text-gray-200 mb-2 group-hover:text-blue-600 dark:group-hover:text-yellow-400 transition-colors">
                    {post.title}
                  </h2>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">{post.excerpt}</p>
                </div>

                <div className="mt-auto">
                  <div className="inline-flex items-center text-blue-600 dark:text-yellow-400 font-medium group-hover:text-blue-800 dark:group-hover:text-yellow-500 transition-colors">
                    Read article
                    <FiArrowRight className="ml-2 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Blog Post Modal */}
        {activePost && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActivePost(null)}
            aria-label={`Blog post: ${activePost.title}`}
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
                <img src={activePost.image} alt={activePost.alt} className="w-full h-64 object-cover" />
                <button
                  className="absolute top-4 right-4 bg-white dark:bg-gray-200 rounded-full p-2 shadow-md hover:bg-gray-100 dark:hover:bg-gray-300"
                  onClick={() => setActivePost(null)}
                  aria-label="Close blog post modal"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              <div className="p-8">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-200 mb-4">{activePost.title}</h2>
                <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-4">
                  <div className="flex items-center mr-4">
                    <FiCalendar className="mr-1" />
                    {activePost.date}
                  </div>
                  <div className="flex items-center">
                    <FiClock className="mr-1" />
                    {activePost.readTime}
                  </div>
                </div>
                <p className="text-blue-600 dark:text-yellow-400 font-medium mb-4">{activePost.category}</p>
                <p className="text-gray-600 dark:text-gray-300 mb-6">{activePost.content}</p>
                <Link
                  to="/contact"
                  className="inline-flex items-center px-6 py-3 bg-blue-600 dark:bg-yellow-500 text-white dark:text-gray-900 rounded-lg font-semibold hover:bg-blue-700 dark:hover:bg-yellow-600 transition-colors"
                  aria-label="Contact us to book a session"
                  style={{ scrollBehavior: 'smooth' }}
                >
                  Book a Session
                </Link>
              </div>
            </motion.div>
          </motion.div>
        )}

        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <Link
            to="/contact"
            className="inline-flex items-center px-8 py-4 border border-transparent text-lg font-semibold rounded-xl shadow-sm text-white dark:text-gray-900 bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-yellow-400 dark:to-yellow-500 hover:from-blue-700 hover:to-indigo-700 dark:hover:from-yellow-500 dark:hover:to-yellow-600 transition-colors duration-300"
            aria-label="Contact us for photography or videography services"
            style={{ scrollBehavior: 'smooth' }}
          >
            Get in Touch
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
        </motion.div>
      </div>
    </div>
  );
};

export default Blog;