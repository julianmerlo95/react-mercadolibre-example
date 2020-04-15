import React, { Component } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './SliderPrimary.css';
import { settings, arrayImg, arrayPayments } from './data';

class SliderPrimary extends Component {

  render() {
    return (
      <React.Fragment >
        <div className="slider-primary">
          <Slider {...settings} >
            {arrayImg.map((item, index) => <div key={index}><img src={item}></img></div>)}
          </Slider>
        </div>
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
      </React.Fragment >
    );
  }
}

export default SliderPrimary;