$(document).ready(function(){
    //pageX pageY   type    which   data    target  preventDefault()    stopPropagation()
    //evitar que se abra enlace
    $("a").click(function(event){
        console.log(event.pageX);
        console.log(event.pageY);
        console.log(event.which);
        console.log(event.target);
        event.preventDefault();
        console.log("No se abrira el enlace");
    });
    //indicar tecla pulsada
    $("input").keydown(function(event){
        console.log("Has pulsado"+event.which);
    });
    //ejecutar eventos sin que lo realice el usuario
    $("#boton").click(function(){
        alert("Has pulsado el boton!!!");
    });
    $("#boton").trigger("click");
});
