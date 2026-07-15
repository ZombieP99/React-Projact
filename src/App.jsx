import { Routes, Route } from "react-router";
import FetchApi from "./components/FetchApi";
import ProductDetails from "./components/ProductDetails";

function App() {
  return (
    <Routes>
      <Route path="/" element={<FetchApi />} />
      <Route path="/product/:id" element={<ProductDetails />} />
    </Routes>
  );
}

export default App;
