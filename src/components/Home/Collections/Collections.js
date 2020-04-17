import React from 'react';
import { deFiesta, arrayImg } from './data';
import './Collections.css'

const Collections = () => {
  return (
    <section className="container-primary">
      <div>
        <h3 className="style-font">Colecciones: De fiesta</h3>
      </div>
      <div className="container-collection">
        <div className="container-left shadow">
          <img src={deFiesta}></img>
          <div>
            <h5>Descubri</h5>
            <h4>De fiesta</h4>
          </div>
        </div>
        <div className="container-right">
          {arrayImg.map((img, index) => <img key={index} src={img}></img>)}
        </div>
      </div>
    </section>
  )
}

export default Collections;