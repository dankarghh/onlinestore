import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Shop from "./components/Shop";
import Home from "./components/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { CartProvider } from "./CartContext";
import Checkout from "./components/Checkout";

function App() {
  return (
    <div className="App">
      <CartProvider>
        <BrowserRouter>
          <Header />
          <div className="main">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/shop" element={<Shop />} />
              <Route path="/checkout" element={<Checkout />} />
            </Routes>
          </div>
          <Footer />
        </BrowserRouter>
      </CartProvider>
    </div>
  );
}

export default App;
