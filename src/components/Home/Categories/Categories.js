import React, { useState } from 'react';
import './Categories.css'
import arrayCategories from './data';

const Categories = () => {

  const [changeBackground, setChangeBackground] = useState(false)

  const changeBackgrundHandler = (index) => {
    setChangeBackground(index)
  }

  const changeLeaveHandler = () => {
    setChangeBackground(false)
  }

  return (
    <section className="categories">
      <div className="categories__leyend">
        <h3 className="categories__leyend__title style-font">Categorias Destacadas</h3>
      </div>
      <div className=" categories__blocks">
        {arrayCategories.map((item, index) => {
          return (
            <div key={index} onMouseMove={() => changeBackgrundHandler(index)}
              onMouseLeave={changeLeaveHandler}
              className={`categories__blocks__category${changeBackground === index ? '--changeBackground' : ""}`}>
              <p className={`categories__blocks__category__icon${changeBackground === index ? '--changeBackground' : ""}`}>
                <i className={item.icon}></i></p>
              <h3 className={`style-font categories__blocks__category__title${changeBackground === index ? '--changeBackground' : ""}`}
              >{item.title}</h3>
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default Categories;