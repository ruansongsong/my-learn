var gulp = require('gulp'),
    svgSprite = require('gulp-svg-sprite');

gulp.task('sprite', function() {
        gulp.src('./ask/*.svg')
            .pipe(svgSprite({
                shape: {
                    dimension: { // Set maximum dimensions
                        maxWidth: 32,
                        maxHeight: 32

                    },
                    dest: './dist/intermediate-svg'
                },
                mode: {
                    symbol: true
                }
            }))
            .pipe(gulp.dest('./dist/svg'))
    })
    // var svgSymbols = require('gulp-svg-symbols');
    // // 生成的svg文件名字
    // var name = "svg";
    // gulp.task('sprite', function() {
    //     gulp.src('ask/*.svg')
    //         .pipe(svgSymbols())
    //         .pipe(rename({
    //             basename: 'svg'
    //         }))
    //         .pipe(gulp.dest('dist/svg'))
    // })