import React, { Component } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './SliderPrimary.css';

import { settings, arrayImg } from './data';

class SliderPrimary extends Component {

  render() {
    return (
      <div className="carrousel">
        <Slider {...settings} >
          {arrayImg.map((item, index) => <div key={index}>
            <img className="carrousel" src={item}></img>
          </div>)}
        </Slider>
      </div>
    );
  }
}

export default SliderPrimary;