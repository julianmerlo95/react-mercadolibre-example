import React from 'react';
import './Navbar.css'
import { NavLink } from 'react-router-dom';
import { arrayListDownCenter, arrayListDownRight, logo, coronavirus } from './data';

const Navbar = () => {
  return (
    <nav className="navbar">

      <div className="navbar__high">
        <div className="navbar__high__input--meli">
          <img src={logo} className="navbar__high__img--logo"></img>
        </div>
        <div className="navbar__high__block">
          <input className="navbar__high__input" placeholder="Buscar productos, marcas y más..."></input>
          <div className="navbar__high__block__icon">
            <i class="navbar__high__icon fas fa-search"></i>
          </div>
        </div>
        <div className="navbar__high__input--coronavirus">
          <img src={coronavirus} className=" navbar__high__img--coronavirus"></img>
        </div>
      </div>
      <div className="navbar__down">
        <div className="navbar__down__send">
          <div>
            <i class="navbar__down__send__icon fas fa-map-marker-alt"></i>
          </div>
          <div className="navbar__down__block">
            <h5 className="navbar__down__block__description">Enviar a Juan Perez</h5>
            <h5 className="navbar__down__block__title">Enviar a Rosello</h5>
          </div>
        </div>
        <ul className="navbar__down__list--center">
          {arrayListDownCenter.map((item, index) =>
            <li key={index} className="navbar__down__list--center__item">
              <NavLink to=""> {item.name} <i class={`navbar__down__list--center__icon ${item.icon}`}>
              </i></NavLink></li>)}
        </ul>
        <ul className="navbar__down__list--right">
          {arrayListDownRight.map((item, index) =>
            <li key={index} className="navbar__down__list--right__item">
              <i class={`navbar__down__list--center__icon--user ${item.iconUser}`}></i>
              <NavLink to={item.name}> {item.name} <i class={`navbar__down__list--center__icon ${item.icon}`}>
              </i></NavLink></li>)}
        </ul>
      </div>

    </nav>
  )
}

export default Navbar;