const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));

function styles () {
    return gulp.src('./src/style/*.scss')
        .pipe(sass( {outputStyle: 'compressed'}).on('error', sass.logError))
        .pipe(gulp.dest('./dist/style'))     
}

exports.defaut = styles;
exports.watch = function () {
    gulp.watch('./src/style/*.scss', gulp.parallel(styles));
}

gulp.task('default', gulp.series(styles));