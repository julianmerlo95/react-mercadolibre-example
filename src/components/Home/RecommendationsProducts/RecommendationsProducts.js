import React, { Component } from 'react';
import Axios from '../../../axios/axios';
import Product from './Product/Product';
import './RecommendationsProducts.css';

class CarrouselProducts extends Component {

  state = {
    products: []
  }

  componentDidMount = async () => {
    const response = await Axios.get(this.props.products);
    this.setState({ products: response.data.results });
  }

  render() {

    let products = null;

    if (this.state.products) {
      products = (
        <React.Fragment>
          <Product
            leyend={this.props.leyend}
            products={this.state.products}
            leyendAdici={this.props.leyendAdici}
          />
        </React.Fragment>
      )
    }

    return (
      <div className="container-slider-products">
        {products}
      </div>
    )
  }
}

export default CarrouselProducts;