$(document).ready(function () {

    $(window).on("load", function() {
        $('.feature-text').animate({
            opacity: "1.0",
            top: "20%"
        }, 1500);

        showToTopBtn();
    });

    $(window).on("scroll", showToTopBtn);

    /*event click for navigation toggler*/
    $('.navbar-toggler').first().click(function () {
        if ($(this).hasClass("collapsed")) {
            $('#rotate-box').css({
                "animation-name": "rotateClockwise",
                "animation-duration": "0.1s",
                "animation-iteration-count": "1",
                "animation-fill-mode": "forwards"
            });

            $('#rotate-box').removeClass("fa-bar");
            $('#rotate-box').addClass("fa-times");

        } else {
            $('#rotate-box').css({
                "animation-name": "rotateCounterClockwise",
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

    /*click event to navigate to products*/
    $('.nav-to-products').click(function() {
        $('html, body').animate({
            scrollTop: $('#prod-cat-sec').position().top
        }, "slow");
    });

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

    /*click event for navigation to top*/
    $('#to-top').click(function () {
        $('html, body').animate({
            scrollTop: 0
        }, "slow");
    });

    /*hover event for footer links*/
    $('.footer-link').hover(function () {
        $(this).css({
            color: "#cccccc",
            "text-decoration": "underline"
        });
    }, function () {
        $(this).css({
            color: "#eeeeee",
            "text-decoration": "none"
        });
    });

});