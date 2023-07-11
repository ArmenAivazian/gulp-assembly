const { src, dest } = require("gulp");
const uglify = require("gulp-uglify-es").default;
const concat = require("gulp-concat");
const map = require("gulp-sourcemaps");
const bs = require("browser-sync");
const babel = require("gulp-babel");


module.exports = function js_dev() {
  return src(["src/**/*.js", "!src/**/main.min.js"])
    .pipe(map.init())
    .pipe(
      babel({
        presets: ["@babel/env"],
      })
    )
    .pipe(concat("main.min.js"))
    .pipe(uglify())
    .pipe(map.write())
    .pipe(dest("src/js"))
};
