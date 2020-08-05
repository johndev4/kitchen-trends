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

    /*click event for products*/
    $('#nav-products').click(function() {
        $('html, body').animate({
            scrollTop: $('#prod-cat-sec').position().top
        }, "slow");
    });

});