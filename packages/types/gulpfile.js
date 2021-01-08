var gulp = require('gulp');
var ts = require('gulp-typescript');
var sourcemaps = require('gulp-sourcemaps');
var del = require('del');
var outputDir = 'lib';
var tsProject = ts.createProject('tsconfig.json');
tsProject.config.exclude.push('tests');

gulp.task('build', function () {
    return tsProject
        .src()
        .pipe(sourcemaps.init())
        .pipe(tsProject())
        .pipe(sourcemaps.write('.', { includeContent: false, sourceRoot: '.' }))
        .pipe(gulp.dest(outputDir));
});

gulp.task('clean', function (callback) {
    return del([outputDir], callback);
});

gulp.task('watch', function (callback) {
    return gulp.watch('src/**/*.ts', gulp.series('build'));
});

exports.default = gulp.series('clean', 'build');
