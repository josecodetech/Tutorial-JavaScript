//funcion clasica
/* function suma(num1,num2){
    return num1+num2;
}
console.log(suma(25,34)); */

//funcion flecha
let suma = (num1,num2)=>num1+num2;
console.log(suma(75,54));

//funcion flecha con un parametro
const cuadrado = x => x*x;
console.log(`El cuadrado de 4 es ${cuadrado(4)}`);

//funcion con cuerpo
const tipo = numero =>{
    if(numero>0){
        return 'Es positivo';
    } else if (numero<0){
        return 'Es negativo';
    } else {
        return 'Es cero';
    }
};
console.log(tipo(-1450));


