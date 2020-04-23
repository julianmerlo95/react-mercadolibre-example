import React from 'react';
import './Product.sass'

const Product = (props) => {

  const { index, showsHeightHandler,
    hiddenHeightHandler, showHover,
    shipping, thumbnail, price, title
  } = props;

  return (
    <>
      <>
        <div key={index} onMouseOver={showsHeightHandler} onMouseLeave={hiddenHeightHandler}
          className={`style-font product_block${showHover === index ? '-show' : ""}`}>
          {shipping ?
            <span className="product_block__icon--truck"><i className="fas fa-truck"></i></span>
            : null}
          {showHover === index ?
            <span className="product_block__icon--love"><i className="far fa-heart"></i></span>
            : null}
          <img className="product_block__img" src={thumbnail} alt="alt product"></img>
          <h3 className="product_block__price ">${price.split(',', 1)}</h3>
          <p className={`style-font 
          product_block__description--hidden${showHover === index ? '-show' : ""}`}>
            {title}
          </p>
        </div>
      </>
    </>
  )
}

export default Product;