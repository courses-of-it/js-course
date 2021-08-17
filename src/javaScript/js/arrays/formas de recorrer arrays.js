'use strict'

var stringArray = ["hola", "Que", "Tal", "AMIGO"];

//for in
document.write("con for in");
for (let element in stringArray){
    document.write("<li>" + stringArray[element] + "</li>");

}

//forEach con forma de flecha
document.write("</br>" + "con el forEach");

stringArray.forEach((elemento)=>{
    document.write("<li>" + elemento + "</li>");
});