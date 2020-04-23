import React, { useState } from 'react';
import arrayCategoriesCircle from './data';
import './CategoriesCircle.sass';

const CategoriesCircle = () => {

  const [backgroundInitial, setBackgroundInitial] = useState(1);

  const changeBackgroundHandler = (index) => {
    setBackgroundInitial(index);
  }



  return (
    <div className="categoriesCircle">
      {arrayCategoriesCircle.map((item, index) => {
        return (
          <div onClick={() => changeBackgroundHandler(index)}
            className="categoriesCircle__block" key={index}>
            <i class={`categoriesCircle__block__icon${backgroundInitial === index ? "--show" : ""} ${item.icon}`}></i>
            <h3 className={`categoriesCircle__block__title${backgroundInitial === index ? "--show" : ""}`}>
              {item.title}</h3>
          </div>
        )
      })}
    </div >
  )
}

export default CategoriesCircle;