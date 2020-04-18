import React from 'react';
import Mercadolibre from './containers/MercadoLibre'
import Aux from './hoc/aux';

const App = () => {
  return (
    <Aux>
      <main style={{ backgroundColor: '#ebebeb' }}>
        <Mercadolibre />
      </main>
    </Aux>
  )
}

export default App;