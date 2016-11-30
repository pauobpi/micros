//  0. Dependencias
// -------------------------------------------------------------

    var gulp        = require('gulp');
    var uglify 		= require('gulp-uglify');
    const babel 	= require('gulp-babel');
    var sass 		= require('gulp-sass');

// 1. Js
// -------------------------------------------------------------

    gulp.task('build', function () {
        return gulp.src('js/*.js')
            .pipe(babel({
                presets: ["es2015-without-strict"]
            }))
            .pipe(uglify())
            .pipe(gulp.dest('js-min'));
    });

// 2. Sass
// -------------------------------------------------------------

    gulp.task('sass', function () {
      	return gulp.src('./scss/**/*.scss')
        	.pipe(sass().on('error', sass.logError))
        	.pipe(gulp.dest('./css'));
    });

// 3. Watchers
// -------------------------------------------------------------

    gulp.task('watch', ['build'], function () {
        gulp.watch('js/*.js', ['build']);
        gulp.watch('scss/*.scss', ['sass']);
    });

// 4. En el dafault, miramos el watch
// -------------------------------------------------------------

    gulp.task('default', ['watch']);
