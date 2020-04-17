import React from 'react';
import './Discovery.css';
import { arrayDiscovery } from './data';

const Discovery = (props) => {
  return (
    <secction className="discovery">
      <div className="discovery__leyend">
        <h3 className="discovery__leyend__title style-font">{props.leyend}</h3>
      </div>
      <div className="discovery__blocks">
        {arrayDiscovery.map((item, index) => {
          return (
            <div key={index} className={item.textClass}>
              <div className="discovery__blocks__content__colum">
                <h3 className="discovery__blocks__content__title">{item.title}</h3>
                <h4 className="discovery__blocks__content__description">{item.description}</h4>
                <button className="discovery__blocks__content__button">{item.textButton}</button>
              </div>
              <div className="discovery__blocks__content__colum">
                <img className="discovery__blocks__content__img" src={item.image}></img>
              </div>
            </div>
          )
        })}
      </div>
    </secction>

  )
}


export default Discovery;