'use strict';

var gulp = require('gulp');
var stylus = require('gulp-stylus');
var refresh = require('gulp-refresh');
var nib = require('nib');
var browserify = require('browserify');

var sourcemaps = require('gulp-sourcemaps');

gulp.task('stylus-dev', function(){
	return gulp.src('./web/layout/stylus/main.styl')
		.pipe(stylus({'include css':true, use: nib()}))
		.pipe(gulp.dest('./web/layout/css'))
		.pipe(refresh());
});

gulp.task('react-dev', function(){
	return browserify('./web/react/reactFiles/main.js')
	.transform("babelify", {presets: ['react']})
	.bundle()
	.pipe(source('main.js'))
	.pipe(gulp.dest('./web/react.js'))
	.pipe(refresh());
});

gulp.task('w-stylus', function(){
	refresh.listen();
	gulp.watch('web/layout/stylus/*.styl', ['stylus-dev']);
});

gulp.task('w-react', function(){
	refresh.listen();
	gulp.watch('./web/react/react/reactFiles/**/*.js', ['react-dev']);
});
