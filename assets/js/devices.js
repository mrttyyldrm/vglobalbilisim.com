$("#devices-pagination span").click(function(){
    if(!$(this).hasClass("active")){
        $("#devices-pagination span").removeClass("active");
        $(this).addClass("active");

        if($(this).hasClass("first")){
            $("#devices-slider").css("left","0");
        }
        else if($(this).hasClass("second")){
            if($(window).width() <= 440){
                $("#devices-slider").css("left","-50%");
            }
            else{
                $("#devices-slider").css("left","-33.33%");
            }
        }
        else if($(this).hasClass("third")){
            if($(window).width() <= 440){
                $("#devices-slider").css("left","-100%");
            }
            else{
                $("#devices-slider").css("left","-66.66%");
            }
        }
        else if($(this).hasClass("fourth")){
            $("#devices-slider").css("left","-150%");
        }
    }   
});