import React from 'react';
import MarcadoLibre from './containers/MercadoLibre';
import Aux from './hoc/aux';

function App() {
  return (
    <Aux>
      <main style={{ backgroundColor: '#ebebeb', width: '100%' }}>
        <MarcadoLibre />
      </main>
    </Aux>
  );
}

export default App;
