import React from "react";
import closedicon from "./closeIcon.png";
import s from "./header.module.css";

const Header = (props) => {
  let onInputChange = (e) => {
    let text = e.target.value;
    props.setSearchBody(text);
  };

let cleanInputText = () => {
    props.clearSearchBody();
}


  return (
    <div className={s.wrapper}>
      <div className={s.header_block}>
        <div className={s.input_block}>
          <input
            onChange={onInputChange}
            className={s.input}
            value={props.searchBody}
          />
        </div>
        <div onClick={cleanInputText} className={s.close_button}>
          <img className={s.close_icon} src={closedicon} alt="" />
        </div>
      </div>
    </div>
  );
};
export default Header;
