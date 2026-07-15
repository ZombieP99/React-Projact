import React, { useContext } from 'react';
import { Outlet, Link } from 'react-router';
import { ThemeContext } from '../context/ThemeContext';
import { CartContext } from '../context/CartContext';
import '../styles/Layout.css';

function Layout() {
  const { isDarkMode, toggleTheme } = useContext(ThemeContext);
  const { cartCount } = useContext(CartContext);

  return (
    <div className="layout">
      <header className="navbar">
        <div className="nav-container">
          <Link to="/" className="brand">MyStore</Link>
          <nav className="nav-links">
            <Link to="/">Home</Link>
            <Link to="/products">Products</Link>
            <Link to="/about">About</Link>
            <Link to="/cart" className="cart-link">
              🛒 Cart
              {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
            </Link>
            <button className="theme-toggle" onClick={toggleTheme} aria-label="Toggle Theme">
              {isDarkMode ? (
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon-sun">
                  <circle cx="12" cy="12" r="4"></circle>
                  <path d="M12 2v2"></path>
                  <path d="M12 20v2"></path>
                  <path d="m4.93 4.93 1.41 1.41"></path>
                  <path d="m17.66 17.66 1.41 1.41"></path>
                  <path d="M2 12h2"></path>
                  <path d="M20 12h2"></path>
                  <path d="m6.34 17.66-1.41 1.41"></path>
                  <path d="m19.07 4.93-1.41 1.41"></path>
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon-moon">
                  <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path>
                </svg>
              )}
            </button>
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
