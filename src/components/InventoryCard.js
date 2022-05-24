import { useContext } from "react";
import CartContext from "../CartContext";

export default function InventoryCard(props) {
  const { addItemToCart } = useContext(CartContext);

  return (
    <div className="shop__inventory-card">
      <img
        alt="thumbnail"
        className="shop__inventory-card-img"
        src={props.img}
      ></img>

      <div className="shop__inventory-card-details">
        <h4 className="shop__inventory-card-heading">
          {props.name} - {props.color}
        </h4>
        <p>${props.price.toFixed(2)}</p>
        <button
          className="btn"
          onClick={event => addItemToCart(event, props.id)}
        >
          ADD TO CART
        </button>
      </div>
    </div>
  );
}
