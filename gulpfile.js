import gulp from 'gulp';
import gulpSass from 'gulp-sass';
import * as sass from 'sass'; // Updated import statement
import browserSync from 'browser-sync';
import uglify from 'gulp-uglify';
import imagemin from 'gulp-imagemin';
import cleanCSS from 'gulp-clean-css';

const sassCompiler = gulpSass(sass); // Rename to avoid confusion
const sync = browserSync.create();

// SCSS Compilation Task
export const styles = () => {
    return gulp.src('./my-project/app/sass/**/*.scss') // Take all SCSS files
        .pipe(sassCompiler().on('error', sassCompiler.logError)) // Compile SCSS to CSS
        .pipe(cleanCSS()) // Minify the compiled CSS
        .pipe(gulp.dest('./my-project/dist/css/')) // Save to dist/css
        .pipe(sync.stream()); // Auto-refresh browser
};

// CSS Minification Task
export const stylescss = () => {
    return gulp.src('./my-project/app/css/**/*.css') // Take all CSS files
        .pipe(cleanCSS()) // Minify the CSS
        .pipe(gulp.dest('./my-project/dist/css/')) // Save to dist/css
        .pipe(sync.stream()); // Auto-refresh browser
};

// Image Optimization Task
export const images = () => {
    return gulp.src('./my-project/app/img/**/*')
        .pipe(imagemin())
        .pipe(gulp.dest('./my-project/dist/img/'))
        .pipe(sync.stream());
};

// HTML Copy Task
export const html = () => {
    return gulp.src('./my-project/app/*.html')
        .pipe(gulp.dest('./my-project/dist'))
        .pipe(sync.stream());
};

// JavaScript Minification Task
export const scripts = () => {
    return gulp.src('./my-project/app/js/**/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('./my-project/dist/js/'))
        .pipe(sync.stream());
};

// Watch Files for Changes
export const watchFiles = () => {
    gulp.watch('./my-project/app/index.html', html);
    gulp.watch('./my-project/app/sass/**/*.scss', styles); // Watch SCSS files
    gulp.watch('./my-project/app/css/**/*.css', stylescss); // Watch CSS files
    gulp.watch('./my-project/app/js/**/*.js', scripts);
    gulp.watch('./my-project/app/img/**/*', images);
};

// Serve and Live Reload
export const serve = () => {
    sync.init({
        server: {
            baseDir: './my-project/dist', // Serve from dist folder
        },
        port: 3000,
    });
};

// Default Task
export default gulp.series(html, styles, stylescss, scripts, images, serve, watchFiles);
