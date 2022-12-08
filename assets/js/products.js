$("#products-pagination span").click(function(){
    if(!$(this).hasClass("active")){
        $("#products-pagination span").removeClass("active");
        $(this).addClass("active");

        if($(this).hasClass("first")){
            $("#products-slider").css("left","0");
        }
        else if($(this).hasClass("second")){
            $("#products-slider").css("left","-33%");
        }
        else if($(this).hasClass("third")){
            $("#products-slider").css("left","-66%");
        }
    }   
});