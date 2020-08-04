$(document).ready(function () {

    //OwlCarousel2-2.3.4 Plugin
    $('.owl-carousel').owlCarousel({
        margin: 10,
        loop: false,
        autoWidth: true,
        items: 4
    });

});

window.onload = function () {
    $('#cover-text').animate({
        opacity: "1.0",
        top: "20%"
    }, 1500);
}