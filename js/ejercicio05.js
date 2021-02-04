//suma de pares e impares entre dos valores dados
let numero1 = parseInt(prompt("Dime el primer numero "));
let numero2 = parseInt(prompt("Dime el segundo numero "));
let pares = 0;
let impares = 0;
for (numero1; numero1 <= numero2; numero1++){
    if (numero1 % 2 === 0){
        pares = pares + numero1;
    } else {
        impares = impares + numero1;
    }
}
console.log(`La suma de todos los numeros pares del intervalo dado es = ${pares}`);
console.log(`La suma de todos los numeros impares del intervalo dado es = ${impares}`);
