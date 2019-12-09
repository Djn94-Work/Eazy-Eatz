import React from "react";
import "./ShoppingCart.css";
function ShoppingCart(props) {
  return <div className="shoppingDiv">{props.cart}</div>;
}

export default ShoppingCart;
