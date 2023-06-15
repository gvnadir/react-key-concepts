import { BrowserRouter, Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";
import Root from "./routes/Root";
import Home from "./routes/Home";

const ProductsList = lazy(() => import("./routes/ProductsList"));
const Product = lazy(() => import("./routes/Product"));
const NotFound = lazy(() => import("./routes/NotFound"));

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<p>Loading...</p>}>
        <Routes>
          <Route path="/" element={<Root />}>
            <Route element={<Home />} index />
            <Route path="/products" element={<ProductsList />} />
            <Route path="/products/:id" element={<Product />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
