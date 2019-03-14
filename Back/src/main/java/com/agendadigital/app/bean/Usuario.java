package com.agendadigital.app.bean;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;


@Entity
@Table(name="Usuario")
public class Usuario {

@Id
@GeneratedValue(strategy=GenerationType.IDENTITY)
private long idUsuario;

@Column(name="user")
private String user;

@Column(name="pass")
private String pass;



public Usuario() {
	super();
}


public Usuario(long idUsuario, String user, String pass) {
	super();
	this.idUsuario = idUsuario;
	this.user = user;
	this.pass = pass;
}



public long getIdUsuario() {
	return idUsuario;
}

public void setIdUsuario(long idUsuario) {
	this.idUsuario = idUsuario;
}

public String getUser() {
	return user;
}

public void setUser(String user) {
	this.user = user;
}

public String getPass() {
	return pass;
}

public void setPass(String pass) {
	this.pass = pass;
}





	
}
