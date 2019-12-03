import React from "react";
import "./App.css";
import Header from "./header/Header";
import CardContainer from "./mainpage/Cards/CardContainer";
import { BrowserRouter as Router, Route, useHistory } from "react-router-dom";
import { createBrowserHistory } from "history";
import Menu from "../src/menupage/menu";

const axios = require("axios");

const history = createBrowserHistory();

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      address: "",
      radius: 0,
      restaurants: {},
      filter: "",
      selectedCard: -1
    };
  }

  handleSlide = rad => {
    this.setState({ radius: rad });
  };

  handleFilter = filter => {
    this.setState({ filter: filter });
  };

  handleSubmit = (key, address, callback) => {
    if (key === "Enter") {
      axios
        .get(
          "http://localhost:8080/search" /*"https://agile-woodland-98654.herokuapp.com/search"*/,
          {
            params: {
              address: address,
              filter: this.state.filter,
              radius: this.state.radius
            }
          }
        )
        .then(results => {
          this.setState({
            restaurants: results.data,
            address: address
          });
          callback();
        });
    }
  };

  render() {
    return (
      <div className="container">
        <Router>
          <Route path="/" exact={false}>
            <Header
              handleSlide={this.handleSlide}
              handleFilter={this.handleFilter}
              radius={this.state.radius}
              handleSubmit={this.handleSubmit}
              handleOnChange={this.handleOnChange}
            ></Header>
          </Route>
          <div className="mainBody">
            <Route path="/" exact={true}>
              <div className="MainPage">
                <CardContainer
                  selectedCard={card => this.setState({ selectedCard: card })}
                  RestaurantDetails={this.state.restaurants}
                />
              </div>
            </Route>
            <Route path="/menu" exact={true}>
              <Menu></Menu>
            </Route>
          </div>
        </Router>
        <div></div>
      </div>
    );
  }
}

export default App;
