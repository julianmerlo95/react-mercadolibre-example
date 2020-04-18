import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';

import Navbar from '../components/Navbar/Navbar';
import SliderPrimary from '../components/Home/SliderPrimary/SliderPrimary';
import Payments from '../components/Home/Payments/Payments';
import ShowDesktop from './renderComponent/ShowDesktop';
import ShowMovil from './renderComponent/ShowMovil';
import Footer from '../components/Home/Footer/Footer';
import Context from '../context/Context';

import './MercadoLibre.css';

class MercadoLibre extends Component {

  render() {


    let showComponents = null;

    if (window.screen.width > 1200) {
      showComponents = (<><ShowDesktop /></>)
    } else if (window.screen.width < 426) {
      showComponents = (<><ShowMovil /></>)
    }

    return (
      <>
        <Context.Provider value={{ validateScreen: window.screen.width }}>
          <BrowserRouter>
            <Navbar />
          </BrowserRouter>
          <SliderPrimary />
          <Payments />
          {showComponents}
          <Footer />
        </Context.Provider>
      </>
    )
  }
}

export default MercadoLibre;