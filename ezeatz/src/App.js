import React from "react";
import "./App.css";
import Header from "./header/Header";

const axios = require("axios");

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { address: "" };
  }
  handleSubmit = (key, address) => {
    this.setState({ address: address });
    if (key === "Enter") {
      axios
        .get("http://localhost:8080/search", { params: { address: address } })
        .then(results => {
          console.log("here");
          console.log(results.data);
        });
    }
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
