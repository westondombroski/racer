$(document).ready(function() {

var car1counter = 0;

/* -- race car 1 --*/
  $(window).keyup(function(e){

    if (e.keyCode == 13){
      car1counter++;

      $(".car1").animate({
        marginLeft: "+=25px"
      }, 20 );
    }
  });

/* -- car 1 wins--*/
  setInterval(function(){
     if (car1counter > 50){
       $(".car1wins").removeClass("hidden");
     }
  }, 10);

/* -- race car 2 --*/
  $(window).keyup(function(e){
    if (e.keyCode == 32){
      car2counter++;

      $(".car2").animate({
        marginLeft: "+=25px"
      }, 20 );
    }
  });

 var car2counter = 0;

/* -- car 2 wins--*/
  setInterval(function(){
     if (car2counter > 50){
       $(".car2wins").removeClass("hidden");
     }
  }, 10);

});
