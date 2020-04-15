import React from 'react';
import { Link } from 'react-router-dom';
import { arrayListCenter, arrayListRight, logo, coronavirus } from './data';
import './Navbar.css'

const Navbar = () => {
  return (
    <div className="navbar-container-navbar">
      <div className="navbar-high">
        <i class="fas fa-align-justify icon-hidden-one"></i>
        <img src={logo} className="navbar-img-logo"></img>
        <input className="navbar-input-search"></input>
        <img src={coronavirus} className="navbar-img-coronavirus"></img>
        <div className="navbar-burguer">{/*START HIDDEN*/}
          <i class="fas fa-shopping-cart icon-hidden-two"></i>
        </div>{/*END HIDDEN*/}
      </div>
      <div className="navbar-down">
        <h5 className="navbar-send">Enviar a ...</h5>
        <div className="navbar-send hidden"> {/*START HIDDEN*/}
          <div>
            <h4><i class="fas fa-map-marker-alt"></i></h4>
            <h5 className="">Enviar a Juan Perez Rosello 245</h5>
          </div>
          <div>
            <h4><i class="fas fa-angle-right"></i></h4>
          </div>
        </div> {/*END HIDDEN*/}
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