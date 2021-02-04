window.onload = function(){
    //console.log('Hola');
    var mayor = 0;
    var menor=99999;
    var numeros = [];
    //captura de datos
    for(var i=0;i<6;i++){
        numeros[i]=parseInt(prompt('Dime un numero y te indicare cual es el mayor de los seis...'));        
    }
    //recorremos array y comprobamos cual es el mayor / menor
    for(var i=0;i<numeros.length;i++){
        if(numeros[i]>mayor){
            mayor = numeros[i];
        }
        if(numeros[i]<menor){
            menor = numeros[i];
        }
    }
    console.log('Hemos terminado de comprobar');
    console.log(`El numero mayor es ${mayor}`);
    console.log(`El numero menor es ${menor}`);
}