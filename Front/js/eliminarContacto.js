

window.onload = function (e) {
	e.preventDefault();


let arregloDatos= {};
		consutarDatos(arregloDatos);
};

consutarDatos = function(data) {
	
var url = endpoint+"contacto/"+parametroId;
console.log(url);
var json = data;
var xhr = new XMLHttpRequest();
xhr.open("GET", url, true);
xhr.setRequestHeader('Content-type','application/json; charset=utf-8');
xhr.onload = function () {
	if (xhr.status == 200 && xhr.response!='') {

       let listaContactos = JSON.parse(xhr.responseText);

       console.log('---'+listaContactos.nombre);
       	
       	 nombre.innerHTML= listaContactos.nombre;

     
	} else {
		alert('Contacto no existe');
       window.location.href = "./ListaContacto.html";
		//msj.innerHTML ="Error al guardar al contacto"
	}
	
}
xhr.send(null);

}

let btnEliminar = document.getElementById('btnEliminar');
btnEliminar.addEventListener('click', function (e) {
	e.preventDefault();
	

let arregloDatos= {
"idContacto":parametroId,	
"nombre": nombre.value

};
		savePersona2(arregloDatos);
});

savePersona2 = function(data) {
var url = endpoint+"contacto/"+parametroId;
var json = JSON.stringify(data);
var xhr = new XMLHttpRequest();
xhr.open("DELETE", url, true);
xhr.setRequestHeader('Content-type','application/json; charset=utf-8');
console.log(url);
xhr.onload = function () {

	if (xhr.status == 200) {
       alert('Contacto eliminado con exito');
       window.location.href = "./ListaContacto.html";
		//msj.innerHTML = "Contacto actualizado con exito"
	} else {
		 alert('Error al eliminar a '+data.nombre);
		 window.location.href = "./ListaContacto.html";
		//msj.innerHTML ="Error al actualizar el contacto"
	}
}

console.log(json);
xhr.send(json);

}



/*savePersona = function(data) {
		console.log(data);
		return fetch(endpoint, {
			method: 'POST',
			body: JSON.stringify(data),
			headers:{ 'Content-Type': 'application/json' }
		});

	}*/



