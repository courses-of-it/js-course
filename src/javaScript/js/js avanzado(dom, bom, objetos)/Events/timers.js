'use strict'

window.addEventListener('load', () =>{
    //set interval ejectua un trozo de codigo cada x segundos
    function interval(){
        var tiempo = setInterval(() => {
            var h1 = document.querySelector("h1");
            if(h1.style.fontSize == "50px"){
                h1.style.fontSize = "25px"
    
            }
            else{
                h1.style.fontSize = "50px"
    
            }
    
        }, 1000);
        return tiempo
    }

    
    var tiempo = interval();
    var stop = document.querySelector("#stop");
    var start = document.querySelector("#start");

    // set time out es solo una vez
    var time = setTimeout(() => {
        var h2 = document.querySelector("h2");
        if(h2.style.fontSize == "50px"){
            h2.style.fontSize = "25px"

        }
        else{
            h2.style.fontSize = "50px"
            h2.innerHTML = "me he canviado de tamaño"

        }

    }, 5000);


    stop.addEventListener("click", () => {
        clearInterval(tiempo);

    });

    start.addEventListener("click", () => {
        interval();

    });

});