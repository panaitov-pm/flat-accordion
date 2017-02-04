;(function($) {

	$(function() {

		$(document).on('click', '.head-accordion', function(event) {
			event.preventDefault();

			var _this = $(this),
				current_body = _this.next('.body-accordion'),
				all_bodies = _this.closest('.accordion')
									.find('.body-accordion');
			
			all_bodies.slideUp();

			// Close all accordion content 
			if ( all_bodies.css('display') == 'block' ) {

				$('body').on('click', function() {
					all_bodies.slideUp();
				}); // end click
			} 

			// Close, open current accordion content	
			if ( current_body.css('display') != 'block' ) {
				current_body.slideDown();
			} else {
				current_body.slideUp();
			}
		}); // end click
	}); //end ready

})(jQuery);