'use strict';

angular.module('demo').run(['Menus',
    function(Menus) {
        // Set top bar menu items
        Menus.addMenuItem('topBar', 'demo1Id', 'Demo', 'demo', '', '');
    }
]);