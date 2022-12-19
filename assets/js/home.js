var counter = 1;

var Backgrounds = ['url(../assets/img/home-slider-1.jpg)', 'url(../assets/img/home-slider-2.jpg)', 'url(../assets/img/home-slider-3.jpg)'];
var Messages = ["Realize your new projects<br>with V-Global products", "Excellent product features<br> and design", "Lead change<br>with V-Global"];
var MessagesTR = ["Yeni projelerinizi V-Global<br>ürünleriyle gerçekleştirin", "Mükemmel ürün<br>özellikleri ve tasarım", "V-Global ile<br>değişikliklere öncülük edin"];

setInterval(function () {
    if (counter >= (Backgrounds.length))
        counter = 0;

    $("#home-content h1").fadeOut(300);
    console.log(counter + " / " + Backgrounds.length);

    $("#home-slider").css("background-image", Backgrounds[counter]);
    setTimeout(function () {
        if($("html").attr("lang") == "tr-TR"){
            $("#home-content h1").html(MessagesTR[counter]);
        }
        else{
            $("#home-content h1").html(Messages[counter]);
        }
        counter++;
    }, 400);
    
    $("#home-content h1").fadeIn(1250);
}, 5000);