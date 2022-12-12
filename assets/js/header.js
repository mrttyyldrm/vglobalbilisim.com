$("#header-language").click(function () {
    $(this).children("ol").fadeToggle();
});
if(!$("body").hasClass("index")){
  $("header").addClass("scroll");
}

$(window).scroll(function(){
    $("#header-language ol").fadeOut();
    if($(window).width() <= 440){
      $("#header-menu").slideUp(750);
      $("header").removeClass("scroll");
    }

    if($("body").hasClass("index")){
      if($(this).scrollTop() == 0){
        $("header").removeClass("scroll");
      }
      else{
        $("header").addClass("scroll");
      }
    }
});

$("#header-mobile i").click(function(){
    $("#header-menu").slideToggle();
    $("header").addClass("scroll");
});