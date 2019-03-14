let endpoint = "http://localhost:8080/api/";
let arregloDatos={}
let url ;
let json;
let xhr ;
let datosTabla = document.getElementById('tbDatos');
let Tabla = document.getElementById('idTabla');
let listaContactos;
let params = new URLSearchParams(document.location.search.substring(1));
let parametroId = params.get("idContacto"); 

let nombre = document.getElementById("nombre");
let telP = document.getElementById("telP");
let telO = document.getElementById("telO");
let emailP = document.getElementById("emailP");
let emailO = document.getElementById("emailO");
let fechaN = document.getElementById("fecha-nacimiento");	
let btnEdiar = document.getElementById('btnEdiar');
const btnSubmit = document.getElementById('guardarRegistro');
let btnSearch = document.getElementById('btnSearch');
const msj = document.getElementById('msj');
