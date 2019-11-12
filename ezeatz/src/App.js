import React from "react";
import "./App.css";
import Header from "./header/Header";
import FilterPannel from "./mainpage/FilterPannel/FilterPannel";
import CardContainer from "./mainpage/Cards/CardContainer";

const axios = require("axios");

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { address: "", radius: 0, restaurants: {} };
  }

  handleSlide = rad => {
    this.setState({ radius: rad });
  };

  handleSubmit = (key, address) => {
    this.setState({ address: address });
    if (key === "Enter") {
      axios
        .get("http://localhost:8080/search", {
          params: { address: address, radius: this.state.radius }
        })
        .then(results => {
          this.setState({ restaurants: results.data });
          console.log(this.state.restaurants);
        });
    }
  };

  render() {
    return (
      <div>
        <Header
          handleSubmit={this.handleSubmit}
          handleOnChange={this.handleOnChange}
        ></Header>
        <FilterPannel handleSlide={this.handleSlide} />
        <CardContainer RestaurantDetails={this.state.restaurants} />
      </div>
    );
  }
}

export default App;
