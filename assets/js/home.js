var counter = 1;

var Backgrounds = ['url(assets/img/home-slider-1.jpg)', 'url(assets/img/home-slider-2.jpg)', 'url(assets/img/home-slider-3.jpg)'];
var Messages = ["Realize your new projects<br>with our products", "Incredible app features<br>and fresh new ideas", "Follow the digital trends<br>and lead the changes"];

setInterval(function () {
    if (counter >= (Backgrounds.length))
        counter = 0;

    $("#home-content h1").fadeOut(300);
    console.log(counter + " / " + Backgrounds.length);

    $("#home-slider").css("background-image", Backgrounds[counter]);
    setTimeout(function () {
        $("#home-content h1").html(Messages[counter]);
        counter++;
    }, 400);
    
    $("#home-content h1").fadeIn(1250);
}, 5000);