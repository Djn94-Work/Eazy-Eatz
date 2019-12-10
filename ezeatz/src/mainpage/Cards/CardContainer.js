import React from "react";
import RestCard from "./RestCard";
import "./CardContainer.css";

function CardContainer(props) {
  let cards = [];
  const style = {
    background: "black"
  };
  for (const search in props.RestaurantDetails) {
    cards.push(
      <RestCard
        key={search}
        style={style}
        selectedCard={() => props.selectedCard(search)}
        title={props.RestaurantDetails[search].name}
        open={props.RestaurantDetails[search].open}
        image={props.RestaurantDetails[search].icon}
        address={props.RestaurantDetails[search].address}
        open={props.RestaurantDetails[search].open}
      />
    );
  }
  return cards;
}

export default CardContainer;
