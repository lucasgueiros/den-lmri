import './Cliente.css';
import React from 'react';
import Viewer from '../generics/Viewer.js';
import Endereco from '../enderecos/Endereco.js';

class Cliente extends React.Component {

  render () {
    let endereco = '';
    if(this.props.entity._links) {
      endereco = <Viewer url={this.props.entity._links.endereco.href || ''} entityComponent={Endereco} entityName="endereco"/>;
    }


    return (
      <div class-name="cliente">
        <form>
          <div>
            <label htmlFor="razaoSocial">Razão Social: </label>
            <input name="razaoSocial" type="text" value={this.props.entity.razaoSocial || ''} onChange={this.props.onChange} readOnly={!this.props.editable}></input>
          </div>
          <div>
            <label htmlFor="unidade">Unidade: </label>
            <input name="unidade" type="text" value={this.props.entity.unidade || ''} onChange={this.props.onChange} readOnly={!this.props.editable}></input>
          </div>
          <div>
            <label htmlFor="cnpj">CNPJ: </label>
            <input name="cnpj" type="text" value={this.props.entity.cnpj || ''} onChange={this.props.onChange} readOnly={!this.props.editable}></input>
          </div>
          <div>
            <label htmlFor="inscricaoMunicipal">Inscrição Municipal: </label>
            <input name="inscricaoMunicipal" type="text" value={this.props.entity.inscricaoMunicipal || ''} onChange={this.props.onChange} readOnly={!this.props.editable}></input>
          </div>
          <div>
            <label htmlFor="inscricaoEstadual">Inscrição Estadual: </label>
            <input name="inscricaoEstadual" type="text" value={this.props.entity.inscricaoEstadual || ''} onChange={this.props.onChange} readOnly={!this.props.editable}></input>
          </div>

          <h2>Endereço</h2>
          {endereco}
        </form>
      </div>
    );
    // Endereço e reponsavelTecnico
  }
}

export default Cliente;
