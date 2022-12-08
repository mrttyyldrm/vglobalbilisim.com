$(window).scroll(function(){
    var start = $(this).scrollTop() + $(window).height();

    var first = $("#features .feature:nth-child(1)").offset().top
    var second = $("#features .feature:nth-child(2)").offset().top
    var third = $("#features .feature:nth-child(3)").offset().top

    var ratioFirst = parseInt(50 + (start - first) * 0.02);
    console.log(ratioFirst);
    $("section#features .feature:nth-child(1) img").css("object-position","center " + ratioFirst.toString() + "%");

    var ratioSecond = parseInt(50 + (start - second) * 0.02);
    $("section#features .feature:nth-child(2) img").css("object-position","center " + ratioSecond.toString() + "%");

    var ratioThird = parseInt(50 + (start - second) * 0.02);
    $("section#features .feature:nth-child(3) img").css("object-position","center " + ratioThird.toString() + "%");
});