//positivo negativo
let numero = parseInt(prompt("Dime un numero y te indico si es positivo o no ..."));
if(numero > 0){
    console.log(`El numero ${numero} es positivo`);
} else if (numero < 0){
    console.log(`El numero ${numero} es negativo`);
} else {
    console.log('El numero es igual a cero');
}