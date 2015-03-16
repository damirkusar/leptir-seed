'use strict';

var JsConfiguration = (function () {
    var registerModule = function (src) {
        var jsLink = $("<script type='text/javascript' src='"+src+"'>");
        $("body").append(jsLink);
    };

    return {
        registerModule: registerModule
    };
})();

/*JsConfiguration.registerModule("bower_components/jquery/jquery.js");
JsConfiguration.registerModule("bower_components/bootstrap/dist/js/bootstrap.js");
JsConfiguration.registerModule("bower_components/underscore/underscore.js");
JsConfiguration.registerModule("bower_components/moment/moment.js");
JsConfiguration.registerModule("bower_components/angular/angular.js");
JsConfiguration.registerModule("bower_components/angular-ui-router/release/angular-ui-router.js");
JsConfiguration.registerModule("bower_components/angular-animate/angular-animate.js");
JsConfiguration.registerModule("bower_components/angular-resource/angular-resource.js");
JsConfiguration.registerModule("bower_components/angular-bootstrap/ui-bootstrap-tpls.js");
JsConfiguration.registerModule("bower_components/angular-ui-utils/ui-utils.js");*/

JsConfiguration.registerModule("common/js/app.controller.js");
JsConfiguration.registerModule("common/services/scrollToElement.client.service.js");
JsConfiguration.registerModule("common/services/menus.client.service.js");

JsConfiguration.registerModule("modules/welcome/welcome.module.js");
JsConfiguration.registerModule("modules/page1/page1.module.js");

JsConfiguration.registerModule("common/partials/footer/footer.module.js");
JsConfiguration.registerModule("common/partials/nav/nav.module.js");