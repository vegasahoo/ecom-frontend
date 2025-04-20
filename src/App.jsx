import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import RegisterUser from "./pages/RegisterUser";
import LoginUser from "./pages/LoginUser";
import ProductDetail from "./pages/ProductDetail";
import Layout from "./component/Layout";
import Cart from "./pages/Cart";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Wrap all routes under Layout */}
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} /> {/* Home route */}
          <Route path="/login" element={<LoginUser />} /> {/* Login route */}
          <Route path="/register" element={<RegisterUser />} />{" "}
          <Route path="/products/:productName" element={<ProductDetail />}/>{" "}
          <Route path="/cart" element={<Cart />}/>{" "}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
