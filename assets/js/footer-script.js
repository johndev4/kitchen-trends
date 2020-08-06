$(document).ready(function () {

    $(window).on("scroll", showToTopBtn);
    showToTopBtn();

    //Go to top script--
    $('#to-top').click(function () {
        $('html, body').animate({
            scrollTop: 0
        }, "slow");
    });

    function showToTopBtn() {
        if ($(window).scrollTop() > 80) {
            $('.to-top.ovr-container').fadeIn("slow", "linear");
        } else {
            $('.to-top.ovr-container').fadeOut("slow", "linear");
        }
        //$('#to-top').text($(window).scrollTop());
    }

});