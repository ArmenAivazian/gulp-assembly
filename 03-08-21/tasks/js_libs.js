
const { src, dest } = require("gulp");
const uglify = require("gulp-uglify-es").default;
const concat = require("gulp-concat");
const map = require("gulp-sourcemaps");
const bs = require("browser-sync");
const babel = require("gulp-babel");

const plugins = [];

module.exports = function js_libs() {
  return src([...plugins, "src/js/main.min.js"])
    .pipe(concat("main.min.js"))
    .pipe(dest("build/js"))
    .pipe(bs.stream());
};

