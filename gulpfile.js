'use strict';

var gulp = require('gulp'),
	concat = require('gulp-concat'),
	uglify = require('gulp-uglify'),
	rename = require('gulp-rename'),
	uglifyCSS = require('gulp-uglifycss'),
	image = require('gulp-image');

// concatenate JS
gulp.task('concatJS', function(){
	return gulp.src(['js/fastclick.js',
			  'js/foundation.js',
			  'js/foundation.equalizer.js',
			  'js/foundation.reveal.js'])
	.pipe(concat('app.js'))
	.pipe(gulp.dest('js'))
});

// minify JS
gulp.task('minifyJS', ['concatJS'], function(){
	gulp.src('js/app.js')
	.pipe(uglify())
	.pipe(rename('app.min.js'))
	.pipe(gulp.dest('js'))
});

// concatenate CSS
gulp.task('concatCSS', function(){
	return gulp.src(['css/normalize.css',
			  'css/foundation.min.css',
			  'css/basics.css',
			  'css/menu.css',
			  'css/hero.css',
			  'css/photo-grid.css',
			  'css/modals.css',
			  'css/footer.css'])
	.pipe(concat('styles.css'))
	.pipe(gulp.dest('css'))
});

// minify CSS
gulp.task('minifyCSS', ['concatCSS'], function(){
	gulp.src('css/styles.css')
	.pipe(uglifyCSS('css/styles.css'))
	.pipe(rename('styles.min.css'))
	.pipe(gulp.dest('css'))
});

//compress images
gulp.task('compressImages', function(){
	gulp.src(['img/photos/*',
			  'img/avatars/*'])
	.pipe(image())
	.pipe(gulp.dest('img/photos'))
});

////watch
//gulp.task('watch', function(){
//	gulp.watch(,[])
//});
//
////serve
//gulp.task('serve', ['watch']);

gulp.task('default', ['concatJS', 'minifyJS', 'concatCSS', 'minifyCSS', 'compressImages']);
