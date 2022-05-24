import React from "react";
import CartContext from "../CartContext";
import { useContext } from "react";

function Checkout(props) {
  const {
    cartItems,
    decreaseCartQty,
    increaseCartQty,
    removeFromCart,
    cartTotal,
    clearCart,
  } = useContext(CartContext);

  const checkoutCartContents = cartItems?.map(item => {
    return (
      <div className="checkout__card">
        <img className="checkout__thumbnail" src={item.img}></img>
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
    <div className="checkout">
      {props.handleCloseCart}
      <h1 className="checkout__heading">Checkout</h1>
      {!checkoutCartContents && <p>Oh no!</p>}

      {checkoutCartContents}
      <div className="cart__total">
        Total: $ {cartTotal(cartItems)}.00 (including GST)
      </div>
      <button className="btn btn--payment">PROCEED TO PAYMENT</button>
    </div>
  );
}

export default Checkout;
