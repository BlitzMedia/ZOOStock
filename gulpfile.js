const gulp = require('gulp');
const minify = require('gulp-babel-minify');
const concat = require('gulp-concat');

gulp.task("minify", () =>
  
);

gulp.task('minifyFooter', () =>
  gulp.src('./scripts/footer/*.js')
    .pipe(minify({
      mangle: { keepClassName: true }
    }))
    .pipe(concat('ZOOStock.footer.js'))
    .pipe(gulp.dest('./public'))
)
