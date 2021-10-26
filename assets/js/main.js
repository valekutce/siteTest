$(document).ready(function (){
    $('.burg').click(function(){
        $(this).toggleClass('burg-active');
    });

    $('.burg').click(function(){
        $('.mabile-menu').toggleClass('mabile-menu_active');
    });

$('.header-top-lang a').click(function(event){
    event.preventDefault();
    $('.header-top-lang a').removeClass('active');
    $(this).addClass('active');
});


});