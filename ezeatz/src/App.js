import React from "react";
import "./App.css";
import Header from "./header/Header";
import FilterPannel from "./mainpage/FilterPannel/FilterPannel";
import CardContainer from "./mainpage/Cards/CardContainer";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const axios = require("axios");

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
    console.log(this.state.filter);
  };

  handleSubmit = (key, address) => {
    this.setState({ address: address });
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
          this.setState({ restaurants: results.data });
          console.log(results.data);
        });
    }
  };

  render() {
    return (
      <div className="container">
        <Router>
          <Route path="/" exact={false}>
            <Header
              handleSubmit={this.handleSubmit}
              handleOnChange={this.handleOnChange}
            ></Header>
          </Route>

          <Route path="/" exact={true}>
            <div className="MainPage">
              <FilterPannel
                handleSlide={this.handleSlide}
                handleFilter={this.handleFilter}
              />
              <CardContainer
                selectedCard={card => this.setState({ selectedCard: card })}
                RestaurantDetails={this.state.restaurants}
              />
            </div>
          </Route>
          <Route path="/menu"></Route>
        </Router>
      </div>
    );
  }
}

export default App;
