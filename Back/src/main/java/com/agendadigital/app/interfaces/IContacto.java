package com.agendadigital.app.interfaces;

import java.util.List;

import com.agendadigital.app.bean.Contacto;


public interface IContacto {

public List <Contacto> consultaContacto();
	
	public Contacto consultaContacto(Long contactoId);
	
	public void guardaContacto(Contacto contacto);
	
	public void borraContacto (Long contactoId);
	
	public void actualizarContacto(Contacto contacto);
	
	public Contacto buscarContacto(String nombre);
	
}
