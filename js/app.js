$(document).ready(function() {



  $(window).keyup(function(e){
    if (e.keyCode == 13){
      $(".car1").animate({
        marginLeft: "+=5px"
      }, 20 );
    }
  });


  $(window).keyup(function(e){
    if (e.keyCode == 32){
      $(".car2").animate({
        marginLeft: "+=5px"
      }, 20 );
    }
  });

var car1 = $(".car1");
var car2 = $(".car2");
var car1Position = car1.position();
var car2Position = car2.position();

  if(car1Position.leftMargin === 900){
    alert("Car1 Wins!!!!");
  }

  if(car2Position.left === 900){
    alert("Car2 Wins!!!!");
  }

});
