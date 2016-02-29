var gulp          = require('gulp');
var runSequence   = require('run-sequence');
var jspm          = require('gulp-jspm');
var jade          = require('gulp-jade');
var s3            = require('gulp-s3');
var rename        = require('gulp-rename');
var fs            = require('fs');

gulp.task('default', ['buildDevIndex']);

gulp.task('buildDevIndex', function (callback) {
  var YOUR_LOCALS = { release: false };

  return gulp
    .src('index.jade')
    .pipe(jade({ locals: YOUR_LOCALS }))
    .pipe(gulp.dest('./'));
});

gulp.task('buildIndex', function (callback) {
  var YOUR_LOCALS = { release: true };

  return gulp
    .src('index.jade')
    .pipe(jade({ locals: YOUR_LOCALS }))
    .pipe(gulp.dest('.dist'));
});

gulp.task('jspmBundleSfx', function (callback) {
  return gulp
    .src('app/main.ts')
    .pipe(jspm({ selfExecutingBundle: true }))
    .pipe(rename('backsaw.min.js'))
    .pipe(gulp.dest('.dist/scripts'));
});

gulp.task('copyTemplates', function (callback) {
  return gulp
    .src('app/**/*.html')
    .pipe(gulp.dest('.dist/app'));
});

gulp.task('copyStyles', function (callback) {
  return gulp
    .src('app/**/*.css')
    .pipe(gulp.dest('.dist/app'));
});

gulp.task('copyPolyfills', function (callback) {
  return gulp
    .src('node_modules/angular2/bundles/angular2-polyfills.js')
    .pipe(gulp.dest('.dist/scripts'));
});

gulp.task('uploadToS3', function (callback) {
  aws = JSON.parse(fs.readFileSync('./aws.json'));
  return gulp
    .src('.dist/**')
    .pipe(s3(aws));
});

gulp.task('build', function (callback) {
  runSequence(
    'copyTemplates',
    'copyStyles',
    'copyPolyfills',
    'buildIndex',
    'jspmBundleSfx',
    function (error) {
      if (error) {
        console.log(error.message);
      } else {
        console.log('Release completed successfully.');
      }
      callback(error);
    }
  );
});

gulp.task('deploy', function (callback) {
  runSequence(
    'uploadToS3'
  );
});
