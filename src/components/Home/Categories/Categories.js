import React from 'react';
import './Categories.css'
import arrayCategories from './data';

const Categories = () => {
  return (
    <section>
      <h3>Categorias Destacadas</h3>
      <div className="container-categories">
        {arrayCategories.map((item, index) => {
          return (
            <div key={index} className="container-categories-item">
              <p><i class={item.icon}></i></p>
              <h3>{item.title}</h3>
            </div>
          )
        })}
      </div>

    </section>
  )
}

export default Categories;