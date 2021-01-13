import './App.css';
import React from 'react';
import Pessoa from './pessoas/Pessoa.js';
import axios from 'axios';

class App extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      pessoas: [],
    };
    this.nextPessoa = this.nextPessoa.bind(this);
    this.prevPessoa = this.prevPessoa.bind(this);
  }

  componentDidMount () {
    axios.get("/pessoas/")
      .then( (response) => {
        this.setState({
          pessoas: response.data._embedded.pessoas,
        });
      }, (error) => {
        console.log(error);
      });
  }

  nextPessoa() {
    this.setState({ pessoa : this.state.pessoa + 1});
  }

  prevPessoa() {
    this.setState({ pessoa : this.state.pessoa - 1});
  }

  render () {
    if(this.state.pessoas.length == 0) {
      return (
        <div className="App">
          <p>Nenhuma pessoa cadastrada</p>
        </div>
      );
    } else {
      return (
        <div className="App">
          <Pessoa url={"/pessoas/" + this.state.pessoa} />
          <button onClick={this.prevPessoa}>Anterior</button>
          <button onClick={this.nextPessoa}>Próximo</button>
        </div>
      );
    }

  }

}

export default App;
