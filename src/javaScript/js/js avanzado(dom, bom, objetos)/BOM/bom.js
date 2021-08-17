'use strict'

//Browser Object Model

function getBom(){
    console.log(window.innerHeight);
    console.log(window.innerWidth);
    console.log(screen.innerHeight);
    console.log(screen.innerWidth);
    console.log(window.location);
}

function reload(url){
    window.location.href = url;
}

function openWindow(url){
    window.open(url);
}
