import React, { PureComponent } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Navbar, Footer } from './data';

class Layout extends PureComponent {
  render() {
    const { children } = this.props;
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
}

export default Layout;