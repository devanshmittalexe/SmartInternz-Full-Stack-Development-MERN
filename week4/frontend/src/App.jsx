import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// Components
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import ProductDetailsPage from './pages/ProductDetailsPage';
import Footer from './components/Footer';

function App() {
  const [products] = useState([
    {
      id: 1,
      name: "Premium Headphones",
      price: 99,
      image: "/headphones.jpeg",
      description: "Experience crystal-clear sound with our premium noise-cancelling headphones. Perfect for music lovers and professionals alike.",
      features: ["40-hour battery life", "Active noise cancellation", "Bluetooth 5.0", "Built-in microphone"],
      inStock: true
    },
    {
      id: 2,
      name: "Router",
      price: 20,
      image: "/router.jpeg",
      description: "A router is a networking device that directs data traffic between devices and networks, enabling internet and local network connectivity.",
      features: ["Traffic Routing", "Wi-Fi Connectivity", "Multiple Ports", "Security Features"],
      inStock: true
    },
    {
      id: 3,
      name: "Wireless Earbuds",
      price: 149.99,
      image: "/buds.jpeg",
      description: "Compact, comfortable, and with amazing sound quality. These earbuds are perfect for your active lifestyle.",
      features: ["6-hour playback", "Touch controls", "Charging case included", "Sweat resistant"],
      inStock: false
    },
    {
      id: 4,
      name: "Portable Power Bank",
      price: 49.99,
      image: "/powerbank.jpeg",
      description: "Never run out of battery with this high-capacity power bank. Keep all your devices charged on the go.",
      features: ["20000mAh capacity", "Fast charging", "Dual USB ports", "LED indicator"],
      inStock: true
    }
  ]);

  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage products={products} />} />
            <Route path="/product/:id" element={<ProductDetailsPage products={products} />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;