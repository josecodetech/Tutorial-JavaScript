//console.log("Esta funcionando perfectamente");

const titulo = document.querySelector('h1');
const parrafo = document.querySelector('p');
const parrafoId = document.querySelector('#parrafo');
const parrafoClase = document.querySelector('.parrafo');
const agregado = document.querySelector('#agregado');

titulo.innerHTML = "Titulo <br> Cambiado desde javascript , haciendo caso a etiquetas HTML<br><hr><hr>";
parrafo.innerText = "Este parrafo no inserta etiqueta html <br><hr><hr>";
parrafo.setAttribute('class', 'amarillo');
parrafoId.setAttribute('class', 'verde');
titulo.classList.add('mas_grande');
parrafoClase.classList.remove('rojo');
console.log(titulo.getAttribute('class'));

// Creando elementos
const imagen = document.createElement('img');
const url = 'https://ticoticotaa.es/img/logoPython.png';
imagen.setAttribute('src', url);
const parrafoNuevo = document.createElement('p');
parrafoNuevo.innerText = 'Parrafo nuevo agregado desde javascript';
agregado.append(parrafoNuevo);
agregado.append(imagen);
