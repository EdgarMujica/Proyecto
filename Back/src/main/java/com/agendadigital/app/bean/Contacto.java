package com.agendadigital.app.bean;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="Contacto")
public class Contacto {
	
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private long idContacto;

	@Column(name="nombre")
	private String nombre;

	@Column(name="telP")
	private Long telP;
	
	@Column(name="telO")
	private Long telO;
	
	@Column(name="emailP")
	private String emailP;
	
	@Column(name="emailO")
	private String emailO;
	
	@Column(name="fechaN")
	private String fechaN;
	
	@Column(name="idUsuario")
	private Long idUsuario;

		
	public Contacto() {
		super();
	}

	

	public Contacto(long idContacto, String nombre, Long telP, Long telO, String emailP, String emailO, String fechaN,
			Long idUsuario) {
		super();
		this.idContacto = idContacto;
		this.nombre = nombre;
		this.telP = telP;
		this.telO = telO;
		this.emailP = emailP;
		this.emailO = emailO;
		this.fechaN = fechaN;
		this.idUsuario = idUsuario;
	}



	public long getIdContacto() {
		return idContacto;
	}

	public void setIdContacto(long idContacto) {
		this.idContacto = idContacto;
	}

	public String getNombre() {
		return nombre;
	}

	public void setNombre(String nombre) {
		this.nombre = nombre;
	}

	public Long getTelP() {
		return telP;
	}

	public void setTelP(Long telP) {
		this.telP = telP;
	}

	public Long getTelO() {
		return telO;
	}

	public void setTelO(Long telO) {
		this.telO = telO;
	}

	public String getEmailP() {
		return emailP;
	}

	public void setEmailP(String emailP) {
		this.emailP = emailP;
	}

	public String getEmailO() {
		return emailO;
	}

	public void setMailO(String emailO) {
		this.emailO = emailO;
	}

	public String getFechaN() {
		return fechaN;
	}

	public void setFechaN(String fechaN) {
		this.fechaN = fechaN;
	}



	public Long getInUsuario() {
		return idUsuario;
	}



	public void setInUsuario(Long inUsuario) {
		this.idUsuario = inUsuario;
	}



	public void setEmailO(String emailO) {
		this.emailO = emailO;
	}
	
	

}
