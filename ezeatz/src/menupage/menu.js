import React from "react";
import ShoppingCart from "./ShoppingCart/shoppingCart";
import SubCat from "./menuSection/subCat/subCat";
import CardWrap from "./menuSection/cardWrap/cardWrap";
import "./menu.css";
class MenuPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cart: [],
      subCat: "",
      subCatArray: [],
      prices: []
    };
  }

  componentDidMount() {
    this.props.menuDidMount();
  }

  handleButton = subCat => {
    this.setState({ subCat });
  };

  addToCart = (newItem, price) => {
    const tempCart = [...this.state.cart];
    const tempPrices = [...this.state.prices];
    tempPrices.push(price);
    tempCart.push(newItem);
    this.setState({ cart: tempCart, prices: tempPrices });
  };

  removeFromCart = index => {
    const tempCart = [...this.state.cart];
    const tempPrices = [...this.state.prices];
    tempCart.splice(index, 1);
    tempPrices.splice(index, 1);
    this.setState({ cart: tempCart, prices: tempPrices });
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
              onClick={this.addToCart}
            ></CardWrap>
          </div>
          <div>
            <ShoppingCart
              cart={this.state.cart}
              onClick={this.removeFromCart}
              prices={this.state.prices}
            ></ShoppingCart>
          </div>
        </div>
      </div>
    );
  }
}
export default MenuPage;
