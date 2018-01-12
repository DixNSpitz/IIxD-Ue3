$( document ).ready(function() {
    $( ".button" ).click(function() {
      $(".Profilangaben").css("display","none");
      $(".Bearbeitung").css("display","block");
      $(".button").css("display", "none");
      $(".back").css("display", "block");
    });

    $(".back").click(function(){
        $(".Profilangaben").css("display","block");
        $(".Bearbeitung").css("display","none");
        $(".button").css("display", "block");
        $(".back").css("display", "none");
    });
});