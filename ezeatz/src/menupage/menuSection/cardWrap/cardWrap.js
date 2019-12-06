import React from "react";
import MenuCard from "./menuCards/menuCards";
import "./cardWrap.css";
import Axios from "axios";
class CardWrap extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      menuData: {},
      subCats: []
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
        console.log(menuData.data[item].subCat);
      }
      this.setState({ menuData: menuData.data, subCats: subCats });
      console.log(this.state.subCats);
    });
  }

  cardBuilder = () => {};

  render() {
    return (
      <div className="shortCard">
        <MenuCard onClick={() => console.log("onclick works")}></MenuCard>
        <MenuCard onClick={() => console.log("onclick works")}></MenuCard>
        <MenuCard onClick={() => console.log("onclick works")}></MenuCard>
      </div>
    );
  }
}

export default CardWrap;
