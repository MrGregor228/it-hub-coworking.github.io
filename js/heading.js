$(function () {
    $(document).scroll(function () {
        var $nav = $(".navbar");
        $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
    });
});

function parallax() {
    var scrolled = $(window).scrollTop();
    $('.bg').css('top', +(scrolled * 0.2) + 'px');
}

$(window).scroll(function (e) {
    parallax();
});