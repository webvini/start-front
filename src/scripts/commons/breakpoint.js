(function( global ){

	'use strict';

	var breakpoint = {

		desktop: function() {
			return ( $(window).width() > 768 ) ? true : false;
		}

	};

	global.breakpoint = breakpoint;

})( window );