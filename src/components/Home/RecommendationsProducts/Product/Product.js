import React, { useState } from 'react';
import Slider from "react-slick";
import settings from './data';
import '../../../../globalStyle.css';
import './Product.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const Product = (props) => {

  const [showHover, setShowHover] = useState(false);

  const showsHeightHandler = (index) => {
    setShowHover(index);
  }

  const hiddenHeightHandler = () => {
    setShowHover(false);
  }


  return (
    <>
      <div className="container-leyend style-font">
        <h3 className="leyend-slider style-font">{props.leyend}</h3>
        <h4>{props.leyendAdici}</h4>
      </div>
      <Slider {...settings} >
        {props.products.map((product, index) => {
          return (
            <>
              <div key={index} className={`style-font slider-products${showHover === index ? '-show' : ""}`}
                onMouseOver={() => showsHeightHandler(index)} onMouseLeave={hiddenHeightHandler}>
                <span className="icon-shipping"><i class="fas fa-truck"></i></span>
                <img className="img-product" src={product.thumbnail} ></img>
                <h3 className="price-product">${product.price}</h3>
                <p className={`style-font title-hidden-hover${showHover === index ? '-show' : ""}`}>{product.title.substr(0, 50)}</p>
              </div>
            </>
          )
        })}
      </Slider>
    </>
  )
}
export default Product;