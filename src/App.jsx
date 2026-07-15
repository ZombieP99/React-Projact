import { Routes, Route } from "react-router";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Products from "./pages/Products";
import About from "./pages/About";
import ProductDetails from "./components/ProductDetails";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="products" element={<Products />} />
        <Route path="product/:id" element={<ProductDetails />} />
        <Route path="about" element={<About />} />
      </Route>
    </Routes>
  );
}

export default App;
