import React from 'react';
import { Link } from 'react-router';
import '../styles/Home.css';

function Home() {
  return (
    <div className="home-container">
      <div className="hero-section">
        <h1>Welcome to MyStore</h1>
        <p>Discover the best products with amazing discounts. Explore our wide collection now.</p>
        <Link to="/products" className="cta-button">Shop Now</Link>
      </div>
      <div className="features">
        <div className="feature-card">
          <h3>Fast Delivery</h3>
          <p>Get your products delivered in no time.</p>
        </div>
        <div className="feature-card">
          <h3>Secure Payments</h3>
          <p>We ensure your payments are safe and encrypted.</p>
        </div>
        <div className="feature-card">
          <h3>24/7 Support</h3>
          <p>Our team is always here to help you.</p>
        </div>
      </div>
    </div>
  );
}

export default Home;
