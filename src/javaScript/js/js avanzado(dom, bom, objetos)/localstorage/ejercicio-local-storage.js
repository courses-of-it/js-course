'use strict'

var form = document.querySelector("form");
form.addEventListener('submit', () => {
    var peli = String(document.querySelector("#addpelicula").value);
    if ( peli.length >= 1){
        localStorage.setItem(peli, peli);
    }

});


var ul = document.querySelector("#peliculasList");
for (var i in localStorage){
    if (typeof localStorage[i] == 'string'){
        var li = document.createElement("li");
        li.append(localStorage[i]);
        ul.append(li);
    }
}

var form2 = document.querySelector("#formBorrarPeliculas")
form2.addEventListener('submit', () => {
    console.log("hola")
    var peli = document.querySelector("#borrarPelicula").value;
    localStorage.removeItem(peli);

});
