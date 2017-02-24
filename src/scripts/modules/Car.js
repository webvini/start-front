(function( global ){
	
	'use strict';

	var Car = (function(){

		var
			template,
			model = {},

			initialize = function() {
				template = MyApp.templates.listCar;
				flags.thumb();
				getCar();
				render();
			},

			getCar = function() {
				model = {
					cars: [
						{
							brand: 'fiat',
							model: 'stilo',
							version: 'blackmotion',
							year: 2011
						}
					],
					active: true
				};

				return model;
			},

			render = function() {
				$('.content').html( template( model ) );
			};

		return {
			init: function() {
				initialize();
			}
		};

	})();

	global.Car = Car;

})( window );