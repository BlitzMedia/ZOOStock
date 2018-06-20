const gulp = require('gulp');
const minify = require('gulp-babel-minify');
const concat = require('gulp-concat');

gulp.task('default', ['minifyFooter', 'minifyHeader']);

gulp.task('minifyFooter', () =>
  gulp.src('./scripts/footer/*.js')
    .pipe(minify({
      mangle: { keepClassName: true }
    }))
    .pipe(concat('ZOOStock.footer.js'))
    .pipe(gulp.dest('./public'))
)

gulp.task('minifyHeader', () =>
  gulp.src('./scripts/header/*.js')
    .pipe(minify({
      mangle: { keepClassName: true }
    }))
    .pipe(concat('ZOOStock.header.js'))
    .pipe(gulp.dest('./public'))
)
