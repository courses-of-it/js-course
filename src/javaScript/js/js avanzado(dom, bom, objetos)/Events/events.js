 'use strict'
 
 //Eventos del raton
 
 function cambiarColor(){
     
     var bg = boton.style.background;
     if (bg == "green"){
         boton.style.background = "red"
     }
     else{
         boton.style.background = "green"
     }
 
     return true
 }

 

var boton = document.querySelector("#boton");
boton.addEventListener('click', () => {
    cambiarColor();
});

//on double click
boton.addEventListener('dblclick', () => {
    boton.style.padding = "15px 15px 15px 15px";
});

boton.addEventListener('mouseover', () => {
    boton.style.background = "#ccc"
});

boton.addEventListener('mouseout', () => {
    boton.style.background = "#000"
    boton.style.color = "#fff"
});


var input = document.querySelector("#campo_nombre")
//eventos de teclado

//focus
input.addEventListener('focus', () => {
    console.log("focus")
});

//blur
input.addEventListener('blur', () => {
    console.log("blur")
});

//keydowm
//tambien mustra la letra
input.addEventListener('keydown', (event) => {
    console.log("pulsando", String.fromCharCode(event.keyCode));
});

//keypress
input.addEventListener('keypress', (event) => {
    console.log("pulsada", String.fromCharCode(event.keyCode));
});

//keyup

input.addEventListener('keyup', (event) => {
    console.log("soltada", String.fromCharCode(event.keyCode));
});