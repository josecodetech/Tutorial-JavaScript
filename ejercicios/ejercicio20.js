function filtrarPropiedad(arr, propiedad){
    return arr.filter(objeto => objeto.hasOwnProperty(propiedad));
}

const personas = [
    { nombre: 'Juan', edad: 30 },
    { nombre: 'Mar', edad:15},
    { nombre: 'Pedro', telefono:'6565656' }
];
console.log(filtrarPropiedad(personas, 'edad'));
console.log(filtrarPropiedad(personas, 'telefono'));