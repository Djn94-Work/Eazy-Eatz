import React from "react";
import "./ShoppingCart.css";
function ShoppingCart(props) {
  return (
    <div className="shoppingDiv">
      <div className="cartDiv">
        {props.cart.map((card, index) => (
          <div
            onClick={() => {
              props.onClick(index);
            }}
          >
            {card}
          </div>
        ))}
      </div>
      <div className="price">Price:{props.price}$</div>
    </div>
  );
}

export default ShoppingCart;
