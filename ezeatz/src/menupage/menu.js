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
      subCatArray: []
    };
  }

  componentDidMount() {
    this.props.menuDidMount();
  }

  handleButton = subCat => {
    this.setState({ subCat });
  };

  addToCart = newItem => {
    const tempCart = [...this.state.cart];
    tempCart.push(<div onClick={this.removeFromCart}>{newItem}</div>);
    this.setState({ cart: tempCart });
  };

  removeFromCart = index => {
    const tempCart = [...this.state.cart];
    tempCart.splice(index, 1);
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
              onClick={this.addToCart}
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
export default MenuPage;
