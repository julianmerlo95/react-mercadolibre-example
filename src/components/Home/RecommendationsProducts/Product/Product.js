import React from 'react';
import Slider from "react-slick";
import settings from './data';
import './Product.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import img from '../../../../assets/img/logo.png';

const Product = (props) => {

  return (
    <>
      <div className="container-leyend">
        <h3 className="leyend-slider">{props.leyend}</h3>
        <h4>{props.leyendAdici}</h4>
      </div>
      <Slider {...settings} >
        {props.products.map((product, index) => {
          return (
            <div style={{ margin: '0px', width: '100%' }}>
              <div key={index} className="slider-products">
                <span className="icon-shipping"><i class="fas fa-truck"></i></span>
                <img src={product.thumbnail} ></img>
                <h3>${product.price}</h3>
              </div>
            </div>
          )
        })}
      </Slider>
    </>
  )
}
export default Product;