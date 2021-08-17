'use strict'

//transformar de cadena a array
var cadena = "hola, que, tal, amigo, bro, compañero"
var array_cadena = cadena.split(", ");
console.log(array_cadena);

//de array a cadena
var cadena_array = array_cadena.join();
console.log(cadena_array)

//ordenar arreglos

//en strings se orden por orden alfabetico
var stringArray = ["hola", "Que", "Tal", "AMIGO"];
console.log(stringArray.sort());

//en numeros por orden de pequeño a grande con esto
var numberArray = [2, 3, 1];
console.log(numberArray.sort(function(a,b) { return a-b }));

//con reverse le damos la vuelta
var numberArray2 = [1, 2, 3];
console.log("Este es el array al inicio: "+ numberArray2);
console.log("Este es el array invertido: "+ numberArray2.reverse());

//busquedas
var lenguajes = ["php", "js", "css", "html", "python", "ruby", "sql"]

function find(element, array){
    var search2 = array.find(lenguaje => lenguaje == "element");
}

var search = array.find(function(lenguaje){
    return lenguaje == "element";
});
//forma reducida
var search2 = lenguajes.find(lenguaje => lenguaje == "js");

// buscar indice

var search2 = lenguajes.findIndex(lenguaje => lenguaje == "js");

//con some buscamos si cumplen una condicion concreta




