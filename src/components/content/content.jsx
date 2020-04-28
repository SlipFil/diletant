import React from "react";

import s from "./content.module.css";
import Card from "./Card/Card";
import Advertising from "./AdvertisingBlock/advertising";

const Content = (props) => {
  let cards = props.cards.map((card) => {
    if (card.id < 8) {
      return (
        <Card
          key={card.id}
          when={card.when}
          where={card.where}
          what={card.what}
          name={card.name}
          discription={card.discription}
          size={card.size}
          imgURL={card.imgURL}
        />
      );
    }
  });
  let cardsAfterAdventising = props.cards.map((card) => {
    if (card.id > 7) {
      return (
        <Card
          key={card.id}
          when={card.when}
          where={card.where}
          what={card.what}
          name={card.name}
          discription={card.discription}
          size={card.size}
          imgURL={card.imgURL}
        />
      );
    }
  });
  return (
    <div className={s.content}>
      <div className={s.first_part}>{cards}</div> 
      <Advertising />
      <div className={s.second_part}>{cardsAfterAdventising}</div> 
      <div className={s.quantity_block}>
        <div className={s.quantity}>показано 12 из 2600 карточек</div>
        <div className={s.more}>БОльше материалов</div>
      </div>
    </div>
  );
};
export default Content;
