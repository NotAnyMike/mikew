'use strict';

var gulp = require('gulp');
var stylus = require('gulp-stylus');
var refresh = require('gulp-refresh');

var sourcemaps = require('gulp-sourcemaps');

gulp.task('stylus-dev', function(){
	return gulp.src('./web/layout/stylus/main.styl') .pipe(stylus())
	.pipe(gulp.dest('./web/layout/css/main.css'));
});

gulp.task('sourcemaps-inline', function () {
  return gulp.src('./web/layout/stylus/main.styl')
    .pipe(sourcemaps.init())
    .pipe(stylus())
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('./web/layout/css/main'));
});

gulp.task('w-stylus', function(){
	refresh.listen();
	gulp.watch('web/layout/stylus/*.styl', ['stylus-dev']);
});
