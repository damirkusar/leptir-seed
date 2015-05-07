'use strict';

angular.module('page1').run(['Menus',
    function(Menus) {
        // Set top bar menu items
        Menus.addMenuItem('topBar', 'Page1', 'page1');
        Menus.addSubMenuItem('topBar', 'page1', 'To Page 1', 'page1');
        Menus.addSubMenuItem('topBar', 'page1', 'To Welcome', 'welcome');
    }
]);