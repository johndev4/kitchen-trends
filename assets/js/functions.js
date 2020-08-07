function showToTopBtn() {
    if ($(window).scrollTop() > 80) {
        $('.to-top.ovr-container').fadeIn("slow", "linear");
    } else {
        $('.to-top.ovr-container').fadeOut("slow", "linear");
    }
}
