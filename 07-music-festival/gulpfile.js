const { src, dest, watch } = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const plumber = require('gulp-plumber');

function css(done) {
  // Identify SASS file
  src('src/scss/**/*.scss')
    // Compile file
    .pipe(plumber())
    .pipe(sass())
    // Save result
    .pipe(dest('build/css'));

  done();
}

function dev(done) {
  watch('src/scss/**/*.scss', css);
  done();
}

exports.dev = dev;
