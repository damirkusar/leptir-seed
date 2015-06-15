'use strict';

ApplicationConfiguration.registerModule('core');

require('./js/config/core.locales.js');
require('./js/config/core.menu.js');
require('./js/config/core.route.js');
require('./js/controllers/core.controller.js');
require('./js/controllers/nav.controller.js');
require('./js/controllers/footer.controller.js');
require('./js/services/core.service.js');
require('./js/services/scrollToElement.service.js');
require('./js/services/menus.service.js');
require('./js/directives/core.directive.js');
