window.onload = function(){
    var numero1 = (prompt('Introduce el primer numero ',0));
    var numero2 = (prompt('Introduce el segundo numero ',0));
    while(isNaN(numero1)||isNaN(numero2)){
        var numero1 = parseInt(prompt('Introduce el primer numero ',0));
        var numero2 = parseInt(prompt('Introduce el segundo numero ',0));       
    }
    if (numero1 == numero2){
        alert('Los numeros son iguales');
    } else if (numero1 > numero2){
        alert('El numero mayor es el '+numero1);
    } else {
        alert('El numero mayor es el '+numero2);
    }
}