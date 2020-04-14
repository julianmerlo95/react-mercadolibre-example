import React from 'react';
import MarcadoLibre from './containers/MercadoLibre';
import Aux from './hoc/aux';

function App() {
  return (
    <Aux>
      <main style={{ backgroundColor: '#ebebeb' }}>
        <MarcadoLibre />
      </main>
    </Aux>
  );
}

export default App;
