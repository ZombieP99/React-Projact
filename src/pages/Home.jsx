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
            <div className="feature-icon">🚀</div>
            <h3>Fast Delivery</h3>
            <p>Get your products delivered in no time with our express shipping.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">🔒</div>
            <h3>Secure Payments</h3>
            <p>We ensure your payments are 100% safe and encrypted.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">🎧</div>
            <h3>24/7 Support</h3>
            <p>Our dedicated team is always here to help you anytime.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">⭐</div>
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
