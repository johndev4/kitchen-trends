$(document).ready(function () {

    $('.nav-link').hover(function () {
        $(this).find(".nav-link-bottom").css("visibility", "visible");
        $(this).find(".nav-link-bottom").animate({
            width: "100%"
        }, 250);

    }, function () {
        ;
        $(this).find(".nav-link-bottom").animate({
            width: "0px"
        }, 250);
        $(this).find(".nav-link-bottom").css("visibility", "hidden")
    });

    //products dropdown
    $('.dropdown').hover(function () {
        $(this).find(".dropdown-menu").show();

    }, function () {
        $(this).find(".dropdown-menu").hide();
    });

});