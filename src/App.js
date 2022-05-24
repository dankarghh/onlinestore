import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Shop from "./components/Shop";
import Home from "./components/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CartContext, { CartProvider } from "./CartContext";
import Checkout from "./components/Checkout";
import Cart from "./components/Cart";
import { useContext } from "react";

function App() {
  function handleCloseCart() {
    const shopCover = document.querySelector(".shop__cover");
    const shoppingCart = document.querySelector(".cart");
    shopCover.classList.add("hidden");
    shoppingCart.classList.add("closed");
  }
  return (
    <div className="App">
      <CartProvider>
        <BrowserRouter>
          <Header />
          <div className="shop__cover hidden" onClick={handleCloseCart}></div>
          <div className="main">
            <Cart />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/shop" element={<Shop />} />
              <Route
                path="/checkout"
                element={<Checkout />}
                handleCloseCart={handleCloseCart}
              />
            </Routes>
          </div>
          <Footer />
        </BrowserRouter>
      </CartProvider>
    </div>
  );
}

export default App;
