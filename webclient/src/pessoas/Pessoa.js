import './Pessoa.css';
import React from 'react';

class Pessoa extends React.Component {

  render () {
    return (
      <div class-name="pessoa">
        <h2>Pessoa</h2>
        <form>
          <div>
            <label htmlFor="nome">Nome: </label>
            <input name="nome" type="text" value={this.props.entity.nome || ''} onChange={this.props.onChange} readOnly={!this.props.editable}></input>
          </div>
          <div>
            <label htmlFor="telefone">Telefone: </label>
            <input name="telefone" type="tel" value={this.props.entity.telefone || ''} onChange={this.props.onChange} readOnly={!this.props.editable}></input>
          </div>
          <div>
            <label htmlFor="fax">Fax: </label>
            <input name="fax" type="tel" value={this.props.entity.fax || ''} onChange={this.props.onChange} readOnly={!this.props.editable}></input>
          </div>
          <div>
            <label htmlFor="email">E-mail: </label>
            <input name="email" type="email" value={this.props.entity.email || ''} onChange={this.props.onChange} readOnly={!this.props.editable}></input>
          </div>
          <div>
            <label htmlFor="cargo">Cargo: </label>
            <input name="cargo" type="text" value={this.props.entity.cargo || ''} onChange={this.props.onChange} readOnly={!this.props.editable}></input>
          </div>
        </form>
      </div>
    );
  }
}

export default Pessoa;
