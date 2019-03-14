package com.agendadigital.app.interfaces;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.agendadigital.app.bean.Contacto;
;

public interface ContactoRepository extends JpaRepository<Contacto, Long> {
	@Query("select cont from Contacto cont where cont.nombre=:nombre")
	Contacto buscarContacto(String nombre);
}
