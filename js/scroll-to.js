;(function($) {
	// Scroll to element
	const scrollBtn = $('[data-scroll-to]');

	function onScroll(e) {
	    e.preventDefault();
	    let target = $(this).attr('data-scroll-to');
	    let dist = $(target).offset().top;
	    $('html, body').animate({scrollTop: dist}, 1000, 'swing');
	}

	scrollBtn.on('click', onScroll);

})(jQuery);
