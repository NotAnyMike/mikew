'use strict';

var gulp = require('gulp');
var stylus = require('gulp-stylus');
var refresh = require('gulp-refresh');
var nib = require('nib');
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var reactify = require('reactify');
var buffer = require('vinyl-buffer');
var babelify = require('babelify');

var sourcemaps = require('gulp-sourcemaps');

gulp.task('copy-fonts', function(){
	gulp.src('./resources/mikew-font/icomoon/fonts/*')
	.pipe(gulp.dest('./web/layout/css/fonts/'))
	.pipe(gulp.dest('./web/react/css/fonts/'))
	.pipe(gulp.dest('./web/django/mikew/website/static/css/fonts/'));
});

gulp.task('copy-imgs', function(){
	gulp.src('./resources/imgs/*')
	.pipe(gulp.dest('./web/layout/img/'))
	.pipe(gulp.dest('./web/react/static/img/'))
	.pipe(gulp.dest('./web/django/mikew/website/static/img/'));
});

gulp.task('copy-files', ['copy-imgs','copy-fonts']);

gulp.task('stylus-dev', function(){
	return gulp.src('./web/layout/stylus/main.styl')
		.pipe(stylus({'include css':true, use: nib()}))
		.pipe(gulp.dest('./web/layout/css'))
		.pipe(gulp.dest('./web/react/css'))
		.pipe(gulp.dest('./web/django/mikew/website/static/css'))
		.pipe(refresh());
});

gulp.task('react-dev', function(){
	var b = browserify({
		entries: './web/react/reactFiles/main.js',
		debug: true,
		transform: [reactify]
	});

  return b.bundle()
    .pipe(source('./main.js'))
    .pipe(buffer())
    .pipe(gulp.dest('./web/react/js/'))
		.pipe(gulp.dest('./web/django/mikew/website/static/js'))
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
