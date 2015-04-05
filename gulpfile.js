var gulp = require('gulp');
var less = require('gulp-less');
var watch = require('gulp-watch');
var notify = require('gulp-notify');
var path = require('path');
var webserver = require('gulp-webserver');

gulp.task('one', function () {
    gulp.src('./less/one.less')
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