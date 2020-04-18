import React, { Component } from 'react';
import Axios from '../../../axios/axios';
import settings from './data';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Product from './Product/Product';
import './RecommendationsProducts.css';
import Context from '../../../context/Context';


class SliderPrimary extends Component {

  state = {
    products: [],
    free_shipping: true,
    showHover: false
  }

  componentDidMount = async () => {
    const response = await Axios.get(this.props.products);
    this.setState({ products: response.data.results });
    console.log(this.state.products);
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
        <div className="products">
          <>
            <div className=" product__leyend style-font">
              <h4 className="product__leyend__title style-font">{this.props.leyend}</h4>
              <h4 className="product__leyend__description">{this.props.leyendAdici}</h4>
            </div>
          </>
          <Slider {...settings} >
            {this.state.products.map((product, index) => {
              return (
                <Product
                  thumbnail={product.thumbnail}
                  price={product.price}
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
        </div>
      )
    }

    return (
      <>
        {products}
      </>
    )
  }
}

export default SliderPrimary;