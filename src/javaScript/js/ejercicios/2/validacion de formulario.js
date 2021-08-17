'use strict'

window.addEventListener('load', () => {

    var form = document.querySelector("#form")
    var dashed = document.querySelector(".dashed")
    dashed.style.display = "none"
    
    var nombreError = document.querySelector("#erroName")
    var apellidoError = document.querySelector("#errorApellido")
    var edadError = document.querySelector("#errorDate")
    var emailError = document.querySelector("#errorEmail")

    nombreError.style.display ="none"
    apellidoError.style.display ="none"
    edadError.style.display ="none"
    emailError.style.display ="none"

    form.addEventListener("submit", () => {
        
        //recoger datos
        var nombre = document.querySelector("#nombre").value;
        var apellido = document.querySelector("#apellidos").value;
        var edad = parseInt(document.querySelector("#edad").value);
        var email = document.querySelector("#email").value;

        //validar datos
        if (nombre.trim() == "" || nombre.trim().lenght == "undefined"){
            nombreError.style.display = "block"
            return false;
        }else{
            nombreError.style.display = "none"
        }
        if (apellido == "" || apellido.trim().lenght == "undefined"){
            apellidoError.style.display = "block"
            return false;
        }else{
            apellidoError.style.display = "none"

        }
        if (edad == null || edad.lenght <= 0 || isNaN(edad)){
            edadError.style.display = "block"            
            return false;
        }else{
            edadError.style.display = "none"

        }
        if (!/^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i.test(email)){
            emailError.style.display = "block"
            return false;
        } else {
            emailError.style.display = "none"
        }
        
        
    });
});


