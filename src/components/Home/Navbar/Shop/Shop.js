import React from 'react';
import './Shop.sass'

const Shop = () => {
  return (
    <div className="shop">
      <div className="shop__title">
        <h3 className="style-font shop__title__cart">Carrito(0)</h3>
        <h3 className="style-font">Guardados(0)</h3>
      </div>
      <div className="shop__center">
        <div>
          <h3 className="style-font shop__center__title">Tu carrito esta vacio</h3>
          <h4 className="style-font shop__center__description">¿No sabés qué comprar? ¡Miles de productos te esperan!
          <span className="style-font shop__center__span"> Comienza a llenarlo ahora</span>
          </h4>
        </div>
      </div>
    </div>
  )
}

export default Shop;