import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Navbar, SliderPrimary, Payments, Footer, CategoriesCircle } from './data';

const Layout = (props) => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
      </BrowserRouter>
      <SliderPrimary />
      <CategoriesCircle />
      <Payments />
      <>
        {props.children}
      </>
      <Footer />
    </>
  )
}

export default Layout;