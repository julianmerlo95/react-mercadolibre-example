import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Navbar, Footer } from './data';

const Layout = (props) => {
  const { children } = props;
  return (
    <>
      <BrowserRouter>
        <Navbar />
      </BrowserRouter>
      <>
        {children}
      </>
      <Footer />
    </>
  )
}

export default Layout;