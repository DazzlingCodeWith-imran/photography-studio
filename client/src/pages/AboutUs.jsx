import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { FiAward, FiCamera, FiHeart, FiUsers } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

const About = () => {
  const stats = [
    { value: '10+', label: 'Years Experience', icon: <FiAward className="w-8 h-8" /> },
    { value: '500+', label: 'Happy Clients', icon: <FiUsers className="w-8 h-8" /> },
    { value: '5K+', label: 'Photos Captured', icon: <FiCamera className="w-8 h-8" /> },
    { value: '100%', label: 'Satisfaction', icon: <FiHeart className="w-8 h-8" /> },
  ];

  const teamMembers = [
    {
      name: 'Alex Johnson',
      role: 'Lead Photographer',
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      social: { handle: '@alexjohnson', url: 'https://instagram.com/alexjohnson' },
    },
    {
      name: 'Sarah Williams',
      role: 'Videographer',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      social: { handle: '@sarahwilliams', url: 'https://instagram.com/sarahwilliams' },
    },
    {
      name: 'Michael Chen',
      role: 'Photo Editor',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      social: { handle: '@michaelchen', url: 'https://instagram.com/michaelchen' },
    },
  ];

  useEffect(() => {
    // Parallax effect for mission image
    const handleScroll = () => {
      const missionImg = document.querySelector('.mission-img');
      if (missionImg) {
        const scrollPosition = window.scrollY;
        missionImg.style.transform = `translateY(${scrollPosition * 0.2}px)`;
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      {/* SEO Meta Tags */}
      <Helmet>
        <title>About PhotoStudio - Our Team & Mission</title>
        <meta
          name="description"
          content="Learn about PhotoStudio's passionate team and mission to capture your precious moments with artistic vision and technical excellence."
        />
        <meta name="keywords" content="photography, videography, team, mission, Mumbai" />
      </Helmet>

      {/* Hero Section */}
      <motion.section
        className="relative h-screen max-h-[800px] bg-cover bg-center flex items-center justify-center overflow-hidden"
        style={{
          backgroundImage:
            'url(https://images.unsplash.com/photo-1492684223066-81342ee5ff30?ixlib=rb-4.0.3&auto=format&fit=crop&w=1800&q=80)',
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        aria-label="About us hero"
      >
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent dark:from-gray-900/80 dark:via-gray-800/50" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/30 to-black/10 dark:from-gray-900/30 dark:to-gray-800/10" />

        <motion.div
          className="relative z-10 text-center px-6 max-w-5xl mx-auto"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Crafting{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500 dark:from-yellow-400 dark:to-yellow-500">
              Visual Stories
            </span>{' '}
            That Last Forever
          </h1>
          <p className="text-xl text-gray-300 dark:text-gray-200 max-w-3xl mx-auto mb-8">
            We are a passionate team of visual storytellers dedicated to capturing your most precious moments with artistic vision and technical excellence.
          </p>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <Link
              to="/portfolio"
              className="px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-yellow-500 dark:to-yellow-600 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:from-blue-700 hover:to-indigo-700 dark:hover:from-yellow-600 dark:hover:to-yellow-700"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              aria-label="Explore our portfolio"
            >
              Explore Our Work
            </Link>
          </motion.div>
        </motion.div>
      </motion.section>

      {/* Mission Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <motion.div
          className="bg-white dark:bg-gray-800 rounded-3xl shadow-2xl overflow-hidden"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="grid md:grid-cols-2">
            <div className="p-12 md:p-16">
              <motion.h2
                className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-200 mb-6"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                Our <span className="text-blue-600 dark:text-yellow-400">Mission</span> & Vision
              </motion.h2>
              <motion.p
                className="text-lg text-gray-600 dark:text-gray-300 mb-8"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
              >
                At PhotoStudio, we don't just take pictures - we create visual legacies. Our mission is to transform fleeting moments into timeless art through our lens, blending technical mastery with artistic sensibility.
              </motion.p>
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                viewport={{ once: true }}
              >
                <Link
                  to="/about"
                  className="px-6 py-3 border-2 border-blue-600 dark:border-yellow-400 text-blue-600 dark:text-yellow-400 font-medium rounded-lg hover:bg-blue-600 dark:hover:bg-yellow-400 hover:text-white dark:hover:text-gray-900 transition-colors duration-300"
                  aria-label="Learn more about our mission"
                >
                  Learn More About Us
                </Link>
              </motion.div>
            </div>
            <div className="bg-gray-100 dark:bg-gray-700 relative min-h-[400px] overflow-hidden">
              <motion.img
                src="https://images.unsplash.com/photo-1522206024047-9c925421675b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Our team working at PhotoStudio"
                className="absolute inset-0 w-full h-full object-cover mission-img"
                loading="lazy"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.5 }}
              />
            </div>
          </div>
        </motion.div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gradient-to-r from-blue-900 to-indigo-900 dark:from-gray-800 dark:to-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ staggerChildren: 0.2 }}
            viewport={{ once: true }}
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="p-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="flex justify-center mb-4 text-blue-300 dark:text-yellow-400">{stat.icon}</div>
                <h3 className="text-4xl font-bold mb-2">{stat.value}</h3>
                <p className="text-blue-200 dark:text-gray-300">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-200 mb-4">
              Meet Our <span className="text-blue-600 dark:text-yellow-400">Creative Team</span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              The talented individuals behind the lens who bring your vision to life with passion and expertise.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
              >
                <div className="relative pt-[100%] overflow-hidden">
                  <img
                    src={member.image}
                    alt={`${member.name}, ${member.role} at PhotoStudio`}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                    loading="lazy"
                  />
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-gray-200 mb-1">{member.name}</h3>
                  <p className="text-blue-600 dark:text-yellow-400 mb-3">{member.role}</p>
                  <a
                    href={member.social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-500 dark:text-gray-300 text-sm hover:text-blue-600 dark:hover:text-yellow-400 transition-colors"
                    aria-label={`Follow ${member.name} on Instagram`}
                  >
                    {member.social.handle}
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            className="bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-yellow-500 dark:to-yellow-600 rounded-3xl p-12 shadow-2xl"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-white mb-6">Ready to Create Something Amazing Together?</h2>
            <p className="text-blue-100 dark:text-gray-200 mb-8 text-lg">
              Let's discuss how we can bring your vision to life with our photography and videography services.
            </p>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Link
                to="/contact"
                className="px-8 py-4 bg-white dark:bg-gray-200 text-blue-600 dark:text-gray-900 font-semibold rounded-lg shadow-lg hover:bg-gray-100 dark:hover:bg-gray-300 transition-colors duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                aria-label="Contact us to book a session"
              >
                Get in Touch
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;