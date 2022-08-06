//alert("conectado a javascript");
const inputBase = document.querySelector('#baseImponible');
let inputIVA = document.querySelector('#IVA');
let inputTotal = document.querySelector('#total');
const tipoIVA = 0.21;
function Calcular() {
    const base = Number(inputBase.value);
    const IVA = base * tipoIVA;
    inputIVA.value = IVA;
    const total = base + IVA;
    inputTotal.value = total;
}

