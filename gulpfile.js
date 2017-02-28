var gulp = require('gulp'),
    cleanCSS = require('gulp-clean-css'),
    concat = require("gulp-concat");


gulp.task('minify-css', function() {
  gulp.src(['css/main.css', 'css/normalize.css'])
      .pipe(cleanCSS())
      .pipe(gulp.dest('css/minified'))
});


gulp.task('concat-css', function() {
  gulp.src(['css/font-awesome-4.7.0/css/font-awesome.min.css', 'css/minfied/normalize.css', 'css/minified/main.css'])
      .pipe(concat('minified.css'))
      .pipe(gulp.dest('css/minified'))
});
