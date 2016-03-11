'use strict';

import gulp from 'gulp';
import gulpLoadPlugins from 'gulp-load-plugins';

const $ = gulpLoadPlugins();
const src = ['src/**/*.js'];

gulp.task('default', () =>
    gulp.src(src)
        .pipe($.babel())
        .pipe(gulp.dest('dist'))
);

gulp.task('lint', () =>
  gulp.src(src)
    .pipe($.eslint())
    .pipe($.eslint.format())
);
