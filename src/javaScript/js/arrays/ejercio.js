'use strict'
function both(content){
    document.write(content + "</br>");
    console.log(content);
}
function mostrarArray(element){
    document.write("<ul>");
    element.forEach((elemento)=>{
        document.write("<li>" + elemento + "</li>");
        console.log(elemento);
    });
    document.write("</ul>");
}
function find(element, array){
    var search2 = array.find(lenguaje => lenguaje == element);
}

var arrayNumbers = [];

//añadir elementos
for (var i = 1; i <= 6; i++){
    arrayNumbers.push(parseInt(prompt("Introduce un numero")));
}

mostrarArray(arrayNumbers);

both("*******************************************");
//ordenar
var arrayOrdenado = arrayNumbers.sort(function(a,b) { return a-b });
mostrarArray(arrayOrdenado)


both("*******************************************");
// array invertido
var reverseArray = arrayOrdenado.reverse();
mostrarArray(reverseArray);


both("*******************************************");
    
arrayOrdenado.reverse().forEach((contenido, indice)=>{
    document.write("<strong>" + "Indice: "+ indice + "  " + "Contenido: " + contenido + "</strong>" + "</br>");
    console.log(indice + contenido);
});

both("************************************************")

var buscar = confirm("Quieres buscar un numero");
if (buscar == true){
    var arrCorrect = arrayOrdenado.reverse();
    var number = parseInt(prompt("Que quieres buscar?"));
    var resutl = find(number, arrCorrect);
    if (resutl != "undefined"){
        both("El numero" + number + "esta dentro del array!!");
        var index = arrCorrect.findIndex(arrCorrect => arrCorrect == number);
        both("Esta en el indice " + index);
    }
    else{
        both("No se ha encontrado tu numero")
    }
}






