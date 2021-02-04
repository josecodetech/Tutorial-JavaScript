//tabla de multiplicar numero dado por usuario
let tabla = parseInt(prompt("Tabla del ... ?"));
for (let contador = 1; contador <= 10; contador++){
    let resultado = tabla * contador;
    console.log(`${tabla} * ${contador} = ${resultado}`);
}