const {
	src,
	dest
} = require('gulp');
const changed = require('gulp-changed');
const bs = require('browser-sync');
const plumber = require('gulp-plumber');

module.exports = function rastr() {
	return src('src/images/**/*.+(png)')
		.pipe(plumber())
		.pipe(changed('build/images'))
		.pipe(dest('build/images'))
		.pipe(bs.stream())
}