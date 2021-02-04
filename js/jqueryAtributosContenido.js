//console.log('prueba desde script');
$(document).ready(function(){
   //obtener valor atributo
   var valor = $("a").attr("href");
   console.log("Valor inicial es "+valor);
   setTimeout(function(){
        console.log("Despues de 2 segundos cambiamos el href del enlace");
        //asignar el valor
        $("a").attr("href","http://www.google.es");
        var valor = $("a").attr("href");
        console.log("Valor actual es "+valor);       
   },2000);
   //eliminar atributo
   $("a").removeAttr("href");
   console.log("atributo eliminado");
   var valor = $("a").attr("href");
   console.log("Valor actual es "+valor); 
   //obtener contenido con html
   var contenido = $("p").html();
   //alert(contenido);
   console.log(contenido);
   //obtener texto
   var solotexto = $("p").text();
   console.log(solotexto);
   //alert(solotexto);
   //cambiamos el texto
   $("p").text("Texto cambiado desde codigo");
   // append prepend after before
   //inserta
   $("#contenido").append("Hola");
   $(".miParrafo").prepend("Prepend antes del parrafo");
   //añadir
   $("#parrafo2").before("<h1>Titulo desde script</h1>");
   $("#parrafo2").after("<strong>Otro texto desde script</strong><br/>");
   //nuevo elemento
   var texto = $("<p></p>").text("Nuevo parrafo desde script");
   $("#parrafo2").after(texto);
});
