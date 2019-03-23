'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var plumber = require('gulp-plumber');
var cssmin = require('gulp-cssmin');
var rename = require('gulp-rename');

gulp.task('sass', function() {
    return (
        gulp.src('src/cool-colorz.scss')
        .pipe(plumber())
        .pipe(sass())
        .pipe(gulp.dest('dist'))
        .pipe(cssmin())
        .pipe(rename({
            suffix: '.min'
        }))
        .pipe(gulp.dest('dist'))
    );
});
