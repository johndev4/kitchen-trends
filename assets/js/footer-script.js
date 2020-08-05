window.onscroll = function () {
    if (window.scrollY > 100) {
        $('.top-btn').css('display', 'block');
    } else {
        $('.top-btn').css('display', 'none');
    }
}

$(document).ready(function () {

    //Go to top script--
    $('#to-top').click(function () {
        $('html, body').animate({
            scrollTop: 0
        }, "slow");
    });

})