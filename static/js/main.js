$(document).ready(function() {

    $('.red').on('click', function(event) {
        console.log('clicked');
        var content = $(event.currentTarget);
        if (! content.hasClass('active')){
                content.addClass('active');
                content.next('ul').slideDown("slow");
            } 
            else if (content.hasClass('active')){
                content.removeClass('active');
                content.next('ul').slideUp("slow");
            }  
    });
});