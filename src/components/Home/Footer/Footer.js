import React from 'react';
import arrayFooter from './data';
import './Footer.css'

const Footer = () => {
  return (
    <section className="container-footer">
      <div className="container-footer-content">
        {arrayFooter.map((item, index) => {
          return (
            <div key={index}>
              <img src={item.img}></img>
              <h2>{item.title}</h2>
              <p>{item.descriptionPrimary}</p>
              <p>{item.descriptionSecondary}</p>
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
          <h3>¡Descargá gratis la app de Mercado Libre!</h3>
        </div>
      </div>
    </section>
  )
}

export default Footer;