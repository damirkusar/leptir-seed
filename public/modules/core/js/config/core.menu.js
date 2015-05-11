'use strict';

angular.module('core')
    .run(['Menus', function (Menus) {
        Menus.configMenus();
    }]);