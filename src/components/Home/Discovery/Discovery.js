import React from 'react';
import './Discovery.css';
import { arrayDiscovery } from './data';

const Discovery = (props) => {
  return (
    <React.Fragment>
      <h3 className="discovery-leyend style-font">{props.leyend}</h3>
      <secction className="container-discovery ">
        {arrayDiscovery.map((item, index) => {
          return (
            <div key={index} className={item.textClass}>
              <div>
                <h3>{item.title}</h3>
                <h4>{item.description}</h4>
                <button>{item.textButton}</button>
              </div>
              <div>
                <img src={item.image}></img>
              </div>
            </div>
          )
        })}
      </secction>
    </React.Fragment>
  )
}


export default Discovery;