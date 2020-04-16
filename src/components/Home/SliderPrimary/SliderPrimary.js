import React, { Component } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './SliderPrimary.css';
import PaymentsMethod from '../Payments/Payments';

import { settings, arrayImg } from './data';

class SliderPrimary extends Component {

  render() {
    return (
      <React.Fragment >
        <div className="slider-primary">
          <Slider {...settings} >
            {arrayImg.map((item, index) => <div key={index}><img src={item}></img></div>)}
          </Slider>
          <PaymentsMethod />
        </div>
      </React.Fragment >
    );
  }
}

export default SliderPrimary;