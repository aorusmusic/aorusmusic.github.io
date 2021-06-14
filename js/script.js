// INCIAR SESION - REGISTRO
document.getElementById("btn__iniciar-sesion").addEventListener("click", iniciarSesion);
document.getElementById("btn__registrarse").addEventListener("click", register);

var contenedor_login_register = document.querySelector(".contenedor__login-register");
var formulario_login = document.querySelector(".formulario__login");
var formulario_register = document.querySelector(".formulario__register");
var caja_trasera_login = document.querySelector(".caja__trasera-login");
var caja_trasera_register = document.querySelector(".caja__trasera-register");

function iniciarSesion(){
    formulario_register.style.display = "none";
    contenedor_login_register.style.left = "10px";
    formulario_login.style.display = "block";
    caja_trasera_register.style.opacity = "1";
    caja_trasera_login.style.opacity = "0"
}

function register(){
    formulario_register.style.display = "block";
    contenedor_login_register.style.left = "410px";
    formulario_login.style.display = "none";
    caja_trasera_register.style.opacity = "0";
    caja_trasera_login.style.opacity = "1"
}

// NOTICIAS
document.addEventListener("DOMContentLoaded", function(e){
    
    const parrafos = document.querySelectorAll('.desarrollo');
    
    let alturas = [];
    let alturaMaxima = 0;

    const aplicarAlturas = (function aplicarAlturas(){

        parrafos.forEach(parrafo =>{
           
            if(alturaMaxima == 0){
                alturas.push(parrafo.clientHeight);
            }else{
                parrafo.style.height = alturaMaxima + "px";
            }
            
        });
        
        return aplicarAlturas;
    })();

    alturaMaxima = Math.max.apply(Math, alturas);

    aplicarAlturas();
})