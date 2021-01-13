package br.ufpe.den.gdoin.lmri.restapi.pessoas;

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
public class Pessoa {
	@Id
	@GeneratedValue
	private Long id;
	@NonNull
	private String nome;
	private String telefone;
	private String fax;
	@NonNull
	private String email;
	@NonNull
	private String cargo;

}
