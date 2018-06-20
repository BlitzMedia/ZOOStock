const gulp = require('gulp');
const minify = require('gulp-babel-minify');
const concat = require('gulp-concat');

gulp.task("minify", () =>
  gulp.src("./scripts/*.js")
    .pipe(minify({
      mangle: {
        keepClassName: true
      }
    }))
    .pipe(concat('ZOOStock.js'))
    .pipe(gulp.dest('./dist'))
);

gulp.task('minifyFooter', () =>
  gulp.src('./scripts/footer/*.js')
    .pipe(minify({
      mangle: { keepClassName: true }
    }))
    .pipe(concat('ZOOStock.footer.js'))
    .pipe(gulp.dest('./public'))
)
