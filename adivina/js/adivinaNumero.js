document.addEventListener('DOMContentLoaded',function(){
    const adivinaInput = document.getElementById('adivinanza');
    const adivinarBtn = document.getElementById('adivinar');
    const resultado = document.getElementById('resultado');
    const numeroAleatorio = Math.floor(Math.random()*100)+1;
    adivinarBtn.addEventListener('click', function(){
        const adivinanza = parseInt(adivinaInput.value);
        if (isNaN(adivinanza) || adivinanza < 1 || adivinanza > 100) {
            resultado.textContent = "Por favor, ingresa un numero valido entre 1 y 100.";
            return;
        }
        if (adivinanza === numeroAleatorio){
            resultado.textContent = `Felicidades! Adivinaste el numero ${numeroAleatorio}`;
        } else if (adivinanza < numeroAleatorio) {
            resultado.textContent = "El numero aleatorio es mayor, vuelve a intentarlo.";
        } else{
            resultado.textContent = "El numero aleatorio es menor, vuelve a intentarlo.";
        }
    });
});