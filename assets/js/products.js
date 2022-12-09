$("#products-pagination span").click(function(){
    if(!$(this).hasClass("active")){
        $("#products-pagination span").removeClass("active");
        $(this).addClass("active");

        if($(this).hasClass("first")){
            $("#products-slider").css("left","0");
        }
        else if($(this).hasClass("second")){
            if($(window).width() <= 440){
                $("#products-slider").css("left","-50%");
            }
            else{
                $("#products-slider").css("left","-33.33%");
            }
        }
        else if($(this).hasClass("third")){
            if($(window).width() <= 440){
                $("#products-slider").css("left","-100%");
            }
            else{
                $("#products-slider").css("left","-66.66%");
            }
        }
        else if($(this).hasClass("fourth")){
            $("#products-slider").css("left","-150%");
        }
    }   
});