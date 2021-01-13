import './App.css';
import Cliente from './clientes/Cliente.js';
import Navigator from './generics/Navigator.js'
import React from 'react';

class App extends React.Component {

  render () {
    return (
      <div className="App">
        <Navigator
          entityComponent={Cliente}
          entityName="cliente"
          entityUrl="clientes"/>
      </div>
    );
  }
}

export default App;
