import React, { useContext } from 'react';
import Mercadolibre from './containers/MercadoLibre'
import { Context } from './context/Context';
import Aux from './hoc/aux';
import './App.sass';

const App = () => {

  const context = useContext(Context);
  const { toggleMood } = context;

  return (
    <Aux>
      <main className={`app${toggleMood === true ? '__night' : ""}`}>
        <Mercadolibre />
      </main>
    </Aux>
  )
}

export default App;