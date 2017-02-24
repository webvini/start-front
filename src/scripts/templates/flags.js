(function( global ){

	'use strict';

	var flags = {

		thumb: function() {
			Handlebars.registerHelper( 'toggleThumb', function( options ){

				var isDesktop = breakpoint.desktop();

				if( !isDesktop ) {
					return options.fn(this);
				}

			});
		}

	};

	global.flags = flags;

})( window );