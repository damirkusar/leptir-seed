'use strict';

ApplicationConfiguration.registerModule('App');

require('./js/config/app.menu.js');
require('./js/config/app.route.js');
require('./js/services/scrollToElement.client.service.js');
require('./js/services/menus.client.service.js');
require('./js/controllers/app.controller.js');

//JsConfiguration.registerModule("modules/app/js/config/app.menu.js");
//JsConfiguration.registerModule("modules/app/js/config/app.route.js");
//JsConfiguration.registerModule("modules/app/js/services/scrollToElement.client.service.js");
//JsConfiguration.registerModule("modules/app/js/services/menus.client.service.js");
//JsConfiguration.registerModule("modules/app/js/controllers/app.controller.js");