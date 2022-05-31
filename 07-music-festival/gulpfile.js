const { src, dest, watch, parallel } = require('gulp');
// CSS
const sass = require('gulp-sass')(require('sass'));
const plumber = require('gulp-plumber');

// Images
const webp = require('gulp-webp');

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

function webpImages(done) {
  const webpOptions = { quality: 50 };
  src('src/img/**/*.{png,jpg}').pipe(webp(webpOptions)).pipe(dest('build/img'));
  done();
}

function dev(done) {
  watch('src/scss/**/*.scss', css);
  done();
}

exports.dev = parallel(dev, webpImages);
exports.webpImages = webpImages;
