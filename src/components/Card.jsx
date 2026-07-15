import React, { useContext } from "react";
import { Link } from "react-router";
import { CartContext } from "../context/CartContext";
import { WishlistContext } from "../context/WishlistContext";

function Card({ product, onDelete }) {
  const { addToCart } = useContext(CartContext);
  const { toggleWishlist, isInWishlist } = useContext(WishlistContext);

  const inWishlist = isInWishlist(product.id);

  return (
    <div className="product-card">
      <button 
        className={`wishlist-heart-btn ${inWishlist ? 'active' : ''}`}
        onClick={() => toggleWishlist(product)}
        title="Toggle Wishlist"
      >
        {inWishlist ? (
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="#ef4444" stroke="#ef4444" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>
        ) : (
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>
        )}
      </button>

      <Link to={`/product/${product.id}`} className="image-wrapper">
        <img src={product.thumbnail} alt={product.title} />
      </Link>

      <div className="card-content">
        <h3>{product.title}</h3>
        <p className="desc">{product.description}</p>
        <p className="price">${product.price}</p>
        <div className="card-actions">
          <button className="add-cart-btn" onClick={() => addToCart(product)}>
            Add to Cart
          </button>
          <button className="del-btn" onClick={() => onDelete(product.id)}>
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default Card;
