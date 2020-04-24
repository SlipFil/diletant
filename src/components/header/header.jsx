import React from 'react'
import closedicon from './closeIcon.png'
import s from './header.module.css'

const Header = () => {
    return (
        <div className={s.header_block}>
           <div><input className={s.input} placeholder="Basic usage" /></div>
           <div className={s.close_button}><img className={s.close_icon} src={closedicon} alt=""/></div>
        </div>
    )
}
export default Header;