
var gulp        = require('gulp'),
    sass        = require('gulp-sass'),
    browserSync = require('browser-sync');


gulp.task('gulpSass', function(){
    return gulp.src(['app/sass/**/*.sass', 'app/sass/**/*.scss'])
        .pipe(sass())
        .pipe(gulp.dest('app/css'))
});

// gulp.task('browser', function(){
//   browserSync.init({
//     server: {
//       baseDir:"./app/"
//     },
//     port: 3000,
//     notify: false
//   })
// });

// function syncReload(){
//     return browserSync.reload();
// }
// gulp.task('htmlReload', function(){
//     gulp.watch('./**/*.html', syncReload);
//
//   // gulp.watch('./**/*.php',browserReload;
//   // gulp.watch('./**/*.js',browserReload;
// });



gulp.task('watchFiles', function(){
  // gulp.watch('./**/*', gulp.parallel('browser','htmlReload'));
  gulp.watch(['app/sass/**/*.sass', 'app/sass/**/*.scss'], gulp.series('gulpSass'));

});
// gulp.task('gulpRun', gulp.parallel('browser,'))
