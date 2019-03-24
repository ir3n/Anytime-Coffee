"use strict";

const gulp = require("gulp"),
  browsersync = require("browser-sync").create(),
  sass = require("gulp-sass"),
  postcss = require("gulp-postcss"),
  webpack = require("webpack"),
  webpackConfig = require("./webpack.config"),
  webpackStream = require("webpack-stream"),
  imagemin = require("gulp-imagemin"),
  autoprefixer = require("autoprefixer");

function browserSync(done) {
  browsersync.init({
    server: {
      baseDir: "./app"
    },
    port: 3000
  });
  done();
}

function browserSyncReload(done) {
  browsersync.reload();
  done();
}

function images() {
  return gulp
    .src("./app/assets/images/*")
    .pipe(imagemin())
    .pipe(gulp.dest("./app/temp/images"));
}

function css() {
  return gulp
    .src("./app/assets/scss/**/*.scss")
    .pipe(sass())
    .pipe(postcss([autoprefixer()]))
    .pipe(gulp.dest("./app/temp/css/"))
    .pipe(browsersync.stream());
}

function scripts() {
  return gulp
    .src(["./assets/scripts/**/*"])
    .pipe(webpackStream(webpackConfig, webpack))
    .pipe(gulp.dest("./app/temp/scripts/"))
    .pipe(browsersync.stream());
}

function watchFiles() {
  gulp.watch("./app/assets/scss/**/*.scss", css);
  gulp.watch("./app/assets/scripts/**/*", scripts);
  gulp.watch("./app/*.html", browserSyncReload);
  gulp.watch("./app/assets/images/*", images);
}

const watch = gulp.parallel(watchFiles, browserSync);

exports.images = images;
exports.css = css;
exports.watch = watch;
exports.default = watch;
exports.js = scripts;
