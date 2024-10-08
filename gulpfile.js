const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');
const rename = require('gulp-rename');
const cssnano = require('gulp-cssnano');
const browserSync = require('browser-sync').create();
const file_include = require('gulp-file-include')
const imagemin = require('gulp-imagemin');

// HTML processing
function html() {
    return gulp.src('./my-project/app/*.html', { allowEmpty: true })
        .pipe(file_include({
            prefix:'@@',
            basepath:'@file'
        }))
        .pipe(gulp.dest("./my-project/dist/"))
        .pipe(browserSync.stream());
}

// Compile Sass to CSS, add prefixes, and minify the code
// Compile Sass to CSS, add prefixes, and minify the code
function sassTask() {
    return gulp.src("./my-project/app/sass/*.scss", { allowEmpty: true })
        .pipe(sass().on('error', sass.logError))
        .pipe(cssnano())
        .pipe(rename({ suffix: '.min' }))
        .pipe(gulp.dest("./my-project/dist/css")) // Змінюємо директорію на css
        .pipe(browserSync.stream());
}


// Combine and minify JS files
function scripts() {
    return gulp.src("./my-project/app/js/*.js", { allowEmpty: true })
        .pipe(concat('scripts.js'))
        .pipe(uglify())
        .pipe(rename({ suffix: '.min' }))
        .pipe(gulp.dest("./my-project/dist/js"))
        .pipe(browserSync.stream());
}

// Compress img
function imageTask() {
    return gulp.src('./my-project/app/img/**/*', { encoding: false} )
        .pipe(imagemin({
            progressive: true,
            svgoPlugins: [{ removeViewBox: false }],
            interlaced: true
        }))
        .pipe(gulp.dest("./my-project/dist/img"))
        .pipe(browserSync.stream());
}

// Initialize BrowserSync server
function browserSyncInit(done) {
    browserSync.init({
        server: {
            baseDir: "./my-project/dist"
        },
        cache: false
    });
    done();
}

// Watch for changes in files
function watchFiles() {
    gulp.watch("my-project/app/*.html", html);
    gulp.watch('my-project/app/img/**/*', imageTask);

    gulp.watch('my-project/app/sass/*.scss', sassTask); // Стежимо за .scss файлами, а не за .css
    gulp.watch("my-project/app/js/*.js", scripts);
}


exports.html = html;
exports.sass = sassTask;
exports.scripts = scripts;
exports.imageTask = imageTask;
exports.watch = gulp.parallel(watchFiles, browserSyncInit);

// Default task to run BrowserSync and watch for changes
exports.default = gulp.series(
    gulp.parallel(html, sassTask, imageTask, scripts),
    gulp.parallel(watchFiles, browserSyncInit)
);
