$(document).ready(function () {

    $('.nav-link').hover(function () {
        $(this).find(".nav-link-bottom").css("visibility", "visible");
        $(this).find(".nav-link-bottom").animate({
            width: "100%"
        }, 250);

    }, function () {
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

    $('.navbar-toggler').on("click", function () {
        if (!$('.navbar-collapse').hasClass("show")) {
            $(this).animate({
                border: "1px solid white"
            }, 500);
        } else{
            $(this).animate({
                opacity: "1.0"
            }, 250);
        }
    });

    window.onscroll = function() {
        if ($(this).scrollTop() > 0){
            $('.brand-name').animate({
                opacity: "0",
                width: "0px"
            }, 500);
        } else if ($(this).scrollTop() == 0){
            $('.brand-name').animate({width: "200px"}, 500);
        }
    }

});