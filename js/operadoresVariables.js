//operadores
// + - * / %
const pi = 3.1415;
let num1 = 2 * pi;
let num2 = 4 / pi;
let resultado = num1 * num2;
document.write('El numero pi es ', pi);
document.write('<br/>El operador <strong>uno</strong> es igual a ', num1);
document.write('<br/>El operador <strong>dos</strong> es igual a ', num2);
document.write('<br/>El <strong>resultado</strong> es igual a '+ resultado,'<br/>');

//otra forma de incluir una variable dentro de una cadena
let nombre ='Jose';
document.write(`Aqui esta la variable ${nombre} y la pongo en el lugar que quiero`);
document.write("<br/>Aqui esta la variable ${nombre} y la pongo en el lugar que quiero");