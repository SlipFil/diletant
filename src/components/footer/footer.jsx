import React from 'react'
import age from '../../img/12+.png'
import s from './footer.module.css'
import font from './ProximaNovaT-Thin.ttf'
import Contacts from './contacts/contacts'



const Footer = () => {
    return (
        <div className={s.footer_block}>
            <Contacts />
            <div className={s.error_block}><span>Нашли ошибку или опечатку ? <br/> Выделите ее и нажмите Ctrl+Enter</span></div>
            <div className={s.registration_wraper}>
                <div className={s.foot_note} style={{fotnFamily: {font}}}>
                    <div className={s.about_registration}><div>Свидетельство о регистрации СМИ Эл №ФС77-62623 выдано федеральной службой по надзору в сфере связи, 
                    информационных технологий и массовых коммуникаций (Роскомнадзор) 31.07.2015 
                    При полном или частичном использовании материалов ссылка на «Дилетант» обязательна. 
                    Для сетевых изданий обязательна гиперссылка на сайт «Дилетант» — diletant.media.</div>
                    <img src={age} /></div>
                    <div className={s.about_redactor}> <div>Главный редактор: Алексей Соломин</div> <img src={age} /></div>
                </div>
            </div>
        </div>
    )
}
export default   Footer;