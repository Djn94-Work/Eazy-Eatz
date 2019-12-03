import React from "react";
import MenuCards from "./menuSection/cardWrap/menuCards/menuCards";
import ShoppingCart from "./ShoppingCart/shoppingCart";
import SubCat from "./menuSection/subCat/subCat";
import CardWrap from "./menuSection/cardWrap/cardWrap";
import "./menu.css";
class Menu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cart: [],
      subCat: ""
    };
  }

  handleButton = subCat => {
    this.setState({ subCat });
  };

  addToCart = newItem => {
    const tempCart = [...this.state.cart];
    tempCart.push(newItem);
    this.setState({ cart: tempCart });
  };

  render() {
    return (
      <div className="menu">
        <SubCat handleButton={this.handleButton}></SubCat>
        <div className="gridDiv">
          <div>
            <CardWrap cuisine="MyNameJef"></CardWrap>
          </div>
          <div>
            <ShoppingCart></ShoppingCart>
          </div>
        </div>
      </div>
    );
  }
}
export default Menu;
