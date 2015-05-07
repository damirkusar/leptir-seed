'use strict';

angular.module('welcome').run(['Menus',
    function(Menus) {
        // Set top bar menu items
        Menus.addMenuItem('topBar', 'welcomeId', 'Welcome', '', 'dropdown');
        Menus.addSubMenuItem('topBar', 'welcomeId', 'To Welcome', 'welcome');
        Menus.addSubMenuItem('topBar', 'welcomeId', 'To Page 1', 'page1');
    }
]);