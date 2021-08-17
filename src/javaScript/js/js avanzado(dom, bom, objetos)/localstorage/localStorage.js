'use strict'

localStorage.setItem("titulo", "valor")
localStorage.setItem("izan", "perez")



var usuario = {
    nombre: "victor robles",
    email: "izan@gmail.com",
    web: "neps"
};

//mandar json a local storage
localStorage.setItem("usuario", JSON.stringify(usuario))

//recuperar item

var userJs = JSON.parse(localStorage.getItem("usuario"))



console.log(userJs)

