package com.agendadigital.app.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.agendadigital.app.bean.Usuario;
import com.agendadigital.app.interfaces.IUsuario;
import com.agendadigital.app.interfaces.UserRepository;

@Service
public class UsuarioServiceImpl implements IUsuario{

	@Autowired
	private UserRepository  userRepository;
	
	public void setUsuarioRepository(UserRepository userRepository) {
		this.userRepository = userRepository;
	}
	
	
	@Override
	public Usuario login(String usuario, String password) {
		
		Usuario usuario1 = userRepository.loginUsuario(usuario, password);
		
		return usuario1;
	}

}
