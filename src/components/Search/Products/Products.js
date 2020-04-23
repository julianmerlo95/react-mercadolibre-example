import React, { useState } from 'react';
import Product from './Product/Product';
import './Products.sass'

const Products = (props) => {
  const { arrayProducts } = props;

  const [showHover, setShowHover] = useState(false);

  const showsHeightHandler = (index) => {
    setShowHover({ showHover: index });
  }

  const hiddenHeightHandler = () => {
    return setShowHover({ showHover: false });
  }

  return (
    <div className="products__search">
      {arrayProducts === [] ? false :
        arrayProducts && arrayProducts.map((product, index) =>
          <Product
            thumbnail={product.thumbnail}
            price={new Intl.NumberFormat("de-AR").format(product.price)}
            title={product.title}
            showsHeightHandler={() => showsHeightHandler(index)}
            hiddenHeightHandler={hiddenHeightHandler}
            showHover={showHover}
            index={index}
            shipping={product.shipping.free_shipping}
          />
        )}
    </div>
  )
}

export default Products;
