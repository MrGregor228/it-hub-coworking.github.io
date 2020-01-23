$(function () {
    $(document).scroll(function () {
        var $nav = $(".nav-cont");
        $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
    });
});

function parallax() {
    var scrolled = $(window).scrollTop();
    $('.bg').css('top', +(scrolled * 2) + 'px');
}

$(window).scroll(function () {
    parallax();
});