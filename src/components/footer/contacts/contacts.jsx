import React from "react";
import TWI from "../../../assets/img/Twi.png";
import VK from "../../../assets/img/vk.png";
import FB from "../../../assets/img/FB.png";
import OK from "../../../assets/img/OK.png";
import logo from "../../../assets/img/diletant_logo.png";

import s from "./contacts.module.css";
import { NavLink } from "react-router-dom";
// import font from './ProximaNovaT-Thin.ttf'

const Contacts = () => {
  return (
    <div className={s.footer_contacts}>
      <div className={s.contacts}>
        <img src={logo} />
        <h2>Мы в соцсетях:</h2>
        <a href="#"><img src={TWI} alt="TW" /></a>
        <a href="#"><img src={VK} alt="VK" /></a>
        <a href="#"><img src={FB} alt="FB" /></a>
        <a href="#"><img src={OK} alt="OK" /></a>
      </div>
      <div className={s.rubricator}>
          <h3>РУБРИКАТОР</h3>
          <ul>
              <li> <a href="#"><img src={TWI} alt="TW" />сборники</a></li>
              <li><a href="#"><img src={TWI} alt="TW" />статьи</a></li>
              <li><a href="#"><img src={TWI} alt="TW" />тесты</a></li>
              <li><a href="#"><img src={TWI} alt="TW" />журналы</a></li>
          </ul>
      </div>
      <div className={s.emails}>
          <h3>КОНТАКТЫ</h3>
          <ul>
              <li> <a href="#">сборники</a></li>
              <li><a href="#">статьи</a></li>
              
          </ul>
      </div>
      <div className={s.info}>
          <h3>ИНФО</h3>
          <ul>
              <li> <a href="#">сборники</a></li>
              <li><a href="#">статьи</a></li>
              <li><a href="#">статьи</a></li>
              
          </ul>
      </div>
    </div>
  );
};
export default Contacts;
