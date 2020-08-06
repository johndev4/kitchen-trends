window.onscroll = function () {
    if (window.scrollY > 90) {
        $('.to-top.ovr-container').css('display', 'block');
    } else {
        $('.to-top.ovr-container').css('display', 'none');
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