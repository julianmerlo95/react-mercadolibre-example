import React, { Component } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './CarrouselPrimary.css';
import { settings, arrayImg, arrayPayments } from './data';

class CarrouselPrimary extends Component {

  render() {
    return (
      <div >
        <div className="carrousel-primary">
          <Slider {...settings} >
            {arrayImg.map((item, index) => <div key={index}><img src={item}></img></div>)}
          </Slider>
        </div>
        <div className="container-payments">
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
      </div>
    );
  }
}

export default CarrouselPrimary;