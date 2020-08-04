$(document).ready(function () {

    $('.navbar-toggler').on("click", function () {
        if (!$('.navbar-collapse').hasClass("show")) {
            $(this).animate({
                border: "1px solid white"
            }, 500);
        } else {
            $(this).animate({
                opacity: "1.0"
            }, 250);
        }
    });

    /*$(document).on("scroll", function() {
        if ($(this).scrollTop() > 1){
            $('.brand-name').animate({
                opacity: "0",
                width: "0px"
            }, 500);

        } else{
            $('.brand-name').animate({
                opacity: "1.0",
                width: "200px"
            }, 500);
        }
    });*/

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

});