$(document).ready(function(){
 $("#btnAñadir").on("click",function(){
    var valor = $("input").val();
    if(valor!==''){
        var elemento =$("<li></li>").text(valor);
        $(elemento).append("<button class='borrar'>X</button>");
        $("#lista").append(elemento);
        //borra elemento
        $("input").val("");
        $(".borrar").on("click",function(){
            $(this).parent().remove();
            alert("Elemento borrado!!!");
        });
    }
 });
});
