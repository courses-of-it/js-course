'use strict'

var num1 = parseInt(prompt("Dime un numero"));
var operation = prompt("Que quieres hacer una suma, una resta una multiplicaión o una división");
var num2 = parseInt(prompt("Dime otro numero"));

while (num1<=0 || num2 <=0 || isNaN(num1) || isNaN(num2)){
    alert ("Has introducido datos que son incorrectos vuelve a intentarlo")
    num1 = parseInt(prompt("Dime un numero"));
    var operation = prompt("Que quieres hacer una suma, una resta una multiplicaión o una división");
    num2 = parseInt(prompt("Dime otro numero")); 
}

if (operation == "suma" || operation == "Suma"){
    result = num1 + num2;
    document.write(result);
    console.log(result);
    
}
else if (operation == "resta" || operation == "Resta"){
    result = num1 - num2;
    document.write(result);
    console.log(result);
    
}
else if (operation == "división" || operation == "División"){
    result = num1 / num2;
    document.write(result);
    console.log(result);
    
}
else if (operation == "multiplicación" || operation == "Multiplicación"){
    result = num1 * num2;
    document.write(result);
    console.log(result);
    
}
else{
    alert("introduce una operacion valida")
}