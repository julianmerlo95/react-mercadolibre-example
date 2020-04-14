import React from 'react';
import './Discovery.css';


const Discovery = (props) => {
  return (
    <React.Fragment>
      <h3 className="discovery-leyend">{props.leyend}</h3>
      <secction className="container-discovery">
        <div className="discovery-left">
          <div>
            <h3>!Nuevo filtro!</h3>
            <h4>Envio con normalidad</h4>
            <button>Ver mas</button>
          </div>
          <div>
            <img src={props.imgLeft}></img>
          </div>
        </div>
        <div className="discovery-right">
          <div>
            <h3>codo a codo</h3>
            <h4>!sumate donando</h4>
            <button>Ver mas</button>
          </div>
          <div>
            <img src={props.imgRight}></img>
          </div>
        </div>
      </secction>
    </React.Fragment>

  )
}


export default Discovery;