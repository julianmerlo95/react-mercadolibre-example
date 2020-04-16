import React from 'react';
import arrayPayments from './data';
import './Payments.css';

const PaymentsMethod = () => {
  return (
    <div className="container-payments">
      <div className="payments-method-hidden">
        <img src={arrayPayments[0].img}></img>
        <div>
          <h2 className="title-payments">{arrayPayments[0].name}</h2>
          <p className="description-payments">{arrayPayments[0].description}</p>
        </div>
      </div>
      {arrayPayments.map((item, index) => {
        return (
          <div key={index} className="payments-method">
            <img src={item.img}></img>
            <div>
              <h2 className="title-payments">{item.name}</h2>
              <p className="description-payments">{item.description}</p>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default PaymentsMethod;