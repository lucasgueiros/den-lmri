import './Pessoa.css';
import React from 'react';
import axios from 'axios';

class Pessoa extends React.Component {
  constructor (props) {
    super(props);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.state = {
      pessoa : {
        nome: '',
        telefone: '',
        fax: '',
        email: '',
        cargo: ''
      }
    };
  }

  componentDidMount () {
    axios.get(this.props.url)
      .then((response) => {
        const pessoa = response.data;
        this.setState({pessoa});
      }, (error) => {
        console.log(error);
      });
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  render () {


    return (
      <div class-name="pessoa">
        <h2>Pessoa</h2>
        <form>
          <div>
            <label htmlFor="nome">Nome: </label>
            <input name="nome" type="text" value={this.state.pessoa.nome} onChange={this.handleInputChange} readOnly></input>
          </div>
          <div>
            <label htmlFor="telefone">Telefone: </label>
            <input id="telefone" type="tel" value={this.state.pessoa.telefone} onChange={this.handleInputChange} readOnly></input>
          </div>
          <div>
            <label htmlFor="fax">Fax: </label>
            <input id="fax" type="tel" value={this.state.pessoa.fax} onChange={this.handleInputChange} readOnly></input>
          </div>
          <div>
            <label htmlFor="email">E-mail: </label>
            <input id="email" type="email" value={this.state.pessoa.email} onChange={this.handleInputChange} readOnly></input>
          </div>
          <div>
            <label htmlFor="cargo">Cargo: </label>
            <input id="cargo" type="text" value={this.state.pessoa.cargo} onChange={this.handleInputChange} readOnly></input>
          </div>
        </form>
      </div>
    );
  }
}

export default Pessoa;
