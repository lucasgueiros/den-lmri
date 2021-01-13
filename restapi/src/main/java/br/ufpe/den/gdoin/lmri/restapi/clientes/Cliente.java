package br.ufpe.den.gdoin.lmri.restapi.clientes;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.OneToOne;

import br.ufpe.den.gdoin.lmri.restapi.clientes.enderecos.Endereco;
import br.ufpe.den.gdoin.lmri.restapi.pessoas.Pessoa;
import lombok.AllArgsConstructor;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.NonNull;
import lombok.RequiredArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Entity
@Getter
@Setter
@EqualsAndHashCode
@ToString
@NoArgsConstructor
@RequiredArgsConstructor
@AllArgsConstructor
public class Cliente {
	@Id
	@GeneratedValue
	private Long id;
	@NonNull
	private String razaoSocial;
	private String unidade;
	@NonNull
	private String cnpj;
	private String inscricaoMunicipal;
	private String inscricaoEstadual;
	@NonNull
	@OneToOne
	private Endereco endereco;
	@NonNull
	@OneToOne
	private Pessoa reponsavelTecnico;

}
