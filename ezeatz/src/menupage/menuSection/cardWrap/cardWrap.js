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
    window.alert(this.props.cuisine + " " + this.props.restaurantName);
    Axios.get("http://localhost:8080/menu", {
      params: { cuisine: this.props.cuisine }
    }).then(menuData => {
      this.setState({ menuData: menuData.data });
    });
  }

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
