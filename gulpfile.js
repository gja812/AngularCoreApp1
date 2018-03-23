/// <binding BeforeBuild='less' />
var gulp = require('gulp'),
    fs = require('fs'),
    less = require('gulp-less'),
    sass = require('gulp-sass');

gulp.task('less', function () {
    return gulp.src('wwwroot/css/site.less')
        .pipe(less())
        .pipe(gulp.dest('wwwroot/css'));
});

//gulp.task('sass', function() {
//    return gulp.src('wwwroot/css/site.scss')
//        .pipe(sass())
//        .pipe(gulp.dest('wwwroot/css'));
//})