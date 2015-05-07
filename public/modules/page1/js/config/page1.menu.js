'use strict';

angular.module('page1').run(['Menus',
    function(Menus) {
        // Set top bar menu items
        Menus.addMenuItem('topBar', 'Page1', 'page1', 'dropdown');
        Menus.addSubMenuItem('topBar', 'welcome', 'About', 'about');
        Menus.addSubMenuItem('topBar', 'welcome', 'Footer', 'footer');
    }
]);