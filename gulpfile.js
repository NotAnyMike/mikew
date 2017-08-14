'use strict';

var gulp = require('gulp');
var stylus = require('gulp-stylus');
var refresh = require('gulp-refresh');
var nib = require('nib');

var sourcemaps = require('gulp-sourcemaps');

gulp.task('stylus-dev', function(){
	return gulp.src('./web/layout/stylus/main.styl')
		.pipe(stylus({'include css':true, use: nib()}))
		.pipe(gulp.dest('./web/layout/css'))
		.pipe(refresh());
});

gulp.task('w-stylus', function(){
	refresh.listen();
	gulp.watch('web/layout/stylus/*.styl', ['stylus-dev']);
});
