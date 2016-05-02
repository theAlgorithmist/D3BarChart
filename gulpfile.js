const gulp       = require('gulp');                    // gulp it, baby
const del        = require('del');                     // try gulp-clean
const typescript = require('gulp-typescript');         // TS
const tscConfig  = require('./tsconfig.json');         // The TS config file
const sourcemaps = require('gulp-sourcemaps');         // In case you want source maps
const tslint     = require('gulp-tslint');             // TS Lint
const liveServer = require('gulp-server-livereload');  // Live server w/reload or try browserSynch
const concatCss  = require('gulp-concat-css');         // concat CSS files 

// suggestion - as an exercise, add minification 

// clean the contents of dev directory
gulp.task('clean', function () {
  return del('dev/**/*');
});

// copy html file
gulp.task('copy:html', function() {
  return gulp.src(['src/index.html'])
    .pipe(gulp.dest('dev'))
});

// copy template files
gulp.task('copy:templates', function() {
  return gulp.src(['src/app/templates/*.html'])
    .pipe(gulp.dest('dev/app/templates'))
});

// build/copy css files - the 'build' part is for you.  I'm a mathematician.  I don't build CSS :)
gulp.task('copy:css', function() {
  return gulp.src(['src/css/**/*.css'])
     .pipe(concatCss("a2d3-app.css"))
     .pipe(gulp.dest("dev/css"))
});

// copy assets
gulp.task('copy:assets', function() {
  return gulp.src(['src/assets/**/*'])
    .pipe(gulp.dest('dev/assets'))
});

// copy framework and vendor files
gulp.task('copy:framework', function() {
  return gulp.src([
      'node_modules/es6-shim/es6-shim.js',
      'node_modules/systemjs/dist/system-polyfills.js',
      'node_modules/angular2/bundles/angular2-polyfills.js',
      'node_modules/systemjs/dist/system.src.js',
      'node_modules/rxjs/bundles/Rx.js',
      'node_modules/angular2/bundles/angular2.dev.js',
      'node_modules/d3/d3.min.js'
    ], { base : './' } )
    .pipe(gulp.dest('dev'))
});

// ts-lint ... because an extra recommendation or two never hurt anyone
gulp.task('tslint', function() {
  return gulp.src('app/**/*.ts')
    .pipe(tslint())
    .pipe(tslint.report('verbose'));
});

// and now, for the main event
gulp.task('compile', function () {
    return gulp
    .src([
      'typings/browser/ambient/es6-promise/es6-promise.d.ts',
      'typings/browser/ambient/es6-collections/es6-collections.d.ts', 
      'vendor-typings/d3.d.ts',
      './src/app/**/*.ts'
    ])
    .pipe(sourcemaps.init())
    .pipe(typescript(tscConfig.compilerOptions))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('dev/app'));
});

// serve and watch ...
gulp.task('serve', function() {
  gulp.src('./dev')
    .pipe(liveServer({
      livereload: true,
      defaultFile: 'index.html',
      open: true
    }));

  gulp.watch(['dev/app/**/*', 'dev/index.html', 'dev/app/templates/*.html', 'dev/app/css/*.css'], function (file) {
    server.notify.apply(server, [file]);
  });
});

// copy everything except framework
gulp.task('copy:all', ['copy:html', 'copy:templates', 'copy:css', 'copy:assets']);

// the big kahuna - this should only need to be done once
gulp.task('build:all', ['copy:framework', 'copy:all', 'tslint', 'compile']);
