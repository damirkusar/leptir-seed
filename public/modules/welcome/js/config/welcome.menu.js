'use strict';

angular.module('welcome').run(['Menus',
    function(Menus) {
        // Set top bar menu items
        Menus.addMenuItem('topBar', 'Welcome', 'welcome', 'dropdown', '/welcome');
        Menus.addSubMenuItem('topBar', 'welcome', 'About', 'about');
        Menus.addSubMenuItem('topBar', 'welcome', 'Footer', 'footer');
    }
]);