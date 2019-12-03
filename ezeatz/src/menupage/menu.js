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
      cart: []
    };
  }

  render() {
    return (
      <div className="gridDiv">
        <div>
          <SubCat></SubCat>
          <CardWrap>
            <MenuCards></MenuCards>
          </CardWrap>
        </div>
        <ShoppingCart></ShoppingCart>
      </div>
    );
  }
}
export default Menu;
