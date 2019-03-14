///////////////// LOGIN
let endpoint = "http://localhost:8080/api/";
const btnEntrar = document.getElementById('btnEntrar');
const msj = document.getElementById('msj');

btnEntrar.addEventListener('click', function (e) {
	e.preventDefault();
	
var usuario = document.getElementById("usuario").value;
var pass = document.getElementById("pass").value;

var ls = localStorage;

let arregloDatos= {
"user": usuario, 
"pass": pass
};
		consutarDatos(arregloDatos);
});

consutarDatos = function(data) {
	
var url = endpoint+"usuario/"+data.user+"/"+data.pass;
var json = data;
var xhr = new XMLHttpRequest();
xhr.open("GET", url, true);
xhr.setRequestHeader('Content-type','application/json; charset=utf-8');
if(usuario.value=='' || pass.value==''){
		msj.innerHTML ="<div style='color:red;'>Completa el formulario</div>"
return;
	}
xhr.onload = function () {

	
	if (xhr.status == 200 && xhr.response!='') {
        console.log(xhr.response);
        window.location.href = "./ListaContacto.html";
	} else {

		msj.innerHTML ="<div style='color:red;'>Verifica tus datos</div>"
	}
}
xhr.send(null);

}




 class crearBotonLogin extends HTMLElement {

}
 customElements.define('btn-enviar', crearBotonLogin);




