//crear array
const numeros = [];
console.log(numeros);
//crear con valores

const colores = ['rojo','amarillo','verde','marron'];
colores.reverse();
console.log(colores);
//crear con valores iguales
const seis = new Array(4).fill(6);
console.log(seis);
//añadir valor
seis.push(10);
seis.push(12);
//eliminar el primero
seis.shift();
//mostrar
for(let i = 0; i<seis.length;i++){
    console.log(seis[i]);

}
    //muestra parte del array
    console.log(seis.slice(2,4));
//recorrer array colores
for (color of colores){
    console.log(color);
}
//otra forma de recorrer array
//muestra indice
for (i in colores){
    document.write(i);
    document.write(" : ")
    document.write(colores[i]);
    document.write("<br/>")
}