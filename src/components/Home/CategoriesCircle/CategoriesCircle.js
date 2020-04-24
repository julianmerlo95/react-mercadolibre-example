import React, { PureComponent } from 'react';
import arrayCategoriesCircle from './data';
import './CategoriesCircle.sass';

class CategoriesCircle extends PureComponent {


  state = {
    backgroundInitial: 1
  }

  changeBackgroundHandler = (index) => {
    this.setState({ backgroundInitial: index });
  }

  render() {

    const { backgroundInitial } = this.state;

    return (
      <div className="categoriesCircle">
        {arrayCategoriesCircle.map((item, index) => {
          return (
            <div onClick={() => this.changeBackgroundHandler(index)}
              className="categoriesCircle__block" key={index}>
              {/* <i class={`categoriesCircle__block__icon${backgroundInitial === index ? "--show" : ""} ${item.icon}`}></i> */}
              <svg className={`categoriesCircle__block__icon${backgroundInitial === index ? "--show" : ""}`}
                xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24">
                <path d="M0 0h24v24H0V0z" fill="none" /><path className="prueba" d={item.icon} />
              </svg>
              <h3 className={`style-font categoriesCircle__block__title${backgroundInitial === index ? "--show" : ""}`}>
                {item.title}</h3>
            </div>
          )
        })}
      </div >
    )
  }
}

export default CategoriesCircle;