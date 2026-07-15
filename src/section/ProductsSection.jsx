import React, { useState, useEffect } from "react";
import "../styles/ProductsSection.css";

function ProductsSection() {
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetch("https://dummyjson.com/products", {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => setProducts(data.products));
  }, []);

  const filtered = products.filter((p) =>
    p.title.toLowerCase().includes(searchTerm.toLowerCase()),
  );
  function handleDelete(id) {
    setProducts(products.filter((p) => p.id !== id));
  }

  return (
    <section className="products-section">
      <div className="search-box">
        <input
          type="text"
          placeholder="Search products..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button onClick={() => setSearchTerm("")}>Clear</button>
      </div>

      <div className="products-grid">
        {filtered.map((p) => (
          <div className="product-card" key={p.id}>
            <img src={p.thumbnail} alt={p.title} />
            <h3>{p.title}</h3>
            <p className="desc">{p.description}</p>
            <p className="price">${p.price}</p>
            <button className="del-btn" onClick={() => handleDelete(p.id)}>
              Delete
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ProductsSection;
