const {
	src,
	dest
} = require('gulp');
const uglify = require('gulp-uglify-es').default;
const babel = require('gulp-babel');
const concat = require('gulp-concat');

module.exports = function js_build() {
	return src('build/js/main.min.js')
		.pipe(uglify())
		.pipe(dest('build/js'))
}