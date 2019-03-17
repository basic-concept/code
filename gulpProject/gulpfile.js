var gulp = require('gulp');
var rename = require('gulp-rename');
var uglify = require('gulp-uglify');

gulp.task('demo',function () {
    console.log('demo task');
})

gulp.task('default',['demo'],function () {
    console.log('default task')
})

gulp.task('dealIndex',function () {
    gulp.src('js/index.js')
        .pipe(gulp.dest('dest'))
})

gulp.task('default',['dealIndex'])


gulp.task('renameJs',function () {
    gulp.src('js/index.js')
        .pipe(rename('app.js'))
        .pipe(gulp.dest('demo'))
})
gulp.task('default',['renameJs']);

// gulp.task('default');
// gulp.watch('js/*.js',function (e) {
//     console.log(e)
//     gulp.src('js/*.js')
//         .pipe(gulp.dest('demo'))
// })

gulp.task('uglifyJs',function () {
    gulp.src('js/*/js')
        .pipe(uglify())
        .pipe(gulp.dest('demo'))
})

gulp.task('default',['uglifyJs'])


