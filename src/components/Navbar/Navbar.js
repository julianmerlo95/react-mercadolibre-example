import React, { useContext } from 'react';
import './Navbar.css'
import NavbarDestok from './NavbarDesktop/NavbarDesktop';
import NavbarMovil from './NavbarMovil/NavbarMovil';
import Context from '../../context/Context';

const Navbar = () => {
  const context = useContext(Context)
  let navbar = null;

  if (context.validateScreen > 800) {
    navbar = (<><NavbarDestok /></>)
  } else if (context.validateScreen < 430) {
    navbar = (<><NavbarMovil /></>)
  }

  return (
    <nav className="navbar">
      {navbar}
    </nav>
  )
}

export default Navbar;