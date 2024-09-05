const gulp = require('gulp');

// Створюємо тестовий таск
function testTask(done) {
    console.log('This is a test task!');
    done();
}

// Експортуємо таски
exports.testTask = testTask;
exports.default = gulp.series(testTask);
