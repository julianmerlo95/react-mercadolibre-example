import React, { useContext } from 'react';
import { arrayFooter, arrayFooterList } from './data';
import { Context } from '../../../context/Context';
import './Footer.sass'


const Footer = () => {

  const context = useContext(Context);
  const { toggleMood, changeMoodHandler } = context;

  return (
    <section className={`footer${toggleMood === true ? '__night' : ""}`}>
      <div className={`footer__block__above${toggleMood === true ? '__night' : ""}`}>
        {arrayFooter.map((item, index) => {
          return (
            <div className={`footer__block__above__shipping${toggleMood === true ? '__night' : ""}`} key={index}>
              <img className={`footer__block__above__shipping__img${toggleMood === true ? '__night' : ""}`}
                src={item.img} alt="img footer"></img>
              <h4 className={`style-font footer__block__above__shipping__title${toggleMood === true ? '__night' : null}`} >
                {item.title}</h4>
              <p className={`style-font footer__block__above__shipping__description--primary${toggleMood === true ? '__night' : null}`}>
                {item.descriptionPrimary}</p>
              <p className="footer__block__above__shipping__description--secondary">{item.descriptionSecondary}</p>
            </div>
          )
        })}
      </div>
      <div className={`footer__block__down${toggleMood === true ? '__night' : ""}`}>
        <ul className="footer__block__down__list">
          {arrayFooterList.map((item, index) => <div key={index}>
            <li className="footer__block__down__list__item">{item}</li>
          </div>)}
        </ul>
        <div>
          <button onClick={changeMoodHandler}
            className="footer__block__down__button--night">
            {toggleMood === true ? 'Modo dia' : 'Modo noche'}
          </button>
          <h3 className="footer__block__down__button style-font">
            <i className="fas fa-mobile-alt"></i>
          ¡Descargá gratis la app de Mercado Libre!
          </h3>
        </div>
      </div>
    </section >
  )
}

export default Footer;