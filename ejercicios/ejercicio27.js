function elementoMasFrecuente(lista){
    const cuentaLista = {};
    let maxFrecuencia = 0;
    let elementoMasFrecuente = null;

    for (let i = 0; i<lista.length; i++){
        const elemento = lista[i];
        if (cuentaLista[elemento]){
            cuentaLista[elemento] += 1;
        } else {
            cuentaLista[elemento] = 1;
        }
        if (cuentaLista[elemento] > maxFrecuencia){
            maxFrecuencia = cuentaLista[elemento];
            elementoMasFrecuente = elemento;
        }
        }
        return elementoMasFrecuente;
    }
console.log(elementoMasFrecuente([1,2,3,4,5,6,7,8,9,10,10,2,3,4,5,6,7,8,10,10]));