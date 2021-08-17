$(document).ready(function () {
        //mover elemento
        $('.elemento').draggable();

        //redimensionar
        $('.elemento').resizable();
        
        //selecionar y ordenar
        //$('.lista-selecionable').selectable();
        $('.lista-selecionable').sortable();
    
        //drop
        $('#elemento-movido').draggable();
        $('#area').droppable({
            drop: function(){
                console.log("has metido un palo aqui")
            }
        });

        //efectos
        $('#mostrar').click(function(){
            /*algunos son el slide fade explpode drop fold puff scale shake*/
            $('.caja-efectos').toggle("scale", 'normal')
        })

        $(document).tooltip()

        //popup que cuando pasas el raton por encima
        $('#popup').mouseenter(function(){
            $('#p').text("Continua aprendiendo con nosotros");
            $('#popup').dialog()
        })

        //date picker
        $('#calendario').datepicker()

            
});