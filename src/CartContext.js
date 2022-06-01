import { createContext, useState } from "react";
import inventory from "./data/inventory";

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);

  function addItemToCart(event, id) {
    const selectedItem = inventory.find(item => item.id === id);
    const alreadyInCart = cartItems.filter(item => item.id === selectedItem.id);

    if (cartItems.length === 0) {
      selectedItem.qty = 1;
      setCartItems([selectedItem]);
    } else if (alreadyInCart.length === 1) {
      const updatedCartItems = cartItems.map(item => {
        if (item.id === selectedItem.id) {
          item.qty = item.qty + 1;
          return item;
        } else {
          return item;
        }
      });
      setCartItems(updatedCartItems);
    } else {
      selectedItem.qty = 1;
      setCartItems([...cartItems, selectedItem]);
    }
    console.log(cartItems);
  }

  function increaseCartQty(event, id) {
    const selectedItem = cartItems.find(item => item.id === id);
    const updatedCart = cartItems.map(item => {
      if (item.id === selectedItem.id) {
        item.qty = item.qty + 1;
        return item;
      } else {
        return item;
      }
    });
    setCartItems(updatedCart);
  }

  function decreaseCartQty(event, id) {
    const selectedItem = cartItems.find(item => item.id === id);
    const updatedCart = cartItems.map(item => {
      if (item.id === selectedItem.id) {
        item.qty = item.qty > 1 ? (item.qty = item.qty - 1) : (item.qty = 1);
        return item;
      } else {
        return item;
      }
    });
    setCartItems(updatedCart);
  }

  function removeFromCart(event, id) {
    const selectedItem = cartItems.find(item => item.id === id);
    const newCartItems = cartItems.filter(item => item.id !== selectedItem.id);
    setCartItems(newCartItems);
  }
  function cartTotal(cartItems) {
    let total = 0;
    for (let i = 0; i < cartItems.length; i++) {
      total += cartItems[i].qty * cartItems[i].price;
    }
    return total;
  }

  function cartTotalItems(cartItems) {
    let total = 0;
    for (let i = 0; i < cartItems.length; i++) {
      total += cartItems[i].qty;
    }
    return total;
  }

  function toggleCart() {
    const shoppingCart = document.querySelector(".cart");
    const shopCover = document.querySelector(".shop__cover");

    if (shoppingCart.classList.contains("closed")) {
      shoppingCart.classList.remove("closed");
      shopCover.classList.remove("hidden");
    } else {
      shoppingCart.classList.add("closed");
      shopCover.classList.add("hidden");
    }
  }

  function clearCart() {
    setCartItems([]);
  }

  return (
    <CartContext.Provider
      value={{
        addItemToCart,
        cartItems,
        toggleCart,
        removeFromCart,
        decreaseCartQty,
        increaseCartQty,
        cartTotal,
        cartTotalItems,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export default CartContext;
