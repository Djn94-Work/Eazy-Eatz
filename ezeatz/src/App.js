import React from "react";
import "./App.css";
import Header from "./header/Header";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { address: "" };
  }

  handleSubmit = key => {
    if (key === "Enter") {
      const key = "";
      /*const locationVars = { address: "", key: "" };
      let googleLocation = fetch(
        "https://maps.googleapis.com/maps/api/geocode/",
        locationVars
      );*/
      const restaurantVars = {
        location: "29.5723528,-95.4109034",
        radius: 4444, //pass an int
        type: "restaurant",
        keyword: "burger",
        key: key
      };
      fetch(
        "https://maps.googleapis.com/maps/api/place/nearbysearch/",
        restaurantVars
      )
        .then(resp => resp.json())
        .then(final => console.log(final));
    }
  };

  handleOnChange = address => {
    this.setState({ address: address });
    console.log(this.state.address);
  };

  render() {
    return (
      <Header
        handleSubmit={this.handleSubmit}
        handleOnChange={this.handleOnChange}
      ></Header>
    );
  }
}

export default App;
