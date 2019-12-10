import React from "react";
import "./ShoppingCart.css";
function ShoppingCart(props) {
  let price = 0;
  if (props.prices.length !== 0) {
    price = props.prices.reduce(
      (accumulator, currentValue) => accumulator + currentValue
    );
  }
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
      <div className="price">Price:{price}$</div>
    </div>
  );
}

export default ShoppingCart;
