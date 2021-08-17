'use strict' 
div_usuarios

var div_usuarios = document.querySelector("#usuarios");
var div_janet = document.querySelector("#janet");
var div_profe = document.querySelector("#profesor");

getUsuarios()
    .then(data => data.json())
    .then(users => {
        listadoUsuarios(users.data)
        
       
        return getInfo();
    })
    .then(data => {
        div_profe.innerHTML = data;

        return getJanet();
    })
    .then(data => data.json())
    .then(user =>{
        mostrarJanet(user.data);

        
    });
    


function getUsuarios (){
    return fetch('https://reqres.in/api/users');
}

function getJanet (){
    return fetch('https://reqres.in/api/users/2');
}

function getInfo(){
    var professor = {
        nombre: 'Victor',
        apellido: 'robles',
        url: 'https://victorroblesweb.es'
    };
    return new Promise((resolve, reject) =>{
        var professor_string = "";
        setTimeout(() => {
            professor_string = JSON.stringify(professor);
            if (typeof professor_string != 'string' || professor_string == '') return reject('error 1');
    
            return resolve(professor_string);
            document.querySelector(".loading").style.display = "none";
        }, 2000);

    });
}
    
function listadoUsuarios(usuarios){        
    setTimeout(() => {
        usuarios.map((user, i) => {
            let nombre = document.createElement('h3'); 
            nombre.innerHTML = i + '. ' + user.first_name + " " + user.last_name  + " "  + user.email;
            div_usuarios.appendChild(nombre);
            document.querySelector(".loading").style.display = "none";
        });
    }, 1000);
    
}

function mostrarJanet(user){        
    setTimeout(() => {
        let nombre = document.createElement('h4');
        let avatar = document.createElement('img');
        nombre.innerHTML = user.first_name + " " + user.last_name + " " + user.email;
        avatar.src = user.avatar;
        div_janet.appendChild(nombre);
        div_janet.appendChild(avatar);
    
        document.querySelector("#janet .loading").style.display = "none";
    }, 500);
}