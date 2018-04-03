'use strict';
var gulp = require('gulp');
var sass = require('gulp-sass');
var minifyCSS = require('gulp-clean-css');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var changed = require('gulp-changed');
var shell = require('gulp-shell');

var SCSS_SRC = './src/assets/scss/**/*.scss';
var SCSS_DEST = './src/assets/css';

gulp.task('compile_scss', function() {
  gulp.src(SCSS_SRC)
  .pipe(sass().on('error', sass.logError))
  .pipe(minifyCSS())
  .pipe(rename({suffix: '.min' }))
  .pipe(gulp.dest(SCSS_DEST));
});

gulp.task('watch_scss', function() {
  gulp.watch(SCSS_SRC, ['compile_scss']);
})

// Run to renerate react
gulp.task('run_dev', shell.task([
 'npm run dev'
]));

// Run to renerate react
gulp.task('run_sanity', shell.task([
 'sanity start'
]));

gulp.task('default', ['compile_scss', 'watch_scss', 'run_dev', 'run_sanity']);
