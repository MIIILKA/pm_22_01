import gulp from 'gulp';
import gulpSass from 'gulp-sass';
import dartSass from 'sass';
import browserSync from 'browser-sync';
import uglify from 'gulp-uglify';
import imagemin from 'gulp-imagemin';
import cleanCSS from 'gulp-clean-css';

const sass = gulpSass(dartSass);
const sync = browserSync.create();

// Ваші задачі тут
export const styles = () => {
    return gulp.src('./app/sass/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(cleanCSS())
        .pipe(gulp.dest('./app/css/'))
        .pipe(sync.stream());
};

export const images = () => {
    return gulp.src('./app/img/**/*')
        .pipe(imagemin())
        .pipe(gulp.dest('./dist/img/'))
        .pipe(sync.stream());
};

export const html = () => {
    return gulp.src('./my-project/app/*.html')
        .pipe(gulp.dest('./my-project/dist'))
        .pipe(sync.stream());
};



export const scripts = () => {
    return gulp.src('./app/js/**/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('./dist/js/'))
        .pipe(sync.stream());
};

export const watchFiles = () => {
    gulp.watch('./app/index.html', html);
    gulp.watch('./app/sass/**/*.scss', styles);
    gulp.watch('./app/js/**/*.js', scripts);
    gulp.watch('./app/img/**/*', images);
};

export const serve = () => {
    sync.init({
        server: {
            baseDir: './my-project/dist',
        },
        port: 3000,
    });
};


export default gulp.series(html, styles, scripts, images, serve, watchFiles);
