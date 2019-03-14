
///////////////////////// GUARDAR
btnSubmit.addEventListener('click', function (e) {
	e.preventDefault();


let arregloDatos= {
"nombre": nombre.value, 
"telP": telO.value, 
"telO": telP.value,
"emailP": emailP.value,
"emailO": emailO.value,
"fechaN": fechaN.value 
};
		savePersona2(arregloDatos);
});

savePersona2 = function(data) {
var url = endpoint+"contacto";
var json = JSON.stringify(data);
var xhr = new XMLHttpRequest();
xhr.open("POST", url, true);
xhr.setRequestHeader('Content-type','application/json; charset=utf-8');
xhr.onload = function () {
	if (xhr.status == 200) {
		alerta();
		//msj.innerHTML = "Contacto guardado con exito"
	} else {
		msj.innerHTML ="Error al guardar al contacto"
	}
}
xhr.send(json);

}


function alerta()
    {
    var mensaje;
    var opcion = confirm("Regitro guardado correctamente,desea guardar otro registro?");
    if (opcion == true) {
       window.location.href = "./index.html";
	} else {
	    window.location.href = "./ListaContacto.html";
	}
	msj.innerHTML = mensaje;
}


/*savePersona = function(data) {
		console.log(data);
		return fetch(endpoint, {
			method: 'POST',
			body: JSON.stringify(data),
			headers:{ 'Content-Type': 'application/json' }
		});

	}*/



