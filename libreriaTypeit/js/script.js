const texto = prompt("Dime un texto y te lo escribo en el documento web . ")
new TypeIt("#miTexto", {
    strings: texto,
}).go();