var 
	gulp 				 = require('gulp'),
	yargs        = require('yargs').argv,
	sass 				 = require('gulp-sass'),
	uglify			 = require('gulp-uglify'),
	concat			 = require('gulp-concat'),
	rename       = require('gulp-rename'),
	handlebars   = require('gulp-handlebars'),
	wrap         = require('gulp-wrap'),
	declare      = require('gulp-declare'),
	imagemin     = require('gulp-imagemin'),
	sassGlob     = require('gulp-sass-glob'),
	cleanCSS     = require('gulp-clean-css'),
	order        = require('gulp-order'),
	jshint       = require('gulp-jshint'),
	cache        = require('gulp-cache'),
	gulpif       = require('gulp-if'),
	sourcemaps   = require('gulp-sourcemaps'),
	browserSync  = require('browser-sync').create(),
	autoprefixer = require('gulp-autoprefixer'),

	//gulp configurations
	config       = require('./gulp.config.js');

//======================= VALIDATE JS =======================\\
gulp.task('jsvalidate', function(){
	return gulp.src( config.paths.scripts.validate )
		.pipe(jshint())
		.pipe(jshint.reporter('default'));
});

//============= CONPILE SASS to CSS and MINIFY =============\\
gulp.task('sass', function(){
	return gulp.src( config.paths.styles.src )
		.pipe( gulpif( yargs.dev, sourcemaps.init() ))
		.pipe(sassGlob())
		.pipe(sass())
		.pipe(cleanCSS())
		.pipe(autoprefixer())
		.pipe(rename({
			basename: config.filename,
			suffix: '.min'
		}))
		.pipe( gulpif( yargs.dev, sourcemaps.write() ))
		.pipe(gulp.dest( config.paths.styles.dest ));
});

//============= MINIFY AND CONCAT OF THE ALL CSS LIBRARIES =============\\
gulp.task('csslibraries', function(){
	return gulp.src( config.paths.libraries.css.src )
		.pipe(concat('libraries.min.css'))
		.pipe(cleanCSS())
		.pipe(autoprefixer())
		.pipe(gulp.dest( config.paths.libraries.css.dest ));
});

//======================= MINIFY LIBRARIES SCRIPTS =======================\\
gulp.task('jslibraries', function(){
	return gulp.src( config.paths.libraries.js.src )
		.pipe(concat('libraries.min.js'))
		.pipe(uglify())
		.pipe(gulp.dest( config.paths.libraries.js.dest ));
});

//======================= HANDLEBARS TEMPLATE =======================\\
gulp.task('templates', function(){
	return gulp.src( config.paths.templates.src )
		.pipe(handlebars())
		.pipe(wrap('Handlebars.template(<%= contents %>)'))
		.pipe(declare({
			namespace: 'MyApp.templates',
			noRedeclare: true
		}))
		.pipe(concat('templates.min.js'))
		.pipe(uglify())
		.pipe(gulp.dest( config.paths.templates.dest ));
});

//======================= MINIFY OUR SCRIPTS =======================\\
gulp.task('scripts', function(){
	return gulp.src( config.paths.scripts.src )
		.pipe( gulpif( yargs.dev, sourcemaps.init() ))
		.pipe(order([
			'commons/*.js',
			'templates/*.js',
			'modules/*.js',
			'app.js'
		]))
		.pipe(concat( config.filename+'.min.js') )
		.pipe(uglify())
		.pipe( gulpif( yargs.dev, sourcemaps.write() ))
		.pipe(gulp.dest( config.paths.scripts.dest ));
});

//======================= IMAGES =======================\\
gulp.task('imagemin', function(){
	return gulp.src( config.paths.images.src )
		.pipe(cache(imagemin()))
		.pipe(gulp.dest( config.paths.images.dest ));
});

//======================= WATCH =======================\\
gulp.task('sass-watch', ['sass'], function(){
	browserSync.reload();
});

gulp.task('scripts-watch', ['scripts'], function(){
	browserSync.reload();
});

gulp.task('templates-watch', ['templates'], function(){
	browserSync.reload();
});

//======================= SYNC =======================\\
gulp.task('sync', ['default'], function(){
	browserSync.init({
		server: './'
	});

	gulp.watch(config.paths.styles.src, ['sass-watch']);
	gulp.watch(config.paths.scripts.src, ['scripts-watch']);
	gulp.watch(config.paths.templates.src, ['templates-watch']);
});


//======================= DEFAULT =======================\\
gulp.task('default', ['sass','csslibraries','jslibraries','templates','scripts','imagemin','jsvalidate']);