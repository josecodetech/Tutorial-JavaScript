window.onload = function(){
    //ventana navegador
    console.log('Alto = '+window.innerHeight);
    console.log('Ancho = '+window.innerWidth);
        //ventana pantalla
        console.log('Alto = '+screen.height);
        console.log('Ancho = '+screen.width);
    //url actual
    console.log(window.location);
    //redirigir
    function irWeb(url){
        window.location.href = url;
    }
    function abrirVentana(url){
        window.open(url,"","width=400,height=250");
    }
    irWeb('https://ticoticotaa.es');
    abrirVentana('https://ticoticotaa.es');
}