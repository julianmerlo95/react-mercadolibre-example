import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';

import Navbar from '../components/Navbar/Navbar';
import SliderPrimary from '../components/Home/SliderPrimary/SliderPrimary';
import ShowDesktop from './renderComponent/ShowDesktop';
import ShowMovil from './renderComponent/ShowMovil';
import Footer from '../components/Home/Footer/Footer';

import './MercadoLibre.css';

class MercadoLibre extends Component {

  render() {

    let showComponents = null;

    if (window.screen.width > 1200) {
      showComponents = (<><ShowDesktop /></>)
    } else if (window.screen.width <= 428) {
      showComponents = (<><ShowMovil /></>)
    }

    return (
      <>
        <BrowserRouter>
          <Navbar />
        </BrowserRouter>

        <SliderPrimary />
        {showComponents}
        <Footer />
      </>
    )
  }
}

export default MercadoLibre;