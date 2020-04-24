import React, { PureComponent } from 'react';
import Axios from '../../../axios/axios';
import PropTypes from 'prop-types';
import settings from './data';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './RecommendationsProducts.sass'
import Product from './Product/Product';

class SliderPrimary extends PureComponent {

  state = {
    products: [],
    free_shipping: true,
    showHover: false
  }

  componentDidMount = async () => {
    const response = await Axios.get(this.props.products);
    this.setState({ products: response.data.data });
  }

  showsHeightHandler = (index) => {
    this.setState({ showHover: index });
  }

  hiddenHeightHandler = () => {
    return this.setState({ showHover: false });
  }

  render() {
    let products = null;

    if (this.state.products) {
      products = (
        <section className="products">
          <>
            <div className=" product__leyend style-font">
              <h4 className={`style-font product__leyend__title${false === true ? '__night' : ""}`}>
                {this.props.leyend}</h4>
              <h4 className="product__leyend__description">{this.props.leyendAdici}</h4>
            </div>
          </>
          <Slider {...settings} >
            {this.state.products.map((product, index) => {
              return (
                <Product
                  thumbnail={product.thumbnail}
                  price={new Intl.NumberFormat("de-AR").format(product.price)}
                  title={product.title}
                  showsHeightHandler={() => this.showsHeightHandler(index)}
                  hiddenHeightHandler={this.hiddenHeightHandler}
                  showHover={this.state.showHover}
                  index={index}
                  shipping={product.shipping.free_shipping}
                />
              )
            })}
          </Slider>
        </section>
      )
    }

    return (
      <>
        {products}
      </>
    )
  }
}

Product.propTypes = {
  title: PropTypes.string,
  thumbnail: PropTypes.string,
  price: PropTypes.string,
  shipping: PropTypes.Boolean,
}

export default SliderPrimary;