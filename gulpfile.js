var gulp = require('gulp'),
    gutil = require('gulp-util'),
    jshint = require('gulp-jshint'),
    browserify = require('browserify'),
    concat = require('gulp-concat'),
    del = require('del'),
    sass = require('gulp-sass'),
    autoPrefixer = require('gulp-autoprefixer'),
    runSequence = require('run-sequence'),
    ftp = require( 'vinyl-ftp' ),
    transform = require('vinyl-transform');

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
// this redirects everything back to our index.html
server.all('/*', function (req, res) {
    res.sendFile('index.html', {root: 'dist'});
});

var paths = {
    scripts: ['./public/*.js', './public/modules/**/*.js'],
    browserify: ['./public/browserify.js', './public/app.js'],
    views: ['./public/index.html', './public/modules/**/*.html'],
    styles: ['./public/*.scss', './public/modules/**/*.scss'],
    img: ['./public/modules/**/img/*'],
    resources: ['./public/modules/**/resources/*'],
    bower: ['./public/bower_components/**/*', './public/bower_components/**/*.css', './public/bower_components/bootstrap/**/*.min.css'],
    destination_public: './dist/',
    destination_modules: './dist/modules/',
    destination_bower: ['./dist/bower_components/', './dist/bower_components/bootstrap/']
};

// Clean task
gulp.task('clean', function () {
    del.sync([paths.destination_public], function(err, paths){
      console.log('Deleted files/folders:\n', paths.join('\n'));
    });
});

// Styles
gulp.task('styles', function () {
    gulp.src(paths.styles[0])
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
    gulp.src(paths.views[0])
        .pipe(gulp.dest(paths.destination_public))
        .pipe(refresh(lrServer)); // Tell the lrServer to refresh;

    gulp.src(paths.views[1])
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
    gulp.src(paths.scripts[0])
        .pipe(gulp.dest(paths.destination_public))
        .pipe(refresh(lrServer)); // Tell the lrServer to refresh;

    gulp.src(paths.scripts[1])
        .pipe(gulp.dest(paths.destination_modules))
        .pipe(refresh(lrServer)); // Tell the lrServer to refresh;
});

// Browserify task
gulp.task('browserify', function () {
  var browserified = transform(function(filename) {
    var b = browserify(filename);
    return b.bundle();
  });

  return gulp.src(paths.browserify)
    .pipe(browserified)
    .pipe(gulp.dest(paths.destination_public));
});

// Img task
gulp.task('img', function () {
    gulp.src(paths.img).pipe(gulp.dest(paths.destination_modules));
});

// Resources task
gulp.task('resources', function () {
    gulp.src(paths.resources).pipe(gulp.dest(paths.destination_modules));
});

// bower task
gulp.task('bower', function () {
    gulp.src(paths.bower[0]).pipe(gulp.dest(paths.destination_bower[0]));
});

// bower css task
gulp.task('bower-css', function () {
    gulp.src(paths.bower[1]).pipe(gulp.dest(paths.destination_bower[0]));
});

// bower bootstrap task
gulp.task('bower-bootstrap', function () {
    gulp.src(paths.bower[2]).pipe(gulp.dest(paths.destination_bower[1]));
});

gulp.task('watch', ['lint'], function () {
    // Start webserver
    server.listen(serverPort);
    // Start live reload
    refresh.listen(liveReloadPort);

    gulp.watch(paths.scripts, [
        'lint',
        'javascript',
        'browserify'
    ]);

    gulp.watch(paths.views, [
        'views'
    ]);

    gulp.watch(paths.resources, [
        'resources'
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
        ['views', 'styles', 'img', 'resources', 'lint', 'javascript'],
        'browserify',
        'bower-css'
    );
});

gulp.task('deploy', function() {
    var conn = ftp.create( {
        host:     'domain.ch',
        user:     'user',
        password: 'passw0rd',
        parallel: 1,
        log: gutil.log
    } );

    var globs = [
        'dist/**'
    ];

    return gulp.src(globs, { buffer: true })
        .pipe(conn.newer('/uploadFolder/')) // only upload newer files
        .pipe(conn.dest('/uploadFolder/'));
} );
