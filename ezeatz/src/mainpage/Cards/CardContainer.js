import React from "react";
import RestCard from "./RestCard";

function CardContainer(props) {
  let cards = [];

  for (const search in props.RestaurantDetails) {
    cards.push(
      <RestCard
        selectedCard={() => props.selectedCard(search)}
        title={props.RestaurantDetails[search].name}
        open={props.RestaurantDetails[search].open}
        image={props.RestaurantDetails[search].icon}
        address={props.RestaurantDetails[search].address}
      />
    );
  }
  console.log(cards);
  return <div className="CardContainer">{cards}</div>;
}

export default CardContainer;
