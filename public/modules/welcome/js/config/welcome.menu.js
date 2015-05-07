'use strict';

angular.module('welcome').run(['Menus',
    function(Menus) {
        // Set top bar menu items
        Menus.addMenuItem('topBar', 'welcomeId', 'Welcome', '', 'dropdown');
        Menus.addSubMenuItem('topBar', 'welcomeId','sub1Id' ,'To Welcome', 'welcome');
        Menus.addSubMenuItem('topBar', 'welcomeId', 'sub2Id', 'To Page 1', 'page1');
    }
]);