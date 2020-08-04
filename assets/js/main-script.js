$(document).ready(function () {

    /*hover event for products category*/
    $('.products-category').hover(function () {
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

window.onload = function () {
    $('#cover-text').animate({
        opacity: "1.0",
        top: "20%"
    }, 1500);
}