'use strict';

angular.module('App')
    .run(['Menus', function (Menus) {
        Menus.configMenus();
    }]);