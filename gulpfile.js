const gulp = require("gulp"),
  browsersync = require("browser-sync").create(),
  sass = require("gulp-sass"),
  autoprefixer = require("gulp-autoprefixer");

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

function css() {
  return gulp
    .src("./app/assets/scss/*.scss")
    .pipe(sass())
    .pipe(autoprefixer())
    .pipe(gulp.dest("./app/temp/css/"))
    .pipe(browsersync.stream());
}

function watchFiles() {
  gulp.watch("./app/assets/scss/*", css);
  gulp.watch("src/*.html", browserSyncReload);
}

const watch = gulp.parallel(watchFiles, browserSync);

exports.css = css;
exports.watch = watch;
exports.default = watch;
