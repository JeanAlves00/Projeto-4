const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const imagemin = require('gulp-imagemin');
const uglify = require('gulp-uglify');

// Função para processar arquivos JavaScript
function scripts() {
    return gulp.src('./src/script/*.js') // Corrigido a extensão do arquivo
        .pipe(uglify())
        .pipe(gulp.dest('./dist/script'));
}

// Função para compilar arquivos SASS
function styles() {
    return gulp.src('./src/style/main.scss') // Compilar apenas main.scss
        .pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
        .pipe(gulp.dest('./dist/style'));
}

// Função para otimizar imagens
function images() {
    return gulp.src('./src/images/**/*')
        .pipe(imagemin())
        .pipe(gulp.dest('./dist/images'));
}

// Tarefa padrão
exports.default = gulp.series(styles, images, scripts); // Use series ou parallel dependendo da sua necessidade

// Tarefa de observação (watch)
exports.watch = function () {
    gulp.watch('./src/style/**/*.scss', gulp.series(styles)); // Observar todos os arquivos SCSS
    gulp.watch('./src/script/*.js', gulp.series(scripts)); // Observar todos os arquivos JS
}

// Registrar a tarefa padrão
gulp.task('default', gulp.series(styles, images, scripts));
