// Karma configuration
// Generated on Thu May 28 2015 10:14:15 GMT+0200 (CEST)

//var applicationConfiguration = require('./config/config');

module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',

    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['browserify', 'jasmine'],

    // list of files / patterns to load in the browser
    files: [
        'node_modules/angular/angular.js',
        'node_modules/angular-mocks/angular-mocks.js',
        'node_modules/angular-resource/angular-resource.js',

        'public/bower_components/jquery/jquery.js',
        'public/bower_components/angular-ui-router/release/angular-ui-router.js',
        'public/bower_components/angular-translate/angular-translate.js',
        'public/bower_components/angular-translate-loader-static-files/angular-translate-loader-static-files.min.js',
        'public/bower_components/angular-translate-loader-url/angular-translate-loader-url.min.js',

        'public/app.config.js',
        'public/tests/**/*.js'
    ],

    // list of files to exclude
    exclude: [

    ],

    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
        'public/bower.js': [ 'browserify' ],
        'public/tests/**/*.js': [ 'browserify' ]
    },

    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['progress'],

    // web server port
    port: 9876,

    // enable / disable colors in the output (reporters and logs)
    colors: true,

    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_ERROR,

    // enable / disable watching file and executing tests whenever any file changes
      autoWatch: true,
      singleRun: false,

    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['PhantomJS'],

      plugins: [
          'karma-browserify',
          'karma-jasmine',
          'karma-mocha',
          'karma-phantomjs-launcher'
      ],

      // browserify configuration
      browserify: {
          debug: true,
          transform: [ 'browserify-shim' ]
      }
  });
};
