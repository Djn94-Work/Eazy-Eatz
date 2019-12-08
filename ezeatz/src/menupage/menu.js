import React from "react";
import ShoppingCart from "./ShoppingCart/shoppingCart";
import SubCat from "./menuSection/subCat/subCat";
import CardWrap from "./menuSection/cardWrap/cardWrap";
import "./menu.css";
class Menu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cart: [],
      subCat: "",
      subCatArray: []
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

  setSubCatArray = subCatArray => {
    this.setState({ subCatArray: subCatArray });
  };

  render() {
    return (
      <div className="menu">
        <SubCat
          subCatArray={this.state.subCatArray}
          handleButton={this.handleButton}
        ></SubCat>
        <div className="gridDiv">
          <div>
            <CardWrap
              setSubCatArray={this.setSubCatArray}
              subCat={this.state.subCat || this.state.subCatArray[0]}
              cuisine={this.props.cuisine}
              restaurantName={this.props.restaurantName}
              addToCart={this.addToCart}
            ></CardWrap>
          </div>
          <div>
            <ShoppingCart cart={this.state.cart}></ShoppingCart>
          </div>
        </div>
      </div>
    );
  }
}
export default Menu;
