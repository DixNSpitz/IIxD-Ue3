

$( document ).ready(function() {
    $( ".vs" ).click(function() {
      $(".pop-up").css("display","block");
      event.stopPropagation();
    });
    $('.pop-up').click(function(event){
        event.stopPropagation();
    });
});

$(window).click(function() {
    $(".pop-up").css("display","none");
});