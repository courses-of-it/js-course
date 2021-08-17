'use strict'

var num1 = parseInt(prompt("Dime un numero"));
var num2 = parseInt(prompt("Dime otro numero"));

while (num1 < num2){
    if (num1 % 2 == 0){
        document.write("<h4>" + num1 + "</h4>");
        num1 += 1;
    }
    else{
        num1 += 1;
        continue;
    }

}