

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

       console.log(listaContactos);
       	
       	 nombre.value = listaContactos.nombre;
       	 telP.value= listaContactos.telP
       	 telO.value=  listaContactos.telO
       	 emailP.value= listaContactos.emailP
       	 emailO.value= listaContactos.emailP
       	 fechaN.value= listaContactos.fechaN
     
	} else {

		msj.innerHTML ="Error al guardar al contacto"
	}
	
}
xhr.send(null);

}


btnEdiar.addEventListener('click', function (e) {
	e.preventDefault();
	

let arregloDatos= {
"idContacto":parametroId,	
"nombre": nombre.value, 
"telP": telO.value, 
"telO": telP.value,
"emailP": emailP.value,
"emailO": emailO.value,
"fechaN": fechaN.value ,
"idUsuario": 1 
};
		savePersona2(arregloDatos);
});

savePersona2 = function(data) {
var url = endpoint+"contacto/"+parametroId;
var json = JSON.stringify(data);
var xhr = new XMLHttpRequest();
xhr.open("PUT", url, true);
xhr.setRequestHeader('Content-type','application/json; charset=utf-8');
console.log(url);
xhr.onload = function () {

	if (xhr.status == 200) {
       alert('Contacto actualizado con exito');
         window.location.href = "./ListaContacto.html";
		//msj.innerHTML = "Contacto actualizado con exito"
	} else {
		 alert('Error al actualizar el contacto');
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



