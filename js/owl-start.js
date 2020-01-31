$(document).ready(function () {

	$('.slider-1').owlCarousel({
		loop: true,
		margin: 10,
		nav: true,
		navText : ["<i class='fa fa-chevron-left'></i>","<i class='fa fa-chevron-right'></i>"],
		pagination: true,
		autoplay: true,
		autoplayTimeout: 7000,
		autoplayHoverPause: true,
		items: 4,
		responsiveClass: true,
		responsive: {
			0: {
				items: 1,
				nav: true
			},
			768: {
				items: 2,
				nav: true
			},
			1000: {
				items: 3,
				nav: true,
				loop: true
			},
			1280: {
				items: 4,
				nav: true,
				loop: true
			}
		}
	});
	
});