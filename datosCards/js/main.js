  /*      <div class="row">
        <!--Inicio tarjeta-->
        <div class="card" style="width: 18rem;">
        -figure
  <img src="./img/python.png" class="card-img-top" alt="Logo Python"> figure
  <div class="card-body">
    <h5 class="card-title">Python</h5>
    <p class="card-text">Curso de python</p>
    <a href="#" class="btn btn-primary">Ver mas...</a>
  </div>
</div><!--Fin tarjeta--></div>*/
const lista_cursos = [];
lista_cursos.push({
    titulo: 'Python',
    texto: 'Curso de Python',
    imagen: '../img/python.png',
    enlace: 'https://www.youtube.com/c/JOSEOJEDAROJAS'
});
lista_cursos.push({
    titulo: 'Flask',
    texto: 'Curso de Flask',
    imagen: '../img/python.png',
    enlace: 'https://www.youtube.com/c/JOSEOJEDAROJAS'
});
lista_cursos.push({
    titulo: 'Python',
    texto: 'Curso de Python',
    imagen: '../img/python.png',
    enlace: 'https://www.youtube.com/c/JOSEOJEDAROJAS'
});
lista_cursos.push({
    titulo: 'Python',
    texto: 'Curso de Python',
    imagen: '../img/python.png',
    enlace: 'https://www.youtube.com/c/JOSEOJEDAROJAS'
});
lista_cursos.push({
    titulo: 'Python',
    texto: 'Curso de Python',
    imagen: '../img/python.png',
    enlace: 'https://www.youtube.com/c/JOSEOJEDAROJAS'
});
lista_cursos.push({
    titulo: 'Python',
    texto: 'Curso de Python',
    imagen: '../img/python.png',
    enlace: 'https://www.youtube.com/c/JOSEOJEDAROJAS'
});
lista_cursos.push({
    titulo: 'Python',
    texto: 'Curso de Python',
    imagen: '../img/python.png',
    enlace: 'https://www.youtube.com/c/JOSEOJEDAROJAS'
});
lista_cursos.push({
    titulo: 'Python',
    texto: 'Curso de Python',
    imagen: '../img/python.png',
    enlace: 'https://www.youtube.com/c/JOSEOJEDAROJAS'
});
lista_cursos.push({
    titulo: 'Python',
    texto: 'Curso de Python',
    imagen: '../img/python.png',
    enlace: 'https://www.youtube.com/c/JOSEOJEDAROJAS'
});
lista_cursos.push({
    titulo: 'Python',
    texto: 'Curso de Python',
    imagen: '../img/python.png',
    enlace: 'https://www.youtube.com/c/JOSEOJEDAROJAS'
});
lista_cursos.push({
    titulo: 'Python',
    texto: 'Curso de Python',
    imagen: '../img/python.png',
    enlace: 'https://www.youtube.com/c/JOSEOJEDAROJAS'
});

const tarjetas = document.createElement('div');
tarjetas.classList.add('row');
for (curso of lista_cursos) {
    const tarjeta = document.createElement('div');
    tarjeta.classList.add('card');
    const figure = document.createElement('div');
    //cuerpo de tarjeta
    const cuerpo = document.createElement('div');
    cuerpo.classList.add('card-body');
    // curso info
    const imagen = document.createElement('img');
    imagen.setAttribute('src', curso.imagen);
    imagen.classList.add('card-img-top');
    const titulo = document.createElement('h5');
    titulo.classList.add('card-title');
    titulo.innerText = curso.titulo;
    const texto = document.createElement('p');
    texto.classList.add('card-text');
    texto.innerText = curso.texto;
    const boton = document.createElement('a');
    boton.classList.add('btn');
    boton.classList.add('btn-primary');
    boton.setAttribute('href', curso.enlace);
    boton.innerText='+info';
    // agregamos elementos
    figure.appendChild(imagen);
    tarjeta.appendChild(figure);
    cuerpo.appendChild(titulo);
    cuerpo.appendChild(texto);
    cuerpo.appendChild(boton);
    tarjeta.appendChild(cuerpo);
    tarjetas.appendChild(tarjeta);
}
const contenedor = document.querySelector('.container');
contenedor.appendChild(tarjetas);
