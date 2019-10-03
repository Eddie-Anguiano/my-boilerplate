const gulp = require('gulp');
const sass = require('gulp-sass');
const browserSync = require('browser-sync').create();

// compile scss into css
function style() {
  // 1. find my scss file
  // 2. pass that file through sass compiler
  // 3. where do i save the compiled css?
  // 4. strem changes to all browsers
  return gulp
    .src('./src/styles/**/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('./build/styles/'))
    .pipe(browserSync.stream());
}

function watch() {
  browserSync.init({
    server: {
      baseDir: './build/'
    }
  });
  gulp.watch('./src/styles/**/*.scss', style);
  gulp.watch('./build/*.html').on('change', browserSync.reload);
  gulp.watch('./src/scripts/**/*.js').on('change', browserSync.reload);
}

exports.style = style;
exports.watch = watch;
