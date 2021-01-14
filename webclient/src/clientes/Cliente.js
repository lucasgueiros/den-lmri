import './Cliente.css';
import React from 'react';
import Viewer from '../generics/Viewer.js';
import Endereco from '../enderecos/Endereco.js';

class Cliente extends React.Component {

  render () {
    return (
      <div class-name="cliente">
        <form>
          <div>
            <label htmlFor="razaoSocial">Razão Social: </label>
            <input name="razaoSocial" type="text" value={this.props.entity.razaoSocial || ''} onChange={this.props.onChange} readOnly={!this.props.editing}></input>
          </div>
          <div>
            <label htmlFor="unidade">Unidade: </label>
            <input name="unidade" type="text" value={this.props.entity.unidade || ''} onChange={this.props.onChange} readOnly={!this.props.editing}></input>
          </div>
          <div>
            <label htmlFor="cnpj">CNPJ: </label>
            <input name="cnpj" type="text" value={this.props.entity.cnpj || ''} onChange={this.props.onChange} readOnly={!this.props.editing}></input>
          </div>
          <div>
            <label htmlFor="inscricaoMunicipal">Inscrição Municipal: </label>
            <input name="inscricaoMunicipal" type="text" value={this.props.entity.inscricaoMunicipal || ''} onChange={this.props.onChange} readOnly={!this.props.editing}></input>
          </div>
          <div>
            <label htmlFor="inscricaoEstadual">Inscrição Estadual: </label>
            <input name="inscricaoEstadual" type="text" value={this.props.entity.inscricaoEstadual || ''} onChange={this.props.onChange} readOnly={!this.props.editing}></input>
          </div>

          <h2>Endereço</h2>

        </form>
      </div>
    );
    // Endereço e reponsavelTecnico
    // <Endereco entity={this.props.entity.endereco} editing={this.props.editing} onChange={this.props.onChange}/>
  }
}

export default Cliente;
