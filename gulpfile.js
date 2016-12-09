'use strict';

var gulp = require('gulp'),
	concat = require('gulp-concat'),
	uglify = require('gulp-uglify'),
	rename = require('gulp-rename');

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
//
//gulp.task('copy', function() {
//  gulp.src('index.html')
//  .pipe(gulp.dest(outputDir))
//});
//
//gulp.task('sass', function() {
//  gulp.src(sassSources)
//  .pipe(sass({style: 'expanded'}))
//    .on('error', gutil.log)
//  .pipe(gulp.dest('assets'))
//  .pipe(connect.reload())
//});
////

//
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
//gulp.task('default', ['html', 'coffee', 'js', 'sass', 'connect', 'watch']);
