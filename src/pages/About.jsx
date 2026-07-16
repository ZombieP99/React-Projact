import React from 'react';
import '../styles/About.css';

function About() {
  const stats = [
    { label: "Happy Customers", value: "10k+" },
    { label: "Products Sold", value: "50k+" },
    { label: "Global Brands", value: "100+" },
    { label: "Years of Experience", value: "5+" }
  ];

  const team = [
    { name: "Alex Johnson", role: "Founder & CEO", image: "https://i.pravatar.cc/150?img=11" },
    { name: "Samantha Lee", role: "Head of Design", image: "https://i.pravatar.cc/150?img=5" },
    { name: "David Kim", role: "Lead Developer", image: "https://i.pravatar.cc/150?img=12" }
  ];

  return (
    <div className="about-page">
      {/* Hero Section */}
      <section className="about-hero">
        <div className="about-hero-content">
          <h1>Building the Future of <span className="highlight">E-Commerce</span></h1>
          <p>We are a passionate team dedicated to delivering the best shopping experience globally. Quality, trust, and innovation are at the core of everything we do.</p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section">
        <div className="stats-grid">
          {stats.map((stat, index) => (
            <div className="stat-card" key={index}>
              <h3>{stat.value}</h3>
              <p>{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="mission-section">
        <div className="mission-content">
          <div className="mission-text">
            <h2>Our Mission & Vision</h2>
            <p>At MyStore, our mission is to bring joy to our customers through an exceptional variety of products and top-notch customer service. We believe that shopping should be easy, accessible, and enjoyable for everyone.</p>
            <p>Our vision is to become the world's most customer-centric company, where people can find and discover anything they might want to buy online at the best possible prices.</p>
            <ul className="mission-list">
              <li>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                Premium Quality Guaranteed
              </li>
              <li>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                24/7 Customer Support
              </li>
              <li>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                Fast & Secure Shipping
              </li>
            </ul>
          </div>
          <div className="mission-image">
            <div className="image-placeholder">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" strokeWidth="0.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>
            </div>
          </div>
        </div>
      </section>

      {/* Meet the Team Section */}
      <section className="team-section">
        <div className="section-header center">
          <h2>Meet Our Team</h2>
          <p>The brilliant minds behind MyStore</p>
        </div>
        <div className="team-grid">
          {team.map((member, index) => (
            <div className="team-card" key={index}>
              <div className="team-avatar">
                <img src={member.image} alt={member.name} />
              </div>
              <h4>{member.name}</h4>
              <p>{member.role}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default About;
