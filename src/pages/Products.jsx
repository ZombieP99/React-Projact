import React, { useState, useEffect } from "react";
import FullProject from "../components/FullProject";

function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/products", {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => setProducts(data.products));
  }, []);

  return <FullProject initialProducts={products} />;
}

export default Products;
