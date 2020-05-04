import React from "react";
import TWI from "../../../assets/img/Twi.png";
import VK from "../../../assets/img/vk.png";
import FB from "../../../assets/img/FB.png";
import OK from "../../../assets/img/OK.png";
import logo from "../../../assets/img/diletant_logo.png";
import compilation  from "../../../assets/img/page-facing-up_1f4c4.png"
import article  from "../../../assets/img/page-facing-up_1f4c4 (1).png"
import tests  from "../../../assets/img/crown_1f451.png"
import journal  from "../../../assets/img//crown_1f451 (1).png"
import logo1024 from "../../../assets/img/diletant_logo_for1024.png"

import s from "./contacts.module.css";
import { NavLink } from "react-router-dom";
// import font from './ProximaNovaT-Thin.ttf'

const Contacts = () => {
  return (
    <div className={s.footer_contacts}>
      <div className={s.contacts_links}>
        <img className={s.logo} src={logo} />
        <img className={s.logo1024} src={logo1024} />
        <h2>Мы в соцсетях:</h2>
        <div className={s.links}>
        <a href="https://twitter.com/diletant_media"><img src={TWI} alt="TW" /></a>
        <a href="https://vk.com/diletant_media"  ><img src={VK} alt="VK" /></a>
        <a href="https://www.facebook.com/diletant.media"><img src={FB} alt="FB" /></a>
        <a href="https://ok.ru/diletant.media"><img src={OK} alt="OK" /></a>
     </div> </div>
      <div className={s.contacts_other}>
      <div className={s.rubricator}>
          <h3>РУБРИКАТОР</h3>
          <ul>
              <li> <a href="#"><img src={compilation} alt="TW" />сборники</a></li>
              <li><a href="#"><img src={article} alt="TW" />статьи</a></li>
              <li><a href="#"><img src={tests} alt="TW" />тесты</a></li>
              <li><a href="#"><img src={journal} alt="TW" />журналы</a></li>
          </ul>
      </div>
      <div className={s.emails}>
          <h3>КОНТАКТЫ</h3>
          <ul>
              <li>по вопросам подписки <br/>
                <span>podpiska@diletant.media</span>
              </li>
              
              <li>по общим вопросам <br/>
                <span>info@diletnant.media</span>
              </li>
              
          </ul>
      </div>
      <div className={s.info}>
          <h3>ИНФО</h3>
          <ul>
              <li><a href="#">правила комментирования</a></li>
              <li><a href="#">cookie policy / GDPR</a></li>
              <li><a href="#">реклама на сайте</a></li>
              
          </ul>
      </div>
    </div></div>
  );
};
export default Contacts;
