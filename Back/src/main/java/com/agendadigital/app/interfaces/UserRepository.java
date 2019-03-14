package com.agendadigital.app.interfaces;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.agendadigital.app.bean.Usuario;

@Repository
public interface UserRepository extends JpaRepository<Usuario,Long>{

	@Query("select user from Usuario user where user.user=:usuario and user.pass=:password")
	Usuario loginUsuario(String usuario,String password);

}
