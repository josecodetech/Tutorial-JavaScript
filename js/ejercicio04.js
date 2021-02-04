//suma entre dos valores dados
let numero1 = parseInt(prompt("Dime el primer numero "));
let numero2 = parseInt(prompt("Dime el segundo numero "));
let suma = 0;
for (numero1; numero1 <= numero2; numero1++){
    suma = suma + numero1;
}
console.log(`La suma de todos los numeros del intervalo dado es = ${suma}`);
