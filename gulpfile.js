var gulp = require('gulp')
  , KarmaServer = require('karma').Server
  , browserify = require('browserify')
  , source = require('vinyl-source-stream')
  , buffer = require('vinyl-buffer')
  , rename = require('gulp-rename')
  , uglify = require('gulp-uglify')
  , umd = require('gulp-umd')

gulp.task('test', function (done) {
  new KarmaServer({
    configFile: process.cwd() + '/karma.conf.js',
    singleRun: true
  }, done).start()
})

gulp.task('build', function() {
  var browserifyStream = browserify({
        entries: 'src/index.js',
        insertGlobals: false,
        debug: false,
      })
  return browserifyStream.bundle()
    .pipe(source('angular-http-attach-promise.min.js'))
    .pipe(umd({
      exports: function(file) {return 'AngularHttpAttachPromise'},
      namespace: function(file) {return 'AngularHttpAttachPromise'},
    }))
    .pipe(buffer())
    .pipe(uglify())
    .pipe(gulp.dest('dist'))
})
