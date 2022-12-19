$("#products-navigation ul li").click(function(){
    if(!$(this).hasClass("active")){
        $("#products-content .products-category").css("display","none");
        $("#products-content #" + $(this).attr("product")).css("display","flex");
        $("#products-navigation ul li").removeClass("active");
        $(this).addClass("active");
        $("#main-breadcrumb .container ul li:last").html($(this).attr("product"));
    }
});