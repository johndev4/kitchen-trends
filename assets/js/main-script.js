window.onload = function () {
    $('.cover-text').animate({
        opacity: "1.0",
        top: "20%"
    }, 1500);
}

$(document).ready(function () {

    /*hover event for products category*/
    $('.products-category').hover(function () {
        $(this).find('.border-bottom-hr').css({ visibility: "visible" });
        $(this).find('.border-bottom-hr').animate({
            width: "100%"
        }, 250);
    }, function () {
        $(this).find('.border-bottom-hr').animate({
            width: "0px"
        }, 250);
        $(this).find('.border-bottom-hr').css({ visibility: "hidden" });
    });

    /*hover event for social links*/
    $('.social-link').hover(function () {
        $(this).find('span').css({
            "animation-name": "sl-show-onhover",
            "animation-duration": "0.2s",
            "animation-fill-mode": "forwards"
        });
    }, function () {
        $(this).find('span').css({
            "animation-name": "sl-hide-onhover",
            "animation-duration": "0.1s",
            "animation-fill-mode": "forwards"
        });
    })

});