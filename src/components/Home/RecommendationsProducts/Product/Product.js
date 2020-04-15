import React from 'react';
import Slider from "react-slick";
import settings from './data';
import './Product.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Product = (props) => {

  return (
    <>
      <h3 className="leyend-slider">{props.leyend}</h3>
      <Slider {...settings} >
        {props.products.map((product, index) => {
          return (
            <div style={{ margin: '10px', width: '100%' }}>
              <div key={index} className="slider-products">
                <img src={product.thumbnail} ></img>
                <hr />
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