import React from 'react';
import { Outlet, Link } from 'react-router';
import '../styles/Layout.css';

function Layout() {
  return (
    <div className="layout">
      <header className="navbar">
        <div className="nav-container">
          <Link to="/" className="brand">MyStore</Link>
          <nav className="nav-links">
            <Link to="/">Home</Link>
            <Link to="/products">Products</Link>
            <Link to="/about">About</Link>
          </nav>
        </div>
      </header>
      <main className="main-content">
        <Outlet />
      </main>
      <footer className="footer">
        <p>&copy; 2026 MyStore. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default Layout;
