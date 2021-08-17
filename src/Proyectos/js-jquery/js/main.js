$(document).ready(function(){
    
    if(window.location.href.indexOf('index') > -1){
        //slider
        $('.bxslider').bxSlider({
            mode: 'fade',
            captions: true,
            slideWidth: 1200,
            responsive: true,
            //posts
        
        });
        var posts = [
            {
                title: 'Crear base de datos mongo db',
                date: 'Lunes 3 de agosto de 2020',
                content: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis tempora pariatur, explicabo sunt distinctio illum id saepe beatae animi necessitatibus sit ea incidunt. Nihil iusto illum et sequi, deserunt accusantium fugiat modi architecto qui nobis cum! Quis ut hic corrupti sequi aliquid, iure dolores perferendis eos officia iusto. Vel commodi ipsa, ex dolorum nostrum sequi neque veritatis soluta perferendis voluptates deserunt saepe reprehenderit at libero recusandae est a adipisci quis, quisquam non rerum. Rerum dignissimos ullam esse distinctio similique molestiae, nostrum placeat velit voluptatum eligendi, labore alias ut adipisci sed? Ea laborum laudantium tempora minima fugiat magni, consectetur voluptas veritatis saepe quasi nemo quae mollitia delectus. Sequi culpa, a provident cupiditate facere consequatur ipsum odit dolorum fuga, commodi non repudiandae asperiores quia vero, ea odio amet animi iusto voluptatibus ratione! Quod sint blanditiis sapiente velit repellat exercitationem quidem assumenda eveniet, quaerat nobis voluptatibus dolores ea. Aliquam consequatur maxime natus vero.',
                link: 'https://nodeymongo.wordpress.com/2014/06/12/crear-y-conectar-a-una-bbdd-mongodb-remota/'
            },
            {
                title: 'Administrar base de datos mongo',
                date: 'Lunes 3 de agosto de 2020',
                content: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis tempora pariatur, explicabo sunt distinctio illum id saepe beatae animi necessitatibus sit ea incidunt. Nihil iusto illum et sequi, deserunt accusantium fugiat modi architecto qui nobis cum! Quis ut hic corrupti sequi aliquid, iure dolores perferendis eos officia iusto. Vel commodi ipsa, ex dolorum nostrum sequi neque veritatis soluta perferendis voluptates deserunt saepe reprehenderit at libero recusandae est a adipisci quis, quisquam non rerum. Rerum dignissimos ullam esse distinctio similique molestiae, nostrum placeat velit voluptatum eligendi, labore alias ut adipisci sed? Ea laborum laudantium tempora minima fugiat magni, consectetur voluptas veritatis saepe quasi nemo quae mollitia delectus. Sequi culpa, a provident cupiditate facere consequatur ipsum odit dolorum fuga, commodi non repudiandae asperiores quia vero, ea odio amet animi iusto voluptatibus ratione! Quod sint blanditiis sapiente velit repellat exercitationem quidem assumenda eveniet, quaerat nobis voluptatibus dolores ea. Aliquam consequatur maxime natus vero.',
                link: 'https://nodeymongo.wordpress.com/2014/05/17/administra-bases-de-datos-mongodb-con-robomongo/'
            },
            {
                title: 'Mlab',
                date: 'Lunes 3 de agosto de 2020',
                content: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis tempora pariatur, explicabo sunt distinctio illum id saepe beatae animi necessitatibus sit ea incidunt. Nihil iusto illum et sequi, deserunt accusantium fugiat modi architecto qui nobis cum! Quis ut hic corrupti sequi aliquid, iure dolores perferendis eos officia iusto. Vel commodi ipsa, ex dolorum nostrum sequi neque veritatis soluta perferendis voluptates deserunt saepe reprehenderit at libero recusandae est a adipisci quis, quisquam non rerum. Rerum dignissimos ullam esse distinctio similique molestiae, nostrum placeat velit voluptatum eligendi, labore alias ut adipisci sed? Ea laborum laudantium tempora minima fugiat magni, consectetur voluptas veritatis saepe quasi nemo quae mollitia delectus. Sequi culpa, a provident cupiditate facere consequatur ipsum odit dolorum fuga, commodi non repudiandae asperiores quia vero, ea odio amet animi iusto voluptatibus ratione! Quod sint blanditiis sapiente velit repellat exercitationem quidem assumenda eveniet, quaerat nobis voluptatibus dolores ea. Aliquam consequatur maxime natus vero.',
                link:'https://mlab.com/'
            },
            {
                title: 'Insta',
                date: 'Lunes 3 de agosto de 2020',
                content: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis tempora pariatur, explicabo sunt distinctio illum id saepe beatae animi necessitatibus sit ea incidunt. Nihil iusto illum et sequi, deserunt accusantium fugiat modi architecto qui nobis cum! Quis ut hic corrupti sequi aliquid, iure dolores perferendis eos officia iusto. Vel commodi ipsa, ex dolorum nostrum sequi neque veritatis soluta perferendis voluptates deserunt saepe reprehenderit at libero recusandae est a adipisci quis, quisquam non rerum. Rerum dignissimos ullam esse distinctio similique molestiae, nostrum placeat velit voluptatum eligendi, labore alias ut adipisci sed? Ea laborum laudantium tempora minima fugiat magni, consectetur voluptas veritatis saepe quasi nemo quae mollitia delectus. Sequi culpa, a provident cupiditate facere consequatur ipsum odit dolorum fuga, commodi non repudiandae asperiores quia vero, ea odio amet animi iusto voluptatibus ratione! Quod sint blanditiis sapiente velit repellat exercitationem quidem assumenda eveniet, quaerat nobis voluptatibus dolores ea. Aliquam consequatur maxime natus vero.',
                link:'https://www.instagram.com/'
            },
            {
                title: 'Youtube',
                date: 'Lunes 3 de agosto de 2020',
                content: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis tempora pariatur, explicabo sunt distinctio illum id saepe beatae animi necessitatibus sit ea incidunt. Nihil iusto illum et sequi, deserunt accusantium fugiat modi architecto qui nobis cum! Quis ut hic corrupti sequi aliquid, iure dolores perferendis eos officia iusto. Vel commodi ipsa, ex dolorum nostrum sequi neque veritatis soluta perferendis voluptates deserunt saepe reprehenderit at libero recusandae est a adipisci quis, quisquam non rerum. Rerum dignissimos ullam esse distinctio similique molestiae, nostrum placeat velit voluptatum eligendi, labore alias ut adipisci sed? Ea laborum laudantium tempora minima fugiat magni, consectetur voluptas veritatis saepe quasi nemo quae mollitia delectus. Sequi culpa, a provident cupiditate facere consequatur ipsum odit dolorum fuga, commodi non repudiandae asperiores quia vero, ea odio amet animi iusto voluptatibus ratione! Quod sint blanditiis sapiente velit repellat exercitationem quidem assumenda eveniet, quaerat nobis voluptatibus dolores ea. Aliquam consequatur maxime natus vero.',
                link:'https://www.youtube.com/'
            }
        ]
    
        posts.forEach((item, index) => {
            var post = `
                <article class="post">
                    <h2>${item.title}</h2>
                    <span class="date">${item.date}</span>
                    <p>${item.content}</p>
                    <a href="${item.link}" target="blank" class="read-more">Read more</a>
                </article>
            `
            ('#posts').append(post)
        })
    
        //usuarios backend
        $.get("https://reqres.in/api/users", {page: 2},
        function (response) {
            var users = response.data
            users.forEach((item) =>{
                var user = `
                    <div class="user">
                        <h4 class="name ">${item.first_name + item.last_name}</h4>
                        <span class="email">${item.email}</span>
                        <img src="${item.avatar}" class="avatar">
                    </div>
                `
                $('#users').append(user)
            })
            }
        )
    }



    //selector de fondo
    $('#to-red').click(function(){
        $('#theme').attr('href', 'css/red.css')
    })
    $('#to-blue').click(function(){
        $('#theme').attr('href', 'css/blue.css')
    })
    $('#to-green').click(function(){
        $('#theme').attr('href', 'css/green.css')
    })

    //scroll arriba de la web
    $('.subir').click(function(e){
		e.preventDefault();

		$('html, body').animate({
			scrollTop: 0
		}, 500);

		return false;
    });
    
    //login falso
    $('#login form').submit(function(){
        var name = $('#form_name').val()
        var email = $('#email').val()

        localStorage.setItem('form_name', name);
        localStorage.setItem('form_email', email);
    })

    var form_name = localStorage.getItem("form_name")
    var form_email = localStorage.getItem("form_email")


    $('#about p').text('Hola ' + form_name + ' gracias por visitar nuestro blog sobre naturaleza y medioambiente se te enviara un correo cada vez que se publique un articulo a este correo ' + form_email)

    //acordeon
    if (window.location.href.indexOf('about')){
        $('#acordeon').accordion();
    }

    //reloj dinamico
    if (window.location.href.indexOf('reloj')){
        setInterval(function(){ 
                var fecha = new Date()
                var hora = fecha.getHours()
                var minuto = fecha.getMinutes()
                var segundo = fecha.getSeconds()

                $('#hour').text(hora)
                $('#minute').text(minuto)
                $('#second').text(segundo)
        }, 1000);
    }

    if (window.location.href.indexOf('reloj')){
        $("form input[name='date']").datepicker({
            dateFormat: 'dd/mm/yy'
        });
        
        $.validate({
            lang:'es',
            errorMessagePosition:'top'
        })
    }

});