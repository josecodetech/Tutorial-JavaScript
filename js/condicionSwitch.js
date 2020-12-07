//condicion switch
//mostramos mensaje por consola (ctr+shif+i)
console.log("Indica el numero de opcion\n");
console.log("1. Cargar\n");
console.log("2. Imprimir\n");
console.log("3. Salir\n");
opcion = parseInt(prompt("Dame una opcion"));
switch (opcion){
    //en estas opciones mostramos en documento html
    case 1:
        document.write("Cargando ...");
        break;
    case 2:
        document.write("Imprimiendo ...");
        break;
    case 3:
        document.write("Saliendo ...");
        break;
    default:
        document.write("\nSeleccion no valida, introduce opcion correcta");
        break;
}