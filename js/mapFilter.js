const numeros = [2,3,4,2,1,5,6,7,8,2,9,10,34,21,54];
numeros.forEach(function(numero){
    console.log(numero*2);
});

//aplicar funcion a cada elemento del array - MAP
const duplica = numeros.map(function(numero){
    return numero * 2;
});
console.log('Usando MAP');
console.log(duplica);

//extraer elementos que cumplen una condicion - FILTER
const mayores = numeros.filter(function(numero){
    return numero > 9;
});
console.log('Usando FILTER');
console.log(mayores);

//devolver indice de valor coincidente
const indice = numeros.findIndex(function(valor){
    return valor === 7;
});
console.log('Coincide el 7 en el indice...');
console.log(indice);

//devolver elemento coincidente
const valor = numeros.find(function(numero){
    return numero === 5;
});
console.log('Coincide el valor 5');
console.log(valor);