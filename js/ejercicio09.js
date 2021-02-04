window.onload = function(){
    //console.log('Hola');
    var mayor = 0;
    var menor=99999;
    var numeros = [];
    var usuario = "";
    do{
        usuario = prompt('Dime un numero o escribe "fin" para terminar');
        if (usuario!='fin'){
            usuario = parseInt(usuario);
            numeros.push(usuario);
        }
    }while(usuario!='fin');
  
    //recorremos array y comprobamos cual es el mayor / menor
    for(var i=0;i<numeros.length;i++){
        if(numeros[i]>mayor){
            mayor = numeros[i];
        }
        if(numeros[i]<menor){
            menor = numeros[i];
        }
    }
    if(numeros.length>2){
        console.log('Hemos terminado de comprobar');
        console.log(`El numero mayor es ${mayor}`);
        console.log(`El numero menor es ${menor}`);
    }else{
        console.log('No hay numeros suficientes para comprobar mayor y menor');
    }

}