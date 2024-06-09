//console.log("Probando script");
function contarElementos(lista){
    const cuentaLista = {};
    for (let i = 0; i < lista.length; i++){
        const elemento = lista[i];
        if (cuentaLista[elemento]){
            cuentaLista[elemento]+=1;

        }
        else{
            cuentaLista[elemento]=1;
        }
    }
    console.log(cuentaLista);
}