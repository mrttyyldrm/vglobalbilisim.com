var counter = 0;
setInterval(function(){
    $("#home-content h1").fadeOut(300);
    if(counter == 0){
        $("#home-slider").css("background-image","url(assets/img/home-slider-2.jpg)");
        setTimeout(function(){
            $("#home-content h1").html("Realize your new projects<br>with our products");
        },400);
    }
    else if(counter == 1){
        $("#home-slider").css("background-image","url(assets/img/home-slider-3.jpg)");
        setTimeout(function(){
            $("#home-content h1").html("Incredible app features<br>and fresh new ideas");
        },400);
    }
    else if(counter == 2){
        $("#home-slider").css("background-image","url(assets/img/home-slider-1.jpg)");
        setTimeout(function(){
            $("#home-content h1").html("Folow the digital trends<br>and lead the changes");
        },400);
        counter = -1;
    }
    counter++;
    $("#home-content h1").fadeIn(1250);
}, 5000);
