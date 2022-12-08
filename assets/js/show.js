$(window).scroll(function () {

    var start = $(this).scrollTop() + $(window).height();

    $("section#show .show").each(function () {
        var OffsetTop = $(this).offset().top;
        var ratioElement = parseInt(50 + (start - OffsetTop) * 0.02);

        if (ratioElement >= 0 && ratioElement <= 100) {
            $(this).children("img").css("object-position", "center " + ratioElement.toString() + "%");
        }
    });
});