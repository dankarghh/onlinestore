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
      <h1 className="shop__heading">
        Mens Medium Tees and Jackets. Nothing Else.
      </h1>
      <div className="shop__container">{inventoryItems}</div>
    </div>
  );
}

export default Shop;
