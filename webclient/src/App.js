import './App.css';
import ClienteNavigator from './clientes/ClienteNavigator.js';
import React from 'react';

class App extends React.Component {

  render () {
    return (
      <div className="App">
        <ClienteNavigator/>
      </div>
    );
  }
}

export default App;
