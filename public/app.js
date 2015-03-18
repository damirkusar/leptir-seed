'use strict';

// Init the application configuration module for AngularJS application
var ApplicationConfiguration = (function () {
    // Init module configuration options
    var applicationModuleName = 'AppName';
    var applicationModuleVendorDependencies = ['ui.bootstrap', 'ui.utils', 'ui.router', 'ngAnimate'];

    // Add a new vertical module
    var registerModule = function (moduleName, dependencies) {
        // Create angular module
        angular.module(moduleName, dependencies || []);

        // Add the module to the AngularJS configuration file
        angular.module(applicationModuleName).requires.push(moduleName);
    };

    return {
        applicationModuleName: applicationModuleName,
        applicationModuleVendorDependencies: applicationModuleVendorDependencies,
        registerModule: registerModule
    };
})();

angular.module(ApplicationConfiguration.applicationModuleName, ApplicationConfiguration.applicationModuleVendorDependencies);

var JsConfiguration = (function () {
    var registerModule = function (src) {
        var jsLink = $("<script src='"+src+"'>");
        $("body").append(jsLink);
    };

    return {
        registerModule: registerModule
    };
})();

var CssConfiguration = (function () {
    var registerModule = function (href) {
        var cssLink = $("<link rel='stylesheet' type='text/css' href='"+href+"'>");
        $("head").prepend(cssLink);
    };

    return {
        registerModule: registerModule
    };
})();

CssConfiguration.registerModule("app.css");
CssConfiguration.registerModule("bower_components/bootstrap/dist/css/bootstrap.min.css");

JsConfiguration.registerModule("modules/app/index.js");
JsConfiguration.registerModule("modules/welcome/index.js");
JsConfiguration.registerModule("modules/page1/index.js");

JsConfiguration.registerModule("partials/footer/index.js");
JsConfiguration.registerModule("partials/nav/index.js");