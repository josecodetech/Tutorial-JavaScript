function compruebaAceptaCookies(){
    if(localStorage.aceptaCookies == 'true'){
        cajacookies.style.display = 'none';
    }
}
function aceptarCookies(){
    localStorage.aceptaCookies = 'true';
    cajacookies.style.display = 'none';
}
$(document).ready(function(){
    compruebaAceptaCookies();
});