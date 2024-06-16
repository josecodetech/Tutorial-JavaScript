document.addEventListener("DOMContentLoaded",function(){
    const longitudInput = document.getElementById("longitud");
    const generarBtn = document.getElementById("generar");
    const contraseñaP = document.getElementById("contraseña");
    const caracteres = 'ABCDEFGHIJKLMNÑOPQRSTUVWXYZabcdefghijklmnñopqrstuvwxyz0123456789!@#$%&*()_+[]{}|;:,.<>?';
    generarBtn.addEventListener('click',function(){
        const longitud = parseInt(longitudInput.value);
        if(isNaN(longitud) || longitud < 4 || longitud > 20){
            contraseñaP.textContent = "La longitud debe estar entre 4 y 20 caracteres.";
            return;
        }
        let contraseñaGenerada = '';
        for (let i = 0; i < longitud; i++){
            const randomIndex = Math.floor(Math.random() * caracteres.length);
            contraseñaGenerada += caracteres[randomIndex]; // contraseña = contraseña + caracteres[randomIndex];
            
        }
        contraseñaP.textContent = `Contraseña generada: ${contraseñaGenerada}`;
    });
});