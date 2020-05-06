import React from "react";
import filter from "../../../assets/img/filter.png"
import s from "./sort.module.css";

const Sort = () => {
  return (<>
    <div className={s.sort}>
      <div className={s.box_1}><div><span>Сортировка:</span></div>
        <div><select className={s.select}>
          <option selected value="new">Новое</option>
          <option value="best">Лучшее</option>
        </select></div></div>
      <div className={s.box_2}><select placeholder="Что" className={s.what}>
        <option selected value="what">Что?</option>
        <option value="new">Статьи</option>
        <option value="Collections">Сборники</option>
        <option value="Tests">Тесты</option>
        <option value="Journals">Журналы</option>
      </select>
        <select className={s.where}>
          <option selected value="where">Где?</option>
          <option value="all">Везде</option>
          <option value="Europe">Европа</option>
          <option value="Asia">Азия</option>
          <option value="America">Америка</option>
          <option value="Africa">Африка</option>
          <option value="Australia">Австралия</option>
          <option value="other">Другое</option>
        </select>
        <select className={s.when}>
          <option selected value="when">Когда?</option>
          <option value="Ancient">Древний мир</option>
          <option value="Antiquity">Античность</option>
          <option value="Middle_Ages">Средневековье</option>
          <option value="Rebirth">Возрождение</option>
          <option value="New_Ages">Новое время</option>
          <option value="Newest_Time">Новейшее</option>
        </select></div>

    </div>
    <div className={s.sort_mobile_wrapper}>
      <div className={s.sort_mobile}>
          <select className={s.sort_of_new}>
            <option selected value="new">Сортировка</option>
            <option value="new">Новое</option>
            <option value="interesting">Интересное</option>
          </select>
          <div className={s.filter}><img src={filter} alt="filter icon"/></div>
      </div>
    </div>
  </>);
};
export default Sort;
