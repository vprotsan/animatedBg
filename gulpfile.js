var gulp = require('gulp');
var sass = require('gulp-sass');
var sassRuby = require('gulp-ruby-sass');
var autoprefixer = require('gulp-autoprefixer');
var sourcemaps = require('gulp-sourcemaps');
var browserSync = require('browser-sync');
var useref = require('gulp-useref');
var uglify = require('gulp-uglify-es').default;
var gulpIf = require('gulp-if');
var cssnano = require('gulp-cssnano');
var imagemin = require('gulp-imagemin');
var cache = require('gulp-cache');
var del = require('del');
var runSequence = require('run-sequence');
var htmlmin = require('gulp-html-minifier');
var livereload = require('gulp-livereload');
var connect = require('gulp-connect-php');


gulp.task('browserSync', function() {
  browserSync.init({
    server: {
      baseDir: 'app/'
    }
  })
})

gulp.task('browserSyncReload', function(){
  browsersync.reload();
})

gulp.task('sass-build', function() {
  return gulp.src('app/scss/*.scss') // Gets all files ending with .scss in app/scss and children dirs
    .pipe(sass()) // Passes it through a gulp-sass
    .pipe(gulp.dest('app/css')) // Outputs it in the css folder
    .pipe(autoprefixer())
    .pipe(cssnano())
    .pipe(gulp.dest('dist/css'))
    .pipe(browserSync.stream());
})

gulp.task('sass', () =>
    sassRuby('app/scss/*.scss')
        .on('error', sass.logError)
        .pipe(gulp.dest('app/css'))
        .pipe(browserSync.reload({  stream: true   }))
);

gulp.task('compressjshtmlHTML', function () {
    return gulp.src('app/*.html')
        .pipe(useref())
        .pipe(gulpIf('*.html', htmlmin({collapseWhitespace: true})))
        .pipe(gulpIf('*.js', uglify().on('error', function(e){
            console.log(e);  })))
        .pipe(gulpIf('*.css', autoprefixer()))
        .pipe(gulpIf('*.css', cssnano()))
        .pipe(gulp.dest('dist/'))
});

// Watchers
gulp.task('watch', function() {
  gulp.watch('app/scss/**/*', gulp.series('sass-build'));
  gulp.watch('app/js/*', gulp.series(browserSync.reload));
  gulp.watch('app/css/**/*.css', gulp.series(browserSync.reload));
  gulp.watch('app/*.php', gulp.series(browserSync.reload));
  gulp.watch('app/*.html', gulp.series(browserSync.reload));
  gulp.watch('app/../*.php').on('change', function () {
    browserSync.reload()});
})

// Optimizing Images
gulp.task('images', function() {
  return gulp.src('app/images/**/*.+(png|jpg|jpeg|gif|svg)')
    // Caching images that ran through imagemin
    .pipe(cache(imagemin({
      interlaced: true,
    })))
    .pipe(gulp.dest('dist/images'))
});

gulp.task('js', function() {
  return gulp.src('app/js/*.js')
    .pipe(uglify().on('error', function(e){
            console.log(e);  }))
    .pipe(gulp.dest('dist/js'))
})

// Cleaning
gulp.task('clean', function() {
  return del('dist').then(function(cb) {
    return cache.clearAll(cb);
  });
})

gulp.task('clean:dist', function() {
  return del(['dist/**/*', '!dist/images', '!dist/images/**/*']);
});



gulp.task('default', gulp.parallel('watch', 'browserSync'));



gulp.task('imgAndJs', gulp.parallel('images', 'js'));
gulp.task('sequence', gulp.series('clean:dist', 'sass-build','compressjshtmlHTML','imgAndJs'));
gulp.task('build', gulp.series('sequence'));
