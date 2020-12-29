window.onload = function(){
    var temporizador;
    var parrafo = document.getElementById('parrafo');
    var caja = document.getElementById('caja');
    var boton = document.getElementById('boton');
    function temporizadorUnaSolaVez(){
        temporizador = setTimeout(function(){
            console.log('Ejecutando temporizador una vez');
        },2000);
    }
    function iniciaTemporizador(){
        temporizador = setInterval(function(){
            console.log('Ejecutando temporizador');
        },2000);
    }
    function pararTemporizador(){
        clearInterval(temporizador);
        console.log("Temporizador parado");
    }
    function mensaje(texto){
        parrafo.innerHTML = texto;
        caja.style.backgroundColor = caja.style.backgroundColor == 'blue' ? 'green' : 'blue';
    }
    iniciaTemporizador();
    boton.addEventListener('click',function(){
        console.log('boton pulsado');
        mensaje('temporizador parado');
        pararTemporizador();
        //temporizador();
    });
}


