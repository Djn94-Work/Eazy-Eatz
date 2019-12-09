import React from "react";

import "./mainPage.css";
import CardContainer from "./Cards/CardContainer";

function MainPage(props) {
  return (
    <div className="MainPage">
      <CardContainer
        selectedCard={props.selectedCard}
        RestaurantDetails={props.RestaurantDetails}
      />
    </div>
  );
}

export default MainPage;
