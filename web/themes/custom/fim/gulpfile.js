const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const uglify = require('gulp-uglify');
const imagemin = require('gulp-imagemin');

// Task for compiling SCSS to CSS
function styles() {
  return gulp.src('scss/styles.scss') // Source of SCSS file
      .pipe(sass().on('error', sass.logError)) // Compile SCSS to CSS and log errors
      .pipe(gulp.dest('css')); // Destination for the compiled CSS file
}

// Task for minifying JavaScript (placeholder)
function scripts() {
  return gulp.src('js/**/*.js') // Source of JavaScript files
      .pipe(uglify()) // Minify JavaScript
      .pipe(gulp.dest('js/min')); // Destination for the minified JavaScript files
}

// Task for optimizing images (placeholder)
function images() {
  return gulp.src('images/**/*') // Source of image files
      .pipe(imagemin()) // Optimize images
      .pipe(gulp.dest('images/optimized')); // Destination for optimized images
}

// Watch task to automatically compile SCSS when changes are detected
function watch() {
  gulp.watch('scss/**/*.scss', styles); // Watch for changes in SCSS files
  gulp.watch('js/**/*.js', scripts); // Watch for changes in JavaScript files
  gulp.watch('images/**/*', images); // Watch for changes in image files
}

exports.styles = styles;
exports.scripts = scripts;
exports.images = images;
exports.watch = watch;
