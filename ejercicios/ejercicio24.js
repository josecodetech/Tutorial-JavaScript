function contarVocales(str){
    const vocales = ['a','e','i','o','u'];
    return str.split('').filter(letra => vocales.includes(letra.toLowerCase())).length;
}
console.log(contarVocales('Hola mundo'));