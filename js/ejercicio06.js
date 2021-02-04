//usuario contraseña
let usuario = prompt('Usuario ?');
let password = prompt('Contraseña ?');
while (usuario !== "admin" & password !== "1234"){
    console.log("Usuario o password incorrecto");
    usuario = prompt('Usuario ?');
    password = prompt('Contraseña ?');
}
console.log(`Bienvenido, ${usuario}`);