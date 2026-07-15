import React from "react";
import { Link } from "react-router";

function Card({ product, onDelete }) {
  return (
    <div className="product-card">
      <Link to={`/product/${product.id}`} className="image-wrapper">
        <img src={product.thumbnail} alt={product.title} />
      </Link>

      <div className="card-content">
        <h3>{product.title}</h3>
        <p className="desc">{product.description}</p>
        <p className="price">${product.price}</p>
        <button className="del-btn" onClick={() => onDelete(product.id)}>
          Delete
        </button>
      </div>
    </div>
  );
}

export default Card;
