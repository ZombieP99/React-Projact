import React, { useState, useEffect, useMemo } from "react";
import Card from "./Card";
import "../styles/ProductsSection.css";

function FullProject({ initialProducts }) {
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    setProducts(initialProducts || []);
  }, [initialProducts]);

  const categories = useMemo(() => {
    if (!initialProducts) return ["All"];
    const uniqueCategories = new Set(initialProducts.map((p) => p.category));
    return ["All", ...Array.from(uniqueCategories)];
  }, [initialProducts]);

  const filtered = products.filter((p) => {
    const matchesSearch = p.title
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const matchesCategory =
      selectedCategory === "All" || p.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  function handleDelete(id) {
    setProducts(products.filter((p) => p.id !== id));
  }

  const toggleDarkMode = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  return (
    <section
      className={`products-section ${isDarkMode ? "section-dark" : "section-light"}`}
    >
      <div className="header-controls">
        <div className="search-wrapper">
          <input
            type="text"
            className="search-input"
            placeholder="Search products..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          {searchTerm && (
            <button className="clear-btn" onClick={() => setSearchTerm("")}>
              Clear
            </button>
          )}
        </div>
        <button
          className={`theme-toggle ${isDarkMode ? "dark" : "light"}`}
          onClick={toggleDarkMode}
        >
          {isDarkMode ? "☀️ Light Mode" : "🌙 Dark Mode"}
        </button>
      </div>

      {}
      <div className="filters-container">
        {categories.map((category) => (
          <button
            key={category}
            className={`filter-chip ${selectedCategory === category ? "active" : ""} ${isDarkMode ? "dark" : "light"}`}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="products-grid">
        {filtered.length > 0 ? (
          filtered.map((p) => (
            <Card
              key={p.id}
              product={p}
              onDelete={handleDelete}
              isDarkMode={isDarkMode}
            />
          ))
        ) : (
          <div className="no-results">
            <h2>No products found</h2>
            <p>Try adjusting your search or filters.</p>
          </div>
        )}
      </div>
    </section>
  );
}

export default FullProject;
