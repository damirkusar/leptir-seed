var gulp = require('gulp'),
    jshint = require('gulp-jshint'),
    browserify = require('gulp-browserify'),
    concat = require('gulp-concat'),
    clean = require('gulp-clean'),
    sass = require('gulp-sass'),
    autoPrefixer = require('gulp-autoprefixer'),
    runSequence = require('run-sequence');

var express = require('express'),
    refresh = require('gulp-livereload'),
    lrServer = require('tiny-lr')(),
    liveReload = require('connect-livereload'),
    liveReloadPort = 35729,
    serverPort = 5000;

// Set up an express server (but not starting it yet)
var server = express();
// Add live reload
server.use(liveReload({port: liveReloadPort}));
// Use our 'dist' folder as rootFolder
server.use(express.static('./dist'));
// Because I like HTML5 pushstate .. this redirects everything back to our index.html
server.all('/*', function (req, res) {
    res.sendFile('index.html', {root: 'dist'});
});

// Clean task
gulp.task('clean', function () {
    return gulp.src('./dist/', {read: false}) // much faster
        .pipe(clean());
});

// JSHint task
gulp.task('lint', function () {
    gulp.src([
        './public/*.js',
        './public/modules/*.js',
        './public/modules/js/*.js',
        './public/partials/*.js',
        './public/partials/js/*.js'
    ]).pipe(jshint())
        // You can look into pretty reporters as well, but that's another story
        .pipe(jshint.reporter('default'));
});

gulp.task('styles', function () {
    gulp.src('public/*.scss')
        // The onerror handler prevents Gulp from crashing when you make a mistake in your SASS
        .pipe(sass({
            onError: function (e) {
                console.log(e);
            }
        }))
        // Optionally add autoPrefixer
        .pipe(autoPrefixer("last 2 versions", "> 1%", "ie 8"))
        // These last two should look familiar now :)
        .pipe(gulp.dest('dist/'))
        .pipe(refresh(lrServer));
});

// Browserify task
gulp.task('browserify', function () {
    // Single point of entry (make sure not to src ALL your files, browserify will figure it out for you)
    gulp.src(['public/bower.js'])
        .pipe(browserify({
            insertGlobals: true,
            debug: true
        }))
        // Bundle to a single file
        .pipe(concat('bower.js'))
        // Output it to our dist folder
        .pipe(gulp.dest('dist/'));
});

// Views task
gulp.task('views', function () {
    gulp.src('./public/index.html')
        .pipe(gulp.dest('dist/'))
        .pipe(refresh(lrServer)); // Tell the lrServer to refresh;

    gulp.src('./public/modules/**/views/*')
        .pipe(gulp.dest('dist/modules/'))
        .pipe(refresh(lrServer)); // Tell the lrServer to refresh;

    gulp.src('./public/partials/**/views/*')
        // Will be put in the dist/views folder
        .pipe(gulp.dest('dist/partials/'))
        .pipe(refresh(lrServer)); // Tell the lrServer to refresh;
});

// JS task
gulp.task('javascript', function () {
    gulp.src('./public/*.js')
        .pipe(gulp.dest('dist/'))
        .pipe(refresh(lrServer)); // Tell the lrServer to refresh;

    gulp.src([
        './public/modules/**/*.js',
        './public/modules/**/js/*.js'
    ])
        .pipe(gulp.dest('dist/modules/'))
        .pipe(refresh(lrServer)); // Tell the lrServer to refresh;

    gulp.src([
        './public/partials/**/*.js',
        './public/partials/**/js/*.js'
    ])
        .pipe(gulp.dest('dist/partials'))
        .pipe(refresh(lrServer)); // Tell the lrServer to refresh;
});

// Img task
gulp.task('img', function () {
    gulp.src([
        './public/modules/**/img/*'
    ]).pipe(gulp.dest('dist/modules/'));

    gulp.src([
        './public/partials/**/img/*'
    ]).pipe(gulp.dest('dist/partials/'));
});

// bower task
gulp.task('bower', function () {
    gulp.src([
        './public/bower_components/**/*'
    ]).pipe(gulp.dest('dist/bower_components/'));
});

gulp.task('watch', ['lint'], function () {
    // Start webserver
    server.listen(serverPort);
    // Start live reload
    refresh.listen(liveReloadPort);

    gulp.watch([
        './public/modules/**/*.js',
        './public/partials/**/*.js'
    ], [
        'lint',
        'javascript'
    ]);

    gulp.watch(['public/index.html', 'public/modules/**/views/*.html', 'public/partials/**/views/*.html'], [
        'views'
    ]);

    gulp.watch(['public/*.scss', 'public/**/*.scss'], [
        'styles'
    ]);

    //gulp.watch('./dist/**').on('change', refresh.changed);
});

gulp.task('default', ['dev', 'watch']);
gulp.task('dev', ['build'], function () {
});
gulp.task('build', function () {
    runSequence(
        'clean',
        ['views', 'styles', 'img', 'lint', 'javascript', 'browserify'],
        'bower'
    );
});
