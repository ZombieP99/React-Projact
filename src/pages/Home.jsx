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

  const categories = [
    { name: "Smartphones", icon: <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect><line x1="12" y1="18" x2="12.01" y2="18"></line></svg> },
    { name: "Laptops", icon: <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="2" y1="20" x2="22" y2="20"></line></svg> },
    { name: "Fragrances", icon: <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m12 3-1.9 5.8a2 2 0 0 1-1.29 1.29L3 12l5.8 1.9a2 2 0 0 1 1.29 1.29L12 21l1.9-5.8a2 2 0 0 1 1.29-1.29L21 12l-5.8-1.9a2 2 0 0 1-1.29-1.29L12 3Z"></path></svg> },
    { name: "Skincare", icon: <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22a7 7 0 0 0 7-7c0-2-1-3.9-3-5.5s-3.5-4-4-6.5c-.5 2.5-2 4.9-4 6.5C6 11.1 5 13 5 15a7 7 0 0 0 7 7z"></path></svg> },
    { name: "Groceries", icon: <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="9" cy="21" r="1"></circle><circle cx="20" cy="21" r="1"></circle><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path></svg> },
    { name: "Home Decoration", icon: <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg> }
  ];

  const testimonials = [
    { name: "Sarah L.", role: "Verified Buyer", text: "Absolutely love the quality! MyStore has never disappointed me. Shipping was incredibly fast too.", rating: 5 },
    { name: "Michael J.", role: "Regular Customer", text: "Great customer service and premium products. This is my go-to place for online shopping.", rating: 5 },
    { name: "Emma W.", role: "Verified Buyer", text: "The user experience is fantastic, and the product arrived exactly as described. Highly recommend!", rating: 4 }
  ];

  return (
    <div className="home-container">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content-wrapper">
          <div className="hero-text">
            <div className="hero-badge">🚀 The New Standard of Shopping</div>
            <h1>Discover Your Next <br/><span className="highlight">Favorite</span> Product</h1>
            <p>Explore our premium collection of handpicked items, designed to bring joy and convenience to your everyday life.</p>
            <div className="hero-buttons">
              <Link to="/products" className="cta-button primary">Start Shopping</Link>
              <Link to="/about" className="cta-button secondary">Our Story</Link>
            </div>
            <div className="hero-stats">
              <div className="stat-item"><strong>10k+</strong> <span>Happy Customers</span></div>
              <div className="stat-divider"></div>
              <div className="stat-item"><strong>500+</strong> <span>Premium Brands</span></div>
            </div>
          </div>
          <div className="hero-image">
            <div className="hero-image-inner">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 400" className="hero-svg">
                <defs>
                  <linearGradient id="heroGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="var(--primary)" stopOpacity="0.9" />
                    <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0.9" />
                  </linearGradient>
                  <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
                    <feGaussianBlur stdDeviation="15" result="blur" />
                    <feComposite in="SourceGraphic" in2="blur" operator="over" />
                  </filter>
                </defs>
                <circle cx="200" cy="200" r="160" fill="url(#heroGrad)" filter="url(#glow)"/>
                <path d="M120 260 L200 140 L280 260 Z" fill="#ffffff" opacity="0.9" />
                <circle cx="200" cy="120" r="25" fill="#ffffff" opacity="0.9" />
                <rect x="140" y="270" width="120" height="20" rx="10" fill="#ffffff" opacity="0.7"/>
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="categories-section">
        <div className="section-header center">
          <h2>Shop by Category</h2>
          <p>Find exactly what you're looking for</p>
        </div>
        <div className="categories-grid">
          {categories.map((cat, index) => (
            <Link to="/products" className="category-card" key={index}>
              <div className="category-icon">{cat.icon}</div>
              <h3>{cat.name}</h3>
            </Link>
          ))}
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

      {/* Testimonials Section */}
      <section className="testimonials-section">
        <div className="section-header center">
          <h2>What Our Customers Say</h2>
          <p>Don't just take our word for it</p>
        </div>
        <div className="testimonials-grid">
          {testimonials.map((test, index) => (
            <div className="testimonial-card" key={index}>
              <div className="stars">
                {Array.from({length: 5}).map((_, i) => (
                  <span key={i} className={i < test.rating ? "star filled" : "star"}>★</span>
                ))}
              </div>
              <p className="testimonial-text">"{test.text}"</p>
              <div className="testimonial-author">
                <div className="author-avatar">{test.name.charAt(0)}</div>
                <div className="author-info">
                  <h4>{test.name}</h4>
                  <span>{test.role}</span>
                </div>
              </div>
            </div>
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
