const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const uglify = require('gulp-uglify');

// Task for compiling SCSS to CSS
function styles() {
  return gulp.src('scss/styles.scss')
      .pipe(sass().on('error', sass.logError))
      .pipe(gulp.dest('css'));
}

// Task for minifying JavaScript (placeholder)
function scripts() {
  return gulp.src('js/**/*.js')
      .pipe(uglify())
      .pipe(gulp.dest('js/min'));
}

// Task for optimizing images
async function images() {
  const imagemin = (await import('gulp-imagemin')).default;
  return gulp.src('images/**/*')
      .pipe(imagemin())
      .pipe(gulp.dest('images/optimized'));
}

// Watch task to automatically compile SCSS when changes are detected
function watch() {
  gulp.watch('scss/**/*.scss', styles);
  gulp.watch('js/**/*.js', scripts);
  gulp.watch('images/**/*', images);
}

exports.styles = styles;
exports.scripts = scripts;
exports.images = images;
exports.watch = watch;
