import React from 'react';
import { arrayFooter, arrayFooterList } from './data';
import './Footer.sass'


const Footer = () => {
  return (
    <section className="footer">
      <div className="footer__block__above">
        {arrayFooter.map((item, index) => {
          return (
            <div className=" footer__block__above__shipping" key={index}>
              <img src={item.img} alt="img footer"></img>
              <h4 className="footer__block__above__shipping__title  style-font" >{item.title}</h4>
              <p className="footer__block__above__shipping__description--primary  style-font">{item.descriptionPrimary}</p>
              <p className="footer__block__above__shipping__description--secondary">{item.descriptionSecondary}</p>
            </div>
          )
        })}
      </div>
      <div className="footer__block__down">
        <ul className="footer__block__down__list">
          {arrayFooterList.map((item, index) => <div key={index}>
            <li className="footer__block__down__list__item">{item}</li>
          </div>)}
        </ul>
        <div>
          <h3 className="footer__block__down__button style-font">
            <i className="fas fa-mobile-alt"></i>
          ¡Descargá gratis la app de Mercado Libre!
          </h3>
        </div>
      </div>
    </section>
  )
}

export default Footer;