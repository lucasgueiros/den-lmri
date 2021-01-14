package br.ufpe.den.gdoin.lmri.restapi.clientes;

import org.springframework.data.rest.core.config.Projection;

import br.ufpe.den.gdoin.lmri.restapi.clientes.enderecos.Endereco;
import br.ufpe.den.gdoin.lmri.restapi.pessoas.Pessoa;

@Projection(types = {Cliente.class} )
public interface ClienteDetalhes {
	public String getRazaoSocial();
	public String getUnidade();
	public String getCnpj();
	public String getInscricaoMunicipal();
	public String getInscricaoEstadual();
	public Endereco getEndereco();
	//public Pessoa reponsavelTecnico;
}
