function esPrimo(num){
    if (num <= 1){
        return false;
    }
    for (let i = 2; i <= Math.sqrt(num); i++){
        if (num % i === 0){
            return false;
        }
    }
    return true;
}
function primosHasta(num){
    const primos = [];
    for (let i = 2; i <= num; i++){
        if (esPrimo(i)){
            primos.push(i)
        }
    }
    return primos;
}
console.log(primosHasta(20));