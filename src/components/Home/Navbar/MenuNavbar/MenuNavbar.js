import React from 'react';
import './MenuNavbar.sass'
import { img, arrayList, arrayListTwo, arrayListThree } from './data';

const MenuNavbar = () => {
  return (
    <div className="menu">
      <div className="menu__date__personal">
        <div className="menu__date__personal__left">
          <img className="menu__date__personal__left__img" src={img}></img>
        </div>
        <div className="menu__date__personal__right">
          <h3 className="menu__date__personal__right__title style-font">Hola Juan</h3>
          <h2 className="menu__date__personal__right__mercado__pago">Nivel 3 - Mercado Puntos</h2>
        </div>
      </div>
      <div className="menu__list">
        <ul className="menu__list__ul">
          {arrayList.map((item, index) => {
            return (
              <li ke={index} className="menu__list__ul__li">
                <i class={`menu__list__ul__li__img ${item.icon}`}></i>
                <h3 className="menu__list__ul__li__title style-font">{item.title}</h3>
              </li>
            )
          })}
        </ul>
      </div>
      <div className="menu__list">
        <ul className="menu__list__ul">
          {arrayListTwo.map((item, index) => {
            return (
              <li ke={index} className="menu__list__ul__li">
                <i class={`menu__list__ul__li__img ${item.icon}`}></i>
                <h3 className="menu__list__ul__li__title style-font">{item.title}</h3>
              </li>
            )
          })}
        </ul>
      </div>
      <div className="menu__list">
        <ul className="menu__list__ul">
          {arrayListThree.map((item, index) => {
            return (
              <li ke={index} className="menu__list__ul__li">
                <i class={`menu__list__ul__li__img ${item.icon}`}></i>
                <h3 className="menu__list__ul__li__title style-font">{item.title}</h3>
              </li>
            )
          })}
        </ul>
      </div>
    </div>
  )
}


export default MenuNavbar;