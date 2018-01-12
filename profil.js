$( document ).ready(function() {
    $( ".vs1" ).click(function() {
      $(".pop-up1").css("display","block");
      event.stopPropagation();
    });
    $('.pop-up1').click(function(event){
        event.stopPropagation();
    });


$(window).click(function() {
    $(".pop-up1").css("display","none");
});

    $( ".vs2" ).click(function() {
      $(".pop-up2").css("display","block");
      event.stopPropagation();
    });
    $('.pop-up2').click(function(event){
        event.stopPropagation();
    });


$(window).click(function() {
    $(".pop-up2").css("display","none");
});

    $( ".vs3" ).click(function() {
      $(".pop-up3").css("display","block");
      event.stopPropagation();
    });
    $('.pop-up3').click(function(event){
        event.stopPropagation();
    });

$(window).click(function() {
    $(".pop-up3").css("display","none");
});

    $( ".vs4" ).click(function() {
      $(".pop-up4").css("display","block");
      event.stopPropagation();
    });
    $('.pop-up4').click(function(event){
        event.stopPropagation();
    });

$(window).click(function() {
    $(".pop-up4").css("display","none");
});
});