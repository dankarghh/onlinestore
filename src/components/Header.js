import React, { useContext } from "react";
import { Link } from "react-router-dom";
import CartContext from "../CartContext";

function Header() {
  const { toggleCart, cartTotalItems, cartItems } = useContext(CartContext);

  return (
    <div className="header">
      <div className="header__container">
        <div className="header__links">
          <Link className="header__link" to="/">
            OnlineStore
          </Link>
          <Link className="header__link" to="/shop">
            Shop
          </Link>
        </div>
        <div className="header__cart" onClick={toggleCart}>
          <span class="material-symbols-outlined">shopping_cart</span>
          <p>({cartTotalItems(cartItems)}) Cart</p>
        </div>
      </div>
    </div>
  );
}

export default Header;
