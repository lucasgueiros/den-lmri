package br.ufpe.den.gdoin.lmri.restapi.clientes.enderecos;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

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
public class Endereco {
	@Id
	@GeneratedValue
	private Long id;
	@NonNull
	private String logradouro;
	private String bairro;
	@NonNull
	private String cidade;
	@NonNull
	private String estado;
	@NonNull
	private String cep;

}
