import React from 'react';
import './MenuNavbar.sass'
import { logoUser, arrayList, arrayListTwo, arrayListThree } from './data';

const MenuNavbar = () => {
  return (
    <div className="menu">
      <div className="menu__date__personal">
        <div className="menu__date__personal__left">
          <img alt="img navbar" className="menu__date__personal__left__img" src={logoUser}></img>
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
                <svg className="menu__list__ul__li__img" xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0V0z" fill="none" /><path d={item.icon} /></svg>
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
                <svg className="menu__list__ul__li__img" xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0V0z" fill="none" /><path d={item.icon} /></svg>
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
                <svg className="menu__list__ul__li__img" xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0V0z" fill="none" /><path d={item.icon} /></svg>
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