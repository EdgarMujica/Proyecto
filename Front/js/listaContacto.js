
window.onload = function (e) {
	e.preventDefault();


let arregloDatos= {};
		consutarDatos2(arregloDatos);
};

consutarDatos2 = function(data) {
	
var url = endpoint+"contacto/";
var json = data;
var xhr = new XMLHttpRequest();
xhr.open("GET", url, true);
xhr.setRequestHeader('Content-type','application/json; charset=utf-8');
xhr.onload = function () {
	if (xhr.status == 200 && xhr.response!='') {

       let listaContactos = JSON.parse(xhr.responseText);

       console.log(listaContactos);
       var html = [];

       for(valor in listaContactos ){
       	console.log('---'+listaContactos[valor].nombre+valor);
       	 html[valor]="<tr role='row'>"+
       	 "<td >"+listaContactos[valor].nombre+"</td>"+
       	 "<td >"+listaContactos[valor].telP+"</td>"+
       	 "<td >"+listaContactos[valor].telO+"</td>"+
       	 "<td >"+listaContactos[valor].emailP+"</td>"+
       	 "<td >"+listaContactos[valor].emailP+"</td>"+
       	 "<td >"+listaContactos[valor].fechaN+"</td>"+
       	 "<td ><a href='editarContacto.html?idContacto="+listaContactos[valor].idContacto+"'><button >Editar</button></a></td>"+
       	 "<td ><a href='eliminarContacto.html?idContacto="+listaContactos[valor].idContacto+"'><button >Eliminar</button></a></td>"+
             "</tr>";
       	  datosTabla.innerHTML += html[valor];
       }
       console.log(html);
       

       
	} else {

		msj.innerHTML ="Error al guardar al contacto"
	}
	
}
xhr.send(null);

}




