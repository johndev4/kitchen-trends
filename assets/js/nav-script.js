$(document).ready(function () {

    /*event click for navigation toggler*/
    $('.navbar-toggler').first().click(function () {
        if ($(this).hasClass("collapsed")) {
            $('#rotate-box').css({
                "animation-name": "rotate",
                "animation-duration": "0.1s",
                "animation-iteration-count": "1",
                "animation-fill-mode": "forwards"
            });

            $('#rotate-box').removeClass("fa-bar");
            $('#rotate-box').addClass("fa-times");

        } else {
            $('#rotate-box').css({
                "animation-name": "unrotate",
                "animation-duration": "0.1s",
                "animation-iteration-count": "1",
                "animation-fill-mode": "forwards"
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