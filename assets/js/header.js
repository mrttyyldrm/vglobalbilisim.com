$("#header-language").click(function () {
    $(this).children("ol").fadeToggle();
});

var IsIndex = true;
$(window).scroll(function(){
    $("#header-language ol").fadeOut();
    if($(window).width() <= 440){
      $("#header-menu").slideUp(750);
      $("header").removeClass("scroll");
    }

    if($(this).scrollTop() == 0 && IsIndex == true){
      $("header").removeClass("scroll");
    }
    else{
      $("header").addClass("scroll");
    }
});

$("#header-mobile i").click(function(){
    $("#header-menu").slideToggle();
    $("header").addClass("scroll");
});

$("#header-menu nav ul li").click(function(){
  $("main").fadeOut(300);
  $("footer").fadeOut(300);
  if($(this).hasClass("home")){
    setTimeout(function(){
      $("main").load("index.html");
      IsIndex = true;
      $("main").fadeIn(300);
      $("footer").fadeIn(300);
    },500);
  }
  else if($(this).hasClass("contact")){
    setTimeout(function(){
      $("main").load("contact.html");
      $("header").addClass("scroll");
      $("main").fadeIn(300);
      $("footer").fadeIn(300);
      IsIndex = false;
    },500);
  }
});