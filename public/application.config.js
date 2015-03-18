'use strict';

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

JsConfiguration.registerModule("app/index.js");
JsConfiguration.registerModule("modules/welcome/index.js");
JsConfiguration.registerModule("modules/page1/index.js");

JsConfiguration.registerModule("partials/footer/index.js");
JsConfiguration.registerModule("partials/nav/index.js");