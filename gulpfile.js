// DEFINE: Package(s).
var gulp = require('gulp');
var less = require('gulp-less');
var cssmin = require('gulp-cssmin');
var plumber = require('gulp-plumber');
var rename = require('gulp-rename');

// TASK: Default
gulp.task('default', function() {
    console.log('Works fine!');
});

// TASK: LESS
gulp.task('less', function() {
    gulp.src('./styles/src/cool-colorz.less')
    .pipe(plumber())
    .pipe(less())
    .pipe(gulp.dest('./styles/dist/'))
    .pipe(cssmin())
    .pipe(rename({
        suffix: '.min'
    }))
    .pipe(gulp.dest('./styles/dist/'));
});
