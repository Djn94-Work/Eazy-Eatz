import React from "react";
import "./App.css";
import Header from "./header/Header";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { address: "" };
  }

  handleSubmit = () => {
    //this function will initiate a search(prob should rename)
    window.alert("Wowee this is the adrress: " + this.state.address);
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
