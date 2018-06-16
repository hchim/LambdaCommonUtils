const gulp = require('gulp');
const zip = require('gulp-zip');
const run = require("gulp-run");
const babel = require('gulp-babel');

gulp.task('build', () => {
    return gulp.src(['index.js', 'lib/**/*.js'], {"base": "."})
        .pipe(babel({
            presets: ['env']
        }))
        .pipe(gulp.dest('build'))
});

gulp.task('clean', function() {
    return run('rm -rf build').exec();
});

gulp.task('default', gulp.series('clean', 'build'));