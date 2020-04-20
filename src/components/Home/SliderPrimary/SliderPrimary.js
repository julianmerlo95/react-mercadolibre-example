import React, { Component } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './SliderPrimary.sass';

import { settings, arrayImg } from './data';

class SliderPrimary extends Component {

  render() {
    return (
      <section className="carrousel">
        <Slider {...settings} >
          {arrayImg.map((item, index) =>
            <div key={index}>
              <img className="carrousel__img" src={item} alt="alt sliderPrimary"></img>
            </div>)}
        </Slider>
      </section>
    );
  }
}

export default SliderPrimary;