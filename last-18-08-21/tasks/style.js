const { src, dest } = require("gulp");
var sass = require("gulp-sass")(require("sass"));
const bulk = require("gulp-sass-bulk-import");
var autoprefixer = require("autoprefixer");
var cssnano = require("cssnano");
const concat = require("gulp-concat");
const map = require("gulp-sourcemaps");
const bs = require("browser-sync");
const postcss = require("gulp-postcss");
const mediaQueries = require("postcss-sort-media-queries");


module.exports = function style() {
  var packets = [
    mediaQueries({ sort: "desktop-first" }), 
    autoprefixer({ grid: true }), 
    cssnano()
  ];

  return src("src/scss/**/*.scss")
    .pipe(map.init())
    
    .pipe(bulk())
    .pipe(sass().on("error", sass.logError))

    .pipe(postcss(packets))

    .pipe(concat("style.min.css"))

    .pipe(map.write("../sourcemaps/"))
    .pipe(dest("build/css/"))
    .pipe(bs.stream());
};
