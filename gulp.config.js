'use strict';

var
	projectName = 'projectName',
	src = 'src/',
	dist = 'dist/';


module.exports = {
	src: src,
	dist: dist,
	projectName: projectName,
	filename: projectName,

	paths: {

		styles: {
			src: src + 'styles/**/*.scss',
			dest: dist + 'styles/'
		},

		scripts: {
			validate: src + 'scripts/**/*.js',
			src: src + 'scripts/**/*.js',
			dest: dist + 'scripts/'
		},

		templates: {
			src: src + 'templates/**/*.hbs',
			dest: dist + 'scripts/'
		},

		images: {
			src: src + 'images/**/*.{jpg,jpeg,png}',
			dest: dist + 'images/'
		},

		libraries: {
			js: {
				src: [
					src + 'libraries/jquery/dist/jquery.js',
					src + 'libraries/bootstrap/dist/js/bootstrap.js',
					src + 'libraries/handlebars/handlebars.runtime.js'
				],
				dest: dist + 'scripts/'
			},
			css: {
				src: [
					src + 'libraries/font-awesome/css/font-awesome.css',
					src + 'libraries/bootstrap/dist/css/bootstrap.css'
				],
				dest: dist + 'styles/'
			}
		}
	}
};