package br.ufpe.den.gdoin.lmri.restapi.pessoas;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.web.bind.annotation.CrossOrigin;

@CrossOrigin
public interface PessoaRepository extends JpaRepository<Pessoa, Long> {

}
