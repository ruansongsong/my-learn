var gulp = require('gulp');
var less = require('gulp-less');
var  sourcemaps = require('gulp-sourcemaps');
var postcss = require('gulp-postcss');
var autoprefixer = require('autoprefixer');
var browserSync = require('browser-sync').create();
var rename = require('gulp-rename');
var cssnano = require('gulp-cssnano');
var rev = require('gulp-rev');
var revCollector = require('gulp-rev-collector');
var svgSymbols = require('gulp-svg-symbols');
gulp.task('less', function () {
	gulp.src('less_learn/src/*.less')
	.pipe(sourcemaps.init())
	.pipe(less())
	.pipe(sourcemaps.write())
	.pipe(postcss([autoprefixer(['ios >= 7', 'android >= 4.1'])]))
	.pipe(rename(function (path) {
		path.basename += '.min';
	}))
	.pipe(rev())
	.pipe(gulp.dest('less_learn/dist/'))
	.pipe(rev.manifest())
	.pipe(gulp.dest('less_learn/rev/'))
	.pipe(browserSync.reload({stream: true}));
});
gulp.task('watch', function () {
	gulp.watch('less_learn/src/*.less', ['less']);
})
gulp.task('server', function () {
	browserSync.init({
		server:{
			baseDir: "less_learn/dist/"
		}
	});
});
gulp.task('test', function () {
	gulp.start('server');
	gulp.start('watch');
})

// gulp.task('rev', function () {
//     return gulp.src(['rev/**/*.json', 'templates/**/*.html'])
//         .pipe( revCollector({
//             replaceReved: true,
//             dirReplacements: {
//                 'css': '/dist/css',
//                 '/js/': '/dist/js/',
//                 'cdn/': function(manifest_value) {
//                     return '//cdn' + (Math.floor(Math.random() * 9) + 1) + '.' + 'exsample.dot' + '/img/' + manifest_value;
//                 }
//             }
//         }) )
//         .pipe( minifyHTML({
//                 empty:true,
//                 spare:true
//             }) )
//         .pipe( gulp.dest('dist') );
// });
gulp.task('rev', function () {
	gulp.src(['./less_learn/rev/*.json', './less_learn/rev/*.html'])
	.pipe(revCollector())
	.pipe(gulp.dest('./less_learn/dist/'));
})

gulp.task('sprite', function () {
	gulp.src('ask/*.svg')
	.pipe(svgSymbols())
	.pipe(gulp.dest('dist/ask.svg'))
})
