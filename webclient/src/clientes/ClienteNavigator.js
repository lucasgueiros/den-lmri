import './ClienteNavigator.css';
import React from 'react';
import Endereco from '../enderecos/Endereco.js';
import Navigator from '../generics/Navigator.js';
import Cliente from './Cliente.js';
import axios from 'axios';
import FunctionalCrud from '../generics/FunctionalCrud.js';

class ClienteNavigator extends React.Component {

  constructor(props) {
    super(props);
  }

  render () {
    return (
      <Navigator crud={new FunctionalCrud("clientes", this.getConsumer)}>
        <Cliente/>
      </Navigator>
    );
  }

  getConsumer (cliente) {
    return {...cliente};
  }

}

export default ClienteNavigator;
