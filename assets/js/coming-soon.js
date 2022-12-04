var futureDate = new Date("2022/12/17 24:00:00").getTime();
var now = new Date().getTime();
var distance = futureDate - now;

setInterval(function() {
    var now = new Date().getTime();
    var distance = futureDate - now;

    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    if(distance < 0){
        $("#home-days").children("span").text("00");
        $("#home-hours").children("span").text("00");
        $("#home-minutes").children("span").text("00");
        $("#home-seconds").children("span").text("00");
        clearInterval();
    }
    else{
        if(days < 10){
            days = "0" + days;
        }
        if(hours < 10){
            hours = "0" + hours;
        }
        if(minutes < 10){
            minutes = "0" + minutes;
        }
        if(seconds < 10){                        
            seconds = "0" + seconds;
        }

        $("#timelapse-days").children("span").text(days);
        $("#timelapse-hours").children("span").text(hours);
        $("#timelapse-minutes").children("span").text(minutes);
        $("#timelapse-seconds").children("span").text(seconds);
    }
}, 1000);