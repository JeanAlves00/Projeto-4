const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const imagemin = require('gulp-imagemin');

function styles() {
    return gulp.src('./src/style/main.scss') // Compile apenas o main.scss
        .pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
        .pipe(gulp.dest('./dist/style'));
}

function images() {
    return gulp.src('./src/images/**/*')
        .pipe(imagemin())
        .pipe(gulp.dest('./dist/images'));
}

exports.default = gulp.parallel(styles, images);

exports.watch = function () {
    gulp.watch('./src/style/**/*.scss', gulp.parallel(styles)); // Observe todos os arquivos SCSS
}

gulp.task('default', gulp.series(styles, images));
