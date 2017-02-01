$(document).ready(function(e) {
  $("div").keydown(function(){
    $(this).animate({
        marginLeft: "+=50px",
    }, 1000 );
});
});
