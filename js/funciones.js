//funcion sin parametro y sin retorno de valor
function mostrar(){
    document.write('Hola desde la funcion<br/>');
}
for(let i=0;i<10;i++){
    mostrar();
}
//funcion con parametro
function imprimir(nombre){
    document.write(`Hola, ${nombre}<br/>`);
}
imprimir('Jose');
imprimir('Lucia');
//funcion que devuelve resultado
function mayor(val1,val2){
    let mayor = 0;
    if(val1>val2){
        mayor = val1;
    }else{
        mayor = val2;
    }
    return mayor;
}
document.write(mayor(4,56));
let numeroMayor = mayor(4,8);
document.write(`<br/>El numero mayor es = ${numeroMayor}`);

