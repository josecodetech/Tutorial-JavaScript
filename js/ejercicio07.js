window.onload = function(){
//usuario contraseña con 3 intentos
let usuario = prompt('Usuario ?');
let password = prompt('Contraseña ?');
let intentos = 1;
while (usuario !== "admin" & password !== "1234"){
    if (intentos > 2){
        console.log('No puedes intentarlo mas');
        break;
    }
    console.log("Usuario o password incorrecto");
    usuario = prompt('Usuario ?');
    password = prompt('Contraseña ?');
    intentos++;
    console.log(intentos);

}
if (intentos <= 3){
    console.log(`Bienvenido, ${usuario}`);
}else{
    console.log('No has entrado al sistema');
}
}
