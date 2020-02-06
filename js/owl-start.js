$(document).ready(function () {

	$('.slider-1').owlCarousel({
		loop: true,
		nav: true,
		navText : ['<span class="fa-stack"><i class="fa fa-circle fa-stack-1x"></i><i class="fa fa-chevron-circle-left fa-stack-1x fa-inverse"></i></span>','<span class="fa-stack"><i class="fa fa-circle fa-stack-1x"></i><i class="fa fa-chevron-circle-right fa-stack-1x fa-inverse"></i></span>'],
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
