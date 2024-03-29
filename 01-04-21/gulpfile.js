const { src, dest, watch, parallel, series } = require('gulp');

const scss = require('gulp-sass');
const concat = require('gulp-concat');
const browserSync = require('browser-sync').create();
const uglify = require('gulp-uglify-es').default;
const autoprefixer = require('gulp-autoprefixer');
const imagemin = require('gulp-imagemin');
const del = require('del');
const gcmq = require('gulp-group-css-media-queries');
const cleanCSS = require('gulp-clean-css');
const babel = require('gulp-babel');
const sourcemaps = require('gulp-sourcemaps');
const htmlmin = require('gulp-htmlmin');
const addsrc = require('gulp-add-src');


function browsersync() {
    browserSync.init({
        server: {
            baseDir: "src/"
        },
        // options: {
        //     host: "192.168.137.18"
        // }
    });
}

function cleanDist() {
    return del('dist')
}
function scripts() {
    return src([
        // 'node_modules/swiper/swiper-bundle.min.js',
        'src/assets/js/main.js',
    ])
        .pipe(sourcemaps.init())
        .pipe(babel({
            presets: ['@babel/env']
        }))
        // .pipe(addsrc.prepend('files/js/constants.js')) // to BEGINING
        // .pipe(addsrc.append('node_modules/aos/dist/aos.js'))   // to END
        .pipe(concat('main.min.js'))
        .pipe(uglify())
        .pipe(sourcemaps.write())
        .pipe(dest('src/assets/js'))
        .pipe(browserSync.stream())
}
function cleanJsMin() {
    return src('src/assets/js/main.min.js')
        .pipe(uglify())
        .pipe(dest('src/assets/js'))
}
function minifyHtml() {
    return src('src/**/*.html')
        .pipe(htmlmin({
            collapseWhitespace: true,
            removeComments: true
        }))
        .pipe(dest('dist'))
}
function images() {
    return src('src/assets/images/**/*')
        .pipe(imagemin([
            imagemin.gifsicle({ interlaced: true }),
            imagemin.mozjpeg({ quality: 75, progressive: true }),
            imagemin.optipng({ optimizationLevel: 5 }),
            imagemin.svgo({
                plugins: [
                    { removeViewBox: true },
                    { cleanupIDs: false }
                ]
            })
        ]))
        .pipe(dest('dist/assets/images'))
}

function styles() {
    return src('src/assets/scss/style.scss')
        .pipe(scss())
        .pipe(gcmq())
        .pipe(cleanCSS())
        .pipe(concat('style.min.css'))
        .pipe(autoprefixer({
            overrideBrowserslist: ['last 10 version'],
            grid: true
        }))
        .pipe(dest('src/assets/css'))
        .pipe(browserSync.stream())
}

function build() {
    return src([
        'src/assets/css/style.min.css',
        'src/assets/fonts/**/*',
        'src/assets/js/main.min.js',
    ], { base: 'src' })
        .pipe(dest('dist'))
}

function watching() {
    watch(['src/assets/scss/**/*.scss'], styles)
    watch(['src/assets/js/**/*.js', '!src/assets/js/main.min.js'], scripts)
    watch(['src/**/*']).on("change", browserSync.reload)
}

// for CMS
function cleanBuild() {
    return del('build')
}
function scriptsCMS() {
    return src([
        'src/assets/js/main.js',
    ])
        .pipe(concat('main.min.js'))
        .pipe(dest('build/assets/js'))
}
function pictureCMS() {
    return src('src/assets/images/**/*')
        .pipe(imagemin([
            imagemin.gifsicle({ interlaced: true }),
            imagemin.mozjpeg({ quality: 75, progressive: true }),
            imagemin.optipng({ optimizationLevel: 5 }),
            imagemin.svgo({
                plugins: [
                    { removeViewBox: true },
                    { cleanupIDs: false }
                ]
            })
        ]))
        .pipe(dest('build/assets/images'))
}
function styleCMS() {
    return src('src/assets/scss/style.scss')
        .pipe(scss())
        .pipe(gcmq())
        .pipe(concat('style.min.css'))
        .pipe(autoprefixer({
            overrideBrowserslist: ['last 10 version'],
            grid: true
        }))
        .pipe(dest('build/assets/css'))
}
function buildCMS() {
    return src([
        'src/assets/fonts/**/*',
        'src/**/*.html'
    ], { base: 'src' })
        .pipe(dest('build'))
}

exports.cleanBuild = cleanBuild;
exports.scriptsCMS = scriptsCMS;
exports.pictureCMS = pictureCMS;
exports.styleCMS = styleCMS;
exports.buildCMS = buildCMS;

exports.cms = series(cleanBuild, scriptsCMS, pictureCMS, styleCMS, buildCMS);

// /for CMS

exports.styles = styles;
exports.watching = watching;
exports.browsersync = browsersync;
exports.scripts = scripts;
exports.images = images;
exports.cleanDist = cleanDist;
exports.cleanJsMin = cleanJsMin;
exports.minifyHtml = minifyHtml;


exports.build = series(cleanDist, cleanJsMin, minifyHtml, images, build);
exports.default = parallel(styles, scripts, browsersync, watching)