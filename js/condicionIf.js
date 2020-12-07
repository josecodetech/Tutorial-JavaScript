let numero = prompt("Dime un numero entero : ");
numero = parseInt(numero);
if (numero>0){
    document.write("El numero es mayor que cero");
}else if (numero<0){
    document.write("El numero es menor que cero");
}else{
    document.write("El numero es igual a cero");
}
