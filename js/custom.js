(function($) {

$(document).ready(function(){

	$('#nav-open-btn').on('click', function() {
		$(this).toggleClass('menu-open');
		$('#inner-wrap').toggleClass('menu-open');
		$('nav').toggleClass('show');
	});

	$('#nav-close-btn').on('click', function() {
		$('#nav-open-btn').removeClass('menu-open');
		$('#nav-open-btn, #inner-wrap').removeClass('menu-open');
		$('nav').removeClass('show');
	});
	if ($(".flat-icon").length > 0) {
		$(".flat-icon").flatshadow({
				angle: "SE",
						fade: false,
				boxShadow: false // Accept full 6 digit hex color (#000000)
		});
	}
	

	var isActive = false;
	var $window = $(window);
	$window.on('scroll', function() {
		var scrollPos = $window.scrollTop();
		if (!isActive && scrollPos > 20) {
			$('.right-menu').addClass('closed');
			window.setTimeout(function() {
				$('.nav-btn').addClass('show');
			}, 200);
			isActive = true;
		} else if (isActive && scrollPos < 20) {
			$('.nav-btn').removeClass('show menu-open');
			$('.right-menu').removeClass('closed');
			$('#inner-wrap').removeClass('menu-open');
			$('nav').removeClass('show');
			isActive = false;
		}
	});

});

})(jQuery);