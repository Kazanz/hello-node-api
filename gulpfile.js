var babel = require("gulp-babel");
var gulp = require('gulp');
var nodemon = require('gulp-nodemon');


var babel = function () {
  return gulp.src('src/app.js')
      .pipe(babel({
          presets: ['es2015']
      }))
  .pipe(gulp.dest('dist'));
};

gulp.task('babel', babel);

gulp.task('default', function () {
  nodemon({
      script: 'dist/app.js',
      ext: 'js',
      env: { 'NODE_ENV': 'development' }
  }).on('restart', function() {
      babel();
  });
})