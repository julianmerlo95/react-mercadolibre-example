import React from 'react';
import { deFiesta, arrayImg } from './data';
import './Collections.css'

const Collections = () => {
  return (
    <section>
      <h3>Colecciones: De fiesta</h3>
      <div className="container-collection">
        <div className="container-text">
          <img src={deFiesta}></img>
          <h3>Descubri</h3>
          <h4>De fiesta</h4>
        </div>
        <div className="list-imagen">
          {arrayImg.map((img, index) => <img key={index} src={img}></img>)}
        </div>
      </div>
    </section>
  )
}

export default Collections;