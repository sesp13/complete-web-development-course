const { src, dest, watch } = require('gulp');
const sass = require('gulp-sass')(require('sass'));

function css(done) {
  // Identify SASS file
  src('src/scss/app.scss')
    // Compile file
    .pipe(sass())
    // Save result
    .pipe(dest('build/css'));

  done();
}

function dev(done) {
  watch('src/scss/app.scss', css);
  done();
}

exports.dev = dev;
