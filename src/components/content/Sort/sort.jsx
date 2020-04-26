import React from "react";

import s from "./sort.module.css";

const Sort = () => {
  return (
    <div className={s.sort}>
      <div>Сортировка:</div>
      <select className={s.select}>
        <option selected value="new">Новое</option>
        <option value="best">Лучшее</option>
        </select>
      <select placeholder="Что" className={s.what}>
        <option selected value="new">Что?</option>
        <option value="new">Статьи</option>
        <option value="interesting">Сборники</option>
        <option value="interesting">Тесты</option>
        <option value="interesting">Журналы</option>
        </select>
      <select className={s.where}>
        <option selected value="new">Где?</option>
        <option value="new">Везде</option>
        <option value="interesting">Европа</option>
        <option value="interesting">Азия</option>
        <option value="interesting">Америка</option>
        <option value="interesting">Африка</option>
        <option value="interesting">Австралия</option>
        <option value="interesting">Другое</option>
        </select>
      <select className={s.when}>
        <option selected value="new">Когда?</option>
        <option value="interesting">Древний мир</option>
        <option value="interesting">Античность</option>
        <option value="interesting">Средневековье</option>
        <option value="interesting">Возрождение</option>
        <option value="interesting">Новое время</option>
        <option value="interesting">Новейшее</option>
        </select>
    </div>
  );
};
export default Sort;
