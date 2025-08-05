import React from 'react';
import { FaCameraRetro, FaHeart, FaVideo } from 'react-icons/fa';

const Services = () => {
  const services = [
    {
      id: 1,
      name: 'Portrait Photography',
      description: 'Capture your best moments with high-quality portraits.',
      price: '$100',
      icon: <FaCameraRetro className="text-4xl text-pink-500" />,
    },
    {
      id: 2,
      name: 'Wedding Photography',
      description: 'Cherish your big day with beautiful wedding shots.',
      price: '$500',
      icon: <FaHeart className="text-4xl text-red-500" />,
    },
    {
      id: 3,
      name: 'Video Shoot',
      description: 'Create stunning professional videos for any occasion.',
      price: '$300',
      icon: <FaVideo className="text-4xl text-purple-500" />,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-100 via-white to-slate-200 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-12 text-gray-800">
          Our <span className="text-blue-600">Services</span>
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-white/70 backdrop-blur-md rounded-2xl shadow-lg p-8 transition-transform transform hover:-translate-y-2 hover:shadow-2xl duration-300"
            >
              <div className="flex justify-center mb-4">{service.icon}</div>
              <h2 className="text-2xl font-semibold text-center text-gray-800 mb-2">{service.name}</h2>
              <p className="text-gray-600 text-center mb-4">{service.description}</p>
              <p className="text-xl font-bold text-center text-blue-700">{service.price}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
