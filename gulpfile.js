'use strict';

var gulp = require('gulp'),
	concat = require('gulp-concat'),
	uglify = require('gulp-uglify'),
	rename = require('gulp-rename'),
	uglifyCSS = require('gulp-uglifycss');

// concatenate JS
gulp.task('concatJS', function(){
	gulp.src(['js/fastclick.js',
			  'js/foundation.js',
			  'js/foundation.equalizer.js',
			  'js/foundation.reveal.js'])
	.pipe(concat('app.js'))
	.pipe(gulp.dest('js'))
});

// minify JS
gulp.task('minifyJS', function(){
	gulp.src('js/app.js')
	.pipe(uglify())
	.pipe(rename('app.min.js'))
	.pipe(gulp.dest('js'))
});

// concatenate CSS
gulp.task('concatCSS', function(){
	gulp.src(['css/normalize.css',
			  'css/foundation.css',
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
gulp.task('minifyCSS', function(){
	gulp.src('css/styles.css')
	.pipe(uglifyCSS('css/styles.css'))
	.pipe(rename('styles.min.css'))
	.pipe(gulp.dest('css'))
});

// watch for file changes
//gulp.task('watch', function() {
//  gulp.watch('scripts/hello.coffee', ['coffee']);
//  gulp.watch('scripts/*.js', ['js']);
//  gulp.watch('styles/main.scss', ['sass']);
//});

/* Sample gulp js file from https://semaphoreci.com/community/tutorials/getting-started-with-gulp-js */

//var gulp = require('gulp'),
//    gutil = require('gulp-util'),
//    sass = require('gulp-sass'),
//    coffee = require('gulp-coffee'),
//    connect = require('gulp-connect'),
//    uglify = require('gulp-uglify'),
//    concat = require('gulp-concat');
//
//gulp.task('log', function() {
//  gutil.log('== My First Task ==')
//});

//gulp.task('watch', function() {
//  gulp.watch(coffeeSources, ['coffee']);
//  gulp.watch(jsSources, ['js']);
//  gulp.watch(sassSources, ['sass']);
//  gulp.watch(htmlSources, ['html']);
//});
//
//gulp.task('connect', function() {
//  connect.server({
//    root: '.',
//    livereload: true
//  })
//});
//
//gulp.task('html', function() {
//  gulp.src(htmlSources)
//  .pipe(connect.reload())
//});
//
//gulp.task('default', ['concatJS', 'minifyJS', 'concatCSS', 'minifyCSS']);
