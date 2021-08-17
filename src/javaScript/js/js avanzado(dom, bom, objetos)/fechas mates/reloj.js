'use strict'

setInterval(() => {
    var fecha = new Date();
    
    var hora = fecha.getHours();
    var minuto = fecha.getMinutes();
    var segundos = fecha.getSeconds();
    
    var p_hora = document.querySelector("#hora");
    var p_minuto = document.querySelector("#minuto");
    var p_segundo = document.querySelector("#segundo");
    
    p_hora.textContent = hora;
    p_minuto.textContent = minuto;
    p_segundo.textContent = segundos;
    
}, 1000);




