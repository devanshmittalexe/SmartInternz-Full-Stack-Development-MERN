import React from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div className="bg-gray-100">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between">
        <div className="md:w-1/2 mb-8 md:mb-0">
          <h1 className="text-4xl font-extrabold text-red-900 sm:text-5xl sm:tracking-tight lg:text-6xl mb-4">
            Your Daily Companion
          </h1>
          <p className="text-xl text-gray-600 mb-6">
            Discover the latest innovative tech products that enhance your everyday experiences. Quality, design, and performance in every device.
          </p>
          <div className="flex space-x-4">
            <Link to="/#products" className="bg-blue-600 text-white px-6 py-3 rounded-md font-medium hover:bg-blue-700 transition-colors">
              Shop Now
            </Link>
            <Link to="/#about" className="bg-white text-blue-600 border border-blue-600 px-6 py-3 rounded-md font-medium hover:bg-gray-50 transition-colors">
              Learn More
            </Link>
          </div>
        </div>
        <div className="md:w-1/2 flex justify-center">
          <img 
            src="/perripherals.jpeg" 
            alt="Featured tech product" 
            className="rounded-lg shadow-lg max-w-full h-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;