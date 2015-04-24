var gulp = require('gulp');

var postcss    = require('gulp-postcss');
var minifyCss  = require('gulp-minify-css');
var sourcemaps = require('gulp-sourcemaps');
var rename     = require("gulp-rename");

var autoprefixer = require('autoprefixer-core');

gulp.task('build', function() {
  var css = gulp.src('src/*.css')
    .pipe(postcss([
      autoprefixer({ browsers: ['> 1%', 'IE 9', 'Android 2.1', 'Safari 5.1'] }),
    ]))
    .pipe(gulp.dest('dist'))
    .pipe(sourcemaps.init())
    .pipe(minifyCss())
    .pipe(rename({ suffix: ".min" }))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('dist'));

  return css;
});
