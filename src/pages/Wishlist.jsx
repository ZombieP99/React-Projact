import React, { useContext } from 'react';
import { Link } from 'react-router';
import { WishlistContext } from '../context/WishlistContext';
import { CartContext } from '../context/CartContext';
import '../styles/Wishlist.css';

function Wishlist() {
  const { wishlistItems, toggleWishlist } = useContext(WishlistContext);
  const { addToCart } = useContext(CartContext);

  if (wishlistItems.length === 0) {
    return (
      <div className="wishlist-empty">
        <div className="heart-icon-large">
          <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>
        </div>
        <h2>Your Wishlist is Empty</h2>
        <p>Save items you love here and buy them later.</p>
        <Link to="/products" className="cta-button">Browse Products</Link>
      </div>
    );
  }

  return (
    <div className="wishlist-container">
      <h1>My Wishlist</h1>
      <div className="wishlist-grid">
        {wishlistItems.map((item) => (
          <div className="wishlist-card" key={item.id}>
            <button 
              className="remove-wishlist-btn" 
              onClick={() => toggleWishlist(item)}
              title="Remove from wishlist"
            >
              &times;
            </button>
            <Link to={`/product/${item.id}`} className="wishlist-img-wrapper">
              <img src={item.thumbnail} alt={item.title} />
            </Link>
            <div className="wishlist-info">
              <h3>{item.title}</h3>
              <p className="price">${item.price.toFixed(2)}</p>
              <button 
                className="add-to-cart-btn small" 
                onClick={() => addToCart(item)}
              >
                Move to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Wishlist;
