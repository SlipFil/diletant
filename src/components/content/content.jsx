import React from "react";

import s from "./content.module.css";
import Card from "./Card/Card";
import Advertising from "./AdvertisingBlock/advertising";

const Content = (props) => {
    let cards = props.cards.map((card) => {if (card.id < 4) {return(
    <Card key={card.id} 
        when={card.when}
        where={card.where}
        what={card.what}
        name={card.name}
        discription={card.discription}
        size={card.size}
        imgURL={card.imgURL} />)}});
        let cardsAfterAdventising = props.cards.map((card) => {if (card.id > 3) {return(
          <Card key={card.id} 
              when={card.when}
              where={card.where}
              what={card.what}
              name={card.name}
              discription={card.discription}
              size={card.size}
              imgURL={card.imgURL} />)}});
  return (
    <div className={s.content}>
      {cards}
      <Advertising />
      {cardsAfterAdventising}
    </div>
  );
};
export default Content;
