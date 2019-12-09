import React from "react";
import "./App.css";
import Header from "./header/Header";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Menu from "../src/menupage/menu";
import MainPage from "./mainpage/mainPage";

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

  getSelectedCardName = () => {
    const index = this.state.selectedCard;

    if (index > -1 && index !== {}) {
      return this.state.restaurants[index].name;
    } else if (index === -1) {
      return {};
    } else {
      console.error("The Card with index '" + index + "' dosent exist");
      return {};
    }
  };

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

  menuDidMount = () => {
    this.setState({
      radius: 0,
      filter: "",
      selectedCard: -1
    });
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
            ></Header>
          </Route>
          <div className="mainBody">
            <Route path="/" exact={true} onChange={this.onRouteChange}>
              <MainPage
                selectedCard={card => this.setState({ selectedCard: card })}
                RestaurantDetails={this.state.restaurants}
              />
            </Route>
            <Route path="/menu" exact={true} onChange={this.onRouteChange}>
              <Menu
                menuDidMount={this.menuDidMount}
                restaurantName={this.getSelectedCardName()}
                cuisine={this.state.filter}
                onRouteChange={this.onRouteChange}
              />
            </Route>
          </div>
        </Router>
        <div></div>
      </div>
    );
  }
}

export default App;
