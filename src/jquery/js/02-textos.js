$(document).ready(function(){
    reloadLinks();
    $('#add_button').click(function(){
        $('#menu').append('<li><a href="' + $('#add_link').val() + '"></a></li>');
        reloadLinks();

        $('#add_link').val('');

        
    });

    $('#button').click(function(){
        var input = $('#input')
        if(input.attr("type") == "text"){
            input.attr("type", "password")     
        }else{
            input.attr("type", "text") 
        }
    });

});

function reloadLinks(){
    $("a").each(function(){ 
        var that = $(this);
        var enlaces = that.attr("href");
        that.attr('target', 'blank')
        that.text(enlaces);
        
    });
}