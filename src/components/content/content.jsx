import React from "react";

import s from "./content.module.css";
import Card from "./Card/Card";
import Advertising from "./AdvertisingBlock/advertising";
// import { Component } from "react";

 

 const Content = (props) => {
  let screenWidth= document.body.clientWidth;
  let firstPartOfContent;
    if (screenWidth >= 1440){ firstPartOfContent = 7 } 
      else if( 1024 <= screenWidth && screenWidth < 1440){ firstPartOfContent = 4} 
        else if( screenWidth < 1024 ){ firstPartOfContent = 2}
        
  let cards = props.cards.map((card) => {
    if (card.id <= firstPartOfContent) { 
      if ( firstPartOfContent === 2 && card.size ==="big") {return  }
        else { return (
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
        );}
    }
  });debugger
  let cardsAfterAdventising = props.cards.map((card) => {
    if (card.id > firstPartOfContent) { if ( firstPartOfContent === 2 && card.size ==="big") {return  }
                                        {return (
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
                                        )}
                                      }})
   
    return <div className={s.content}>
      <div className={s.first_part}>{cards}</div> 
      <Advertising />
      <div className={s.second_part}>{cardsAfterAdventising}</div> 
      <div className={s.quantity_block}>
        <div className={s.quantity}>показано 12 из 2600 карточек</div>
  <div>ширина экрана {screenWidth}</div>
        <div className={s.more}>БОльше материалов</div>
      </div>
    </div>

} 
 
export default Content;
 
  
  


