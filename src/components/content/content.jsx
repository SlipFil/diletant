import React from "react";

import s from "./content.module.css";
import Card from "./Card/Card";

const Content = (props) => {
    let cards = props.cards.map((card) => (
    <Card key={card.id} 
        when={card.when}
        where={card.where}
        what={card.what}
        name={card.name}
        discription={card.discription}
        size={card.size}
        imgURL={card.imgURL} />));
  return (
    <div className={s.content}>
      {cards}
    </div>
  );
};
export default Content;
