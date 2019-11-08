import React from "react";
import "./App.css";
import Header from "./header/Header";
import google from 'google-maps-react'
const test = require("dotenv").config().parsed;

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
      const restaurantVars = {
        location: "29.5723528,-95.4109034",
        radius: 4444, //pass an int
        type: "restaurant",
        keyword: "burger",
        key: key,
        mode: "no-cors"
      };
      fetch(
        "http://maps.googleapis.com/maps/api/place/nearbysearch/json?location=29.5723528,%20-95.4109034&radius=4444&type=restaurant&keyword=burger&key=AIzaSyCB_pxu8oBdjMN9fP_KgnPaMqTwYw0qPFs",
        { mode: "cors" }
      )
        .then(resp => resp.json)
        .then(final => console.log(final));
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
