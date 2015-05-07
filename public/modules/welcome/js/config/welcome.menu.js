'use strict';

angular.module('welcome').run(['Menus',
    function(Menus) {
        // Set top bar menu items
        Menus.addMenuItem('topBar', 'Welcome', 'welcome', 'dropdown');
        Menus.addSubMenuItem('topBar', 'welcome', 'To Welcome', 'welcome');
        Menus.addSubMenuItem('topBar', 'welcome', 'To Page 1', 'page1');
    }
]);