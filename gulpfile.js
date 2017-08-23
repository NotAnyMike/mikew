'use strict';

var gulp = require('gulp');
var stylus = require('gulp-stylus');
var refresh = require('gulp-refresh');
var nib = require('nib');
var browserify = require('gulp-browserify');
var browserify2 = require('browserify');
var source = require('vinyl-source-stream');
var reactify = require('reactify');
var buffer = require('vinyl-buffer');

var sourcemaps = require('gulp-sourcemaps');

gulp.task('stylus-dev', function(){
	return gulp.src('./web/layout/stylus/main.styl')
		.pipe(stylus({'include css':true, use: nib()}))
		.pipe(gulp.dest('./web/layout/css'))
		.pipe(refresh());
});

gulp.task('react-dev', function(){
	var b = browserify2({
		entries: './web/react/reactFiles/main.js',
		debug: true,
		// defining transforms here will avoid crashing your stream
		transform: [reactify]
	});

  return b.bundle()
    .pipe(source('./main.js'))
    .pipe(buffer())
    .pipe(gulp.dest('./web/react/js/'))
		.pipe(refresh());
});

gulp.task('w-stylus', function(){
	refresh.listen();
	gulp.watch('web/layout/stylus/*.styl', ['stylus-dev']);
});

gulp.task('w-react', function(){
	refresh.listen();
	gulp.watch('./web/react/reactFiles/**/*.js', ['react-dev']);
});
