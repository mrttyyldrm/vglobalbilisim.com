$("#header-language").hover(function () {
  $(this).children("ol").fadeIn();
}, function () {
  $(this).children("ol").fadeOut();
});

$(window).scroll(function(){
  if($(this).scrollTop() == 0){
    $("header").removeClass("scroll");
  }
  else{
    $("header").addClass("scroll");
  }
});