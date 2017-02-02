$(document).ready(function() {


  $(window).keyup(function(e){
    if (e.keyCode == 13){
      $(".car1").animate({
        marginLeft: "+=25px"
      }, 20 );
    }
  });

  setInterval(function(){
     if ($(".car1").css("marginLeft") == '1300px'){
       $(".car1wins").removeClass("hidden");
     }
  }, 10);


  $(window).keyup(function(e){
    if (e.keyCode == 32){
      $(".car2").animate({
        marginLeft: "+=5px"
      }, 20 );
    }
  });

  setInterval(function(){
     if ($(".car1").css("marginLeft") == '1300px'){
       $(".car1wins").removeClass("hidden");
     }
  }, 10);

});
