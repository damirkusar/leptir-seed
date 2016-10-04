// Karma configuration
// Generated on Sun Sep 25 2016 16:46:24 GMT+0200 (CEST)

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
      'node_modules/angular-animate/angular-animate.js',
      'node_modules/angular-mocks/angular-mocks.js',
      'node_modules/angular-resource/angular-resource.js',
      'node_modules/angular-ui-router/release/angular-ui-router.js',
      'node_modules/angular-ui-bootstrap/dist/ui-bootstrap.js',

      'bower_components/jquery/dist/jquery.js',
      'bower_components/angular-translate/angular-translate.js',
      'bower_components/angular-translate-loader-static-files/angular-translate-loader-static-files.min.js',
      'bower_components/angular-translate-loader-url/angular-translate-loader-url.min.js',
      'bower_components/angular-translate-loader-partial/angular-translate-loader-partial.min.js',

      'public/app.config.js',
      'public/app.js',
      
      'public/**/*.html',

      'tests/**/test.dependencies.js',
      'tests/**/*.spec.js'
    ],

    // list of files to exclude
    exclude: [
    ],

    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
      'public/app.js': [ 'browserify' ],
      'public/tests/**/spec.js': [ 'browserify' ],
      'public/tests/**/test.dependencies.js': [ 'browserify' ],
      "public/**/*.html": ["ng-html2js"]
    },

    ngHtml2JsPreprocessor: {
      // If your build process changes the path to your templates,
      // use stripPrefix and prependPrefix to adjust it.
      stripPrefix: "public",

      // the name of the Angular module to create
      moduleName: "app.html"
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

    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['Chrome'],
    
    plugins: [
          'karma-browserify',
          'karma-jasmine',
          'karma-mocha',
          'karma-chrome-launcher',
          'karma-phantomjs2-launcher',
          'karma-ng-html2js-preprocessor' 
      ],

    browserify: {
          debug: true,
          transform: [ 'browserify-shim' ]
      },

    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false
  })
}
