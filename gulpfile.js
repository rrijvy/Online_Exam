var gulp = require('gulp'),
    watch = require('gulp-watch'),
    postcss = require("gulp-postcss"),
    autoprefixer = require("autoprefixer"),
    cssvars = require("postcss-simple-vars"),
    nested = require("postcss-nested"),
    cssImport = require("postcss-import"),
    mixins = require('postcss-mixins');

gulp.task('default', function () {
    console.log("gulp running");
});

gulp.task('style', function () {
    gulp.src('./Online_Exam/wwwroot/css/site.css') //source css
        .pipe(postcss([cssImport, mixins, cssvars, nested, autoprefixer]))  //diffrent version css
        .on('error', function (errorInfo) {
            console.log(errorInfo.toString());
            this.emit('end'); //destination css
        })
        .pipe(gulp.dest('./Online_Exam/wwwroot/temp/css'));
})

gulp.task('watch', function () {
    watch('./Online_Exam/wwwroot/css/**/*.css', function () {
        gulp.start('style'); //call style task
    })
})