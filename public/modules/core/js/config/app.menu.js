'use strict';

angular.module('Core')
    .run(['Menus', function (Menus) {
        Menus.configMenus();
    }]);