package com.agendadigital.app.impl;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.agendadigital.app.bean.Contacto;
import com.agendadigital.app.interfaces.ContactoRepository;
import com.agendadigital.app.interfaces.IContacto;

@Service
public class ContactoServiceImpl implements IContacto{
	
	@Autowired
	private ContactoRepository contactoRepository;
	
	public void setContactoRepository( ContactoRepository contactoRepository) {
		this.contactoRepository= contactoRepository;
	}

	public List<Contacto> consultaContacto() {
		List<Contacto>contacto = contactoRepository.findAll();
		return contacto;
	}

	public Contacto consultaContacto(Long contactoId) {
		Optional<Contacto> contacto= contactoRepository.findById(contactoId);
		return contacto.get();
	}	
	
	public void guardaContacto(Contacto contacto) {
		contactoRepository.save(contacto);

	}
	
	public void borraContacto(Long contactoId) {
		contactoRepository.deleteById(contactoId);

	}

	public void actualizarContacto(Contacto contacto) {
		contactoRepository.save(contacto);

	}

	@Override
	public Contacto buscarContacto(String nombre) {
		Contacto contacto = contactoRepository.buscarContacto(nombre);
		return contacto;
	}

	

	
	
	

}
