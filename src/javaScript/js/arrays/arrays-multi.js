'use strict'

var categorias = ["Acion", "terror", "comedia"];
var pelis = ["Fast and furios", "ready player one"];
var cine = [categorias, pelis];

console.log(cine[1][1]);

pelis.push("superman");


//iteraciones con prompt selecionado por el usuario


var iteraciones =  parseInt(prompt("Cuantas pelis quieres introducir?"));
for (var i = 0; i <= iteraciones; i++){
    var dato = prompt("introduce una pelicula");
    pelis.push(dato)
}
pelis.forEach((elemento)=>{
    console.log(elemento);
});

alert("esta es otra parte del codigo!!");


//iteraciones selecionadas como parametro de la funcion

function pelisNew(iteraciones){
    for (var i = 1; i <= iteraciones; i++){
        var dato = prompt("introduce una pelicula");
        pelis.push(dato)
    }
    pelis.forEach((elemento)=>{
        console.log(elemento);
    });
}





