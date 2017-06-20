/*
This file in the main entry point for defining Gulp tasks and using Gulp plugins.
Click here to learn more. http://go.microsoft.com/fwlink/?LinkId=518007
*/
var ts = require('gulp-typescript');

var gulp = require('gulp'),
 rimraf = require('rimraf');

gulp.task('clean', function (cb) {
    return rimraf('./wwwroot/lib/', cb);
});

gulp.task('copy:lib', function () {
    return gulp.src('node_modules/**/*')
        .pipe(gulp.dest('./wwwroot/lib/'));
});
gulp.task('copy:systemjs', function () {
    return gulp.src('src/systemjs.config.js')
        .pipe(gulp.dest('./wwwroot/'));
});
var tsProject = ts.createProject('src/tsconfig.json', {
    typescript: require('typescript')
});
gulp.task('ts', function () {
    var tsResult = gulp.src("src/**/*.ts")
        .pipe(tsProject());

    return tsResult.js.pipe(gulp.dest('./wwwroot'));
});

gulp.task('watch', ['watch.ts']);
gulp.task('watch.ts', ['ts'], function () {
    return gulp.watch('src/**/*.ts', ['ts']);
});
gulp.task('copy:html', function () {
    return gulp.src('app/**/*.html')
        .pipe(gulp.dest('./wwwroot/'));
});

gulp.task('copy:css', function () {
    return gulp.src('app/**/*.css')
        .pipe(gulp.dest('./wwwroot/'));
});
gulp.task('default', ['watch', 'ts', 'copy:systemjs', 'copy:lib', 'copy:html', 'copy:css' ]);
