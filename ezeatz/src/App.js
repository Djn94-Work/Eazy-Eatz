import React from "react";
import "./App.css";
import Header from "./header/Header";
import google from "google-maps-react";

const test = require("dotenv").config().parsed;
const axios = require("axios");

service = new google.maps.places.PlacesService(map);
service.nearbySearch(request, callback);

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { address: "" };
  }
  handleSubmit = (key, address) => {
    console.log(test);
    this.setState({ address: address });
    if (key === "Enter") {
    }
    console.log(this.results);
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
