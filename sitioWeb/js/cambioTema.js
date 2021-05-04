$(document).ready(function(){
    //alert("Script funcionando");
    var tema =$("#tema");
    function grabarTema(color){
        localStorage.setItem("color",color);
        console.log("tema cambiado a color "+color);
    }
    function recuperarTema(){
        if(localStorage.getItem("color")!=null){
            var color = localStorage.getItem("color");
            console.log("el tema estaba grabado en color "+color);
            tema.attr("href","css/"+color+".css");
        }
    }
    recuperarTema();
    $("#a-verde").click(function(){
        tema.attr("href","css/verde.css");
        grabarTema("verde");
    });
    $("#a-rojo").click(function(){
        tema.attr("href","css/rojo.css");
        grabarTema("rojo");
    });
    $("#a-azul").click(function(){
        tema.attr("href","css/azul.css");
        grabarTema("azul");
    });
});