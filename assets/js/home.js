var counter = 0;
setInterval(function(){
    if(counter == 0){
        $("#home-slider").css("background-image","url(assets/img/home-slider-2.jpg)");
    }
    else if(counter == 1){
        $("#home-slider").css("background-image","url(assets/img/home-slider-3.jpg)");
    }
    else if(counter == 2){
        $("#home-slider").css("background-image","url(assets/img/home-slider-1.jpg)");
        counter = -1;
    }
    counter++;
}, 5000);
$("#slider-back").click(function(){
});
$("#slider-next").click(function(){
});