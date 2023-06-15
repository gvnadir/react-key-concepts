import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainNavigation from "./components/MainNavigation";
import Home from "./routes/Home";
import ProductsList from "./routes/ProductsList";
import Product from "./routes/Product";

function App() {
  return (
    <BrowserRouter>
      <MainNavigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<ProductsList />} />
        <Route path="/products/:id" element={<Product />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
