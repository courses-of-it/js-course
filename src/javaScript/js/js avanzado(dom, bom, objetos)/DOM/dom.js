'use strict'

//DOM Document Objcet Model
function changeColor(color){
    caja.style.background = color;
}


//conseguir elementos por id
var caja = document.querySelector("#micaja");
caja.innerHTML = "hola mundo desde el DOM";
caja.style.display = "inline"
caja.style.background = "#000"
caja.style.padding = "10px 10px 10px 10px";
caja.style.color = "#fff";



//caja.style.background = changeColor(prompt("elige un color"));

//conseguir elementos por una etquiqueta

var todosLosDivs = document.getElementsByTagName("div");
var seccion = document.querySelector("#section");


var valor;
for (valor in todosLosDivs){
    
    if (typeof todosLosDivs[valor].textContent == 'string'){
        var lista = document.createElement("ul");
        var parrafo = document.createElement("li");
        var texto = document.createTextNode(todosLosDivs[valor].textContent);
        parrafo.appendChild(texto);
        lista.appendChild(parrafo);
        seccion.append(parrafo);
    }
}


//conseguir elementos por una clase
var div;
for (div in todosLosDivs){
    if (todosLosDivs[div].className == "rojo"){
        todosLosDivs[div].style.background = "red";
    }
    else if (todosLosDivs[div].className == "amarillo"){
        todosLosDivs[div].style.background = "yellow";
    }
}


//query selector
/*con el query selector si selecionas una classe en la que hay mas de un elemento solo 
te saca el primero pero en canvio con el getElementsByClassName() 
te saca un array de elementos
*/