import React from 'react';
import Hero from '../components/Hero';
import ProductList from '../components/ProductList';

const HomePage = ({ products }) => {
  return (
    <>
      <Hero />
      <ProductList products={products} />
      
      {/* About Section */}
      <section id="about" className="bg-gray-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-red-900 text-center mb-2">
                MittalPeripherals
          </h2>
          <p className="text-lg text-gray-600 text-center mb-12">
            Bringing quality tech products to enhance your everyday life
          </p>
          
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <img 
                src="/aboutthestore.jpeg" 
                alt="About our store" 
                className="rounded-lg shadow-lg max-w-full h-auto"
              />
            </div>
            
            <div className="md:w-1/2 md:pl-12">
              <h3 className="text-2xl font-bold mb-4 text-yellow-900">Our Story</h3>
              <p className="text-gray-600 mb-4">
                Founded in 2021, MittalPeripherals began with a simple mission: to provide high-quality tech products that make everyday life better. What started as a small online shop has grown into a trusted brand for tech enthusiasts.
              </p>
              <p className="text-gray-600 mb-6">
                We carefully select and test every product in our catalog to ensure it meets our standards for quality, performance, and value. Our team of tech experts is passionate about finding the best devices and accessories to enhance your digital lifestyle.
              </p>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white p-4 rounded-lg shadow">
                  <h4 className="font-bold text-yellow-900 mb-2">Quality Products</h4>
                  <p className="text-gray-600">We only sell products that meet our rigorous standards.</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow">
                  <h4 className="font-bold text-yellow-900 mb-2">Expert Support</h4>
                  <p className="text-gray-600">Our knowledgeable team is always ready to help.</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow">
                  <h4 className="font-bold text-yellow-900 mb-2">Fast Shipping</h4>
                  <p className="text-gray-600">Products delivered to your door in record time.</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow">
                  <h4 className="font-bold text-yellow-900 mb-2">Satisfaction Guarantee</h4>
                  <p className="text-gray-600">30-day return policy on all purchases.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Contact Section */}
      <section id="contact" className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-2">
            Contact Us
          </h2>
          <p className="text-lg text-gray-600 text-center mb-12">
            Have questions? We're here to help!
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Get In Touch</h3>
              <p className="text-gray-600 mb-4">
                We'd love to hear from you. Fill out the form and we'll get back to you as soon as possible.
              </p>
              
              <div className="space-y-4 mb-6">
                <div className="flex items-start">
                  <svg className="h-6 w-6 text-blue-600 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <p className="text-gray-600">123 Tech Street, Silicon Valley, CA 94024</p>
                </div>
                
                <div className="flex items-start">
                  <svg className="h-6 w-6 text-blue-600 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <p className="text-gray-600">support@techstore.com</p>
                </div>
                
                <div className="flex items-start">
                  <svg className="h-6 w-6 text-blue-600 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <p className="text-gray-600">(555) 123-4567</p>
                </div>
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-4">Store Hours</h3>
              <ul className="text-gray-600 space-y-2">
                <li><span className="font-medium">Monday - Friday:</span> 9AM - 8PM</li>
                <li><span className="font-medium">Saturday:</span> 10AM - 6PM</li>
                <li><span className="font-medium">Sunday:</span> 12PM - 5PM</li>
              </ul>
            </div>
            
            <div>
              <form className="bg-gray-50 p-6 rounded-lg shadow-md">
                <div className="mb-4">
                  <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
                    placeholder="Your name"
                  />
                </div>
                
                <div className="mb-4">
                  <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
                    placeholder="Your email address"
                  />
                </div>
                
                <div className="mb-4">
                  <label htmlFor="subject" className="block text-gray-700 font-medium mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
                    placeholder="Subject of your message"
                  />
                </div>
                
                <div className="mb-6">
                  <label htmlFor="message" className="block text-gray-700 font-medium mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows="5"
                    className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
                    placeholder="Your message"
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomePage;