import React, { useContext } from "react";
import { Link } from "react-router-dom";
import CartContext from "../CartContext";

function Cart() {
  const {
    cartItems,
    decreaseCartQty,
    increaseCartQty,
    removeFromCart,
    cartTotal,
    clearCart,
    toggleCart,
  } = useContext(CartContext);

  const cartContents = cartItems?.map(item => {
    return (
      <div>
        <div className="cart__content-body">
          <div className="cart__content-name">
            {item.name}

            <span
              onClick={event => removeFromCart(event, item.id)}
              className="material-symbols-outlined icon"
            >
              close
            </span>
          </div>

          <div className="">${item.price.toFixed(2)} </div>
          <div className="cart__content-colour">{item.color}</div>
          <div>
            <div className="cart__content-details">
              <div className="cart__content-details-qty">
                QTY:
                <span
                  onClick={event => decreaseCartQty(event, item.id)}
                  className="material-symbols-outlined icon"
                >
                  remove
                </span>
                {item.qty}
                <span
                  className="material-symbols-outlined icon"
                  onClick={event => increaseCartQty(event, item.id)}
                >
                  add
                </span>
              </div>
              <div className="cart__content-total-price">
                ${item.price * item.qty.toFixed(2)}.00
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  });

  return (
    <div className="cart closed">
      <div className="cart__container">
        {cartItems.length > 0 ? (
          <div onClick={clearCart} className="cart__clear-cart">
            CLEAR CART{" "}
            <span className="material-symbols-outlined icon">close</span>
          </div>
        ) : (
          <p>Cart is Empty</p>
        )}
        {cartContents}
        <div className="cart__total">
          Total: $ {cartTotal(cartItems)}.00 (including GST)
        </div>
        <Link to="/checkout">
          <button className="btn btn--checkout" onClick={toggleCart}>
            CHECKOUT NOW
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Cart;
