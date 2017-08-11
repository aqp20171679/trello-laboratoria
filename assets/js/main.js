var tareas = document.getElementById('tarea');

var tarea = document.createElement('div');
	tarea.setAttribute('class','tarea')
var addTarea = document.createElement('button');
	addTarea.setAttribute('class','add')
	var text = document.createTextNode("Añadir una lista...")
	addTarea.appendChild(text);
tarea.appendChild(addTarea);
tareas.appendChild(tarea);

addTarea.addEventListener('click',agregarTarea);

function agregarTarea(){
	tareas.removeChild(tarea);
	var entrada = document.createElement('div');
		entrada.setAttribute('class','tareas');
		//entrada.setAttribute('id','entrada');
	var nuevaTarea = document.createElement('input');
		nuevaTarea.setAttribute('placeholder', 'Añadir una lista...');
		//nuevaTarea.setAttribute('class','nombreTarea');
	var botones = document.createElement('div');
	var agregar = document.createElement('button');
		agregar.innerHTML = "Guardar"
	var borrar = document.createElement('button');		
		borrar.innerHTML = "x";
	botones.appendChild(agregar);
	botones.appendChild(borrar);
	entrada.appendChild(nuevaTarea);
	entrada.appendChild(botones);
	tareas.appendChild(entrada);

	agregar.addEventListener('click', function(){
		if(nuevaTarea.value != ''){
			var contenedor = document.createElement('div');
				contenedor.setAttribute('class','tareas');
			var nombre = document.createElement('div');
			var nombreTarea = document.createTextNode(nuevaTarea.value)
				nombre.appendChild(nombreTarea) ;
			var listaTarjeta = document.createElement('div');
			var addTarjeta = document.createElement('button');
				addTarjeta.setAttribute('class','add');
			var textTj = document.createTextNode("Añadir una tarjeta...")
				addTarjeta.appendChild(textTj);
			contenedor.appendChild(nombre);
			contenedor.appendChild(listaTarjeta);
			contenedor.appendChild(addTarjeta);
			tareas.replaceChild(contenedor,entrada);
			tareas.appendChild(tarea);
			agregarTarea();				
		}
		addTarjeta.addEventListener('click',addTJ)

		function addTJ(){
			contenedor.removeChild(addTarjeta);;
			var contenedorTJ= document.createElement('div');
			var nuevaTarjeta = document.createElement('input');
				nuevaTarjeta.setAttribute('placeholder', 'Añadir una tarjeta...');
				//nuevaTarea.setAttribute('class','nombreTarea');
			var botonesTJ = document.createElement('div');
			var agregarTJ = document.createElement('button');
				agregarTJ.innerHTML = "Añadir"
			var borrarTJ = document.createElement('button');		
				borrarTJ.innerHTML = "x";
			botonesTJ.appendChild(agregarTJ);
			botonesTJ.appendChild(borrarTJ);
			contenedorTJ.appendChild(nuevaTarjeta);
			contenedorTJ.appendChild(botonesTJ);
			contenedor.appendChild(contenedorTJ);

			agregarTJ.addEventListener('click', function(){
				if(nuevaTarjeta.value != ''){
					var contenedorTarjeta = document.createElement('div');
						contenedorTarjeta.setAttribute('class','tareas');
					var nombreTarjeta = document.createElement('div');
					var nombreTJ = document.createTextNode(nuevaTarea.value)
						nombreTarjeta.appendChild(nombreTJ);
					contenedorTarjeta.appendChild(nombreTarjeta);
					contenedorTarjeta.appendChild(listaTarjeta);
					contenedorTarjeta.appendChild(addTarjeta);
					contenedor.replaceChild(contenedorTarjeta,contenedorTJ);
					contenedor.appendChild(addTarjeta);
					addTJ();				
				}
			});
		};
	});

}	


/*Intento 1
var titulo = document.getElementById('nombre-tarea');
var listaTareas = document.getElementById('lista-tarjeta');
var addTareas = document.getElementById('add-tarjeta');
var tareas = document.getElementById('tarea');
var i=0 //id de cada div

function crearDiv(){
	var tarea = document.createElement('div');
		tarea.setAttribute('id',i)
	var first = document.createElement('button');
		first.setAttribute('id','crea'+i)
		first.innerHTML="Añadir una lista...";
	tarea.appendChild(first);
	tareas.appendChild(tarea);	
}
crearDiv();

var tareaCreada = document.getElementById(i);
var buttonCreado = document.getElementById('crea'+i);
//var listaTareasP = document.getElementById('lista-tarea');

buttonCreado.onclick = function(){
	//var evento = event.target;
	var entrada = document.createElement('div');
		entrada.setAttribute('class','tareas');
		entrada.setAttribute('id','entrada'+i);
	var nuevaTarea = document.createElement('input');
		nuevaTarea.setAttribute('placeholder', 'Añadir una lista...');
		nuevaTarea.setAttribute('id','nombreTarea'+i);
	var botones = document.createElement('div');
	var agregar = document.createElement('button');
		agregar.setAttribute('id','agregar'+i);
		agregar.setAttribute('onclick','guardar()')
		agregar.innerHTML = "Guardar"
	var borrar = document.createElement('button');
		borrar.setAttribute('id','borrar'+i);
		borrar.innerHTML = "x";
	botones.appendChild(agregar);
	botones.appendChild(borrar);
	entrada.appendChild(nuevaTarea);
	entrada.appendChild(botones);
	tareaCreada.appendChild(entrada);
	//remueve el boton creado
	tareaCreada.removeChild(buttonCreado);
}
//var guardar = document.getElementById('agregar');
function guardar(){
	var nombreTarea = document.getElementById('nombreTarea'+i);
	var entradaDatos = document.getElementById('entrada'+i);
	if(nombreTarea.value != ''){
		var final = document.createElement('div');
			final.setAttribute('id','final')
		var nombre = document.createElement('div');
			nombre.innerHTML = nombreTarea.value;
		var listaTarjeta = document.createElement('div');
		var addTarjeta = document.createElement('button');
			addTarjeta.setAttribute('onclick','agregarTarjeta()')
			addTarjeta.innerHTML = "Añadir tarjeta..."

		final.appendChild(nombre);
		final.appendChild(listaTarjeta);
		final.appendChild(addTarjeta);

		tareaCreada.replaceChild(final,entradaDatos);
		crearDiv();
		i++;
	}
}


	if(nuevaTarea.value =! ''){
		tareas.push(nuevaTarea);
	}
for (var i = 0; i tareas.length; i++) {
	tareas[i]
}
*/
//