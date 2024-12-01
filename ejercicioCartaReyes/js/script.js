document.getElementById("nombre").addEventListener("input",function(){
    document.getElementById("deseos").textContent = this.value;
});
function imprimirCarta(){
    window.print();
}