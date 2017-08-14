import gulp       from 'gulp';
import del        from 'del';
import sync       from 'browser-sync';
import prefix     from 'gulp-autoprefixer';
import sass       from 'gulp-sass';
import sourcemaps from 'gulp-sourcemaps';
import webpack    from 'webpack-stream';

var options = {};
var reload = sync.reload;

// default
gulp.task('default', ['serve', 'build', 'watch']);

gulp.task('build', ['scripts', 'styles']);

// clean
gulp.task('clean', del.bind(null, ['public/css/style.css', 'public/js/*.js'], {read: false}));

// server
gulp.task('serve', () => {
  sync({
    notify: false,
    server: {
      baseDir: './'
    },
    port: 8888
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
