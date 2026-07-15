import React, { useState, useEffect } from 'react';
import { Link } from 'react-router';
import '../styles/Home.css';

function Home() {
  const [featuredProducts, setFeaturedProducts] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/products?limit=4")
      .then((res) => res.json())
      .then((data) => setFeaturedProducts(data.products))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="home-container">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <h1>Discover Your Next <span className="highlight">Favorite</span> Product</h1>
          <p>Explore our premium collection of handpicked items, designed to bring joy and convenience to your everyday life.</p>
          <div className="hero-buttons">
            <Link to="/products" className="cta-button primary">Shop Now</Link>
            <Link to="/about" className="cta-button secondary">Learn More</Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section">
        <div className="features">
          <div className="feature-card">
            <div className="feature-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2"/><path d="M15 18H9"/><path d="M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14"/><circle cx="17" cy="18" r="2"/><circle cx="7" cy="18" r="2"/></svg>
            </div>
            <h3>Fast Delivery</h3>
            <p>Get your products delivered in no time with our express shipping.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/><path d="m9 12 2 2 4-4"/></svg>
            </div>
            <h3>Secure Payments</h3>
            <p>We ensure your payments are 100% safe and encrypted.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 14h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7a9 9 0 0 1 18 0v7a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3"/></svg>
            </div>
            <h3>24/7 Support</h3>
            <p>Our dedicated team is always here to help you anytime.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="8" r="6"/><path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11"/></svg>
            </div>
            <h3>Premium Quality</h3>
            <p>We source only the best products from top brands.</p>
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="trending-section">
        <div className="section-header">
          <h2>Trending Products</h2>
          <Link to="/products" className="view-all-link">View All &rarr;</Link>
        </div>
        <div className="trending-grid">
          {featuredProducts.map((p) => (
            <Link to={`/product/${p.id}`} className="trending-card" key={p.id}>
              <div className="trending-img-wrapper">
                <img src={p.thumbnail} alt={p.title} />
              </div>
              <div className="trending-info">
                <h4>{p.title}</h4>
                <p>${p.price.toFixed(2)}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="newsletter-section">
        <div className="newsletter-content">
          <h2>Join Our Newsletter</h2>
          <p>Subscribe to get special offers, free giveaways, and once-in-a-lifetime deals.</p>
          <form className="newsletter-form" onSubmit={(e) => e.preventDefault()}>
            <input type="email" placeholder="Enter your email address" required />
            <button type="submit">Subscribe</button>
          </form>
        </div>
      </section>
    </div>
  );
}

export default Home;
