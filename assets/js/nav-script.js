$(document).ready(function () {

    /*event click for navigation toggler*/
    $('.navbar-toggler').first().click(function () {
        if ($(this).hasClass("collapsed")) {
            $('#rotate-box').css({
                //for firefox
                "-moz-animation-name": "rotate",
                "-moz-animation-duration": "0.5s",
                "-moz-animation-iteration-count": "1",
                "-moz-animation-fill-mode": "forwards",
                //for safari & chrome
                "-webkit-animation-name": "rotate",
                "-webkit-animation-duration": "0.1s",
                "-webkit-animation-iteration-count": "1",
                "-webkit-animation-fill-mode": "forwards",
            });

            $('#rotate-box').removeClass("fa-bar");
            $('#rotate-box').addClass("fa-times");

        } else {
            $('#rotate-box').css({
                //for firefox
                "-moz-animation-name": "unrotate",
                "-moz-animation-duration": "0.5s",
                "-moz-animation-iteration-count": "1",
                "-moz-animation-fill-mode": "forwards",
                //for safari & chrome
                "-webkit-animation-name": "unrotate",
                "-webkit-animation-duration": "0.1s",
                "-webkit-animation-iteration-count": "1",
                "-webkit-animation-fill-mode": "forwards",
            });

            $('#rotate-box').removeClass("fa-times");
            $('#rotate-box').addClass("fa-bar");
        }
    });

    /*hover event for navigation link*/
    $('.nav-link').hover(function () {
        $(this).find('.border-bottom-hr').css({visibility: "visible"});
        $(this).find('.border-bottom-hr').animate({
            width: "100%"
        }, 250);
    }, function() {
        $(this).find('.border-bottom-hr').animate({
            width: "0px"
        }, 250);
        $(this).find('.border-bottom-hr').css({visibility: "hidden"});
    });

});