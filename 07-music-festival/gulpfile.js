const { src, dest, watch, parallel } = require('gulp');
// CSS
const sass = require('gulp-sass')(require('sass'));
const plumber = require('gulp-plumber');

// Images
const webp = require('gulp-webp');
const imageMin = require('gulp-imagemin');
const cache = require('gulp-cache');
const avif = require('gulp-avif');

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

function avifImages(done) {
  const avifOptions = { quality: 50 };
  src('src/img/**/*.{png,jpg}').pipe(avif(avifOptions)).pipe(dest('build/img'));
  done();
}

function reduceImages(done) {
  const imageMinOptions = { optimizationLevel: 3 };
  src('src/img/**/*.{png,jpg}')
    .pipe(cache(imageMin(imageMinOptions)))
    .pipe(dest('build/img'));
  done();
}

function dev(done) {
  watch('src/scss/**/*.scss', css);
  done();
}

exports.reduceImages = reduceImages;
exports.webpImages = webpImages;
exports.avifImages = avifImages;
exports.dev = parallel(dev, reduceImages, webpImages, avifImages);
