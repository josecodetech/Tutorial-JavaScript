$(document).ready(function(){
    $("p").click(function(){
        $("p").html("Texto desde codigo");
    });
$("#contenido").mouseenter(function(){//mouseover
    $('p').css({'background-color':'pink','font-size':'1.3em'});
}); 
$("#contenido").mouseleave(function(){
    $('p').css({'background-color':'blue','font-size':'2em','color':'white'});
});
//al pulsar teclas
$("#nombre").keydown(function(){
    $("#mensaje").html($("#nombre").val());
});
//al soltar teclas
$("#nombre").keyup(function(){
    console.log("soltando tecla : "+$("#nombre").val());
});
//agregar varios eventos
$("h1").on("mouseleave click",function(){
    alert("Aplicando dos eventos al titulo");
});
$("h1").off("mouseleave");
});
