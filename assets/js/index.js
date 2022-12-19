$(document).ready(function(){
    //$("section#coming-soon").load("coming-soon.html");
    if($("html").attr("lang") == "tr-TR"){
        $("header").load("../tr/header.html");
        $("footer").load("../tr/footer.html");
        $("#header-language span").html("TR");
        $("#language-change").html("EN");
        $("#language-change").attr("href","../en/" + $("body").attr("page") + ".html");
      }
      else{
        $("header").load("../en//header.html");
        $("footer").load("../en//footer.html");
        $("#language-change").attr("href","../tr/" + $("body").attr("page") + ".html");
      }
});