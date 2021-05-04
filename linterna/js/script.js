$(document).ready(function(){
    var pulsado = 0;
    $("#contenido").click(function(){
       // alert("Pulsado");
       if(pulsado == 0){
           console.log("linterna encendida");
           $("#contenido").css('background','green');
           $("img").attr("src","img/linternaOn.png");
           pulsado = 1;
       }else{
        console.log("linterna apagada");
        $("#contenido").css('background','black');
        $("img").attr("src","img/linternaOff.png");
        pulsado = 0;
       }
    });
});