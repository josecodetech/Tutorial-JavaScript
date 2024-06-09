function segundoMayor(lista){
    let mayor = -Infinity;
    let segundoMayor = -Infinity;
    for (let i = 0; i < lista.length; i++){
        const elemento = lista[i];
        if (elemento > mayor) {
            segundoMayor = mayor;
            mayor = elemento;
        } else if (elemento > segundoMayor && elemento < mayor){
            segundoMayor = elemento;
        }
    }
    return segundoMayor;
}
const lista = [19,10,2,3,21,7];
console.log(segundoMayor(lista));