package br.ufpe.den.gdoin.lmri.restapi.clientes;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMethod;

@Repository
@CrossOrigin (methods = {RequestMethod.GET,RequestMethod.HEAD,RequestMethod.POST,RequestMethod.PATCH,RequestMethod.PUT,RequestMethod.DELETE,RequestMethod.TRACE,RequestMethod.OPTIONS})
public interface ClienteRepository extends JpaRepository<Cliente, Long> {

}
