$(document).ready(function () {
    var caja = $('#caja');
    var button = $('#todoenuno');
    $('#mostrar').hide();
    
    /*hay parametros para hide i show son:
    normal fast slow
    
    tambien tienes el fade in y fade out
    
    TAMBIEN EXIste el fade to para que cambie la opacidad recibe dos 
    parametros la velocidad i a que opacidad se queda
    */
   
   $('#mostrar').click(function() { 
       $(this).hide();
       $('#ocultar').show();
       $('#caja').fadeIn('slow');
       
    }); 
    
    $('#ocultar').click(function() { 
        $(this).hide();
        $('#mostrar').show();
        $('#caja').fadeOut('slow', function(){
            console.log('cartel ocultado ')
        });
    }); 
    
    button.click(function () { 
        caja.slideToggle('fast');
    });
    
    var animar = $('#animame')
    animar.click(function(){
        caja.animate({
                marginLeft: '500px',
                fontSize: '40px',
                height: '110px'
                }, 'slow')
            .animate({
                borderRadius: '900px',
                marginTop: '60px'
            },'slow')
            .animate({
                marginLeft: '0px',
                borderRadius: '0px'
            },'slow')
            .animate({
                marginTop: '0px',
                borderRadius: '1000px'
            },'slow')
    });
});