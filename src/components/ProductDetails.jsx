import React, { useState, useEffect, useContext } from "react";
import { useParams, useNavigate } from "react-router";
import { CartContext } from "../context/CartContext";
import "../styles/ProductDetails.css";

function ProductDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const { addToCart } = useContext(CartContext);

  useEffect(() => {
    fetch(`https://dummyjson.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setProduct(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Failed to fetch product details:", err);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return (
      <div className="product-details-container loading">
        <div className="spinner"></div>
        <h2>Loading Product...</h2>
      </div>
    );
  }

  if (!product || product.message) {
    return (
      <div className="product-details-container error">
        <h2>Product not found</h2>
        <button className="back-btn" onClick={() => navigate("/products")}>
          Go Back
        </button>
      </div>
    );
  }

  return (
    <div className="product-details-container">
      <button className="back-btn" onClick={() => navigate("/products")}>
        &larr; Back to Products
      </button>

      <div className="details-card">
        <div className="details-images">
          <img
            src={product.thumbnail}
            alt={product.title}
            className="main-image"
          />
          {product.images && product.images.length > 1 && (
            <div className="thumbnail-gallery">
              {product.images.map((img, idx) => (
                <img key={idx} src={img} alt={`Thumbnail ${idx}`} />
              ))}
            </div>
          )}
        </div>

        <div className="details-info">
          <span className="brand-badge">
            {product.brand || product.category}
          </span>
          <h1>{product.title}</h1>
          <div className="rating">⭐ {product.rating} / 5</div>
          <p className="description">{product.description}</p>
          <div className="price-tag">${product.price.toFixed(2)}</div>

          <div className="extra-info">
            <p>
              <strong>Stock:</strong> {product.stock} units available
            </p>
            <p>
              <strong>SKU:</strong> {product.sku}
            </p>
            <p>
              <strong>Weight:</strong> {product.weight}g
            </p>
          </div>

          <button className="add-to-cart-btn" onClick={() => addToCart(product)}>
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
