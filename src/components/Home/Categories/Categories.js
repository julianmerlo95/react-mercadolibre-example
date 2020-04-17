import React from 'react';
import './Categories.css'
import arrayCategories from './data';

const Categories = () => {

  return (
    <section className="categories">
      <div className="categories__leyend">
        <h3 className="categories__leyend__title style-font">Categorias Destacadas</h3>
      </div>
      <div className=" categories__blocks">
        {arrayCategories.map((item, index) => {
          return (
            <div key={index}
              className="categories__blocks__category">
              <p><i class={item.icon}></i></p>
              <h3 className="categories__blocks__category__title" >{item.title}</h3>
            </div>
          )
        })}
      </div>

    </section>
  )
}

export default Categories;