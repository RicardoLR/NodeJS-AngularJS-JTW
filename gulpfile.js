var    gulp = require('gulp'),
     concat = require('gulp-concat'),
     uglify = require('gulp-uglify'),
  minifycss =require('gulp-minify-css');

// Tarea 1 llamada minify-js
gulp.task('minify-js', function () {
  gulp.src(
    'public/scripts/config/*.js'
    )
  .pipe(concat('appconfig.min.js'))
  .pipe(uglify())
  .pipe(gulp.dest('build/'))
});

gulp.task('minify-js-2', function () {
  gulp.src(
    'public/scripts/controller/*.js'
    )
  .pipe(concat('appcontroller.min.js'))
  .pipe(uglify())
  .pipe(gulp.dest('build/'))
});

gulp.task('minify-js-3', function () {
  gulp.src(
    'public/scripts/services/*.js'
    )
  .pipe(concat('appservice.min.js'))
  .pipe(uglify())
  .pipe(gulp.dest('build/'))
});


// Tarea 2 llamada minify-css
gulp.task('minify-css', function () {
  gulp.src('public/statics/*.css')
  .pipe(concat('application.css'))
  .pipe(minifycss())
  .pipe(gulp.dest('build/'))
});



/***
  npm install --save-dev gulp gulp-concat gulp-uglify gulp-minify-css


  gulp minify-js
  gulp minify-js-2
  gulp minify-js-3

  gulp minify-css




*/