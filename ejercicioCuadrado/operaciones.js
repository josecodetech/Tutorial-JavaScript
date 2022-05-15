//alert("Funciona");
function calcularPerimetro() {
    //alert("Calculando perimetro");
    const lado = document.getElementById("lado").value;
    const perimetro = lado * 4;
    //alert("El perimetro del cuadrado es "+perimetro)
    document.getElementById("resultado").innerHTML = "El perimetro del cuadrado es "+perimetro;
}
function calcularArea() {
    //alert("Calculando area");
    const lado = document.getElementById("lado").value;
    const area = lado * lado;
    //alert("El area del cuadrado es "+area)
    document.getElementById("resultado").innerHTML = "El area del cuadrado es "+area;
}