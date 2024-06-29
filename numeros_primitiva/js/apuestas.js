document.addEventListener('DOMContentLoaded', function(){
    const numerosContenedor = document.getElementById('numeros');
    const btnGenerarAleatorio = document.getElementById('generar-aleatorio');
    const btnRealizarApuesta = document.getElementById('realizar-apuesta');
    const mensaje = document.getElementById('mensaje');
    const maxNum = 49;
    // creamos numeros del 1 al 49
    for (let i = 1; i<=maxNum;i++){
        const numero = document.createElement('div');
        numero.classList.add('numero');
        numero.textContent = i;
        numero.addEventListener('click',seleccionarNumero);
        numerosContenedor.appendChild(numero);
    }
    function seleccionarNumero(event){
        const numeroSeleccionado = event.target;
        numeroSeleccionado.classList.toggle('seleccionado');
        actualizarMensaje();
    }
    function generarNumerosAleatorios(){
        const numeros = Array.from({length: maxNum}, (_,i)=>i+1);
        const seleccionados = [];
        while (seleccionados.length < 6){
            const randomIndex = Math.floor(Math.random()*numeros.length);
            const numero = numeros.splice(randomIndex, 1)[0];
            seleccionados.push(numero);
        }
        return seleccionados;
    }
    function marcarNumeros(numeros){
        const todosNumeros = document.querySelectorAll('.numero');
        todosNumeros.forEach(numero => numero.classList.remove('seleccionado'));
        numeros.forEach(numero =>{
            const numeroElemento = document.querySelector(`.numero:nth-child(${numero})`);
            numeroElemento.classList.add('seleccionado');
        });
        actualizarMensaje();
    }
    function actualizarMensaje(){
        const seleccionados = document.querySelectorAll('.numero.seleccionado');
        mensaje.textContent = `Has seleccionado ${seleccionados.length} número(s).`;
    }
    btnGenerarAleatorio.addEventListener('click', function(){
        const aleatorios = generarNumerosAleatorios();
        marcarNumeros(aleatorios);
    });
    btnRealizarApuesta.addEventListener('click',function(){
        const seleccionados = document.querySelectorAll('.numero.seleccionado');
        if (seleccionados.length < 6){
            mensaje.textContent = 'Debes seleccionar al menos 6 numeros para realizar una apuesta.';
        } else {
            mensaje.textContent = 'Apuesta realizada con exito.';
        }
        
    });
});