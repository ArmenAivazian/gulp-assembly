const gulp = require("gulp");
const requireDir = require("require-dir");
const tasks = requireDir("./tasks");

exports.style_theme = tasks.style_theme;
exports.style = tasks.style;

exports.convert_ttf = tasks.convert_ttf;
exports.fonts = tasks.fonts;

exports.js = tasks.js;
exports.js_build = tasks.js_build;

exports.html = tasks.html;

exports.rastr = tasks.rastr;
exports.png = tasks.png;

exports.bs_html = tasks.bs_html;

exports.watch = tasks.watch;
exports.deploy = tasks.deploy;

exports.default = gulp.parallel(
  exports.style,
  exports.style_theme,

  exports.convert_ttf,
  exports.fonts,

  exports.js,
  
  exports.html,

  exports.rastr,
  exports.png,

  exports.bs_html,
  
  exports.watch
);
