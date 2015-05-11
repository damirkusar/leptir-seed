var gulp = require('gulp'),
    gutil = require('gulp-util'),
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

var paths = {
    scripts: ['./public/*.js', './public/modules/**/*.js'],
    views: ['public/index.html', 'public/modules/**/*.html'],
    styles: ['public/*.scss', 'public/modules/**/*.scss'],
    destination_public: './dist/',
    destination_modules: './dist/modules/'
};

// Clean task
gulp.task('clean', function () {
    return gulp.src(paths.destination_public, {read: false}) // much faster
        .pipe(clean());
});

// Styles
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
        .pipe(gulp.dest(paths.destination_public))
        .pipe(refresh(lrServer));
});

// Views task
gulp.task('views', function () {
    gulp.src('./public/index.html')
        .pipe(gulp.dest(paths.destination_public))
        .pipe(refresh(lrServer)); // Tell the lrServer to refresh;

    gulp.src('./public/modules/**/views/*')
        .pipe(gulp.dest(paths.destination_modules))
        .pipe(refresh(lrServer)); // Tell the lrServer to refresh;
});

// JSHint task
gulp.task('lint', function () {
    gulp.src(paths.scripts).pipe(jshint())
        // You can look into pretty reporters as well, but that's another story
        .pipe(jshint.reporter('default'));
});

// JS task
gulp.task('javascript', function () {
    gulp.src('./public/*.js')
        .pipe(gulp.dest(paths.destination_public))
        .pipe(refresh(lrServer)); // Tell the lrServer to refresh;

    gulp.src('./public/modules/**/*.js')
        .pipe(gulp.dest(paths.destination_modules))
        .pipe(refresh(lrServer)); // Tell the lrServer to refresh;
});

// Browserify task
gulp.task('browserify', function () {
    gulp.src(['public/bower.js'])
        .pipe(browserify({
            insertGlobals: true,
            debug: true
        }))
        // Bundle to a single file
        .pipe(concat('bower.js'))
        // Output it to our dist folder
        .pipe(gulp.dest(paths.destination_public))
        .pipe(refresh(lrServer));

    gulp.src(['public/app.js'])
        .pipe(browserify({
            insertGlobals: true,
            debug: true
        }))
        // Bundle to a single file
        .pipe(concat('app.js'))
        // Output it to our dist folder
        .pipe(gulp.dest(paths.destination_public))
        .pipe(refresh(lrServer));
});

// Img task
gulp.task('img', function () {
    gulp.src('./public/modules/**/img/*').pipe(gulp.dest(paths.destination_modules));
});

// bower task
gulp.task('bower', function () {
    gulp.src('./public/bower_components/**/*').pipe(gulp.dest('dist/bower_components/'));
});

// bower css task
gulp.task('bower-css', function () {
    gulp.src('./public/bower_components/**/*.css').pipe(gulp.dest('dist/bower_components/'));
});

// bower bootstrap task
gulp.task('bower-bootstrap', function () {
    gulp.src('./public/bower_components/bootstrap/**/*.min.css').pipe(gulp.dest('dist/bower_components/bootstrap/'));
});

gulp.task('watch', ['lint'], function () {
    // Start webserver
    server.listen(serverPort);
    // Start live reload
    refresh.listen(liveReloadPort);

    gulp.watch(paths.scripts, [
        'lint',
        'javascript'
    ]);

    gulp.watch(paths.views, [
        'views'
    ]);

    gulp.watch(paths.styles, [
        'styles'
    ]);
});

gulp.task('log', function() {
    gutil.log('Server Started', gutil.colors.cyan('localhost'), gutil.colors.magenta('5000'));
    gutil.beep();
});

gulp.task('default', ['dev', 'watch', 'log']);
gulp.task('dev', ['build']);
gulp.task('build', function () {
    runSequence(
        'clean',
        ['views', 'styles', 'img', 'lint', 'javascript', 'browserify'],
        'bower-css'
    );
});
