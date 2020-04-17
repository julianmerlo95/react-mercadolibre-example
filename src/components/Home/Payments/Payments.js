import React from 'react';
import arrayPayments from './data';
import './Payments.css';

const PaymentsMethod = () => {
  return (
    <section className="payments tyle-font standar-width">
      <div className="payments__movil">
        <img className="payments__movil__img" src={arrayPayments[0].img}></img>
        <div>
          <h2 className="payments__movil__title style-font">{arrayPayments[0].name}</h2>
          <p className=" payments__movil__description style-font">{arrayPayments[0].description}</p>
        </div>
      </div>
      {arrayPayments.map((item, index) => {
        return (
          <div key={index} className="payments__desktop">
            <img src={item.img}></img>
            <div>
              <h2 className="payments__desktop__title">{item.name}</h2>
              <p className="payments__desktop__description">{item.description}</p>
            </div>
          </div>
        )
      })}
    </section>
  )
}

export default PaymentsMethod;