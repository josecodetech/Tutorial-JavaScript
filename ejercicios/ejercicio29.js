function eliminarDuplicados(lista){
    const listaSinDuplicados = [];
    const elementosVistos = new Set();
    for (let i = 0; i < lista.length; i++){
        const elemento = lista[i];
        if (!elementosVistos.has(elemento)){
            listaSinDuplicados.push(elemento);
            elementosVistos.add(elemento);
        }
    }
    return listaSinDuplicados;
}

const lista = [1,2,1,4,3,1,2,1,2,6,4,2,7];
console.log(lista);
console.log(eliminarDuplicados(lista));