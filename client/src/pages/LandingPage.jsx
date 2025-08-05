import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <div className="relative h-[90vh] bg-cover bg-center" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1507525428034-b723cf961d3e)' }}>
        <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
          <motion.div
            className="text-center text-white px-4"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-4 tracking-tight">Welcome to Photo Studio</h1>
            <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">Capture life’s moments with our professional photography and videography services.</p>
            <Link
              to="/services"
              className="bg-yellow-500 text-gray-900 px-8 py-3 rounded-full font-semibold text-lg hover:bg-yellow-400 transition duration-300"
            >
              Book Now
            </Link>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;