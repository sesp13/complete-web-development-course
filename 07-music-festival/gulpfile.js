const { src, dest, watch, parallel } = require('gulp');
// CSS
const sass = require('gulp-sass')(require('sass'));
const plumber = require('gulp-plumber');
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');
const postcss = require('gulp-postcss');
const sourcemaps = require('gulp-sourcemaps');

// Images
const webp = require('gulp-webp');
const imageMin = require('gulp-imagemin');
const cache = require('gulp-cache');
const avif = require('gulp-avif');

// Javascript
const terser = require('gulp-terser-js');

function css(done) {
  // Identify SASS file
  src('src/scss/**/*.scss')
    .pipe(sourcemaps.init())
    // Compile file
    .pipe(plumber())
    .pipe(sass())
    // optimze
    .pipe(postcss([autoprefixer(), cssnano()]))
    .pipe(sourcemaps.write('.'))
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

function addJavascript(done) {
  src('src/js/**/*.js')
    .pipe(sourcemaps.init())
    .pipe(terser())
    .pipe(sourcemaps.write('.'))
    .pipe(dest('build/js'));
  done();
}

function dev(done) {
  watch('src/scss/**/*.scss', css);
  watch('src/js/**/*.js', addJavascript);
  done();
}

exports.addJavascript = addJavascript;
exports.css = css;
exports.reduceImages = reduceImages;
exports.webpImages = webpImages;
exports.avifImages = avifImages;
exports.dev = parallel(
  dev,
  addJavascript,
  css,
  reduceImages,
  webpImages,
  avifImages
);
