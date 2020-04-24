import React, { useState } from 'react';
import './Product.sass';
import { ContextProvider, Context } from '../../../../context/Context';

const Product = (props) => {
  const { arrayProducts, thumbnail, price, title, index,
    showsHeightHandler, hiddenHeightHandler,
    showHover, shipping } = props;

  return (
    <div key={index} onMouseOver={showsHeightHandler} onMouseLeave={hiddenHeightHandler}
      className={`style-font product__search__block`}>
      {shipping ?
        <span className="product_block__icon--truck"><i className="fas fa-truck"></i></span>
        : null}
      {showHover === index ?
        <span className="product_block__icon--love"><i className="far fa-heart"></i></span>
        : null}
      <img className="product_block__img" src={thumbnail} alt="alt product"></img>
      <h3 className="product_block__price ">${price.split(',', 1)}</h3>
      <p className="product__search__block__description">{title}</p>
    </div>
  )
}

export default Product;