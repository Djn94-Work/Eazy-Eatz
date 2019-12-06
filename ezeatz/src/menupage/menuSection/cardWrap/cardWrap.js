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

  componentWillMount() {
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
    const cards = [];
    for (const card in menuData.data) {
      cards.push(
        <MenuCard onClick={() => console.log("onclick works")}></MenuCard>
      );
    }
    return cards;
  };

  render() {
    return <div className="shortCard">{this.cardBuilder()}</div>;
  }
}

export default CardWrap;
