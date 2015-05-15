'use strict';

angular.module('demo').run(['Menus',
    function(Menus) {
        // Set top bar menu items
        Menus.addMenuItem('topBar', 'demo1Id', 'Demo', 'demo', '', '');

        Menus.addMenuItem('topBar', 'demo2Id', 'Demo DropDown', '', 'dropDown', '');
        Menus.addSubMenuItem('topBar', 'demo2Id','sub1Id' ,'To Home', 'home', '');
        Menus.addSubMenuItem('topBar', 'demo2Id', 'sub2Id', 'To Demo', 'demo', '');
    }
]);