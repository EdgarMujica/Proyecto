package com.agendadigital.app.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.agendadigital.app.bean.Contacto;
import com.agendadigital.app.impl.ContactoServiceImpl;


@RestController
public class ContactoRestController {
	@Autowired
	private ContactoServiceImpl contactoService;
	    
	public void setContactoService( ContactoServiceImpl contactoService) {
		this.contactoService= contactoService;
	}
	    
	    @CrossOrigin(origins = "*")
	// /api/alumnos es una url que no existe pero la definimos nosotros
	    @GetMapping("/api/contacto")
	    public List<Contacto> consultaContacto(){
	        List<Contacto> contacto = contactoService.consultaContacto();
	        return contacto;
	    }
	    //
	    @CrossOrigin(origins = "*")
	    @GetMapping("/api/contacto/{contactoId}")
	    public Contacto consultaAlumno(@PathVariable(name="contactoId") Long contactoId){
	        return contactoService.consultaContacto(contactoId);
	    }
	    
	    @CrossOrigin(origins = "*")
	    @PostMapping("/api/contacto")
	   public void guardaContacto(@RequestBody Contacto contacto) {
	    	System.out.println(contacto);
	       contactoService.guardaContacto(contacto);
	       System.out.println("Contacto guardado con éxito!");
	   }
	    @CrossOrigin(origins = "*")
	    @DeleteMapping("/api/contacto/{contactoId}")
	    public void borraContacto(@PathVariable(name="contactoId") Long contactoId){
	        contactoService.borraContacto(contactoId);
	       System.out.println("Contacto eliminado con éxito!");
	    }
	    
	    @CrossOrigin(origins = "*")
	    @PutMapping("/api/contacto/{contactoId}")
	   public void actualizaContacto(@RequestBody Contacto contacto,
	           @PathVariable(name="contactoId") Long contactoId) {
	       Contacto cont = contactoService.consultaContacto(contactoId);
	       if(cont != null) {
	           contactoService.actualizarContacto(contacto);
	           System.out.println("Alumno actualizado con éxito!");
	       }
	   }
	   
	    @CrossOrigin(origins = "*")
	    @GetMapping("/api/contacto/search/{nombre}")
		 public Contacto consultaUsuario(@PathVariable(name = "nombre") String nombre) {
		       
		        Contacto contacto = contactoService.buscarContacto(nombre);
		        return contacto;
		       
		    }
	    
	    
	}
