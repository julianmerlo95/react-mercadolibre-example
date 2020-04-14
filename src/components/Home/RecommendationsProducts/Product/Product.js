import React from 'react';
import Slider from "react-slick";
import './Product.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Product = (props) => {
  console.log(props.cantidadProduct);

  const settings = {
    arrow: true,
    infinite: true,
    speed: 500,
    slidesToShow: parseInt(props.cantidadProduct),
    slidesToScroll: 4
  };

  return (
    <>
      <h3>{props.leyend}</h3>
      <Slider {...settings} >
        {props.products.map((product, index) => {
          return (
            <div key={index} className="carrousel-products">
              <img src={product.thumbnail} ></img>
              <h3>{product.price}</h3>
            </div>
          )
        })}
      </Slider>
    </>
  )
}
export default Product;