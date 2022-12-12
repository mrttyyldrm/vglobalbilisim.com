$(window).scroll(function(){
    var ratio = ($(this).scrollTop() / $("#about-slide").offset().top) * 10;
    $("#about-slide span").css("left", -ratio + "%");
});