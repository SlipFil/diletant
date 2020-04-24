import React from 'react'
import closedicon from ''
import s from './header.module.css'

const Header = () => {
    return (
        <div className={s.header_block}>
           <div><input className={s.input} placeholder="Basic usage" /></div>
           <div className={s.close_button}><img src={closeIcon} alt=""/></div>
        </div>
    )
}
export default Header;