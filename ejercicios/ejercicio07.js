function esPalindromo(str){
    const reversa = str.split('').reverse().join('');
    return str === reversa;
}
console.log(esPalindromo('ana'));