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
        {inWishlist ? '❤️' : '🤍'}
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
