import React from 'react';
import arrayFooter from './data';
import './Footer.css'

const Footer = () => {
  return (
    <section className="container-footer">
      <div className="container-footer-content">
        {arrayFooter.map((item, index) => {
          return (
            <div className="container-footer-content-items" key={index}>
              <img src={item.img}></img>
              <h4 className="style-font" >{item.title}</h4>
              <p className="style-font descriptionPrimary">{item.descriptionPrimary}</p>
              <p className="descriptionSecondary">{item.descriptionSecondary}</p>
            </div>
          )
        })}
      </div>
      <div className="container-footer-down">
        <ul>
          <li>Trabajá con nosotros</li>
          <li>Términos y condiciones</li>
          <li>Políticas de privacidad</li>
          <li>Ayuda</li>
        </ul>
        <div>
          <h3 className="style-font button-meli"><i class="fas fa-mobile-alt"></i>
          ¡Descargá gratis la app de Mercado Libre!</h3>
        </div>
      </div>
    </section>
  )
}

export default Footer;