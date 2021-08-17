$(document).ready(() => {
    
    //selector de id
    $("#rojo").css("background", "red")
                .css("padding","10px");

    $("#amarillo").css("background", "yellow")
                .css("padding","10px");

    $("#verde").css("background", "green")
    .css("padding","10px");

    //selectores de clases
    var myclass = $(".zebra");

    $('.sin').click(function(){
        $(this).addClass('zebra');
    });

    //selectores por etiqueta
    var p = $('p').css("cursor", "pointer");
    p.click(function(){
        var thi = $(this);
        if (!thi.hasClass('grande')){
            thi.addClass('grande');
        }else{
            thi.removeClass('grande');
        }
    });

    //selectores de atributo
    $('[title="google"]').css('background', 'black')
    .css('color', 'orange');

    $('[title="facebook"]').css('background', 'orange')
    .css('color', 'black');

    $('[title="instagram"]').css('background', 'red')
    .css('color', 'white');

    //otros

    $('p, a').addClass('margen-superior');

    var busqueda = $("#caja .resaltado").eq(0).parent().parent().parent().find('[title="instagram"]');
    console.log(busqueda);

});