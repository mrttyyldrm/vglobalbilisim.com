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
    }

    if($("body").attr("page") == "index"){
      if($(this).scrollTop() == 0){
        $("header").removeClass("scroll");
      }
      else{
        $("header").addClass("scroll");
      }
    }

    if($(this).scrollTop() > $(window).height()){
      $("a#header-top").addClass("active");
    }
    else{
      $("a#header-top").removeClass("active");
    }
});

$("#header-mobile i").click(function(){
    $("#header-menu").slideToggle();
    $("header").addClass("scroll");
});


if($("html").attr("lang") == "tr-TR"){
  $("#header-language span").html("TR");
  $("#language-change").html("EN");
  $("#language-change").attr("href","../en/" + $("body").attr("page") + ".html");
}
else{
  $("#language-change").attr("href","../tr/" + $("body").attr("page") + ".html");
}