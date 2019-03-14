package com.agendadigital.app.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.agendadigital.app.bean.Usuario;
import com.agendadigital.app.impl.UsuarioServiceImpl;

@RestController
@RequestMapping("/api")
public class UsuarioRestController  {
	
	@Autowired
	private UsuarioServiceImpl usuarioServiceImpl;
	
	public void setLoginUser(UsuarioServiceImpl usuarioServiceImpl) {
		this.usuarioServiceImpl=usuarioServiceImpl;
	}
	
	@CrossOrigin(origins = "*")
    @GetMapping("/usuario/{usuario}/{password}")
	 public Usuario consultaUsuario(@PathVariable(name = "usuario") String usuario,
	            @PathVariable(name = "password") String password) {
	        System.out.println(usuarioServiceImpl.login(usuario, password));
	        Usuario loginUser = usuarioServiceImpl.login(usuario, password);
	        return loginUser;
	       
	    }

}
