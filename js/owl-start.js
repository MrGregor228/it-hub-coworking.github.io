$(document).ready(function () {

	var owl = $('.slider-1');
	owl.owlCarousel({
		loop: true,
		nav: true,		
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
	$('.falseNavigationLeft').click(function() {
		owl.trigger('prev.owl.carousel', [300]);
	});
	// Go to the previous item
	$('.falseNavigationRight').click(function() {
		// Parameters has to be in square bracket '[]'
		owl.trigger('next.owl.carousel', [300]);
	});
});
