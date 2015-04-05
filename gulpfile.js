var gulp = require('gulp');
var path = require('path');
var less = require('gulp-less');
var watch = require('gulp-watch');
var notify = require('gulp-notify');
var webserver = require('gulp-webserver');
var plumber = require('gulp-plumber');


gulp.task('one', function () {
    gulp.src('./less/one.less')
        .pipe(plumber())
        .pipe(less())
        .pipe(gulp.dest('css'))
        .pipe(notify("Example One Done"));
});

gulp.task('run', function() {
    gulp.src('')
        .pipe(webserver({
            port: 1024,
            livereload: true,
            open: true,
            host: '192.168.1.7'
        }));

    gulp.watch('./less/**/*.less', ['one']);
});