import React from 'react'
import closedicon from './closeIcon.png'
import s from './header.module.css'


const Header = (props) => {
let onInputChange = (e) => {
   
    let text = e.target.value;
    props.setSearchBody(text);
}

    return (
        <div className={s.header_block}>
           <div><input onChange={onInputChange} className={s.input} value={props.searchBody} /></div>
           <div className={s.close_button}><img className={s.close_icon} src={closedicon} alt=""/></div>
        </div>
    )
}
export default Header;