import React from "react";
import "./App.css";
import Header from "./header/Header";
import FilterPannel from "./mainpage/FilterPannel/FilterPannel";
import CardContainer from "./mainpage/Cards/CardContainer";

const axios = require("axios");

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { address: "", radius: 0, restaurants: {}, filter: "" };
  }

  handleSlide = rad => {
    this.setState({ radius: rad });
  };

  handleFilter = filter => {
    this.setState({ filter: filter });
    console.log(this.state.filter);
  };

  handleSubmit = (key, address) => {
    this.setState({ address: address });
    if (key === "Enter") {
      axios
        .get("http://localhost:8080/search", {
          params: {
            address: address,
            filter: this.state.filter,
            radius: this.state.radius
          }
        })
        .then(results => {
          this.setState({ restaurants: results.data });
          console.log(results.data);
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
        <FilterPannel
          handleSlide={this.handleSlide}
          handleFilter={this.handleFilter}
        />
        <CardContainer RestaurantDetails={this.state.restaurants} />
      </div>
    );
  }
}

export default App;
