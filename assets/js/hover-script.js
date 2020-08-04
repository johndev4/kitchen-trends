$(document).ready(function () {

    $('.border-bottom-hover-animation').hover(function () {
        $(this).find(".border-bottom").css("visibility", "visible");
        $(this).find(".border-bottom").animate({
            width: "100%"
        }, 250);

    }, function () {
        $(this).find(".border-bottom").animate({
            width: "0px"
        }, 250);
        $(this).find(".border-bottom").css("visibility", "hidden")
    });

    $('.box-shadow-hover').hover(function() {
        $(this).addClass("shadow");
    }, function() {
        $(this).removeClass("shadow");
    });

});