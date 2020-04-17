import React from 'react';
import { deFiesta, arrayImg } from './data';
import './Collections.css'

const Collections = () => {
  return (
    <section className="collections">
      <div>
        <h3 className="style-font">Colecciones: De fiesta</h3>
      </div>
      <div className="collections__block">
        <div className=" collections__block__left">
          <img className="collections__block__left__img" src={deFiesta}></img>
          <div>
            <h5 className="collections__block__left__title">Descubri</h5>
            <h4 className="collections__block__left__description">De fiesta</h4>
          </div>
        </div>
        <div className="collections__block__right">
          {arrayImg.map((img, index) => <img className="collections__block__right__img"
            key={index} src={img}></img>)}
        </div>
      </div>
    </section>
  )
}

export default Collections;