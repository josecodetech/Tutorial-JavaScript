$(document).ready(function(){
   //console.log('Documento listo');
    var elemento = $('p').parent();
    console.log(elemento);
    elemento.css("border","5px solid red");
    var elementos = $(".parrafoLista").parents();
    console.log(elementos);
    elementos.css("border", "10px solid blue");
    //parent parents children siblings next nextAll prev prevAll eq(indice)
    console.log($("div").eq(2));
    var div03 = $("div").eq(2);
    div03.css("border","5px solid pink");
    //eliminar div 03
    div03.remove();
    //eliminar hijos
    $("#contenido01").empty();
});
