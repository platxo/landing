var gulp = require('gulp')
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();

// Server dev
gulp.task('serve', function () {
	browserSync.init({
		server: {
			baseDir: './' //sirviendo ficheros
		}
	})
})

// Process css
gulp.task('sass', function () {

	return gulp
		.src('./scss/style.scss')
		.pipe(sass())
		.pipe(gulp.dest('./css'))
		.pipe(browserSync.stream()) // refrescar navegador
})

// Watch changes
gulp.task('watch', function() {
	gulp.watch('./scss/style.scss', ['sass'])
	gulp.watch('./*.html').on('change', browserSync.reload)  // ejecuta function cada vez que escuche cambios
})

gulp.task('default', ['watch', 'serve'])