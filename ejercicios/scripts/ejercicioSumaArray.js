lista_numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 2, 45, 90, 09, 10, 23];
// opcion for
let suma = 0;
for (let i = 0; i < lista_numeros.length; i++){
    suma += lista_numeros[i];
}
console.log(suma);

// opcion foreach
suma = 0;
lista_numeros.forEach(numero => {
    suma += numero;
});
console.log(suma);

// opcion con reduce
suma = lista_numeros.reduce((acumulado, corriente, contador, numeros) => {
    //console.log(acumulado);
   // console.log(corriente);
    //console.log(contador);
   // console.log(numeros);
    return acumulado + corriente;
})
console.log(suma);