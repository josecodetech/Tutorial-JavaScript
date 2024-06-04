const inputPrecio = document.querySelector("#precio");
const inputDescuento = document.querySelector("#descuento");
const btnCalcular = document.querySelector("#calcular");
const resultado = document.querySelector("#resultado");

btnCalcular.addEventListener("click", calcularPrecio);

function calcularPrecio(){
    const precio = Number(inputPrecio.value);
    const descuento = Number(inputDescuento.value);
    //console.log({precio, descuento});
    if (!precio || !descuento){
        resultado.innerText = "Por favor ingresa los datos";
        return;
    }
    if (descuento > 100 || descuento < 0){
        resultado.innerText = "El descuento no es válido";
        return;
    }
    const precioNuevo = (precio * (100 - descuento)) / 100;
    // resultado.innerText = "El precio con descuento es de "+precioNuevo.toFixed(2)+" €";
    resultado.innerText = `El precio con descuento es de ${precioNuevo.toFixed(2)} €`;
}