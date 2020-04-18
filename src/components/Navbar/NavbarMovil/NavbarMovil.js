import React from 'react';
import '../Navbar.css';

const NavbarMovil = () => {
  return (
    <div className="navbar__hidden">
      <div className="navbar__high__block__hidden">
        <div className="navbar__high__left__hidden">
          <i class="navbar__high__icon__hidden fas fa-align-justify"></i>
        </div>
        <div className="navbar__high__center__hidden">
          <input className="navbar__high__input--hidden" placeholder="Buscar productos, marcas y más..."></input>
        </div>
        <div className="navbar__high__right__hidden">
          <i class="navbar__high__icon__hidden fas fa-shopping-cart"></i>
        </div>
      </div>
      <div className="navbar__high__block__down__hidden">
        <div className="navbar__high__left__send__hidden">
          <i class="navbar__high__icon__left__hidden fas fa-map-marker-alt"></i>
          <h5 className="navbar__high__title__left__hidden style-font">Enviar a Juan Perez</h5>
        </div>
        <div className="navbar__high__center__down__hidden">
          <i class="navbar__high__icon__down__hidden fas fa-angle-right"></i>
        </div>
      </div>
    </div>
  )
}

export default NavbarMovil;