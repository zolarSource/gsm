var gulp = require('gulp');
var sass = require('gulp-sass');
var cleanCSS = require('gulp-clean-css');
var browserSync = require('browser-sync');
const image = require('gulp-image');
 
gulp.task('sass', function(){ // Создаем таск Sass
    return gulp.src('src/sass/**/*.scss') // Берем источник
        .pipe(sass().on( 'error', function( error ) // отлавливаем ошибки
            {console.log( error );})) // Преобразуем Sass в CSS посредством gulp-sass
        .pipe(gulp.dest('src/css')); // Выгружаем результата в папку dist/css
});

gulp.task('minify-css', function(){ // Создаем таск Sass
	return gulp.src('src/css/*.css') // Берем источник
	.pipe(cleanCSS({compatibility: 'ie8'})) // ставим параметр compatibility
	.pipe(gulp.dest('dist/css'))
    .pipe(browserSync.reload({stream: true})); // Выгружаем результата в папку dist/css 
});

gulp.task('browser-sync', function() { // Создаем таск browser-sync
    browserSync({ // Выполняем browserSync
        server: { // Определяем параметры сервера
            baseDir: 'dist' // Директория для сервера - dist
        },
        // online: true,
        // tunnel: true,
        // logLevel: "debug",
        notify: false // Отключаем уведомления
    });
});

gulp.task('image', function () {
  gulp.src('src/img/*')
    .pipe(image())
    .pipe(gulp.dest('./dist/img'));
});

gulp.task('watch', ['sass', 'minify-css', 'browser-sync', 'image'], function() { // таск для слежения за файлами
    gulp.watch('src/sass/**/*.scss', ['sass']); // Наблюдение за sass файлами
    gulp.watch('src/css/*.css', ['minify-css']); // Наблюдение за css для minify
    gulp.watch('dist/*.html', browserSync.reload); // Наблюдение за HTML файлами в корне проекта
});
