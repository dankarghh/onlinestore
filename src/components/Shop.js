import React from "react";
import inventory from "../data/inventory";
import InventoryCard from "./InventoryCard";
import Cart from "./Cart";

function Shop() {
  const inventoryItems = inventory.map(item => {
    return (
      <InventoryCard
        name={item.name}
        img={item.img}
        price={item.price}
        color={item.color}
        sizes={item.sizes}
        id={item.id}
        key={item.id}
      />
    );
  });

  return (
    <div className="shop">
      {/* <div className="shop__cover hidden"></div> */}

      <div className="shop__container">
        {inventoryItems}
        {/* <Cart /> */}
      </div>
    </div>
  );
}

export default Shop;
