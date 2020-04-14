import React from 'react';
import { Link } from 'react-router-dom';
import { arrayListCenter, arrayListRight, logo, coronavirus } from './data';
import './Navbar.css'

const Navbar = () => {
  return (
    <div className="navbar-container-navbar">
      <div className="navbar-high">
        <img src={logo} className="navbar-img-logo"></img>
        <input className="navbar-input-search"></input>
        <img src={coronavirus} className="navbar-img-coronavirus"></img>
      </div>
      <div className="navbar-down">
        <h5 className="navbar-send">Enviar a ...</h5>
        <ul className="navbar-list-center">
          {arrayListCenter.map((item, index) =>
            <li key={index} className="navbar-item-array-center"><Link to={item.name}>{item.name}</Link></li>)}
        </ul>
        <ul className="navbar-list-right">
          {arrayListRight.map((item, index) =>
            <li key={index} className="navbar-item-array-right"><Link to={item.name}>{item.name}</Link></li>)}
        </ul>
      </div>
    </div>
  )
}

export default Navbar;