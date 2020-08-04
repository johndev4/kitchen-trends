$(document).ready(function () {

    $('.border-bottom-hover-animation').hover(function () {
        $(this).find(".border-bottom-hr").css("visibility", "visible");
        $(this).find(".border-bottom-hr").animate({
            width: "100%"
        }, 250);

    }, function () {
        $(this).find(".border-bottom-hr").animate({
            width: "0px"
        }, 250);
        $(this).find(".border-bottom-hr").css("visibility", "hidden")
    });

    $('.box-shadow-hover').hover(function() {
        $(this).addClass("shadow");
    }, function() {
        $(this).removeClass("shadow");
    });

});