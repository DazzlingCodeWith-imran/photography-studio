import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <div className="min-h-screen bg-gray-100 pt-20">
      <div className="relative h-[60vh] bg-cover bg-center" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1530016555860-7c7612161698)' }}>
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <motion.div
            className="text-center text-white"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">About Our Studio</h1>
            <p className="text-lg md:text-xl max-w-2xl mx-auto">We are passionate about capturing your moments with creativity and precision.</p>
          </motion.div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 py-12">
        <motion.div
          className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl shadow-xl p-8 text-center"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h2 className="text-2xl md:text-3xl font-bold text-blue-900 mb-4">Our Mission</h2>
          <p className="text-gray-700 text-lg max-w-3xl mx-auto">
            At Photo Studio, we aim to create timeless memories through professional photography and videography. Our team is dedicated to delivering high-quality, creative, and personalized services to every client.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default About;