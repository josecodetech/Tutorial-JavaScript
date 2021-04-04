$(document).ready(function(){
    //alert("Script funcionando");
    var tema =$("#tema");
    $("#a-verde").click(function(){
        tema.attr("href","css/verde.css");
    });
    $("#a-rojo").click(function(){
        tema.attr("href","css/rojo.css");
    });
    $("#a-azul").click(function(){
        tema.attr("href","css/azul.css");
    });
});