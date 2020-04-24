import React, { PureComponent } from 'react';
import './Categories.sass'
import arrayCategories from './data';

class Categories extends PureComponent {

  state = {
    changeBackground: false
  }

  changeBackgrundHandler = (index) => {
    this.setState({ changeBackground: index })
  }

  changeLeaveHandler = () => {
    this.setState({ changeBackground: false })
  }

  render() {

    const { changeBackground } = this.state;

    return (
      <section className="categories" >
        <div className="categories__leyend">
          <h3 className="categories__leyend__title style-font">Categorias Destacadas</h3>
        </div>
        <div className=" categories__blocks">
          {arrayCategories.map((item, index) => {
            return (
              <div key={index} onMouseMove={() => this.changeBackgrundHandler(index)}
                onMouseLeave={this.changeLeaveHandler}
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
}

export default Categories;