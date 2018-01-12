$( document ).ready(function() {
    $( ".vs" ).click(function() {
      $("#pop1").css("display","block");
      event.stopPropagation();
    });

    $( ".mvs" ).click(function() {

          $("#pop2").css("display","block");
          event.stopPropagation();
     });

     $( ".avs" ).click(function() {

           $("#pop3").css("display","block");
           event.stopPropagation();
     });

    $('#pop1').click(function(event){
        event.stopPropagation();
    });
    $('#pop2').click(function(event){
            event.stopPropagation();
     });
     $('#pop3').click(function(event){
             event.stopPropagation();
     });
});

$(window).click(function() {
    killPops();
});

function killPops() {
    $(".pop-up").css("display","none");
};