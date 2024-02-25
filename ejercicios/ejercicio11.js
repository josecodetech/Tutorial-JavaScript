function sumaHasta(num){
    let suma = 0;
    for (let i = 1; i <= num; i++){
        suma += i;
    }
    return suma;
}
console.log(sumaHasta(8));