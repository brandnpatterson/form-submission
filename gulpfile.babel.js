import gulp       from 'gulp';
import del        from 'del';
import nodemon    from 'gulp-nodemon';
import prefix     from 'gulp-autoprefixer';
import sass       from 'gulp-sass';
import sourcemaps from 'gulp-sourcemaps';
import sync       from 'browser-sync';
import webpack    from 'webpack-stream';

var options = {};
var reload = sync.reload;

// default
gulp.task('default', ['serve', 'build', 'watch']);

gulp.task('build', ['scripts', 'styles']);

// clean
gulp.task('clean', del.bind(null, ['public/css/style.css', 'public/js/*.js'], {read: false}));

// server
gulp.task('nodemon', (cb) => {
	var started = false;
	return nodemon({
		script: 'app.js',
	}).on('start', () => {
		if (!started) {
			cb();
			started = true;
		}
	});
});

gulp.task('serve', ['nodemon'], () => {
  sync.init(null, {
    proxy: 'http://localhost:8887',
    notify: false,
    files: 'public/**/*.*',
    port: 8888,
    ext: '.pug'
  });
});

// build
gulp.task('scripts', () => {
  return gulp.src(['src/js/index.js'])
    .pipe(webpack( require('./webpack.config.js') ))
    .pipe(gulp.dest('public/js'));
});

gulp.task('styles', () => {
  return gulp.src('src/scss/style.scss')
    .pipe(sourcemaps.init())
    .pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
    .pipe(prefix('last 2 versions'))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('public/css'))
});

// watch
gulp.task('watch', () => {
  gulp.watch('index.html', reload);
  gulp.watch('src/js/**/*.js', ['scripts', reload]);
  gulp.watch('src/scss/**/*.scss', ['styles', reload]);
});
