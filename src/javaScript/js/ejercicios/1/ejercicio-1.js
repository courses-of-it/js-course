'use strict'

var num1 = parseInt(prompt("Dime un numero"));
var num2 = parseInt(prompt("Dime otro numero"));

while (num1<=0 || num2 <=0 || isNaN(num1) || isNaN(num2)){
    alert ("Has introducido datos que son incorrectos vuelve a intentarlo")
    num1 = parseInt(prompt("Dime un numero"));
    num2 = parseInt(prompt("Dime otro numero")); 
}

if (num1>num2){

    console.log("num1 es mas grande que num2");
}
else if(num2>num1){
    console.log("num2 es mas grande que num1");
}
else if(num1==num2){
    console.log("Los numeros son iguales");
}
else{
    console.log("Introduce numeros correctos");
}
