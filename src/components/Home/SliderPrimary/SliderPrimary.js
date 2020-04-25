import React, { Component } from 'react';
import Slider from "react-slick";
import './SliderPrimary.sass';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { settings, arrayImg } from './data';
import { Context } from '../../../context/Context';

class SliderPrimary extends Component {

  static contextType = Context;
  render() {

    return (
      <section className={`carrousel${this.context.toggleMood === true ? '--background' : ""}`}>
        <Slider {...settings} >
          {arrayImg.map((item, index) =>
            <div key={index}>
              <img className={`carrousel__img${this.context.toggleMood === true ? '--background' : ""}`}
                src={item} alt="SliderPrimary"></img>
            </div>)}
        </Slider>
      </section>
    );
  }
}

export default SliderPrimary;