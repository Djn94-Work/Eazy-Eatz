import React from "react";
import "./ShoppingCart.css";
function ShoppingCart(props) {
  return (
    <div className="shoppingDiv">
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
  );
}

export default ShoppingCart;

// for (card in this.props.cart) {
//   cart.push(
//     <div
//       onClick={() => {
//         this.props.onClick(card);
//       }}
//     >
//       {this.props.cart[card]}
//     </div>
//   );
// }
// return cart;
// };
