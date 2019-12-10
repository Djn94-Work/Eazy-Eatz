import React from "react";
import MenuCard from "./menuCards/menuCards";
import "./cardWrap.css";
import Axios from "axios";
class CardWrap extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      menuData: {}
    };
  }

  componentDidMount() {
    Axios.get("http://localhost:8080/menu", {
      params: { cuisine: this.props.cuisine }
    }).then(menuData => {
      const subCats = [];
      for (const item in menuData.data) {
        if (!subCats.includes(menuData.data[item].subCat)) {
          subCats.push(menuData.data[item].subCat);
        }
      }
      this.props.setSubCatArray(subCats);
      this.setState({ menuData: menuData.data });
    });
  }

  cardBuilder = () => {
    const cardArray = [];
    console.log(this.state.menuData);
    let key = 0;
    for (const item in this.state.menuData) {
      if (this.props.subCat === this.state.menuData[item].subCat) {
        cardArray.push(
          <MenuCard
            onClick={this.props.onClick}
            key={key}
            menuItem={this.state.menuData[item].menuItem}
            price={this.state.menuData[item].price}
            description={this.state.menuData[item].description}
          ></MenuCard>
        );
        key++;
      }
    }
    return cardArray;
  };
  render() {
    return <div className="shortCard">{this.cardBuilder()}</div>;
  }
}

export default CardWrap;
