
btnSearch.addEventListener('click', function (e) {
	e.preventDefault();
var buscarNombre = document.getElementById("txtBuscarNombre").value;

let arregloDatos= {
      "buscarNombre":buscarNombre
};
		consutarDatos(arregloDatos);
});

consutarDatos= function(data) {

var url = endpoint+"contacto/search/"+data.buscarNombre;
console.log(url);
var json = data;
var xhr = new XMLHttpRequest();
xhr.open("GET", url, true);
xhr.setRequestHeader('Content-type','application/json; charset=utf-8');
xhr.onload = function () {
	if (xhr.status == 200 && xhr.response!='') {

       let listaContactos = JSON.parse(xhr.responseText);

       console.log(listaContactos);
       var html = [];

  
       	 html="<tr role='row'>"+
       	 "<td >"+listaContactos.nombre+"</td>"+
       	 "<td >"+listaContactos.telP+"</td>"+
       	 "<td >"+listaContactos.telO+"</td>"+
       	 "<td >"+listaContactos.emailP+"</td>"+
       	 "<td >"+listaContactos.emailP+"</td>"+
       	 "<td >"+listaContactos.fechaN+"</td>"+
       	 "<td ><a href='editarContacto.html?idContacto="+listaContactos.idContacto+"'><button >Editar</button></a></td>"+
       	 "<td ><a href='eliminarContacto.html?idContacto="+listaContactos.idContacto+"'><button >Eliminar</button></a></td>"+
             "</tr>";
       	  datosTabla.innerHTML = html;
       
       console.log(html);
       

       
	} else {

		msj.innerHTML ="sin regitros"
	}
	
}
xhr.send(null);

}



