import React from 'react';
import '../../../../globalStyle.css';
import './Product.css'

const Product = (props) => {
  return (
    <>
      <>
        <div key={props.index} onMouseOver={props.showsHeightHandler} onMouseLeave={props.hiddenHeightHandler}
          className={`style-font product_block${props.showHover === props.index ? '-show' : ""}`}>
          {props.shipping ?
            <span className="product_block__icon--truck"><i class="fas fa-truck"></i></span>
            : null}
          {props.showHover === props.index ?
            <span className="product_block__icon--love"><i class="far fa-heart"></i></span>
            : null}
          <img className="product_block__img" src={props.thumbnail} ></img>
          <h3 className="product_block__price ">${props.price}</h3>
          <p className={`style-font 
          product_block__description--hidden${props.showHover === props.index ? '-show' : ""}`}>
            {props.title}
          </p>
        </div>
      </>
    </>
  )
}

export default Product;