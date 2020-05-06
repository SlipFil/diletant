import React from "react";
import s from "./advertising.module.css";
import advert from '../../../assets/img/advertising.png'
import advert375 from '../../../assets/img/adimg375.png'





const Advertising = () => {
    
  return (
    <div className={s.advertising} >
        <div ><a href='#'>реклама на diletant.media</a></div>
        <div><img className={s.adimg} src={advert} alt="advertising" /></div>
        <div><img className={s.adimg375} src={advert375} alt="advertising" /></div>
    </div>
  );
};
export default Advertising;
