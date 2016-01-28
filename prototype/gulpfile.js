var path = require('path');
var del = require('del');
var gulp = require('gulp');
var $ = require('gulp-load-plugins')();

// set variable via $ gulp --type production
var environment = $.util.env.type || 'development';
var isProduction = environment === 'production';
var webpackConfig = require('./webpack.config.js').getConfig(environment);

var port = $.util.env.port || 1337;
var app = 'app/';
var dist = 'dist/';

// https://github.com/ai/autoprefixer
var autoprefixerBrowsers = [
  'ie >= 9',
  'ie_mob >= 10',
  'ff >= 30',
  'chrome >= 34',
  'safari >= 6',
  'opera >= 23',
  'ios >= 6',
  'android >= 4.4',
  'bb >= 10'
];

gulp.task('scripts', function() {
  return gulp.src(webpackConfig.entry)
    .pipe($.webpack(webpackConfig))
    .pipe(gulp.dest(dist + 'js/'))
    .pipe($.size({ title : 'js' }))
    .pipe($.livereload());;
});

// copy 3rd party js
gulp.task('js', function(cb) {
  return gulp.src(app + 'js/*.{js}')
    .pipe($.size({ title : 'js' }))
    .pipe(gulp.dest(dist + 'js/'));
});

// copy 3rd party icons
gulp.task('icons', function(cb) {
  return gulp.src(app + 'fonts/**/**.*')
    .pipe($.size({ title : 'fonts' }))
    .pipe(gulp.dest(dist + 'fonts/'));
});


// copy html from app to dist
gulp.task('html', function() {
  return gulp.src(app + 'index.html')
    .pipe(gulp.dest(dist))
    .pipe($.size({ title : 'html' }));
});


gulp.task('server', function () {
    // Start the server at the beginning of the task
    $.express.run(['server.js']);

    // Restart the server when file changes
    gulp.watch(['dist/js/main.js'], $.express.notify);
});

// copy images
gulp.task('images', function(cb) {
  return gulp.src(app + 'images/**/*.{png,jpg,jpeg,gif}')
    .pipe($.size({ title : 'images' }))
    .pipe(gulp.dest(dist + 'images/'));
});


gulp.task('styles',function(cb) {

  // convert stylus to css
  return gulp.src(app + 'css/style.css')
    .pipe(gulp.dest(dist + 'css/'))
    .pipe($.size({ title : 'css' }));

});

// watch css, html and js file changes
gulp.task('watch', function() {
  $.livereload.listen();
  gulp.watch(app + 'css/*.css', ['styles']);
  gulp.watch(app + 'index.html', ['html']);
  gulp.watch(app + 'scripts/**/*.js', ['scripts']);
  gulp.watch(app + 'scripts/**/*.jsx', ['scripts']);
});

// remove bundles
gulp.task('clean', function(cb) {
  return del([dist], cb);
});


// by default build project and then watch files in order to trigger livereload
gulp.task('default', ['images', 'html', 'scripts', 'js', 'icons', 'styles', 'watch', 'server']);
// gulp.task('default', ['images', 'html', 'js', 'icons', 'styles', 'watch', 'server']);
