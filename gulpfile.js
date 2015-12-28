var babel = require("gulp-babel");
var gulp = require('gulp');
var nodemon = require('gulp-nodemon');

gulp.task("default", function () {
  gulp.src("src/server.js")
    .pipe(babel())
    .pipe(gulp.dest("dist"));
});
