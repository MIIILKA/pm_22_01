const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');
const rename = require('gulp-rename');
const cssnano = require('gulp-cssnano');
const browserSync = require('browser-sync').create();
const file_include = require('gulp-file-include');
const imagemin = require('gulp-imagemin');
const copy = require('gulp-copy');

//  "subheader": {
//    "ha": "CONTACT",
//      "phone1":"+1-718-310-asfdasfd5588" ,
//      "phone2": "+1-313-381-8167",
//      "link" : "www.yourwebsite.com",
//      "gmail" :"yourinfo@email.com",
//      "place1":"769 Prudence Street",
//      "place2":"Linkoln park, MI 48146"
//  }

// HTML обробка
function html() {
    return gulp.src('./my-project/app/*.html', { allowEmpty: true })
        .pipe(file_include({
            prefix: '@@',
            basepath: '@file'
        }))
        .pipe(gulp.dest("./my-project/dist/"))
        .pipe(browserSync.stream());
}

// Перетворення Sass в CSS, додавання префіксів та мінімізація
function sassTask() {
    return gulp.src("./my-project/app/sass/*.scss", { allowEmpty: true })
        .pipe(sass().on('error', sass.logError))
        .pipe(cssnano())
        .pipe(rename({ suffix: '.min' }))
        .pipe(gulp.dest("./my-project/dist/css"))
        .pipe(browserSync.stream());
}

// Об'єднання та мінімізація JS файлів
function scripts() {
    return gulp.src("./my-project/app/js/*.js", { allowEmpty: true })
        .pipe(concat('scripts.js'))
        .pipe(uglify())
        .pipe(rename({ suffix: '.min' }))
        .pipe(gulp.dest("./my-project/dist/js"))
        .pipe(browserSync.stream());
}

// Компресія зображень
function imageTask() {
    return gulp.src('./my-project/app/img/**/*', { encoding: false })
        .pipe(imagemin({
            progressive: true,
            svgoPlugins: [{ removeViewBox: false }],
            interlaced: true
        }))
        .pipe(gulp.dest("./my-project/dist/img"))
        .pipe(browserSync.stream());
}

// Копіювання data.json у папку dist
function copyDataJson() {
    return gulp.src('./my-project/app/data/*.json')
        .pipe(gulp.dest('./my-project/dist/data/'))
        .pipe(browserSync.stream());
}
// browserSync.init({
//     server: {
//         baseDir: 'dist'
//     },
//     port: 8081
// });

// Ініціалізація серверу BrowserSync
function browserSyncInit(done) {
    browserSync.init({
        proxy: 'http://localhost:8080', // Порт 8080
        port: 8080, // Якщо ви хочете, щоб BrowserSync використовував цей порт
        notify: false
    });
    done();
}

// Моніторинг змін у файлах
function watchFiles() {
    gulp.watch("my-project/app/*.html", html);
    gulp.watch('my-project/app/img/**/*', imageTask);
    gulp.watch('my-project/app/sass/*.scss', sassTask);
    gulp.watch("my-project/app/js/*.js", scripts);
    gulp.watch('my-project/app/data/*.json', copyDataJson);
}

// Експортуємо завдання
exports.html = html;
exports.sass = sassTask;
exports.scripts = scripts;
exports.imageTask = imageTask;
exports.copyDataJson = copyDataJson;
exports.watch = gulp.parallel(watchFiles, browserSyncInit);

// За замовчуванням виконуються усі завдання
exports.default = gulp.series(
    gulp.parallel(html, sassTask, imageTask, scripts, copyDataJson),
    gulp.parallel(watchFiles, browserSyncInit)
);
