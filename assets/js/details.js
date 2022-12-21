$("#collapse-title ul li").click(function(){
    if(!$(this).hasClass("active")){

        var idName = $(this).attr("name");
        $("#collapse-content ul li").removeClass("active");
        $("#collapse-content ul li#"+ idName).addClass("active");

        $("#collapse-title ul li").removeClass("active");
        $(this).addClass("active");
    }
});

$("#details-image img").click(function(){
    $("#popup-container img").attr("src",$(this).attr("src"));
    $("#details-popup").fadeIn();
});
$("#popup-container i").click(function(){
    $("#details-popup").fadeOut();
});