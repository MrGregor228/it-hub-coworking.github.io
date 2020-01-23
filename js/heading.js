$(function () {
    $(document).scroll(function () {
        var $nav = $(".nav-cont");
        $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
    });
});

function parallax() {
    var scrolled = $(window).scrollTop();
    $('.bg').css('top', +(scrolled * 0.4) + 'px');
}

$(window).scroll(function () {
    parallax();
});