const {
  watch,
  parallel,
  series
} = require('gulp');

module.exports = function watching() {
  watch('src/**/*.html', parallel('html'));
  watch('src/**/_colors.scss', parallel('style_theme'));
  watch(['src/**/*.scss', '!src/**/_colors.scss'], parallel('style'));
  watch(['src/**/*.js', '!src/**/main.min.js'], series('js_dev', 'js_libs'));
  watch('src/**/*.json', parallel('html'));
  watch('src/images/**/*.+(svg|ico)', parallel('rastr'));
  watch('src/images/**/*.+(png|jpg|jpeg|gif)', series('rastr', 'webp'));
  watch('src/fonts/**/*.ttf', series('convert_ttf', 'fonts'));
}