import './Endereco.css';
import React from 'react';

class Endereco extends React.Component {

  render () {
    return (
      <div class-name="endereco">
        <form>
          <div>
            <label htmlFor="logradouro">Logradouro: </label>
            <input name="logradouro" type="text" value={this.props.entity.logradouro || ''} onChange={this.props.onChange} readOnly={!this.props.editable}></input>
          </div>
          <div>
            <label htmlFor="bairro">Bairro: </label>
            <input name="bairro" type="text" value={this.props.entity.bairro || ''} onChange={this.props.onChange} readOnly={!this.props.editable}></input>
          </div>
          <div>
            <label htmlFor="cidade">Cidade: </label>
            <input name="cidade" type="text" value={this.props.entity.cidade || ''} onChange={this.props.onChange} readOnly={!this.props.editable}></input>
          </div>
          <div>
            <label htmlFor="estado">Estado: </label>
            <input name="estado" type="text" value={this.props.entity.estado || ''} onChange={this.props.onChange} readOnly={!this.props.editable}></input>
          </div>
          <div>
            <label htmlFor="cep">CEP: </label>
            <input name="cep" type="text" value={this.props.entity.cep || ''} onChange={this.props.onChange} readOnly={!this.props.editable}></input>
          </div>
        </form>
      </div>
    );
  }
}

export default Endereco;
