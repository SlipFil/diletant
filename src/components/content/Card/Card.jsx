import React from "react";
import s from "./card.module.css";
import separatorLogo from "../../../assets/img/separatorLogo.png"





const Card = (props) => {
    
  return (
    <div className={s.card} style={{  backgroundImage: `url(${props.imgURL})`, 
    width: `${props.size === 'small' ? '300' : '600'}px`
     }}>
        <div className={s.about_card}>
                <div className={s.about_card_item}>{props.what}</div>
                <div className={s.about_card_item}>{props.when}</div>
                <div className={s.about_card_item}>{props.where}</div>
        </div>
        <div className={s.logo_separator}><img src={separatorLogo} alt="logo" /></div>
        <div className={s.name_of_card}>{props.name}</div>
        <div className={s.discription}>
            <h2>{props.name}</h2>
            <div>{props.discription}</div>
            </div>
    </div>
  );
};
export default Card;
