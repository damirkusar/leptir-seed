'use strict';

angular.module('page1').run(['Menus',
    function(Menus) {
        // Set top bar menu items
        Menus.addMenuItem('topBar', 'page1Id', 'Page1', 'page1');
    }
]);