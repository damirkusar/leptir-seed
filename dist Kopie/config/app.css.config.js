'use strict';

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
