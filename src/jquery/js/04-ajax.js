$(document).ready(function () {
    //el load coge datos i los mete en un div

    $('#datos').load("https://reqres.in/");

    //get y post
    $.get("https://reqres.in/api/users", {page: 2}, function(response){
        response.data.forEach((element, index) => {
            $('#list').append("<p>" + element.first_name + ' ' + element.last_name + ' ' + element.email + "</p>");
            //forma de jquery
            var avatar = $('<img>');
            avatar.attr("src", element.avatar);

            //formajs puro
            /*var avatar = document.createElement('img');
            avatar.src = element.avatar;
            */

            $('#list').append(avatar);
        });
    });

    $('#form').submit(function(e){ 
        e.preventDefault();

        var usuario = {
            name: $('#name').val().trim(),
            pagina: $('#web').val().trim()
        }; 
        console.log(usuario)
        /*
        $.post($(this).attr("action"), usuario, function(response){
            console.log(response)
    
        }).done(function(){
            alert("Usuario añadido gracias por confiar en nosotros " + usuario.name)
        });*/

        $.ajax({
            //es para el tipo de peticion
            type: "POST",
            //url de la petucion
            url: $(this).attr("action"),
            //el dato que se envia
            data: usuario,
            //i hay diferentes metodos el beforeSend el error el succes
            beforeSend: function(){
                console.log("enviando usuario ...");
            },
            success: function(response){
                console.log(response);
            },
            error: function(){
                console.log("a ocurrido un error hay una mosca en los servidores")
            },
            timeout: 2000
        });
        return false
    }); 
    

});