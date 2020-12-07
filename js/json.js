const alumno = {
    nombre: "Jose",
    nota: 6
};
console.log(alumno);
alumno['nota']=5;
console.log(alumno);
console.log(alumno['nombre']);
console.log(alumno.nota);
//estructura compleja JSON
const alumnos = [
    {
        nombre: "Jose",
        nota: 6
    },
    {
        nombre: "Lucia",
        nota: 10
    },
    {
        nombre: "Eva",
        nota: 10
    }
];
console.log(alumnos);
let alumnaNueva = {
    nombre: "M Mar",
    nota: 9
};
alumnos.push(alumnaNueva);
//recorrer json
for (let i=0;i<alumnos.length;i++){
    console.log(`${alumnos[i].nombre}`);
    document.write(`${alumnos[i].nombre}<br/>`);
}
console.log(alumnos);
alumnos.splice(1,1);
console.log(alumnos);